<template>
  <div class="flex w-full h-screen min-h-screen item-center">
    <div class="flex flex-col py-32 md:pt-16">
      <span class="text-green-500 text-xl">Hi There, i'm</span>
      <vue-typer
        :text="['Ridho Danang Sanyoto']"
        :repeat="Infinity"
        initial-action="typing"
        :pre-type-delay="70"
        :type-delay="70"
        :pre-erase-delay="2000"
        :erase-delay="250"
        erase-style="backspace"
        :erase-on-complete="false"
        caret-animation="expand"
        class="
            fiveinc:text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            xl:text-8xl xl:py-4 xl:-m-2
          "
      ></vue-typer>
      <span
        class="
          text-custom-content text-3xl
          sm:text-4xl
          md:text-5xl
          xl:text-6xl
          md:pt-3
        "
      >
        I Build Things from Scratch.</span
      >
      <p
        class="
          pt-4
          text-custom-content
          max-w-sm
          sm:max-w-md
          md:max-w-lg
          lg:max-w-xl
          xl:max-w-2xl
          pb-6
          text-justify
        "
      >
        I'm Web Developer from South Tangerang, Indonesia, I'm Currently Focused
        to Improve My Self More on FrontEnd and Backend Framework for Building
        Website from Scratch, such as
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
</template>

<script>
  export default {}
</script>

<style>
  .vue-typer .custom.char.typed {
    color: #009688;
  }
  .vue-typer .custom.caret {
    width: 2px;
    background-color: #3f51b5;
  }
</style>
