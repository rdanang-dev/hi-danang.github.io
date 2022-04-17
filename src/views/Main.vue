<template>
  <div class="leading-normal tracking-normal font-mono">
    <div class="flex flex-wrap">
      <div class="w-full bg-custom-background min-h-full">
        <Navbar />
        <div class="container mx-auto px-4 md:px-10 lg:px-16">
          <div id="home">
            <Home />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="project">
            <latest-project />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Contact from '../components/Contact.vue';
import LatestProject from '../components/LatestProject.vue';
export default {
  name: 'Main',
  components: { Navbar, Home, About, Contact, LatestProject },
};
</script>

<style>
body {
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 10px;
}
body::-webkit-scrollbar {
  width: 8px; /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
  background: #09182f; /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background-color: rgba(16, 185, 129, 0.8); /* color of the scroll thumb */
  border-radius: 8px; /* roundness of the scroll thumb */
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  height: 10px;
}

.font-mono .text-8xl {
  word-spacing: -0.4ch;
}
</style>
