<template>
    <div class="text-center font-custom py-8 md:py-16 lg:py-20">
      <TagComponent :title="tag"/>
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">{{ title }}</h2>
    </div>
  </template>
  
  <script>
  import TagComponent from './TagComponent.vue';
  export default {
    name: 'SectionHeader',
    components: {
      TagComponent
    },
    props: {
      title: {
        type: String,
        required: true
      },
      tag: {
        type: String,
        default: ''
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>