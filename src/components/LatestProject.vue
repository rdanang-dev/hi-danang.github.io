<template>
  <div class="flex w-full item-center">
    <div class="py-32 flex flex-col">
      <!-- heading -->
      <div class="flex flex-row">
        <span class="text-custom-title text-xl md:text-3xl pr-2 min-w-max"
          >Projects</span
        >
        <hr class="border-green-500 my-auto w-full" />
      </div>

      <!-- some desc -->
      <div class="text-lg text-custom-title pt-5 md:text-2xl">
        <span
          >Here is some project that i do, you can also check the other on my
        </span>
        <a
          href="https://github.com/rdanang-dev"
          target="_blank"
          class="text-green-500 hover:underline"
          >github</a
        >
        <span> !</span>
      </div>

      <!-- Projects -->
      <div
        class="pt-8 flex flex-col rounded-t-3xl rounded-b-3xl"
        :class="
          (index + 1) % 2 === 0 ? ['lg:flex-row-reverse'] : ['lg:flex-row']
        "
        v-for="(value, index) in data"
        :key="index"
      >
        <img
          :src="require(`@/assets/image/projects/${value.image}`)"
          class="w-full h-full lg:w-9/12 relative rounded-t-3xl border border-green-500"
          :class="
            (index + 1) % 2 === 0
              ? ['lg:rounded-br-3xl lg:rounded-t-none lg:rounded-tr-3xl']
              : ['lg:rounded-bl-3xl lg:rounded-t-none lg:rounded-tl-3xl']
          "
          @click="redirect(value.links ? value.links : value.demo)"
        />
        <div
          class="flex flex-col px-3 pt-2 border-dashed lg:border-t border-b border-l border-r rounded-bl-3xl rounded-br-3xl border-green-500 relative"
          :class="
            (index + 1) % 2 === 0
              ? [
                  'lg:border-l lg:rounded-tl-3xl lg:rounded-bl-3xl lg:rounded-br-none lg:border-r-0',
                ]
              : [
                  'lg:border-r lg:rounded-tr-3xl lg:rounded-br-3xl lg:rounded-bl-none lg:border-l-0',
                ]
          "
        >
          <span class="text-custom-title text-2xl">{{ value.title }}</span>
          <div
            class="text-justify leading-tight tracking-tighter lg:leading-normal py-2 lg:pt-5 text-custom-content"
          >
            <p>{{ value.desc }}</p>
            <div class="space-x-1 space-y-1 max-w-64 pb-14 lg:pb-0">
              <span class="block py-2">Tags:</span>
              <span
                v-for="tag in value.tags"
                :key="tag"
                class="inline-block border border-dotted border-green-500 tracking-normal px-2"
                >{{ tag }}</span
              >
            </div>
          </div>
          <div
            class="flex justify-end p-2 absolute bottom-0 right-2 space-x-2 text-green-500"
          >
            <a :href="value.links" target="_blank" v-if="value.links">
              <font-awesome-icon
                :icon="['fas', 'external-link-square-alt']"
                class="fa-2x"
              />
            </a>
            <a :href="value.frontend" target="_blank" v-if="value.frontend">
              <font-awesome-icon
                :icon="['fab', 'github-square']"
                class="fa-2x"
              />
            </a>
            <a :href="value.backend" target="_blank" v-if="value.backend">
              <font-awesome-icon
                :icon="['fab', 'github-square']"
                class="fa-2x"
              />
            </a>
            <a :href="value.demo" target="_blank" v-if="value.demo">
              <font-awesome-icon
                :icon="['fab', 'youtube-square']"
                class="fa-2x"
              />
            </a>
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
    methods: {
      redirect(value, target = "_blank") {
        // console.log(value, target)
        window.open = (value, target)
      },
    },
  }
</script>
