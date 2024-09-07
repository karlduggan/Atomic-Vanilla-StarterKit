<template>
    <main class="min-h-screen flex flex-col justify-center items-center px-4">
      <div class="container mx-auto font-custom text-center w-full max-w-md md:max-w-lg lg:max-w-xl">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-10 lg:mb-12">Thank you!</h1>
        <p class="text-base md:text-lg lg:text-xl text-gray-600 mb-4 md:mb-6 lg:mb-8">
          We appreciate you reaching out. We will get back to you as soon as possible.
        </p>
        <a href="/" class="p-4 px-8 text-base md:text-lg lg:text-lg text-white font-bold bg-highlight rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out flex items-center justify-center">
          Back to Home
        </a>
      </div>
    </main>
  </template>
  
  <script>
  export default {
    mounted() {
      // Set a timer to redirect to the home page after 20 seconds
      setTimeout(() => {
        this.$router.push('/');
      }, 10000);
    }
  };
  </script>
  
  <style scoped>
  /* Add any additional styles here if needed */
  </style>
  