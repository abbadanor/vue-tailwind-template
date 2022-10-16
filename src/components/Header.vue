<template>
    <div class="px-4">
        <div class="h-16 flex justify-center items-center border-b-2 border-gray-100 w-full relative">
            <div class="flex gap-x-4 items-center absolute left-0">
                <router-link active-class="text-gray-900" class="font-medium text-gray-500 hover:text-gray-900" to="/">Home</router-link>
                <router-link active-class="text-gray-900" class="font-medium text-gray-500 hover:text-gray-900" to="/about">About</router-link>
                <router-link active-class="text-gray-900" class="font-medium text-gray-500 hover:text-gray-900" to="/todo">To-do</router-link>
            </div>
            <div>
                <router-link to="/" class="font-medium text-lg text-gray-900">Vite</router-link>
            </div>
            <div class="flex gap-x-4 items-center absolute right-0">
                <router-link class="text-sm font-medium text-gray-500 hover:text-gray-900" to="/login">Login</router-link>
                <div class="text-white text-sm px-4 py-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg focus:outline-none">
                    <router-link to="/register">Register</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
