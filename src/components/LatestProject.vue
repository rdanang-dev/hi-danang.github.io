<template>
  <div class="flex w-full item-center">
    <div class="py-32">
      <div class="flex flex-row">
        <span class="text-custom-title text-xl md:text-3xl w-52 md:w-72"
          >Latest Project</span
        >
        <hr class="border-green-500 my-auto w-full" />
      </div>

      <!-- project1 -->
      <div class="flex flex-col w-full">
        <div class="pt-8 relative">
          <div class="max-w-full relative">
            <img
              src="@/assets/image/latestproject/wisatakopi.png"
              alt="Wisata Kopi"
              class="w-full lg:w-9/12 h-full rounded-3xl object-contain"
            />
            <div
              class="
                absolute
                top-0
                rounded-3xl
                bg-custom-background bg-opacity-90
                lg:bg-custom-background lg:bg-opacity-40
                h-full
                w-full
              "
            >
              <div class="lg:hidden p-10">
                <span class="text-2xl text-custom-title">{{
                  projectData.title[0]
                }}</span>
                <div class="text-custom-content py-2">
                  {{ projectData.desc[0] }}
                  <div class="flex flex-row-reverse text-xs text-green-500">
                    <span class="rounded-full p-2 border border-green-500"
                      >TailwindCSS</span
                    >
                    <span class="rounded-full p-2 border border-green-500 mx-1"
                      >VueJS</span
                    >
                    <span class="rounded-full p-2 border border-green-500"
                      >Laravel</span
                    >
                  </div>
                </div>
                <div class="absolute bottom-1 right-2">
                  <div class="flex text-xs text-green-500">
                    <a
                      href="https://github.com/rdanang-dev/vue-wiko-pos"
                      target="_blank"
                      class="flex hover:text-green-300"
                    >
                      <fa-icon
                        :icon="['fab', 'github-square']"
                        class="text-3xl"
                      />
                      <span class="my-auto px-1">FrontEnd</span>
                    </a>
                    <a
                      href="https://github.com/rdanang-dev/laravel-wiko-pos"
                      target="_blank"
                      class="flex px-1 hover:text-green-300"
                    >
                      <fa-icon
                        :icon="['fab', 'github-square']"
                        class="text-3xl"
                      />
                      <span class="my-auto px-1">BackEnd</span>
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=4gZuyLVo_7A"
                      target="_blank"
                      class="flex hover:text-green-300"
                    >
                      <fa-icon
                        :icon="['fab', 'youtube-square']"
                        class="text-3xl"
                      />
                      <span class="my-auto px-1">Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="hidden lg:flex">
            <span
              class="
                absolute
                right-0
                top-0
                text-2xl text-custom-title
                pr-2
                pt-10
              "
              >{{ projectData.title[0] }}</span
            >
            <div
              class="
                absolute
                top-20
                right-0
                max-w-md
                bg-black
                opacity-80
                p-2
                shadow-2xl
                rounded-md
              "
            >
              <p class="text-custom-content h-48">{{ projectData.desc[0] }}</p>
              <div class="absolute bottom-1 right-1">
                <div class="flex flex-row-reverse text-xs text-green-500">
                  <span class="rounded-full p-2 border border-green-500"
                    >TailwindCSS</span
                  >
                  <span class="rounded-full p-2 border border-green-500 mx-1"
                    >VueJS</span
                  >
                  <span class="rounded-full p-2 border border-green-500"
                    >Laravel</span
                  >
                </div>
              </div>
            </div>
            <div class="absolute bottom-0 right-0">
              <div class="flex text-xs text-green-500">
                <a
                  href="https://github.com/rdanang-dev/vue-wiko-pos"
                  target="_blank"
                  class="flex hover:text-green-300"
                >
                  <fa-icon :icon="['fab', 'github-square']" class="text-3xl" />
                  <span class="my-auto px-1">FrontEnd</span>
                </a>
                <a
                  href="https://github.com/rdanang-dev/laravel-wiko-pos"
                  target="_blank"
                  class="flex px-1 hover:text-green-300"
                >
                  <fa-icon :icon="['fab', 'github-square']" class="text-3xl" />
                  <span class="my-auto px-1">BackEnd</span>
                </a>
                <a
                  href="https://www.youtube.com/watch?v=4gZuyLVo_7A"
                  target="_blank"
                  class="flex hover:text-green-300"
                >
                  <fa-icon :icon="['fab', 'youtube-square']" class="text-3xl" />
                  <span class="my-auto px-1">Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- project2 -->
      <div class="flex flex-col w-full my-10">
        <div class="pt-8 relative">
          <div class="flex flex-row-reverse max-w-full relative">
            <img
              src="@/assets/image/latestproject/wisatakopi.png"
              alt="Wisata Kopi"
              class="w-full lg:w-9/12 h-full rounded-3xl object-contain"
            />
            <div
              class="
                absolute
                top-0
                rounded-3xl
                bg-custom-background bg-opacity-90
                lg:bg-custom-background lg:bg-opacity-40
                h-full
                w-full
              "
            >
              <div class="lg:hidden p-10">
                <span class="text-2xl text-custom-title">{{
                  projectData.title[1]
                }}</span>
                <div class="text-custom-content py-2">
                  {{ projectData.desc[1] }}
                  <div class="flex flex-row-reverse text-xs text-green-500">
                    <span class="rounded-full p-2 border border-green-500"
                      >TailwindCSS</span
                    >
                    <span class="rounded-full p-2 border border-green-500 mx-1"
                      >VueJS</span
                    >
                    <span class="rounded-full p-2 border border-green-500"
                      >Laravel</span
                    >
                  </div>
                </div>
                <div class="absolute bottom-1 right-2">
                  <div class="flex text-xs text-green-500">
                    <a
                      href="https://github.com/rdanang-dev/vue-wiko-pos"
                      target="_blank"
                      class="flex hover:text-green-300"
                    >
                      <fa-icon
                        :icon="['fab', 'github-square']"
                        class="text-3xl"
                      />
                      <span class="my-auto px-1">FrontEnd</span>
                    </a>
                    <a
                      href="https://github.com/rdanang-dev/laravel-wiko-pos"
                      target="_blank"
                      class="flex px-1 hover:text-green-300"
                    >
                      <fa-icon
                        :icon="['fab', 'github-square']"
                        class="text-3xl"
                      />
                      <span class="my-auto px-1">BackEnd</span>
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=4gZuyLVo_7A"
                      target="_blank"
                      class="flex hover:text-green-300"
                    >
                      <fa-icon
                        :icon="['fab', 'youtube-square']"
                        class="text-3xl"
                      />
                      <span class="my-auto px-1">Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="hidden lg:flex">
            <span
              class="
                absolute
                left-0
                top-0
                text-2xl text-custom-title
                pr-2
                pt-10
              "
              >{{ projectData.title[1] }}</span
            >
            <div
              class="
                absolute
                top-20
                left-0
                max-w-md
                bg-black
                opacity-80
                p-2
                shadow-2xl
                rounded-md
              "
            >
              <p class="text-custom-content max-w-md h-48">
                {{ projectData.desc[1] }}
                <br />
                <br />
                Inspired by
                <a
                  href="https://apps.apple.com/us/app/finger-battle/id424405825"
                  target="_blank"
                  class="text-green-500 hover:underline"
                  >FingerBattle</a
                >
                on Appstore by Rafael Rozendaal
              </p>
              <div class="absolute bottom-1 left-1">
                <div class="flex flex-row-reverse text-xs text-green-500">
                  <span class="rounded-full p-2 border border-green-500"
                    >TailwindCSS</span
                  >
                  <span class="rounded-full p-2 border border-green-500 mx-1"
                    >VueJS</span
                  >
                </div>
              </div>
            </div>
            <div class="absolute bottom-0 left-0">
              <div class="flex text-xs text-green-500">
                <a
                  href="https://github.com/rdanang-dev/vue-wiko-pos"
                  target="_blank"
                  class="flex hover:text-green-300"
                >
                  <fa-icon :icon="['fab', 'github-square']" class="text-3xl" />
                  <span class="my-auto px-1">Source Code</span>
                </a>
                <a
                  href="https://www.youtube.com/watch?v=4gZuyLVo_7A"
                  target="_blank"
                  class="flex hover:text-green-300"
                >
                  <fa-icon :icon="['fab', 'youtube-square']" class="text-3xl" />
                  <span class="my-auto px-1">Try Me!</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- project3 -->
      <div class="flex flex-col w-full">
        <div class="pt-8 relative">
          <div class="max-w-full relative">
            <img
              src="@/assets/image/latestproject/wisatakopi.png"
              alt="Wisata Kopi"
              class="w-full lg:w-9/12 h-full rounded-3xl object-contain"
            />
            <div
              class="
                absolute
                top-0
                rounded-3xl
                bg-custom-background bg-opacity-90
                lg:bg-custom-background lg:bg-opacity-40
                h-full
                w-full
              "
            >
              <div class="lg:hidden p-10">
                <span class="text-2xl text-custom-title"
                  >Wisata Kopi Point of Sales</span
                >
                <div class="text-custom-content py-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Consequatur in asperiores sint ullam fugit nesciunt inventore
                  dolore consequuntur reprehenderit, reiciendis est labore cum
                  iure nemo, minus aut, architecto rem voluptatum?
                  <div class="flex flex-row-reverse text-xs text-green-500">
                    <span class="rounded-full p-2 border border-green-500"
                      >TailwindCSS</span
                    >
                    <span class="rounded-full p-2 border border-green-500 mx-1"
                      >VueJS</span
                    >
                    <span class="rounded-full p-2 border border-green-500"
                      >Laravel</span
                    >
                  </div>
                </div>
                <div class="absolute bottom-1 right-2">
                  <div class="flex text-xs text-green-500">
                    <a
                      href="https://github.com/rdanang-dev/vue-wiko-pos"
                      target="_blank"
                      class="flex hover:text-green-300"
                    >
                      <fa-icon
                        :icon="['fab', 'github-square']"
                        class="text-3xl"
                      />
                      <span class="my-auto px-1">FrontEnd</span>
                    </a>
                    <a
                      href="https://github.com/rdanang-dev/laravel-wiko-pos"
                      target="_blank"
                      class="flex px-1 hover:text-green-300"
                    >
                      <fa-icon
                        :icon="['fab', 'github-square']"
                        class="text-3xl"
                      />
                      <span class="my-auto px-1">BackEnd</span>
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=4gZuyLVo_7A"
                      target="_blank"
                      class="flex hover:text-green-300"
                    >
                      <fa-icon
                        :icon="['fab', 'youtube-square']"
                        class="text-3xl"
                      />
                      <span class="my-auto px-1">Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="hidden lg:flex">
            <span
              class="
                absolute
                right-0
                top-0
                text-2xl text-custom-title
                pr-2
                pt-10
              "
              >Wisata Kopi Point of Sales</span
            >
            <div
              class="
                absolute
                top-20
                right-0
                max-w-md
                bg-black
                opacity-80
                p-2
                shadow-2xl
                rounded-md
              "
            >
              <p class="text-custom-content h-48">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequatur in asperiores sint ullam fugit nesciunt inventore
                dolore consequuntur reprehenderit, reiciendis est labore cum
                iure nemo, minus aut, architecto rem voluptatum?
              </p>
              <div class="absolute bottom-1 right-1">
                <div class="flex flex-row-reverse text-xs text-green-500">
                  <span class="rounded-full p-2 border border-green-500"
                    >TailwindCSS</span
                  >
                  <span class="rounded-full p-2 border border-green-500 mx-1"
                    >VueJS</span
                  >
                  <span class="rounded-full p-2 border border-green-500"
                    >Laravel</span
                  >
                </div>
              </div>
            </div>
            <div class="absolute bottom-0 right-0">
              <div class="flex text-xs text-green-500">
                <a
                  href="https://github.com/rdanang-dev/vue-wiko-pos"
                  target="_blank"
                  class="flex hover:text-green-300"
                >
                  <fa-icon :icon="['fab', 'github-square']" class="text-3xl" />
                  <span class="my-auto px-1">FrontEnd</span>
                </a>
                <a
                  href="https://github.com/rdanang-dev/laravel-wiko-pos"
                  target="_blank"
                  class="flex px-1 hover:text-green-300"
                >
                  <fa-icon :icon="['fab', 'github-square']" class="text-3xl" />
                  <span class="my-auto px-1">BackEnd</span>
                </a>
                <a
                  href="https://www.youtube.com/watch?v=4gZuyLVo_7A"
                  target="_blank"
                  class="flex hover:text-green-300"
                >
                  <fa-icon :icon="['fab', 'youtube-square']" class="text-3xl" />
                  <span class="my-auto px-1">Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        projectData: {
          title: ["Wisata Kopi Point of Sales", "The Artemis"],
          desc: [
            "Point of Sales for Wista Kopi, app for managing transaction data, products, print invoice, and see the shop Income.",
            "Exciting and addictive game for 2 players, Battle colors, taping for your life!, defeat opponent only with tap!",
          ],
          tech: {
            title: ["VueJS", "TailwindCSS", "Laravel"],
            links: [
              "https://vuejs.org/",
              "https://tailwindcss.com/",
              "https://laravel.com/",
            ],
          },
        },
      }
    },
  }
</script>

<style></style>
