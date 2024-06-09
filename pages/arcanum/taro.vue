<template>
  <main class="content mx-auto px-4 sm:px-6 xl:px-0 min-h-screen mt-10">
    <section class="content-block">
      <div class="content-block-cnt xl:max-w-5xl mx-auto">
        <div
          class="overflow-hidden relative rounded-2xl bg-cover bg-center"
          style="
            background-image: url('https://arcanum12th.education/courses/taro/taro.webp');
          "
        >
          <div class="absolute inset-0 bg-black bg-opacity-70 z-10"></div>
          <div class="relative z-20 max-w-5xl mx-[5%] my-10">
            <div class="relative flex justify-between items-center">
              <span
                class="text-xs rounded-full border top-[12%] px-3 py-1 z-20"
                style="
                  border: 1px solid rgb(44, 150, 255);
                  color: rgb(44, 150, 255);
                "
                >Course</span
              >
              <span
                class="flex items-center justify-center w-8 h-8 text-xs mr-5 z-20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="32px"
                  viewBox="0 0 32 75.62"
                >
                  <title>science-brain-left_1</title>
                  <g id="Слой_2" data-name="Слой 2">
                    <g id="Слой_15" data-name="Слой 15">
                      <path
                        class="cls-1"
                        fill="#eeeee4"
                        d="M32,70.86V39.63s-3.57.38-5.23,6.76c0,0-1-3.31,2.42-6.25a5.5,5.5,0,0,1-5-3.44A5.68,5.68,0,0,0,32,38.35V23.44s-4.46-1.53-4.72-5.61c0,0,.64,3.06,4.72,4.46v-17S30.22-3.72,21.55,1.76c0,0-2.29,0-2.68.51,0,0,2.93,2.42,2.93,4.84,0,0,2.55-3.44,6.5.38,0,0-3.57-2.8-6.37.51a11.18,11.18,0,0,1-1.53,4.84c-1.53,2.8,0,4,0,4s-2-.51-.38-5S18.1,2.78,18.1,2.78a3.07,3.07,0,0,0-1.66,3.06s-5.86-.64-6.25,6.25c0,0-6.5-.13-5.23,8.41,0,0-2.93,1.15-3.19,3.7,0,0,11.09,6.37,12-2.17a4.86,4.86,0,0,1-3.19,5.1s5.48,2.29,3.19,4.21c0,0,1.91-1.78-5.74-4.08a22.17,22.17,0,0,1-6.5-2,6,6,0,0,0,.76,3.57s-3.82,2.55-.38,7.27c0,0-1.78.89-1.91,4,0,0,7.9,1.91,12.75-.25,0,0-4.84,3.57-12.75,1.27a8.38,8.38,0,0,0,1.91,3.31s-3.57,4.72,2,8.29c0,0-3.19,6.12,4.08,8.29,0,0-2.42,5,3.7,6.88,0,0,11.09-8.8,4.72-16.19a7.83,7.83,0,0,1,2.42,8.29s5.48-5.86,9.43-.13c0,0-5-6.25-12.11,4.84a43.81,43.81,0,0,1-3.44,3.44s.38,6.88,7.78,5.35C20.53,73.41,28.69,79.79,32,70.86Z"
                      ></path>
                    </g>
                  </g>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="32px"
                  viewBox="0 0 32 75.62"
                >
                  <title>science-brain-right</title>
                  <g id="Слой_2" data-name="Слой 2">
                    <g id="Слой_15" data-name="Слой 15">
                      <path
                        class="cls-1"
                        fill="#2C96FF"
                        d="M0,70.86V39.63s3.57.38,5.23,6.76c0,0,1-3.31-2.42-6.25a5.5,5.5,0,0,0,5-3.44A5.68,5.68,0,0,1,0,38.35V23.44s4.46-1.53,4.72-5.61c0,0-.64,3.06-4.72,4.46v-17S1.78-3.72,10.45,1.76c0,0,2.29,0,2.68.51,0,0-2.93,2.42-2.93,4.84,0,0-2.55-3.44-6.5.38,0,0,3.57-2.8,6.37.51a11.18,11.18,0,0,0,1.53,4.84c1.53,2.8,0,4,0,4s2-.51.38-5S13.9,2.78,13.9,2.78a3.07,3.07,0,0,1,1.66,3.06s5.86-.64,6.25,6.25c0,0,6.5-.13,5.23,8.41,0,0,2.93,1.15,3.19,3.7,0,0-11.09,6.37-12-2.17a4.86,4.86,0,0,0,3.19,5.1s-5.48,2.29-3.19,4.21c0,0-1.91-1.78,5.74-4.08a22.17,22.17,0,0,0,6.5-2,6,6,0,0,1-.76,3.57s3.82,2.55.38,7.27c0,0,1.78.89,1.91,4,0,0-7.9,1.91-12.75-.25,0,0,4.84,3.57,12.75,1.27a8.38,8.38,0,0,1-1.91,3.31s3.57,4.72-2,8.29c0,0,3.19,6.12-4.08,8.29,0,0,2.42,5-3.7,6.88,0,0-11.09-8.8-4.72-16.19a7.83,7.83,0,0,0-2.42,8.29S7.65,54,3.7,59.77c0,0,5-6.25,12.11,4.84a43.81,43.81,0,0,0,3.44,3.44s-.38,6.88-7.78,5.35C11.47,73.41,3.31,79.79,0,70.86Z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </span>
            </div>
            <div class="text-left py-1 rounded mt-5">
              <h1
                class="text-white text-lg md:text-xl lg:text-2xl lg:leading-10"
              >
                Course on the technology of interaction and synergy in the Tarot
                system as a field of study: semiotics, meta-analysis, and
                hermeneutics in exploring consciousness through archetypes
              </h1>
              <p class="overflow-hidden text-xs text-gray-300 mt-2">
                Discover more about the technology of interaction and synergy in
                the Tarot system and its application in exploring consciousness
                through archetypes.
              </p>
            </div>
            <div
              class="hidden md:flex flex-col md:flex-row justify-between rounded-xl bg-white dark:bg-gray-800 p-5 shadow z-20 mt-5"
            >
              <div class="flex flex-wrap md:flex-nowrap">
                <div class="w-full md:w-52 relative rounded-xl overflow-hidden">
                  <img
                    src="https://arcanum12th.education/courses/taro/taro.webp"
                    alt="Course Image"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="flex-1 ml-5 mr-5">
                  <h2 class="text-lg line-clamp-2">
                    Stream I: Tarot as a Science (A Brief Course on Tarot Card
                    Reading for Beginners)
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
              </div>
              <div class="flex flex-col mr-5">
                <div>
                  <div class="flex items-center mt-2">
                    <span class="ml-2">1480</span
                    ><span class="text-xs mt-1 ml-1 text-red-500">USD</span>
                  </div>
                  <a href="" class=""
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
            <div class="w-full h-30 mr-4 md:hidden mt-5">
              <div class="flex flex-col">
                <div
                  class="bg-white dark:bg-gray-700 relative drop-shadow-2xl rounded-3xl p-4"
                >
                  <div class="flex-none sm:flex">
                    <div class="flex-auto justify-evenly">
                      <div class="flex items-center">
                        <div class="flex flex-col">
                          <div
                            class="w-full flex-none text-sm text-dark-800 leading-none"
                          >
                            Stream I: Tarot as a Science (A Brief Course on
                            Tarot Card Reading for Beginners)
                          </div>
                          <div class="text-xs mt-1"></div>
                        </div>
                      </div>
                      <div
                        class="border-dashed border-secondary-white border-b-2 my-5"
                      >
                        <div
                          class="absolute rounded-full w-4 h-4 -mt-2 -left-2 bg-gray-200 dark:bg-gray-900"
                        ></div>
                        <div
                          class="absolute rounded-full w-4 h-4 -mt-2 -right-2 bg-gray-200 dark:bg-gray-900"
                        ></div>
                      </div>
                      <div class="flex justify-between">
                        <div class="flex flex-col">
                          <div class="flex items-center ml-2">
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
                            <p class="ml-2 text-xs whitespace-nowrap">
                              25 lessons
                            </p>
                          </div>
                          <div class="flex items-center mt-2">
                            <span class="ml-2">1480</span
                            ><span class="text-xs mt-1 ml-1 text-red-500"
                              >USD</span
                            >
                          </div>
                        </div>
                        <div class="flex flex-col items-end">
                          <a href="" class=""
                            ><button
                              type="button"
                              class="text-white bg-blue-700 mt-1 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-12 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                              Buy
                            </button></a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="content-block">
      <div class="content-block-cnt text-center mt-10 mb-10 sm:mt-20 sm:mb-20">
        <h3 class="mb-4 text-xl md:text-2xl xl:text-3xl" style="color: #536df3">
          Платформа
          <span class="text-black dark:text-white">Arcanum12th </span>это
        </h3>
        <div
          class="flex flex-wrap justify-center gap-4 mt-8 sm:mt-10 md:space-x-4"
        >
          <div
            class="relative w-72 sm:w-80 md:w-96 bg-blue-100 dark:bg-gray-800 rounded-xl"
          >
            <div class="p-6 sm:p-8">
              <div class="flex items-center justify-start">
                <h2
                  class="text-2xl sm:text-3xl md:text-5xl mr-2"
                  style="color: #536df2"
                >
                  5
                </h2>
                <p
                  class="text-lg sm:text-lg md:text-xl mt-3 sm:mt-4 md:mt-5 text-left text-blue-600"
                >
                  меняющих мышление курсов
                </p>
              </div>
              <div class="text-left mt-3 sm:mt-4 text-sm md:text-base">
                <p>
                  признанные эксперты делятся с тобой самыми результативными
                  методиками развития
                </p>
              </div>
            </div>
          </div>
          <div
            class="relative w-72 sm:w-80 md:w-96 bg-blue-100 dark:bg-gray-800 rounded-xl"
          >
            <div class="p-6 sm:p-8">
              <div class="flex items-center justify-start">
                <h2
                  class="text-2xl sm:text-3xl md:text-5xl mr-2"
                  style="color: #536df2"
                >
                  3
                </h2>
                <p
                  class="text-lg sm:text-lg md:text-xl mt-3 sm:mt-4 md:mt-5 text-left text-blue-600"
                >
                  инновационных метода обучения
                </p>
              </div>
              <div class="text-left mt-3 sm:mt-4 text-sm md:text-base">
                <p>
                  преобразите свой подход к познанию - погрузитесь в современные
                  образовательные технологии и методики
                </p>
              </div>
            </div>
          </div>
          <div
            class="relative w-72 sm:w-80 md:w-96 bg-blue-100 dark:bg-gray-800 rounded-xl"
          >
            <div class="p-6 sm:p-8">
              <div class="flex items-center justify-start">
                <h2
                  class="text-2xl sm:text-3xl md:text-5xl mr-2"
                  style="color: #536df2"
                >
                  100
                </h2>
                <p
                  class="text-lg sm:text-lg md:text-xl mt-3 sm:mt-4 md:mt-5 text-left text-blue-600"
                >
                  успешных историй
                </p>
              </div>
              <div class="text-left mt-3 sm:mt-4 text-sm md:text-base">
                <p>
                  наши ученики делятся впечатлениями о трансформации после наших
                  курсов
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="content-block mt-10 mb-10 pb-10 relative overflow-hidden sm:mt-20 sm:mb-20 sm:pb-20 bg-blue-100 dark:bg-gray-800 rounded-[90px]"
    >
      <div class="content-block-cnt text-center mt-10 mb-10 sm:mt-20 sm:mb-20">
        <h3 class="mb-4 text-xl md:text-2xl xl:text-3xl">
          What to Expect in the Course
        </h3>
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-screen-xl mx-auto mt-5"
        >
          <div
            class="relative w-72 md:w-80 lg:w-[85%] mx-auto mt-5 rounded-xl flex"
          >
            <div
              class="absolute inset-0 rotate-6 z-10 rounded-xl bg-blue-200 dark:bg-gray-500"
            ></div>
            <div
              class="p-6 sm:p-8 bg-white dark:bg-gray-700 rounded-xl z-20 relative flex flex-col h-full"
            >
              <div class="flex items-center justify-start">
                <img
                  class="w-[80%] mx-auto"
                  src="https://arcanum12th.education/courses/taro/cards/card1.webp"
                  alt="Tarot Card"
                />
              </div>
              <div class="text-left mt-4 text-lg mr-10 flex-grow">
                <p>Characteristics of all 78 Tarot cards</p>
              </div>
              <div
                class="absolute top-0 right-0 p-4 sm:p-6 text-lg sm:text-xl"
                style="color: #516ff6"
              >
                01
              </div>
            </div>
          </div>

          <div
            class="relative w-72 md:w-80 lg:w-[85%] mx-auto mt-5 rounded-xl flex"
          >
            <div
              class="absolute inset-0 rotate-6 z-10 rounded-xl bg-blue-200 dark:bg-gray-500"
            ></div>
            <div
              class="p-6 sm:p-8 bg-white dark:bg-gray-700 rounded-xl z-20 relative flex flex-col h-full"
            >
              <div class="flex items-center justify-start">
                <img
                  class="w-[80%] mx-auto"
                  src="https://arcanum12th.education/courses/taro/cards/card2.webp"
                  alt="Tarot Card"
                />
              </div>
              <div class="text-left mt-4 text-lg mr-10 flex-grow">
                <p>Characteristics of all 78 Tarot cards</p>
              </div>
              <div
                class="absolute top-0 right-0 p-4 sm:p-6 text-lg sm:text-xl"
                style="color: #516ff6"
              >
                02
              </div>
            </div>
          </div>

          <div
            class="relative w-72 md:w-80 lg:w-[85%] mx-auto mt-5 rounded-xl flex"
          >
            <div
              class="absolute inset-0 rotate-6 z-10 rounded-xl bg-blue-200 dark:bg-gray-500"
            ></div>
            <div
              class="p-6 sm:p-8 bg-white dark:bg-gray-700 rounded-xl z-20 relative flex flex-col h-full"
            >
              <div class="flex items-center justify-start">
                <img
                  class="w-[80%] mx-auto"
                  src="https://arcanum12th.education/courses/taro/cards/card3.webp"
                  alt="Tarot Card"
                />
              </div>
              <div class="text-left mt-4 text-lg mr-10 flex-grow">
                <p>Characteristics of all 78 Tarot cards</p>
              </div>
              <div
                class="absolute top-0 right-0 p-4 sm:p-6 text-lg sm:text-xl"
                style="color: #516ff6"
              >
                03
              </div>
            </div>
          </div>

          <div
            class="relative w-72 md:w-80 lg:w-[85%] mx-auto mt-5 rounded-xl flex"
          >
            <div
              class="absolute inset-0 rotate-6 z-10 rounded-xl bg-blue-200 dark:bg-gray-500"
            ></div>
            <div
              class="p-6 sm:p-8 bg-white dark:bg-gray-700 rounded-xl z-20 relative flex flex-col h-full"
            >
              <div class="flex items-center justify-start">
                <img
                  class="w-[80%] mx-auto"
                  src="https://arcanum12th.education/courses/taro/cards/card4.webp"
                  alt="Tarot Card"
                />
              </div>
              <div class="text-left mt-4 text-lg mr-10 flex-grow">
                <p>Characteristics of all 78 Tarot cards</p>
              </div>
              <div
                class="absolute top-0 right-0 p-4 sm:p-6 text-lg sm:text-xl"
                style="color: #516ff6"
              >
                04
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="content-block">
      <div
        class="content-block-cnt xl:max-w-5xl mx-auto text-center mt-10 mb-10 sm:mt-20 sm:mb-20"
      >
        <h3 class="mb-4 text-xl md:text-2xl xl:text-3xl">First Lecture</h3>
        <div class="w-full">
          <iframe
            class="w-full h-[400px] sm:h-[600px]"
            src="https://www.youtube.com/embed/QZvblAgF7fY"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen="allowfullscreen"
          ></iframe>
        </div>
      </div>
    </section>
    <section class="content-block">
      <div
        class="content-block-cnt xl:max-w-5xl mx-auto text-center mt-10 mb-10 sm:mt-20 sm:mb-20"
      >
        <div class="relative w-full max-h-full">
          <div class="flex items-center space-x-4 pt-10 mb-5">
            <h3 class="mb-4 text-xl md:text-2xl xl:text-3xl">Course program</h3>
            <div
              class="flex justify-center items-center h-8 w-9 text-sm bg-white dark:bg-gray-800 rounded shadow"
            >
              <span>6</span>
            </div>
          </div>
          <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
            <div
              class="flex flex-col items-center justify-center mt-3 animate-fade animate-once animate-ease-in-out"
            >
              <div
                class="w-[96%] mx-auto rounded-xl pl-3 pr-3 pt-2 pb-4 bg-white dark:bg-gray-800 h-full"
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
                    <h3 class="text-lg mt-1">
                      Introduction to the Tarot System
                    </h3>
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
                class="w-[96%] mx-auto rounded-xl pl-3 pr-3 pt-2 pb-4 bg-white dark:bg-gray-800 h-full"
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
                class="w-[96%] mx-auto rounded-xl pl-3 pr-3 pt-2 pb-4 bg-white dark:bg-gray-800 h-full"
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
                class="w-[96%] mx-auto rounded-xl pl-3 pr-3 pt-2 pb-4 bg-white dark:bg-gray-800 h-full"
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
                class="w-[96%] mx-auto rounded-xl pl-3 pr-3 pt-2 pb-4 bg-white dark:bg-gray-800 h-full"
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
                class="w-[96%] mx-auto rounded-xl pl-3 pr-3 pt-2 pb-4 bg-white dark:bg-gray-800 h-full"
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
            <!--]-->
          </div>
        </div>
      </div>
    </section>
    <section class="content-block">
      <div
        class="content-block-cnt rounded-2xl bg-blue-100 dark:bg-gray-800 xl:max-w-5xl mx-auto grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2"
      >
        <h3
          class="mb-4 text-xl md:text-2xl xl:text-3xl flex items-center justify-center"
        >
          Course authors
        </h3>
        <div
          class="bg-white dark:bg-gray-800 relative overflow-hidden group rounded-xl p-5"
        >
          <div class="flex items-center gap-4">
            <img
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
    </section>
    <section class="content-block">
      <div
        class="content-block-cnt xl:max-w-5xl mx-auto text-center mt-10 mb-10 sm:mt-20 sm:mb-20"
      >
        <h3 class="mb-4 text-xl md:text-2xl xl:text-3xl">
          Frequently Asked Questions
        </h3>
        <div class="text-gray-500 rounded-xl">
          <div class="mt-3 mb-3 bg-white dark:bg-gray-800">
            <div
              class="flex items-center justify-between px-4 py-3 marker:content-none hover:cursor-pointer rounded-xl"
            >
              <span class="text-base"
                >Where can I view the course schedule and all sessions?</span
              >
              <div
                class="bg-blue-50 dark:bg-gray-900 w-8 h-8 flex items-center justify-center"
              >
                <div class="transition-transform duration-300">
                  <svg
                    fill="#435262"
                    width="12px"
                    height="12px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 330.002 330.002"
                  >
                    <path
                      id="XMLID_226_"
                      d="M233.252,155.997L120.752,6.001c-4.972-6.628-14.372-7.97-21-3c-6.628,4.971-7.971,14.373-3,21
	l105.75,140.997L96.752,306.001c-4.971,6.627-3.627,16.03,3,21c2.698,2.024,5.856,3.001,8.988,3.001
	c4.561,0,9.065-2.072,12.012-6.001l112.5-150.004C237.252,168.664,237.252,161.33,233.252,155.997z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <article class="px-4 pb-4 text-sm mt-2" style="display: none">
              <hr class="pb-3" />
              <p>
                On each course page, you will find the schedule and course
                structure at the bottom, which you can review.
              </p>
            </article>
          </div>
          <div class="mt-3 mb-3 bg-white dark:bg-gray-800">
            <div
              class="flex items-center justify-between px-4 py-3 marker:content-none hover:cursor-pointer rounded-xl"
            >
              <span class="text-base"
                >Why aren't all lessons opening for me at once?</span
              >
              <div
                class="bg-blue-50 dark:bg-gray-900 w-8 h-8 flex items-center justify-center"
              >
                <div class="transition-transform duration-300">
                  <svg
                    fill="#435262"
                    width="12px"
                    height="12px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 330.002 330.002"
                  >
                    <path
                      id="XMLID_226_"
                      d="M233.252,155.997L120.752,6.001c-4.972-6.628-14.372-7.97-21-3c-6.628,4.971-7.971,14.373-3,21
	l105.75,140.997L96.752,306.001c-4.971,6.627-3.627,16.03,3,21c2.698,2.024,5.856,3.001,8.988,3.001
	c4.561,0,9.065-2.072,12.012-6.001l112.5-150.004C237.252,168.664,237.252,161.33,233.252,155.997z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <article class="px-4 pb-4 text-sm mt-2" style="display: none">
              <hr class="pb-3" />
              <p>
                Each course has its own logic and dynamics for opening lessons.
                For better productivity and results, we recommend going through
                the course sequentially, paying attention to each lesson without
                rushing.
              </p>
            </article>
          </div>
          <div class="mt-3 mb-3 bg-white dark:bg-gray-800">
            <div
              class="flex items-center justify-between px-4 py-3 marker:content-none hover:cursor-pointer rounded-xl"
            >
              <span class="text-base"
                >If there are technical issues during the course, who can assist
                me?</span
              >
              <div
                class="bg-blue-50 dark:bg-gray-900 w-8 h-8 flex items-center justify-center"
              >
                <div class="transition-transform duration-300">
                  <svg
                    fill="#435262"
                    width="12px"
                    height="12px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 330.002 330.002"
                  >
                    <path
                      id="XMLID_226_"
                      d="M233.252,155.997L120.752,6.001c-4.972-6.628-14.372-7.97-21-3c-6.628,4.971-7.971,14.373-3,21
	l105.75,140.997L96.752,306.001c-4.971,6.627-3.627,16.03,3,21c2.698,2.024,5.856,3.001,8.988,3.001
	c4.561,0,9.065-2.072,12.012-6.001l112.5-150.004C237.252,168.664,237.252,161.33,233.252,155.997z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <article class="px-4 pb-4 text-sm mt-2" style="display: none">
              <hr class="pb-3" />
              <p>
                Our support center is always ready to assist you. Please reach
                out to us in the 'Support' section, located in the bottom menu
                of the screen, or send your inquiry to the email address
                community@arcanum12th.education
              </p>
            </article>
          </div>
          <div class="mt-3 mb-3 bg-white dark:bg-gray-800">
            <div
              class="flex items-center justify-between px-4 py-3 marker:content-none hover:cursor-pointer rounded-xl"
            >
              <span class="text-base">How do I get access to the course?</span>
              <div
                class="bg-blue-50 dark:bg-gray-900 w-8 h-8 flex items-center justify-center"
              >
                <div class="transition-transform duration-300">
                  <svg
                    fill="#435262"
                    width="12px"
                    height="12px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 330.002 330.002"
                  >
                    <path
                      id="XMLID_226_"
                      d="M233.252,155.997L120.752,6.001c-4.972-6.628-14.372-7.97-21-3c-6.628,4.971-7.971,14.373-3,21
	l105.75,140.997L96.752,306.001c-4.971,6.627-3.627,16.03,3,21c2.698,2.024,5.856,3.001,8.988,3.001
	c4.561,0,9.065-2.072,12.012-6.001l112.5-150.004C237.252,168.664,237.252,161.33,233.252,155.997z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <article class="px-4 pb-4 text-sm mt-2" style="display: none">
              <hr class="pb-3" />
              <p>
                To do this, on the course page, you need to select the
                appropriate stream for you and proceed to payment by clicking on
                the 'Buy' button.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup></script>

<style lang="css" scoped></style>
