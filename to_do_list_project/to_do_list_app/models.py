from django.db import models

class Todo_List(models.Model):
    name = models.CharField(max_length=255, null=False)
    description = models.TextField(null=True)


class Item(models.Model):
    name = models.CharField(max_length=100, null=False)
    description = models.TextField(null=True)
    todo_list_id = models.ForeignKey(Todo_List, on_delete=models.CASCADE)