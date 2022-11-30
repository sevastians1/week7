from django.shortcuts import render
import json
from django.views.decorators.csrf import csrf_exempt
from .models import Todo_List, Item
from django.http import HttpResponseRedirect

# Create your views here.
def home(request):

    all_todo_lists = Todo_List.objects.all()
    
    all_items = Item.objects.all()

    return render(request, 'home.html', {'all_todo_lists':all_todo_lists, 'all_items':all_items})


@csrf_exempt
def create_todo_list(request):

    data = json.loads(request.body)

    new_name = data['name']
    new_description = data['description']

    new_data = {'name':new_name, 'description':new_description}

    new_todo_list = Todo_List(**new_data)
    new_todo_list.save()

    return HttpResponseRedirect('/')


@csrf_exempt
def create_item(request):

    data = json.loads(request.body)

    todo_list_id = int(data['todo_list_id'])

    todo_list = Todo_List.objects.get(id=todo_list_id)


    new_name = data['name']
    new_description = data['description']

    new_data = {'name':new_name, 'description':new_description, 'todo_list_id':todo_list}

    new_item = Item(**new_data)
    new_item.save()

    # print(new_item)

    return HttpResponseRedirect('/')


@csrf_exempt
def delete(request):
    data = json.loads(request.body)

    # print(data)

    try:
        todo_list_id = data['todo_list_id']

        todo_list_to_remove = Todo_List.objects.get(id=todo_list_id)
        todo_list_to_remove.delete()

        return HttpResponseRedirect('/')

    except:
        item_id = data['item_id']

        item_to_delete = Item.objects.get(id=item_id)
        item_to_delete.delete()

        return HttpResponseRedirect('/')