<template>
    <div class="py-8">
      <!-- Table Header (Desktop) -->
      <div class="hidden md:grid grid-cols-4">
        <div
          v-for="(header, index) in headers"
          :key="index"
          @click="selectColumn(index)"
          :class="{'bg-blue-500 text-white': selectedColumn === index, 'bg-secondary': selectedColumn !== index}"
          class="p-2 cursor-pointer text-white text-center"
        >
          {{ header }}
        </div>
      </div>
  
      <!-- Drawers (Mobile) -->
      <div class="md:hidden">
        <div v-for="(header, index) in headers" :key="index">
          <button
            @click="toggleDrawer(index)"
            :class="{'bg-blue-500 text-white': selectedDrawer === index, 'bg-secondary': selectedDrawer !== index}"
            class="w-full p-2 text-left border-b border-gray-700"
          >
            {{ header }}
          </button>
          <div v-if="selectedDrawer === index" class="p-4 " v-html="contents[index]"></div>
        </div>
      </div>
  
      <!-- Content (Desktop) -->
      <div class="md:grid md:grid-cols-4 hidden">
        <div v-if="selectedColumn !== null" class="col-span-4 p-4 border-t border-gray-300" v-html="contents[selectedColumn]">

        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        headers: ['Wheelchair Assessments', 'Pressure Management', 'Hoists and Slings', 'Equipment Provision'],
        contents: [
        `
            <div class="text-gray-600 leading-8 ">
                <h2 class="text-xl mb-2 text-secondary font-bold">Private Wheelchair Assessments</h2>
                <b class="text-tertiary">Individual Wheelchair Assessments:</b> We can assess your residents' mobility, postural control and comfort needs to determine the most suitable wheelchair, cushion or equipment options for them.
                <br>
                <b class="text-tertiary">Equipment Recommendation:</b> We can recommend appropriate wheelchair and seating systems that meet the unique needs of each resident.
            </div>
        `,
        `
          <div class="text-gray-600 leading-8">
             <h2 class="text-xl mb-2 text-secondary font-bold">Pressure Management Assessments</h2>

             <b class="text-tertiary">Risk Assessment:</b> We can conduct comprehensive pressure assessments to identify residents at risk of developing pressure ulcers.

             <b class="text-tertiary">Recommendation of Support Surfaces:</b> We can recommend appropriate pressure-relieving cushions and other support surfaces to minimise the risk of pressure sores.
          </div>
        `,
        `
          <div class="text-gray-600 leading-8">
             <h2 class="text-xl mb-2 text-secondary font-bold">Hoist and Sling Assessments</h2>

             <b class="text-tertiary">Individualised Assessments:</b> We can assess resident's mobility, weight-bearing abilities and specific needs to determine the appropriate type of hoist and sling.
             <br>
             <b class="text-tertiary">Regular Reviews:</b>We can conduct regular reviews to ensure that the chosen equipment continues to meet your resident's needs as their conditions may change over time.
          </div>
        `,
          `
            <div class="text-gray-600 leading-8">
                <h2 class="text-xl mb-2 text-secondary font-bold">Equipment Provision</h2>
                <b  class="text-tertiary">Assessment and Prescription:</b> We can assess the need for various assistive devices and equipment, such as grab bars, raised toilet seats and adaptive utensils.
            </div>
          `,
        ],
        selectedColumn: 0,
        selectedDrawer: 0,
      };
    },
    methods: {
      selectColumn(index) {
        this.selectedColumn = index === this.selectedColumn ? null : index;
      },
      toggleDrawer(index) {
        this.selectedDrawer = index === this.selectedDrawer ? null : index;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>
  