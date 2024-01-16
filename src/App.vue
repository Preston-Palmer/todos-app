<template>
    <div class="justify-center flex bg-gray-300">
        <div>
            <h1 class="text-7xl text-black">Todo App</h1>
        </div>
    </div>
    <nav></nav>
    <div class="grid grid-cols-4 formysanity">
        <li class="card">
            <div class="title flex justify-center">Something</div>
        </li>
        <li class="card">
            <div class="title flex justify-center">Cheese</div>
        </li>
        <li class="card">
            <div class="title flex justify-center">Chess</div>
        </li>
        <li class="card">
            <div class="title flex justify-center">Card</div>
        </li>
        <li class="card">
            <div class="title flex justify-center">Read</div>
        </li>
        <li class="card">
            <div class="title flex justify-center">Word</div>
        </li>
    </div>
    <!-- <label class="switch">
        <input type="checkbox" />
        <span class="slider"></span>
    </label> -->
</template>

<!-- <script lang="ts" setup>
import { reactive } from 'vue'
// import { Todo } from './model/todo'
import axios from 'axios'

// const id = Math.random.toString()

const state = reactive({
    htmlContent: [] as {
        name: string
        description: string
        proimage: string
        price: string
    }[],
    imageSrc: ''
})

axios
    .get('/localhost/api/products')
    .then((response) => {
        state.htmlContent = response.data
        console.log(state.htmlContent)
    })
    .catch((error) => {
        console.log(error)
    })

// const purchaseProduct = (product: {
//     name: string
//     description: string
//     proimage: string
//     price: string
// }) => {
//     addProduct(
//         product.name,
//         product.description,
//         product.proimage,
//         product.price
//     )
// }

// const addProduct = (
//     name: string,
//     description: string,
//     proimage: string,
//     price: string
// ) => {
//     let product: Product = { id, name, description, proimage, price }
//     sessionStorage.setItem('products', JSON.stringify([product]))
// }
</script> -->
