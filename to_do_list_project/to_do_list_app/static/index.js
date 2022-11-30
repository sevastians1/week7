
function createTODOList(event) {
    event.preventDefault()
    const name = document.getElementById('inputName').value
    const description = document.getElementById('inputDescription').value

    const url = 'create-todo-list/'

    axios.post(url, {
        'name':name,
        'description':description,
    })
        .then((response) => {
            console.log(response)
            window.location.reload()
        })

}

function createItem(event) {
    event.preventDefault()
    const item_name = document.getElementById('inputItemName').value
    const item_description = document.getElementById('inputItemDescription').value
    const todo_list_id = parseInt(document.getElementById('input_todo_list_id').value)

    // console.log(item_name, item_description, todo_list_id)
    
    const url = 'create-item/'

    axios.post(url, {
        'name':item_name,
        'description':item_description,
        'todo_list_id':todo_list_id,
    })
        .then((response) => {
            console.log(response)
            window.location.reload()
        })

}

function deleteTODOList(event, id) {
    event.preventDefault()

    const url = 'delete/'

    axios.post(url, {
        'todo_list_id':id,
    })
        .then((response) => {
            console.log(response)
            window.location.reload()
        })

}

function deleteItem(event, id) {
    event.preventDefault()

    const url = 'delete/'

    axios.post(url, {
        'item_id':id,
    })
        .then((response) => {
            console.log(response)
            window.location.reload()
        })

}
