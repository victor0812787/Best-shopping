<template>
  
   <div class="item block container w-full">

        <div class="w-full container lg:flex lg:justify-center items-center py-2.5">

            <div class="w-full max-w-sm bg-white rounded-lg mx-auto my-3 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img class="p-8 rounded-t-lg" src="" alt="product image" />
                <div class="px-5 pb-5">
                    <div class="flex items-center justify-between">
                        <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 text-center font-medium" @click="addToCart(items)">Add to Cart</button>
                        <a href="#"><button class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 text-center font-medium">Buy Item</button></a>
                    </div>
                </div>
            </div>

            <div class="w-full max-w-sm bg-white rounded-lg mx-auto my-3 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img class="p-8 rounded-t-lg" src="" alt="product image" />
                <div class="px-5 pb-5">
                    <div class="flex items-center justify-between">
                        <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 text-center font-medium" @click="addToCart(items)">Add to Cart</button>
                        <a href="#"><button class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 text-center font-medium">Buy Item</button></a>
                    </div>
                </div>
            </div>

            <div class="w-full max-w-sm bg-white rounded-lg mx-auto my-3 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img class="p-8 rounded-t-lg" src="" alt="product image" />
                <div class="px-5 pb-5">
                    <div class="flex items-center justify-between">
                        <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 text-center font-medium" @click="addToCart(items)">Add to Cart</button>
                        <a href="#"><button class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 text-center font-medium">Buy Item</button></a>
                    </div>
                </div>
            </div>
    
       </div>


        <div class="w-full container lg:flex lg:justify-center items-center py-2.5">

            <div class="w-full max-w-sm bg-white rounded-lg mx-auto my-3 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img class="p-8 rounded-t-lg" src="" alt="product image" />
                <div class="px-5 pb-5">
                    <div class="flex items-center justify-between">
                        <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 text-center font-medium" @click="addToCart(items)">Add to Cart</button>
                        <a href="#"><button class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 text-center font-medium">Buy Item</button></a>
                    </div>
                </div>
            </div>

            <div class="w-full max-w-sm bg-white rounded-lg mx-auto my-3 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img class="p-8 rounded-t-lg" src="" alt="product image" />
                <div class="px-5 pb-5">
                    <div class="flex items-center justify-between">
                        <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 text-center font-medium" @click="addToCart(items)">Add to Cart</button>
                        <a href="#"><button class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 text-center font-medium">Buy Item</button></a>
                    </div>
                </div>
            </div>

            <div class="w-full max-w-sm bg-white rounded-lg mx-auto my-3 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img class="p-8 rounded-t-lg" src="../assets/car-1.jpg" alt="product image" />
                <div class="px-5 pb-5">
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Car504</h5>
                    <div class="flex items-center justify-between">
                        <span class="text-3xl font-bold text-gray-900 dark:text-white">$1500</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 text-center font-medium" @click="addToCart(items)">Add to Cart</button>
                        <a href="#"><button class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 text-center font-medium">Buy Item</button></a>
                    </div>
                </div>
            </div>

        </div>

    </div>

</template>

<script>
import { mapActions } from "vuex";


    export default {

        // data() {
        //     return {
        //         items: "item",
        //         cart: []
        //     }
        // },

        methods: {
            ...mapActions(['addToCart']),
            item:"item",
            // addToCart(item) {
            //     this.cart.push(item);
            //     console.log(this.cart);
             
            },
            // navigateTo(page) {
            //     this.page = page;
            // }

    };
</script>

<style>

</style>