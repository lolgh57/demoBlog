<template>
  <section
    class="content-block w-full relative bg-cover bg-center rounded-b-[10rem]"
    style="
      height: calc(100vh - 109px);
      background-image: url('https://arcanum12th.education/courses/taro/taro.webp');
    "
  >
    <svg
      class="absolute top-0 left-0 w-full h-full z-20 bg-gradient-to-r from-arcanum to-transparent opacity-95"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="90%" stop-color="#091a28" />
          <stop offset="100%" stop-color="#0b1a28" />
        </linearGradient>
        <mask id="mask" x="0" y="0" width="100%" height="100%">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient)" />
          <path d="M 60,0 Q 65,35 50,62 T 50,100 H 0 V 0 Z" fill="white" />
        </mask>
      </defs>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="url(#gradient)"
        mask="url(#mask)"
      />
    </svg>
    <div class="absolute bottom-5 right-[50%] w-12 h-12 z-30">
      <a href="#expect-section" class="scroll-smooth">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="animate-bounce infinite"
        >
          <path d="M5 10l7 7 7-7" />
        </svg>
      </a>
    </div>
    <div class="content-block-cnt relative z-20 max-w-7xl mx-auto h-full px-5">
      <div class="flex flex-col items-start justify-center h-full max-w-[45%]">
        <h1 class="text-xl sm:text-2xl md:text-3xl leading-[3rem]">
          Course Tarot
          <p class="text-blue-600">Arcanum12th</p>
        </h1>
        <p class="my-10">
          Course on the technology of interaction and synergy in the Tarot
          system as a field of study: semiotics, meta-analysis, and hermeneutics
          in exploring consciousness through archetypes
        </p>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-12 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Buy
        </button>
      </div>
    </div>
  </section>
  <section class="content-block w-full h-full" id="expect-section">
    <div
      class="content-block-cnt relative z-20 max-w-7xl mx-auto h-full px-5 py-20"
    >
      <div class="flex flex-col items-start justify-center w-full h-full">
        <h2
          class="text-lg sm:text-xl md:text-2xl leading-[3rem] mb-20 w-full text-center"
        >
          What to
          <span class="text-blue-600"> Expect </span>
          in the Course
        </h2>
        <div class="flex gap-5 h-full basis-0">
          <div
            class="taro-card h-full w-1/4 flex flex-col justify-between text-center bg-white dark:bg-gray-800 p-5 rounded-lg"
          >
            <img
              src="https://arcanum12th.education/courses/taro/cards/card1.webp"
              alt="card1"
              class="h-[250px] mb-5"
            />
            <span class="flex-grow">Characteristics of all 78 Tarot cards</span>
          </div>
          <div
            class="taro-card h-full w-1/4 flex flex-col justify-between text-center bg-white dark:bg-gray-800 p-5 rounded-lg"
          >
            <img
              src="https://arcanum12th.education/courses/taro/cards/card2.webp"
              alt="card2"
              class="h-[250px] mb-5"
            />
            <span class="flex-grow"
              >The relationship between the Major and Minor Arcana</span
            >
          </div>
          <div
            class="taro-card h-full w-1/4 flex flex-col justify-between text-center bg-white dark:bg-gray-800 p-5 rounded-lg"
          >
            <img
              src="https://arcanum12th.education/courses/taro/cards/card3.webp"
              alt="card3"
              class="h-[250px] mb-5"
            />
            <span class="flex-grow"
              >You will understand how the Tarot cards are grouped</span
            >
          </div>
          <div
            class="taro-card h-full w-1/4 flex flex-col justify-between text-center bg-white dark:bg-gray-800 p-5 rounded-lg"
          >
            <img
              src="https://arcanum12th.education/courses/taro/cards/card4.webp"
              alt="card4"
              class="h-[250px] mb-5"
            />
            <span class="flex-grow"
              >Connection with zodiac signs, planets, and numerology</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="content-block w-full h-full">
    <div
      class="content-block-cnt relative z-20 max-w-7xl mx-auto h-full px-5 py-20"
    >
      <div class="flex flex-col items-start justify-center w-full h-full">
        <h2
          class="text-lg sm:text-xl md:text-2xl leading-[3rem] mb-20 w-full text-center"
        >
          What You
          <span class="text-blue-600"> Will Learn</span>
        </h2>
        <div class="relative w-full flex justify-center">
          <div class="relative w-1 h-full bg-gray-300"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
<!-- todo scroll smooth on 35 line-->
<style lang="css" scoped>
.scroll-smooth {
  scroll-behavior: smooth;
}
</style>
