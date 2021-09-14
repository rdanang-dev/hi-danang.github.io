<template>
  <!-- Navbar goes here -->
  <nav
    class="
      fixed
      bottom-0
      left-0
      w-full
      md:sticky md:top-0
      z-40
      md:max-w-7xl md:mx-auto md:pt-1
      bg-black
      md:bg-custom-background
    "
  >
    <div class="flex flex-col-reverse">
      <div class="flex justify-between">
        <!-- Burger Menu -->
        <div class="md:hidden flex items-center">
          <button
            class="bg-black w-10 h-10 relative focus:outline-none"
            @click="open = !open"
          >
            <div
              class="
                block
                w-5
                absolute
                left-1/2
                top-1/2
                transform
                -translate-x-1/2 -translate-y-1/2
              "
            >
              <span
                aria-hidden="true"
                class="
                  bg-white
                  block
                  absolute
                  h-0.5
                  w-5
                  bg-current
                  transform
                  transition
                  duration-500
                  ease-in-out
                "
                :class="{ 'rotate-45': open, ' -translate-y-1.5': !open }"
              />
              <span
                aria-hidden="true"
                class="
                  bg-white
                  block
                  absolute
                  h-0.5
                  w-5
                  bg-current
                  transform
                  transition
                  duration-500
                  ease-in-out
                "
                :class="{ 'opacity-0': open }"
              />
              <span
                aria-hidden="true"
                class="
                  bg-white
                  block
                  absolute
                  h-0.5
                  w-5
                  bg-current
                  transform
                  transition
                  duration-500
                  ease-in-out
                "
                :class="{ '-rotate-45': open, ' translate-y-1.5': !open }"
              />
            </div>
          </button>
        </div>
        <div class="flex">
          <!-- Banner -->
          <div v-scroll-to="{ el: '#home', offset: -50 }">
            <a class="flex items-center py-1 mr-2 md:py-4 md:px-2">
              <img
                src="@/assets/image/mini_logo.jpeg"
                alt="mini_logo"
                class="rounded-full w-10 border-2 border-green-500"
              />
              <span
                class="
                  font-semibold
                  text-gray-300 text-lg                  
                  pl-2
                "
                >RDanang</span
              >
            </a>
          </div>
        </div>
        <!-- Navigation -->
        <div class="hidden md:flex items-center space-x-1">
          <a
            v-scroll-to="{ el: '#home', offset: -50 }"
            href="#"
            class="py-4 px-2 font-semibold"
            :class="posititon == 'home' ? isActive.true : isActive.false"
            @click="posititon = 'home'"
            >Home</a
          >
          <a
            v-scroll-to="'#about'"
            href="#"
            class="py-4 px-2 font-semibold"
            :class="posititon == 'about' ? isActive.true : isActive.false"
            @click="posititon = 'about'"
            >About Me</a
          >
          <a
            v-scroll-to="{ el: '#project', offset: 40 }"
            href="#"
            class="py-4 px-2 font-semibold"
            :class="posititon == 'project' ? isActive.true : isActive.false"
            @click="posititon = 'project'"
            >Latest Project</a
          >
          <a
            v-scroll-to="{ el: '#contact', offset: -40 }"
            href="#"
            class="py-4 px-2 font-semibold"
            :class="posititon == 'contact' ? isActive.true : isActive.false"
            @click="posititon = 'contact'"
            >Contact</a
          >
        </div>
      </div>
      <div class="md:hidden" :class="open ? '' : 'hidden'">
        <div class="grid grid-cols-4 text-white bg-black bg-opacity-95">
          <a
            v-scroll-to="{ el: '#home', offset: -50 }"
            class="flex flex-col justify-center border-b border-gray-700 w-full"
            @click="posititon = 'home'"
          >
            <div class="flex flex-col p-2">
              <font-awesome-icon
                :icon="['fas', 'home']"
                class="fa-lg mx-auto"
                :class="posititon == 'home' ? 'text-green-500' : 'text-white'"
              />
              <span
                class="mx-auto text-sm"
                :class="posititon == 'home' ? isActive.true : isActive.false"
                >Home</span
              >
            </div>
          </a>
          <a
            v-scroll-to="{ el: '#about', offset: 30 }"
            class="flex flex-col justify-center border-b border-gray-700 w-full"
            @click="posititon = 'about'"
          >
            <div class="flex flex-col p-2">
              <font-awesome-icon
                :icon="['fas', 'user-tie']"
                class="fa-lg mx-auto"
                :class="posititon == 'about' ? 'text-green-500' : 'text-white'"
              />
              <span
                class="mx-auto text-sm"
                :class="posititon == 'about' ? isActive.true : isActive.false"
                >About Me</span
              >
            </div>
          </a>
          <a
            v-scroll-to="{ el: '#project', offset: 60 }"
            class="flex flex-col justify-center border-b border-gray-700 w-full"
            @click="posititon = 'project'"
          >
            <div class="flex flex-col p-2">
              <font-awesome-icon
                :icon="['fas', 'code']"
                class="fa-lg mx-auto"
                :class="
                  posititon == 'project' ? 'text-green-500' : 'text-white'
                "
              />
              <span
                class="mx-auto text-sm"
                :class="posititon == 'project' ? isActive.true : isActive.false"
                >Project</span
              >
            </div>
          </a>
          <a
            v-scroll-to="{ el: '#contact' }"
            class="flex flex-col justify-center border-b border-gray-700 w-full"
            @click="posititon = 'contact'"
          >
            <div class="flex flex-col p-2">
              <font-awesome-icon
                :icon="['far', 'envelope']"
                class="fa-lg mx-auto"
                :class="
                  posititon == 'contact' ? 'text-green-500' : 'text-white'
                "
              />
              <span
                class="mx-auto text-sm"
                :class="posititon == 'contact' ? isActive.true : isActive.false"
                >Contact</span
              >
            </div>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        posititon: "home",
        open: false,
        isActive: {
          false: [
            "text-gray-300",
            "hover:text-green-500",
            "transition",
            "duration-300",
          ],
          true: ["text-green-500", "border-b-4", "border-green-500"],
        },
      }
    },
  }
</script>
