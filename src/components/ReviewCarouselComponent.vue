<template>
  <div class="relative overflow-hidden mx-4 md:mx-32">
    <div class="flex duration-500 ease-out w-full" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div class="min-w-full p-8 md:p-20 bg-gray-100 text-center" v-for="(review, index) in reviews" :key="index">
        <h3 class="text-xl md:text-2xl font-bold">{{ review.name }}</h3>
        <div class="flex flex-col items-center mt-4">
          <img src="../assets/icons/quote.svg" alt="quote" class="w-8 h-8 mb-4">
          <p class="text-base md:text-lg">{{ review.content }}</p>
        </div>
      </div>
    </div>
    <div class="carousel-indicators">
      <span
        v-for="(review, index) in reviews"
        :key="index"
        :class="{ active: index === currentIndex }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      reviews: [
        {
          name: 'John Doe',
          content: 'Built using the latest web technologies like HTML5, CSS3, and jQuery, rest assured Sedna will look smashing on every device under the sun.'
        },
        {
          name: 'Tom Smith',
          content: 'Sedna is an amazing template that provides a seamless user experience. Its modern design and responsive layout make it a perfect choice for any project.'
        },
        {
          name: 'Jake Adams',
          content: 'I am impressed with Sedna\'s versatility and ease of customization. It offers a wide range of features and components, making it suitable for various applications.'
        }
      ],
      interval: null
    };
  },
  mounted() {
    this.startCarousel();
  },
  beforeUnmount() {
    this.stopCarousel();
  },
  methods: {
    startCarousel() {
      this.interval = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
      }, 5000); // Change slide every 5 seconds
    },
    stopCarousel() {
      clearInterval(this.interval);
    },
    goToSlide(index) {
      this.currentIndex = index;
      this.stopCarousel();
      this.startCarousel();
    }
  }
};
</script>

<style>
.carousel-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  gap: 10px;
}

.carousel-indicators span {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #ccc;
  border-radius: 50%;
  cursor: pointer;
}

.carousel-indicators span.active {
  background-color: #333;
}
</style>
