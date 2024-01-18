<template>
    <div class="justify-center flex bg-gray-900">
        <div>
            <h1 class="text-7xl text-gray-300 font-bold">Todo App</h1>
        </div>
    </div>
    <nav></nav>
    <div class="grid grid-cols-4 formysanity">
        <li class="card">
            <!-- I want the items to have a draggable icon to the left, and have them drag around, I also don't want the same size, but I do want a max size for the description
            and an auto font for the title or just overflow for the title as well. I want the description area to also be a clickable which will display it in a popup. I also
        want severity colors to the right of the title. Then to the right of that I want an edit button, which will allow the title and description and people to be editable.-->
            <div class="title">Something</div>
            <div class="description">Description:</div>
            <!-- I want to have the text centered in the frame -->
            <div class="description-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                odio ipsam debitis nam in sapiente atque nostrum ut quae est
                voluptate, non dignissimos aliquam necessitatibus voluptatibus
                nihil, cupiditate aperiam. Culpa.
            </div>
            <div class="duedate">Due Date: 1/30/23</div>
            <div class="assigned">
                Assigned To:
                <div class="assigned-member overflow-auto">Harrison Seidel</div>
                <!-- I want to have people show, and then a show more button that highlights if you hold over the bottom area where assigned to is, if you click
        their is a popup that will show up and display the list vertically. else it will show pics with their first initial. -->
            </div>
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
