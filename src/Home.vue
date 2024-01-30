<template>
    <div class="justify-center flex bg-gray-900">
        <div>
            <h1 class="text-7xl text-gray-300 font-bold">Todo App</h1>
        </div>
    </div>
    <nav></nav>
    <div class="grid grid-cols-4 formysanity">
        <li
            v-for="(todo, index) in state.htmlContent"
            :key="index"
            class="card"
        >
            <!-- I want the items to have a draggable icon to the left, and have them drag around, I also don't want the same size, but I do want a max size for the description
            and an auto font for the title or just overflow for the title as well. I want the description area to also be a clickable which will display it in a popup. I also
        want severity colors to the right of the title. Then to the right of that I want an edit button, which will allow the title and description and people to be editable.-->
            <div class="title flex">
                <div class="ml-3">{{ todo.title }}</div>
                <div class="justify-self-end mr-1">
                    <button onclick="">
                        <i class="i-mdi:edit h-8 w-8"></i>
                    </button>
                </div>
            </div>

            <!-- Title area draggable unless editted  -->
            <div class="description">Description:</div>
            <!-- I want to have the text centered in the frame -->
            <div class="description-text">{{ todo.description }}</div>
            <div class="duedate">Due Date: {{ todo.due }}</div>
            <!-- Due date left side, and status on the right side  -->
            <!-- change this to completed status -->
            <div class="completed">
                <p
                    v-if="todo.completed === true"
                    class="completed-text overflow-auto"
                >
                    Status: Completed
                </p>
                <div v-else class="completed-text overflow-auto">
                    Status: Not Completed
                </div>
                <div class="float-right mr-2">
                    <button @click="deleteTodos(todo.id)">
                        <i class="i-mdi:delete h-8 w-8"></i>
                    </button>
                </div>

                <!-- I want to have people show, and then a show more button that highlights if you hold over the bottom area where assigned to is, if you click
        their is a popup that will show up and display the list vertically. else it will show pics with their first initial. -->
            </div>
        </li>
        <li class="card flex justify-center">
            <button class="addbutton text-3xl" @click="makeTodos">
                <i class="i-mdi:plus"></i>
                <div>Add Todo</div>
            </button>
        </li>
    </div>
    <!-- <label class="switch">
        <input type="checkbox" />
        <span class="slider"></span>
    </label> -->
    <div><RouterView /></div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import axios from 'axios'

axios
    .get('/localhost/api/todos')
    .then((response) => {
        state.htmlContent = response.data
        console.log(state.htmlContent)
    })
    .catch((error) => {
        console.log(error)
    })

const state = reactive({
    htmlContent: [] as {
        id: string
        title: string
        description: string
        due: string
        severity: string
        completed: boolean
    }[]
})

const makeTodos = () => {
    axios
        .post('/localhost/api/todos', {
            id: '0',
            title: 'title here',
            description: 'description here',
            due: 'date here',
            severity: 'Super',
            completed: true
        })
        .then(() => {
            window.location.reload()
        })
    console.log('test')
}
const deleteTodos = (todoID: string) => {
    axios.delete('/localhost/api/todos/' + todoID).then(() => {
        window.location.reload()
    })
}
const updateTodos = (todoID: string, varID: number, item: string) => {
    axios
        .put('/localhost/api/todos/' + todoID, {
            title: item
        })
        .then(() => {
            window.location.reload()
        })
}
// const makeTodos = (todo: {
//     id: string
//     title: string
//     description: string
//     due: string
//     severity: string
//     completed: boolean
// }) => {
//     addTodo(
//         todo.id,
//         todo.title,
//         todo.description,
//         todo.due,
//         todo.severity,
//         todo.completed
//     )
// }

// const addTodo = (
//     id: string,
//     title: string,
//     description: string,
//     due: string,
//     severity: string,
//     completed: boolean
// ) => {
//     let todo: Todo = { id, title, description, due, severity, completed }
//     sessionStorage.setItem('todos', JSON.stringify([todo]))
// }
</script>

<!-- I want to replace the descriptions and the areas that can be changed with a text field if you click the edit button. This will then
use axios which will replace it on the backend -->
