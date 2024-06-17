<template>
  <section
    class="content-block w-full relative bg-cover bg-center md:rounded-b-[10rem]"
    style="
      height: calc(100vh - 109px);
      background-image: url('https://arcanum12th.education/courses/taro/taro.webp');
    "
  >
    <div
      class="absolute top-0 left-0 w-full h-full z-20 opacity-95 bg-arcanum md:hidden"
    ></div>
    <svg
      class="hidden md:block md:absolute top-0 left-0 w-full h-full z-20 bg-gradient-to-r from-arcanum to-transparent opacity-95"
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
    <div class="content-block-cnt relative z-20 max-w-7xl mx-auto h-full px-5">
      <div
        class="flex flex-col items-start justify-center h-full w-full md:max-w-[45%]"
      >
        <h1
          class="text-xl text-white sm:text-2xl md:text-3xl leading-[3rem] w-full text-center md:text-left md:w-fit"
        >
          Course Tarot
          <p class="text-blue-600">Arcanum12th</p>
        </h1>
        <p class="my-10 text-center text-white md:text-left">
          Course on the technology of interaction and synergy in the Tarot
          system as a field of study: semiotics, meta-analysis, and hermeneutics
          in exploring consciousness through archetypes
        </p>
        <div class="w-full text-center md:w-fit md:text-left">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-12 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
    <div
      class="absolute bottom-0 md:bottom-5 right-[50%] translate-x-1/2 w-12 h-12 z-20"
    >
      <a href="#expect-section" class="scroll-smooth text-white">
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
  </section>
  <section class="content-block w-full h-full" id="expect-section">
    <div
      class="content-block-cnt relative z-20 max-w-7xl mx-auto h-full px-5 py-5 md:py-20"
    >
      <div class="flex flex-col items-start justify-center w-full h-full">
        <h2
          class="text-lg sm:text-xl md:text-2xl leading-[3rem] mb-10 md:mb-20 w-full text-center"
        >
          What to
          <span class="text-blue-600"> Expect </span>
          in the Course
        </h2>
        <div class="w-full flex flex-wrap lg:flex-nowrap justify-center gap-5">
          <div
            class="shadow-dark hover:shadow-dark-hover transition-all w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col justify-between text-center bg-arcanum-light dark:bg-gray-800 p-5 rounded-lg"
          >
            <img
              src="https://arcanum12th.education/courses/taro/cards/card1.webp"
              alt="card1"
              class="h-[250px] mb-5 object-contain"
            />
            <span class="flex-grow">Characteristics of all 78 Tarot cards</span>
          </div>
          <div
            class="shadow-dark hover:shadow-dark-hover transition-all w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col justify-between text-center bg-arcanum-light dark:bg-gray-800 p-5 rounded-lg"
          >
            <img
              src="https://arcanum12th.education/courses/taro/cards/card2.webp"
              alt="card2"
              class="h-[250px] mb-5 object-contain"
            />
            <span class="flex-grow"
              >The relationship between the Major and Minor Arcana</span
            >
          </div>
          <div
            class="shadow-dark hover:shadow-dark-hover transition-all w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col justify-between text-center bg-arcanum-light dark:bg-gray-800 p-5 rounded-lg"
          >
            <img
              src="https://arcanum12th.education/courses/taro/cards/card3.webp"
              alt="card3"
              class="h-[250px] mb-5 object-contain"
            />
            <span class="flex-grow"
              >You will understand how the Tarot cards are grouped</span
            >
          </div>
          <div
            class="shadow-dark hover:shadow-dark-hover transition-all w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col justify-between text-center bg-arcanum-light dark:bg-gray-800 p-5 rounded-lg"
          >
            <img
              src="https://arcanum12th.education/courses/taro/cards/card4.webp"
              alt="card4"
              class="h-[250px] mb-5 object-contain"
            />
            <span class="flex-grow"
              >Connection with zodiac signs, planets, and numerology</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="content-block w-full min-h-screen dark:bg-gradient-bottom">
    <div
      class="content-block-cnt relative z-20 max-w-7xl mx-auto h-full px-5 py-5 md:py-20"
    >
      <div class="flex flex-col items-start justify-center w-full h-full">
        <h2
          class="text-lg sm:text-xl md:text-2xl leading-[3rem] mb-10 md:mb-20 w-full text-center"
        >
          What You
          <span class="text-blue-600"> Will Learn</span>
        </h2>
        <div class="relative w-full flex flex-col items-center h-[90vh]">
          <!-- Линия -->
          <div class="vertical-line"></div>
          <div
            class="absolute left-1/2 transform -translate-x-1/2 h-full w-full flex flex-col justify-around items-center"
          >
            <div
              class="relative gap-5 md:gap-0 flex items-center md:justify-start mb-4 w-full h-full"
            >
              <div
                class="relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:h-fit w-fit rounded-full border border-blue-600 text-center z-10 bg-white"
              >
                <div
                  class="bg-arcanum-light dark:bg-gray-800 w-full h-full px-3 py-1 rounded-full"
                >
                  1
                </div>
              </div>
              <div class="w-full text-left md:w-1/2 md:text-right md:pr-8">
                Learn to make professional interpretations and read card
                combinations
              </div>
            </div>
            <div
              class="relative gap-5 md:gap-0 flex items-center md:justify-end mb-4 w-full h-full"
            >
              <div
                class="relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:h-fit w-fit rounded-full border border-blue-600 text-center z-10 bg-white"
              >
                <div
                  class="bg-arcanum-light dark:bg-gray-800 w-full h-full px-3 py-1 rounded-full"
                >
                  2
                </div>
              </div>
              <div class="w-full text-left md:w-1/2 md:text-left md:pl-8">
                Develop or enhance your intuition
              </div>
            </div>
            <div
              class="relative gap-5 md:gap-0 flex items-center md:justify-start mb-4 w-full h-full"
            >
              <div
                class="relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:h-fit w-fit rounded-full border border-blue-600 text-center z-10 bg-white"
              >
                <div
                  class="bg-arcanum-light dark:bg-gray-800 w-full h-full px-3 py-1 rounded-full"
                >
                  3
                </div>
              </div>
              <div class="w-full text-left md:w-1/2 md:text-right md:pr-8">
                You will understand where to grow and what to pay attention to
                in order to achieve what you want. At the end of the course you
                will become a confident tarotologist
              </div>
            </div>
            <div
              class="relative gap-5 md:gap-0 flex items-center md:justify-end mb-4 w-full h-full"
            >
              <div
                class="relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:h-fit w-fit rounded-full border border-blue-600 text-center z-10 bg-white"
              >
                <div
                  class="bg-arcanum-light dark:bg-gray-800 w-full h-full px-3 py-1 rounded-full"
                >
                  4
                </div>
              </div>
              <div class="w-full text-left md:w-1/2 md:text-left md:pl-8">
                Control personal and family relationships
              </div>
            </div>
            <div
              class="relative gap-5 md:gap-0 flex items-center md:justify-start mb-4 w-full h-full"
            >
              <div
                class="relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:h-fit w-fit rounded-full border border-blue-600 text-center z-10 bg-white"
              >
                <div
                  class="bg-arcanum-light dark:bg-gray-800 w-full h-full px-3 py-1 rounded-full"
                >
                  5
                </div>
              </div>
              <div class="w-full text-left md:w-1/2 md:text-right md:pr-8">
                Finding the right and best solutions
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    class="content-block w-full h-full bg-arcanum-light dark:bg-gray-800 overflow-hidden"
  >
    <div
      class="content-block-cnt z-20 max-w-7xl mx-auto h-full px-5 py-5 md:py-10"
    >
      <div class="w-full flex flex-col md:flex-row">
        <div class="w-full md:w-52 relative rounded-xl overflow-hidden mt-2">
          <img
            alt="Course on the technology of interaction and synergy in the Tarot system as a field of study: semiotics, meta-analysis, and hermeneutics in exploring consciousness through archetypes"
            loading="lazy"
            src="https://arcanum12th.education/courses/taro/taro.webp"
            class="w-full h-auto"
          />
        </div>
        <div class="flex-1 ml-5 mr-5">
          <h2 class="text-lg line-clamp-2">
            Stream I: Tarot as a Science (A Brief Course on Tarot Card Reading
            for Beginners)
          </h2>
          <p class="text-xs text-gray-500 mt-2 line-clamp-2"></p>
          <div class="flex flex-wrap gap-4 mt-2">
            <div class="flex items-center">
              <svg
                viewBox="0 0 20 20"
                width="20px"
                height="20px"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="#8BB3FF"
                    fill-rule="evenodd"
                    d="M4 1a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V7.414A2 2 0 0017.414 6L13 1.586A2 2 0 0011.586 1H4zm0 2h7.586L16 7.414V17H4V3zm2 2a1 1 0 000 2h5a1 1 0 100-2H6zm-1 5a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h8a1 1 0 100-2H6z"
                  ></path>
                </g>
              </svg>
              <p class="ml-2 text-xs whitespace-nowrap">25 lessons</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col mr-5 justify-center">
          <div class="flex items-center mt-2 justify-center">
            <span>1480</span>
            <span class="text-xs mt-1 ml-1 text-red-500">USD</span>
          </div>
          <a
            href="/courses/a20f38d9-61b8-44ea-a06f-b767384d1cba/threads/3d8fad11-15db-4360-820c-34abc23d23b1"
            class="flex justify-center"
            ><button
              type="button"
              class="text-white bg-blue-700 mt-3 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-12 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Buy
            </button></a
          >
        </div>
      </div>
    </div>
  </section>
  <section
    class="dark:bg-gradient-top lg:dark:bg-gradient-top-right content-block w-full h-full"
  >
    <div
      class="content-block-cnt relative z-20 max-w-7xl mx-auto h-full px-5 py-5 md:py-20"
    >
      <div class="flex flex-col items-start justify-center w-full h-full">
        <h2
          class="text-lg sm:text-xl md:text-2xl leading-[3rem] mb-10 md:mb-20 w-full text-center"
        >
          Course
          <span class="text-blue-600"> program</span>
        </h2>
        <div
          class="w-full grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2"
        >
          <div
            class="flex flex-col items-center justify-center mt-3 animate-fade animate-once animate-ease-in-out"
          >
            <div
              class="w-[96%] shadow-dark hover:shadow-dark-hover transition-all mx-auto rounded-xl pl-3 pr-3 pt-2 pb-4 bg-arcanum-light dark:bg-gray-800 h-full"
            >
              <div class="divide-y divide-transparent relative h-full">
                <div class="group text-left h-full">
                  <div class="flex flex-row items-center text-white">
                    <div
                      class="text-white font-semibold text-sm flex-shrink-0 flex justify-center items-center"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        width="18px"
                        height="18px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M17.4 10L21 12L17.4 14M17.4 10L12 13L6.6 10M17.4 10L21 8L12 3L3 8L6.6 10M6.6 10L3 12L6.6 14M17.4 14L21 16L12 21L3 16L6.6 14M17.4 14L12 17L6.6 14"
                            stroke="rgb(81, 111, 246)"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div
                      class="ml-2 mt-1 mb-1 flex-grow text-base text-gray-500 dark:text-gray-400"
                    >
                      Module I
                    </div>
                  </div>
                  <h3 class="text-lg mt-1">Introduction to the Tarot System</h3>
                  <div
                    class="flex flex-wrap gap-4 pt-2 p-0 text-gray-500 dark:text-gray-400"
                  >
                    <div class="flex items-center">
                      <svg
                        width="14px"
                        height="20px"
                        version="1.1"
                        id="_x32_"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="#8BB3FF"
                      >
                        <g id="SVGRepo_bgCarrier"></g>
                        <g id="SVGRepo_tracerCarrier"></g>
                        <g id="SVGRepo_iconCarrier">
                          <g>
                            <path
                              class="st0"
                              d="M505.837,180.418L279.265,76.124c-7.349-3.385-15.177-5.093-23.265-5.093c-8.088,0-15.914,1.708-23.265,5.093 L6.163,180.418C2.418,182.149,0,185.922,0,190.045s2.418,7.896,6.163,9.627l226.572,104.294c7.349,3.385,15.177,5.101,23.265,5.101 c8.088,0,15.916-1.716,23.267-5.101l178.812-82.306v82.881c-7.096,0.8-12.63,6.84-12.63,14.138c0,6.359,4.208,11.864,10.206,13.618 l-12.092,79.791h55.676l-12.09-79.791c5.996-1.754,10.204-7.259,10.204-13.618c0-7.298-5.534-13.338-12.63-14.138v-95.148 l21.116-9.721c3.744-1.731,6.163-5.504,6.163-9.627S509.582,182.149,505.837,180.418z"
                            ></path>
                            <path
                              class="st0"
                              d="M256,346.831c-11.246,0-22.143-2.391-32.386-7.104L112.793,288.71v101.638 c0,22.314,67.426,50.621,143.207,50.621c75.782,0,143.209-28.308,143.209-50.621V288.71l-110.827,51.017 C278.145,344.44,267.25,346.831,256,346.831z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p class="ml-1 text-xs whitespace-nowrap">5 lessons</p>
                    </div>
                    <div class="flex items-center">
                      <svg
                        fill="#8BB3FF"
                        width="14px"
                        height="20px"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <g>
                            <path
                              d="M7.93,8.24,5.26,5.58,4,6.85l3.94,3.94L16,2.7,14.74,1.43,13,3.17,11.2,5Zm3.27,4H2.8V3.8H11L12.75,2H1V14H13V7.13l-1.8,1.8Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p class="ml-2 text-xs whitespace-nowrap">2 заданий</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex flex-col items-center justify-center mt-3 animate-fade animate-once animate-ease-in-out"
          >
            <div
              class="w-[96%] shadow-dark hover:shadow-dark-hover transition-all mx-auto rounded-xl pl-3 pr-3 pt-2 pb-4 bg-arcanum-light dark:bg-gray-800 h-full"
            >
              <div class="divide-y divide-transparent relative h-full">
                <div class="group text-left h-full">
                  <div class="flex flex-row items-center text-white">
                    <div
                      class="text-white font-semibold text-sm flex-shrink-0 flex justify-center items-center"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        width="18px"
                        height="18px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M17.4 10L21 12L17.4 14M17.4 10L12 13L6.6 10M17.4 10L21 8L12 3L3 8L6.6 10M6.6 10L3 12L6.6 14M17.4 14L21 16L12 21L3 16L6.6 14M17.4 14L12 17L6.6 14"
                            stroke="rgb(81, 111, 246)"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div
                      class="ml-2 mt-1 mb-1 flex-grow text-base text-gray-500 dark:text-gray-400"
                    >
                      Module II
                    </div>
                  </div>
                  <h3 class="text-lg mt-1">Tarot Cards</h3>
                  <div
                    class="flex flex-wrap gap-4 pt-2 p-0 text-gray-500 dark:text-gray-400"
                  >
                    <div class="flex items-center">
                      <svg
                        width="14px"
                        height="20px"
                        version="1.1"
                        id="_x32_"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="#8BB3FF"
                      >
                        <g id="SVGRepo_bgCarrier"></g>
                        <g id="SVGRepo_tracerCarrier"></g>
                        <g id="SVGRepo_iconCarrier">
                          <g>
                            <path
                              class="st0"
                              d="M505.837,180.418L279.265,76.124c-7.349-3.385-15.177-5.093-23.265-5.093c-8.088,0-15.914,1.708-23.265,5.093 L6.163,180.418C2.418,182.149,0,185.922,0,190.045s2.418,7.896,6.163,9.627l226.572,104.294c7.349,3.385,15.177,5.101,23.265,5.101 c8.088,0,15.916-1.716,23.267-5.101l178.812-82.306v82.881c-7.096,0.8-12.63,6.84-12.63,14.138c0,6.359,4.208,11.864,10.206,13.618 l-12.092,79.791h55.676l-12.09-79.791c5.996-1.754,10.204-7.259,10.204-13.618c0-7.298-5.534-13.338-12.63-14.138v-95.148 l21.116-9.721c3.744-1.731,6.163-5.504,6.163-9.627S509.582,182.149,505.837,180.418z"
                            ></path>
                            <path
                              class="st0"
                              d="M256,346.831c-11.246,0-22.143-2.391-32.386-7.104L112.793,288.71v101.638 c0,22.314,67.426,50.621,143.207,50.621c75.782,0,143.209-28.308,143.209-50.621V288.71l-110.827,51.017 C278.145,344.44,267.25,346.831,256,346.831z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p class="ml-1 text-xs whitespace-nowrap">4 lessons</p>
                    </div>
                    <div class="flex items-center">
                      <svg
                        fill="#8BB3FF"
                        width="14px"
                        height="20px"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <g>
                            <path
                              d="M7.93,8.24,5.26,5.58,4,6.85l3.94,3.94L16,2.7,14.74,1.43,13,3.17,11.2,5Zm3.27,4H2.8V3.8H11L12.75,2H1V14H13V7.13l-1.8,1.8Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p class="ml-2 text-xs whitespace-nowrap">3 заданий</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex flex-col items-center justify-center mt-3 animate-fade animate-once animate-ease-in-out"
          >
            <div
              class="w-[96%] shadow-dark hover:shadow-dark-hover transition-all mx-auto rounded-xl pl-3 pr-3 pt-2 pb-4 bg-arcanum-light dark:bg-gray-800 h-full"
            >
              <div class="divide-y divide-transparent relative h-full">
                <div class="group text-left h-full">
                  <div class="flex flex-row items-center text-white">
                    <div
                      class="text-white font-semibold text-sm flex-shrink-0 flex justify-center items-center"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        width="18px"
                        height="18px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M17.4 10L21 12L17.4 14M17.4 10L12 13L6.6 10M17.4 10L21 8L12 3L3 8L6.6 10M6.6 10L3 12L6.6 14M17.4 14L21 16L12 21L3 16L6.6 14M17.4 14L12 17L6.6 14"
                            stroke="rgb(81, 111, 246)"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div
                      class="ml-2 mt-1 mb-1 flex-grow text-base text-gray-500 dark:text-gray-400"
                    >
                      Module III
                    </div>
                  </div>
                  <h3 class="text-lg mt-1">Working with Tarot</h3>
                  <div
                    class="flex flex-wrap gap-4 pt-2 p-0 text-gray-500 dark:text-gray-400"
                  >
                    <div class="flex items-center">
                      <svg
                        width="14px"
                        height="20px"
                        version="1.1"
                        id="_x32_"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="#8BB3FF"
                      >
                        <g id="SVGRepo_bgCarrier"></g>
                        <g id="SVGRepo_tracerCarrier"></g>
                        <g id="SVGRepo_iconCarrier">
                          <g>
                            <path
                              class="st0"
                              d="M505.837,180.418L279.265,76.124c-7.349-3.385-15.177-5.093-23.265-5.093c-8.088,0-15.914,1.708-23.265,5.093 L6.163,180.418C2.418,182.149,0,185.922,0,190.045s2.418,7.896,6.163,9.627l226.572,104.294c7.349,3.385,15.177,5.101,23.265,5.101 c8.088,0,15.916-1.716,23.267-5.101l178.812-82.306v82.881c-7.096,0.8-12.63,6.84-12.63,14.138c0,6.359,4.208,11.864,10.206,13.618 l-12.092,79.791h55.676l-12.09-79.791c5.996-1.754,10.204-7.259,10.204-13.618c0-7.298-5.534-13.338-12.63-14.138v-95.148 l21.116-9.721c3.744-1.731,6.163-5.504,6.163-9.627S509.582,182.149,505.837,180.418z"
                            ></path>
                            <path
                              class="st0"
                              d="M256,346.831c-11.246,0-22.143-2.391-32.386-7.104L112.793,288.71v101.638 c0,22.314,67.426,50.621,143.207,50.621c75.782,0,143.209-28.308,143.209-50.621V288.71l-110.827,51.017 C278.145,344.44,267.25,346.831,256,346.831z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p class="ml-1 text-xs whitespace-nowrap">3 lessons</p>
                    </div>
                    <div class="flex items-center">
                      <svg
                        fill="#8BB3FF"
                        width="14px"
                        height="20px"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <g>
                            <path
                              d="M7.93,8.24,5.26,5.58,4,6.85l3.94,3.94L16,2.7,14.74,1.43,13,3.17,11.2,5Zm3.27,4H2.8V3.8H11L12.75,2H1V14H13V7.13l-1.8,1.8Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p class="ml-2 text-xs whitespace-nowrap">3 заданий</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex flex-col items-center justify-center mt-3 animate-fade animate-once animate-ease-in-out"
          >
            <div
              class="w-[96%] shadow-dark hover:shadow-dark-hover transition-all mx-auto rounded-xl pl-3 pr-3 pt-2 pb-4 bg-arcanum-light dark:bg-gray-800 h-full"
            >
              <div class="divide-y divide-transparent relative h-full">
                <div class="group text-left h-full">
                  <div class="flex flex-row items-center text-white">
                    <div
                      class="text-white font-semibold text-sm flex-shrink-0 flex justify-center items-center"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        width="18px"
                        height="18px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M17.4 10L21 12L17.4 14M17.4 10L12 13L6.6 10M17.4 10L21 8L12 3L3 8L6.6 10M6.6 10L3 12L6.6 14M17.4 14L21 16L12 21L3 16L6.6 14M17.4 14L12 17L6.6 14"
                            stroke="rgb(81, 111, 246)"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div
                      class="ml-2 mt-1 mb-1 flex-grow text-base text-gray-500 dark:text-gray-400"
                    >
                      Module IV
                    </div>
                  </div>
                  <h3 class="text-lg mt-1">Secret Mechanisms of Tarot</h3>
                  <div
                    class="flex flex-wrap gap-4 pt-2 p-0 text-gray-500 dark:text-gray-400"
                  >
                    <div class="flex items-center">
                      <svg
                        width="14px"
                        height="20px"
                        version="1.1"
                        id="_x32_"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="#8BB3FF"
                      >
                        <g id="SVGRepo_bgCarrier"></g>
                        <g id="SVGRepo_tracerCarrier"></g>
                        <g id="SVGRepo_iconCarrier">
                          <g>
                            <path
                              class="st0"
                              d="M505.837,180.418L279.265,76.124c-7.349-3.385-15.177-5.093-23.265-5.093c-8.088,0-15.914,1.708-23.265,5.093 L6.163,180.418C2.418,182.149,0,185.922,0,190.045s2.418,7.896,6.163,9.627l226.572,104.294c7.349,3.385,15.177,5.101,23.265,5.101 c8.088,0,15.916-1.716,23.267-5.101l178.812-82.306v82.881c-7.096,0.8-12.63,6.84-12.63,14.138c0,6.359,4.208,11.864,10.206,13.618 l-12.092,79.791h55.676l-12.09-79.791c5.996-1.754,10.204-7.259,10.204-13.618c0-7.298-5.534-13.338-12.63-14.138v-95.148 l21.116-9.721c3.744-1.731,6.163-5.504,6.163-9.627S509.582,182.149,505.837,180.418z"
                            ></path>
                            <path
                              class="st0"
                              d="M256,346.831c-11.246,0-22.143-2.391-32.386-7.104L112.793,288.71v101.638 c0,22.314,67.426,50.621,143.207,50.621c75.782,0,143.209-28.308,143.209-50.621V288.71l-110.827,51.017 C278.145,344.44,267.25,346.831,256,346.831z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p class="ml-1 text-xs whitespace-nowrap">5 lessons</p>
                    </div>
                    <div class="flex items-center">
                      <svg
                        fill="#8BB3FF"
                        width="14px"
                        height="20px"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <g>
                            <path
                              d="M7.93,8.24,5.26,5.58,4,6.85l3.94,3.94L16,2.7,14.74,1.43,13,3.17,11.2,5Zm3.27,4H2.8V3.8H11L12.75,2H1V14H13V7.13l-1.8,1.8Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p class="ml-2 text-xs whitespace-nowrap">3 заданий</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex flex-col items-center justify-center mt-3 animate-fade animate-once animate-ease-in-out"
          >
            <div
              class="w-[96%] shadow-dark hover:shadow-dark-hover transition-all mx-auto rounded-xl pl-3 pr-3 pt-2 pb-4 bg-arcanum-light dark:bg-gray-800 h-full"
            >
              <div class="divide-y divide-transparent relative h-full">
                <div class="group text-left h-full">
                  <div class="flex flex-row items-center text-white">
                    <div
                      class="text-white font-semibold text-sm flex-shrink-0 flex justify-center items-center"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        width="18px"
                        height="18px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M17.4 10L21 12L17.4 14M17.4 10L12 13L6.6 10M17.4 10L21 8L12 3L3 8L6.6 10M6.6 10L3 12L6.6 14M17.4 14L21 16L12 21L3 16L6.6 14M17.4 14L12 17L6.6 14"
                            stroke="rgb(81, 111, 246)"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div
                      class="ml-2 mt-1 mb-1 flex-grow text-base text-gray-500 dark:text-gray-400"
                    >
                      Module V
                    </div>
                  </div>
                  <h3 class="text-lg mt-1">Elements and Time</h3>
                  <div
                    class="flex flex-wrap gap-4 pt-2 p-0 text-gray-500 dark:text-gray-400"
                  >
                    <div class="flex items-center">
                      <svg
                        width="14px"
                        height="20px"
                        version="1.1"
                        id="_x32_"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="#8BB3FF"
                      >
                        <g id="SVGRepo_bgCarrier"></g>
                        <g id="SVGRepo_tracerCarrier"></g>
                        <g id="SVGRepo_iconCarrier">
                          <g>
                            <path
                              class="st0"
                              d="M505.837,180.418L279.265,76.124c-7.349-3.385-15.177-5.093-23.265-5.093c-8.088,0-15.914,1.708-23.265,5.093 L6.163,180.418C2.418,182.149,0,185.922,0,190.045s2.418,7.896,6.163,9.627l226.572,104.294c7.349,3.385,15.177,5.101,23.265,5.101 c8.088,0,15.916-1.716,23.267-5.101l178.812-82.306v82.881c-7.096,0.8-12.63,6.84-12.63,14.138c0,6.359,4.208,11.864,10.206,13.618 l-12.092,79.791h55.676l-12.09-79.791c5.996-1.754,10.204-7.259,10.204-13.618c0-7.298-5.534-13.338-12.63-14.138v-95.148 l21.116-9.721c3.744-1.731,6.163-5.504,6.163-9.627S509.582,182.149,505.837,180.418z"
                            ></path>
                            <path
                              class="st0"
                              d="M256,346.831c-11.246,0-22.143-2.391-32.386-7.104L112.793,288.71v101.638 c0,22.314,67.426,50.621,143.207,50.621c75.782,0,143.209-28.308,143.209-50.621V288.71l-110.827,51.017 C278.145,344.44,267.25,346.831,256,346.831z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p class="ml-1 text-xs whitespace-nowrap">4 lessons</p>
                    </div>
                    <div class="flex items-center">
                      <svg
                        fill="#8BB3FF"
                        width="14px"
                        height="20px"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <g>
                            <path
                              d="M7.93,8.24,5.26,5.58,4,6.85l3.94,3.94L16,2.7,14.74,1.43,13,3.17,11.2,5Zm3.27,4H2.8V3.8H11L12.75,2H1V14H13V7.13l-1.8,1.8Z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p class="ml-2 text-xs whitespace-nowrap">3 заданий</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex flex-col items-center justify-center mt-3 animate-fade animate-once animate-ease-in-out"
          >
            <div
              class="w-[96%] shadow-dark hover:shadow-dark-hover transition-all mx-auto rounded-xl pl-3 pr-3 pt-2 pb-4 bg-arcanum-light dark:bg-gray-800 h-full"
            >
              <div class="divide-y divide-transparent relative h-full">
                <div class="group text-left h-full">
                  <div class="flex flex-row items-center text-white">
                    <div
                      class="text-white font-semibold text-sm flex-shrink-0 flex justify-center items-center"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        width="18px"
                        height="18px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M17.4 10L21 12L17.4 14M17.4 10L12 13L6.6 10M17.4 10L21 8L12 3L3 8L6.6 10M6.6 10L3 12L6.6 14M17.4 14L21 16L12 21L3 16L6.6 14M17.4 14L12 17L6.6 14"
                            stroke="rgb(81, 111, 246)"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div
                      class="ml-2 mt-1 mb-1 flex-grow text-base text-gray-500 dark:text-gray-400"
                    >
                      Module VI
                    </div>
                  </div>
                  <h3 class="text-lg mt-1">Practice</h3>
                  <div
                    class="flex flex-wrap gap-4 pt-2 p-0 text-gray-500 dark:text-gray-400"
                  >
                    <div class="flex items-center">
                      <svg
                        width="14px"
                        height="20px"
                        version="1.1"
                        id="_x32_"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="#8BB3FF"
                      >
                        <g id="SVGRepo_bgCarrier"></g>
                        <g id="SVGRepo_tracerCarrier"></g>
                        <g id="SVGRepo_iconCarrier">
                          <g>
                            <path
                              class="st0"
                              d="M505.837,180.418L279.265,76.124c-7.349-3.385-15.177-5.093-23.265-5.093c-8.088,0-15.914,1.708-23.265,5.093 L6.163,180.418C2.418,182.149,0,185.922,0,190.045s2.418,7.896,6.163,9.627l226.572,104.294c7.349,3.385,15.177,5.101,23.265,5.101 c8.088,0,15.916-1.716,23.267-5.101l178.812-82.306v82.881c-7.096,0.8-12.63,6.84-12.63,14.138c0,6.359,4.208,11.864,10.206,13.618 l-12.092,79.791h55.676l-12.09-79.791c5.996-1.754,10.204-7.259,10.204-13.618c0-7.298-5.534-13.338-12.63-14.138v-95.148 l21.116-9.721c3.744-1.731,6.163-5.504,6.163-9.627S509.582,182.149,505.837,180.418z"
                            ></path>
                            <path
                              class="st0"
                              d="M256,346.831c-11.246,0-22.143-2.391-32.386-7.104L112.793,288.71v101.638 c0,22.314,67.426,50.621,143.207,50.621c75.782,0,143.209-28.308,143.209-50.621V288.71l-110.827,51.017 C278.145,344.44,267.25,346.831,256,346.831z"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <p class="ml-1 text-xs whitespace-nowrap">4 lessons</p>
                    </div>
                    <!---->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="lg:dark:bg-gradient-bottom-right content-block w-full h-full">
    <div
      class="content-block-cnt relative z-20 max-w-7xl mx-auto h-full px-5 py-5 md:py-20"
    >
      <div class="flex flex-col items-start justify-center w-full h-full">
        <h2
          class="text-lg sm:text-xl md:text-2xl leading-[3rem] mb-10 md:mb-20 w-full text-center"
        >
          Course
          <span class="text-blue-600"> Authors</span>
        </h2>
        <div class="w-full lg:w-1/2 mx-auto">
          <div
            class="bg-arcanum-light shadow-dark hover:shadow-dark-hover transition-all dark:bg-gray-800 relative overflow-hidden group rounded-xl p-5"
          >
            <div class="flex items-center gap-4">
              <img
                alt="Lord Denis Banchenko"
                loading="lazy"
                src="https://arcanum12th.education/employees/denis/denis.webp"
                class="w-32 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
              />
              <div class="w-fit transition-all transform duration-500">
                <h1 class="text-gray-600 dark:text-gray-200">
                  Lord Denis Banchenko
                </h1>
                <p class="text-gray-400">
                  Founder and Rector of the Arcanum 12 Academy.
                </p>
              </div>
            </div>
          </div>
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
