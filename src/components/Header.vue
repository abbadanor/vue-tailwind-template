<template>
    <div class="mx-auto px-4 w-full">
        <div class="h-16 flex justify-between items-center border-b-2 border-gray-100 mx-auto px-4 w-full">
            <div class="flex gap-x-4 items-center">
                <router-link class="font-medium text-gray-500 hover:text-gray-900" to="/">Home</router-link>
                <router-link class="font-medium text-gray-500 hover:text-gray-900" to="/about">About</router-link>
                <router-link class="font-medium text-gray-500 hover:text-gray-900" to="/todo">To-do</router-link>
            </div>
            <div>
                <p class="font-medium text-lg text-gray-900">Vite</p>
            </div>
            <div class="flex gap-x-4 items-center">
                <router-link class="font-medium text-gray-500 hover:text-gray-900" to="/login">Login</router-link>
                <div class="text-white px-4 py-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg focus:outline-none">
                    <router-link to="/register">Register</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
