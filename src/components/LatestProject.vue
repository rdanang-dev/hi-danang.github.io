<template>
  <div class="flex w-full item-center">
    <div class="py-32">
      <div class="flex flex-row">
        <span class="text-custom-title text-xl md:text-3xl pr-2 min-w-max"
          >Latest Project</span
        >
        <hr class="border-green-500 my-auto w-full" />
      </div>

      <div
        class="flex flex-col w-full"
        v-for="(val, index) in data"
        :key="index"
      >
        <div class="pt-8 relative">
          <div
            class="flex flex-col rounded-t-3xl rounded-b-3xl"
            :class="
              (index + 1) % 2 === 0 ? ['lg:flex-row-reverse'] : ['lg:flex-row']
            "
          >
            <img
              :src="require(`@/assets/image/latestproject/${val.image}`)"
              alt="Wisata Kopi"
              class="w-full lg:w-9/12 rounded-t-3xl"
              :class="
                (index + 1) % 2 === 0
                  ? ['lg:rounded-br-3xl lg:rounded-t-none lg:rounded-tr-3xl']
                  : ['lg:rounded-bl-3xl lg:rounded-t-none lg:rounded-tl-3xl']
              "
            />
            <div
              class="flex flex-col px-3 pt-2 border-dashed border-t border-b border-green-500"
              :class="
                (index + 1) % 2 === 0
                  ? ['rounded-tl-3xl rounded-bl-3xl border-l']
                  : ['rounded-tr-3xl rounded-br-3xl border-r']
              "
            >
              <span class="text-white">{{ val.title }}</span>
              <div
                class="text-justify leading-tight tracking-tighter lg:leading-normal py-2 lg:pt-5 text-custom-content"
              >
                {{ val.desc }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import projectData from "../assets/data/latestproject/latestproject.json"
  export default {
    name: "LatestProject",
    data() {
      return {
        data: projectData.data,
      }
    },
  }
</script>
