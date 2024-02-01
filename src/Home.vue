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
                <div v-if="editing" class="ml-3">{{ todo.title }}</div>
                <div v-else>
                    Title:<input
                        v-model="todo.title"
                        type="text"
                        class="ml-3 text-black"
                        @keyup.enter="updateTodos(todo.id)"
                    />
                </div>
                <div class="justify-self-end mr-1">
                    <button @click="toggleEditing">
                        <i class="i-mdi:edit h-8 w-8"></i>
                    </button>
                </div>
            </div>

            <!-- Title area draggable unless editted  -->
            <div class="description">Description:</div>
            <!-- I want to have the text centered in the frame -->
            <div v-if="editing" class="description-text">
                {{ todo.description }}
            </div>
            <textarea
                v-else
                v-model="todo.description"
                class="flex w-100% text-black"
                type="text"
            ></textarea>
            <div v-if="editing" class="duedate">Due Date: {{ todo.due }}</div>
            <div v-else>
                DueDate:
                <input v-model="todo.due" class="text-black" type="text" />
            </div>

            <div v-if="editing" class="completed">
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
            <div v-else>
                Status:
                <input
                    v-model="todo.completed"
                    class="text-black"
                    type="checkbox"
                />
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
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import axios from 'axios'
import { Todo } from './model/todo'

let todos = [] as Todo[]

let editing = ref(true)

const toggleEditing = () => {
    editing.value = !editing.value
}

axios
    .get('/localhost/api/todos')
    .then((response) => {
        state.htmlContent = response.data
        todos = response.data
        console.log(state.htmlContent)
        console.log('Todos: ', todos)
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
            completed: false
        })
        .then(() => {
            window.location.reload()
        })
}
const deleteTodos = (todoID: string) => {
    axios.delete('/localhost/api/todos/' + todoID).then(() => {
        window.location.reload()
    })
}
const updateTodos = (todoID: string) => {
    let tempTodo = todos.find((t) => t.id === todoID)
    axios.put('/localhost/api/todos/' + todoID, {
        title: tempTodo?.title,
        description: tempTodo?.description,
        due: tempTodo?.due,
        severity: tempTodo?.severity,
        completed: tempTodo?.completed
    })
    console.log('test')
}
</script>
