from django.urls import path
from . import views

urlpatterns = [
    path('', views.home),
    path('create-todo-list/', views.create_todo_list),
    path('create-item/', views.create_item),
    path('delete/', views.delete),
]
