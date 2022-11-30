from django.shortcuts import render
from django.http import HttpResponse
from . import templates
import random
from datetime import datetime
# Create your views here.
users={}
# def home(request):
#     response=render(request, 'home.html')
#     print(request.COOKIES)
#     response.set_cookie('foo', 'bar', httponly=False, secure=False)
#     return response
    #

def set_cookie(request):
    response=render(request, 'home.html')
    response.set_cookie('foo', 'bar', httponly=False, secure=False)

def home(request):
    print(users)
    session_id_number = request.COOKIES.get('session_id_number')
    session = users.get(session_id_number)
    print(session_id_number)
    if not session:
        session_id_number = str(random.randint(100000,999999))
        
        users[session_id_number] = {
            'count': 1,
            'start_time': datetime.now()
        }
    else:
        users[session_id_number]['count'] += 1
    response = render(request, 'home.html', {"data":users[session_id_number]})
    response.set_cookie('session_id_number', session_id_number)
    return response