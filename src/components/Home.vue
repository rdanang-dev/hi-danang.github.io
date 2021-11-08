<template>
  <div class="flex w-full min-h-screen item-center">
    <div class="flex flex-col py-32">
      <span class="text-green-500 text-xl">Hi There, i'm</span>
      <vue-typer
        :text="['Ridho Danang Sanyoto']"
        :repeat="Infinity"
        initial-action="typing"
        :pre-type-delay="2000"
        :type-delay="100"
        :pre-erase-delay="3000"
        :erase-delay="90"
        erase-style="backspace"
        :erase-on-complete="false"
        caret-animation="expand"
        class="                                 
            text-3xl                    
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            xl:text-8xl xl:py-4 xl:-m-2
            font-medium
          "
      ></vue-typer>
      <!-- <div class="w-full border border-red-400"> -->
      <div class="w-full">
        <span
          class="
          text-custom-content text-xl                
          sm:text-4xl
          md:text-5xl
          xl:text-6xl
          md:pt-3
        "
        >
          I Build Things from Scratch.</span
        >
        <div class="pt-4 pb-6">
          <p
            class="text-custom-content md:w-full md:max-w-md md:text-justify break-words lg:text-lg"
          >
            I'm Web Developer from South Tangerang, Indonesia, I'm currently
            focused on tech for building web-based app from scratch, such as
            <a
              href="https://laravel.com/"
              target="_blank"
              class="text-green-500 hover:underline"
              >Laravel</a
            >,
            <a
              target="_blank"
              class="text-green-500 hover:underline"
              href="https://vuejs.org/"
              >Vue JS</a
            >, and
            <a
              target="_blank"
              class="text-green-500 hover:underline"
              href="https://tailwindcss.com/"
              >TailwindCSS</a
            >.
          </p>
        </div>
        <a
          v-scroll-to="{ el: '#contact', offset: -40 }"
          href="#"
          class="
          border border-green-500
          text-green-500
          p-3
          max-w-max
          hover:border-green-300 hover:text-green-300
        "
        >
          Get in Touch
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.vue-typer .custom.char.typed {
  color: #fff;
}
.vue-typer .custom.caret {
  width: 5px;
  background-color: #10b981;
}
</style>
