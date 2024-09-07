<template>
    <div v-if="!accepted" class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div class="bg-white p-6 rounded shadow-lg">
        <p class="text-lg mb-4">We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.</p>
        <button @click="acceptCookies" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Accept</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        accepted: false
      };
    },
    methods: {
      acceptCookies() {
        this.accepted = true;
        // You can store user's acceptance in localStorage or cookies if needed
      }
    }
  };
  </script>
  