<template>
    <div class="font-custom">
      <div :style="{ backgroundColor: color || '#F1F2F4' }" class="inline-flex rounded-full px-8 py-2 text-md font-semibold text-gray-700">
        <span>{{ title }}</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      color: {
        type: String,
        default: ''
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add custom styles for your tag component */
  </style>