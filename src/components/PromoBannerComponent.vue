<template>
    <div v-show="enabled" class=" overflow-hidden bg-blue-500 w-full">
      <div
        class="flex items-center text-white font-semibold text-md px-4 py-0"
        :style="{ transform: 'translateX(' + translateX + '%)' }"
      >
        {{ currentPromoText }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
        enabled:{
            type: Boolean,
            required: true
        }
    },
    data() {
      return {
        promos: [
          "Limited Time Offer! Get 20% off on all products.",
          "New arrivals are here! Check out our latest collection.",
          "Huge Sale! Up to 50% off on selected items.",
        ],
        currentPromoIndex: 0,
        translateX: 100,
        intervalId: null,
      };
    },
    computed: {
      currentPromoText() {
        return this.promos[this.currentPromoIndex];
      },
    },
    mounted() {
      // Start animation loop
      this.intervalId = setInterval(this.animateBanner, 30); // Change interval time to 3000 milliseconds (3 seconds)
    },
    methods: {
      animateBanner() {
        this.translateX -= 0.2;
        if (this.translateX <= -100) {
          this.translateX = 100;
          this.currentPromoIndex = (this.currentPromoIndex + 1) % this.promos.length;
        }
      },
    },
    unmounted() {
      // Clear interval on component destruction
      clearInterval(this.intervalId);
    },
  };
  </script>
  