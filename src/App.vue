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
            <div class="title">{{ todo.title }}</div>
            <!-- Title area draggable unless editted  -->
            <div class="description">Description:</div>
            <!-- I want to have the text centered in the frame -->
            <div class="description-text">{{ todo.description }}</div>
            <div class="duedate">Due Date: {{ todo.due }}</div>
            <!-- Due date left side, and status on the right side  -->
            <!-- change this to completed status -->
            <div class="completed">
                Status:
                <div
                    v-if="todo.completed === true"
                    class="completed-text overflow-auto"
                >
                    Completed
                </div>
                <div v-else class="completed-text overflow-auto">
                    Not Completed
                </div>

                <!-- I want to have people show, and then a show more button that highlights if you hold over the bottom area where assigned to is, if you click
        their is a popup that will show up and display the list vertically. else it will show pics with their first initial. -->
            </div>
        </li>
    </div>
    <!-- <label class="switch">
        <input type="checkbox" />
        <span class="slider"></span>
    </label> -->
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { Todo } from './model/todo'
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

const makeTodos = (todo: {
    id: string
    title: string
    description: string
    due: string
    severity: string
    completed: boolean
}) => {
    addTodo(
        todo.id,
        todo.title,
        todo.description,
        todo.due,
        todo.severity,
        todo.completed
    )
}

const addTodo = (
    id: string,
    title: string,
    description: string,
    due: string,
    severity: string,
    completed: boolean
) => {
    let todo: Todo = { id, title, description, due, severity, completed }
    sessionStorage.setItem('todos', JSON.stringify([todo]))
}
</script>
