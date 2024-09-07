<template>
    <div class="max-w-sm mx-auto rounded-lg overflow-hidden mb-8 font-custom">
      
      <img :src="image" alt="Blog Image" class="w-full rounded-xl">
      <div class="mt-6">
        <h2 class="font-bold text-2xl mb-2">{{ title }}</h2>
        <div class="flex items-center text-gray-600 text-sm mb-4 justify-between">
          <p class="text-md">{{ author }}</p>
          <p class="text-md">{{ date }}</p>
        </div>
        <p class="text-gray-500 text-lg">{{ description }}</p>
      </div>
    </div>
  </template>
  
    
    <script>
    export default {
      props: {
        image: {
          type: String,
          required: true
        },
        title: {
          type: String,
          required: true
        },
        author: {
          type: String,
          required: true
        },
        date: {
          type: String,
          required: true
        },
        description: {
          type: String,
          required: true
        }
      }
    };
    </script>
    
    <style scoped>
    /* Add any custom styles here */
    </style>
    