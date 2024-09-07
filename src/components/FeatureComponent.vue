<template>
    <section class="container mx-auto py-8 lg:px-4 lg:py-20 lg:px-0 font-custom">
      <div class="flex flex-col lg:flex-row items-center lg:items-stretch">
        <div class="lg:w-1/2 bg-[#D8D8D8] lg:order-1 flex justify-center mb-8 lg:mb-0">
          <img class="max-w-full h-auto" src="../assets/images/image-placeholder.svg" alt="Placeholder image">
        </div>
        <div class="lg:w-1/2 lg:px-8 flex flex-col justify-center gap-8 lg:gap-16">
          <h3 class="text-3xl lg:text-5xl text-gray-800 font-extrabold leading-none mb-4">
            {{ title }}
          </h3>
          <p class="text-gray-500 text-lg lg:text-2xl">
            {{ description }}
          </p>

        </div>
        
      </div>
    </section>
  </template>
  
  
  <script>

  export default {
    name: 'FeatureSection',
    components: {

    },
    props: {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      tags: {
        type: Array,
        required: false
      },
      flip: {
        type: Boolean,
        default: false
      }
    }
  }
  </script>
  
  <style scoped>
  .flip {
    flex-direction: row-reverse;
  }
  
  .flip .order-1 {
    order: 2;
  }
  
  .flip .order-2 {
    order: 1;
  }
  </style>