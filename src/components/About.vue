<template>
  <div class="flex w-full min-h-screen items-center">
    <div class="flex flex-col-reverse lg:flex-row justify-between">
      <div class="flex flex-col w-full lg:w-1/2">
        <div class="hidden lg:flex lg:flex-row">
          <span class="text-custom-title lg:text-2xl xl:text-3xl w-full"
            >About Me</span
          >
          <hr
            class="border-green-500 my-auto w-full lg:-ml-40 xl:-ml-60 pr-24"
          />
        </div>
        <div class="flex flex-col p-2 lg:p-0">
          <p class="pt-4 text-custom-content w-full text-justify">
            Hello! My name is Danang, My Intrest on Web Developing was Started
            Back Then When I Was Still at Junior High School, Maybe Because I
            Spent a Lot of Time on Internet Caffe Back Then, I Start to Knowing
            and Learn About The Basic Language for Develop a Website Such as
            HTML, CSS, and PHP, When I was Vocational High School Student,
            Majoring on RPL or Well Known as Software Engineering, and I Start
            to Learn About Framework When I Develop My Final Assigment for
            Achiving Bachelor Degree on Computer Information Systems.
          </p>
          <p class="py-2 text-custom-content">
            Here is Few of My Skills and Expertize
          </p>
          <div class="flex justify-between text-green-500">
            <ul class="list-disc px-6">
              <li>
                <span class="text-custom-content">HTML</span>
              </li>
              <li>
                <span class="text-custom-content">Javascript</span>
              </li>
              <li><span class="text-custom-content">PHP</span></li>
              <li><span class="text-custom-content">CSS</span></li>
              <li>
                <span class="text-custom-content">MySQL</span>
              </li>
            </ul>
            <ul class="list-disc">
              <li>
                <span class="text-custom-content">Bootstrap</span>
              </li>
              <li>
                <span class="text-custom-content">TailwindCSS</span>
              </li>
              <li>
                <span class="text-custom-content">Vue JS</span>
              </li>
              <li>
                <span class="text-custom-content">Nuxt JS</span>
              </li>
              <li>
                <span class="text-custom-content">Laravel</span>
              </li>
            </ul>
            <ul class="list-disc">
              <li>
                <span class="text-custom-content">NGINX</span>
              </li>
              <li>
                <span class="text-custom-content">Git & Github</span>
              </li>
              <li>
                <span class="text-custom-content">Linux</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex w-full max-w-md m-auto lg:max-w-sm xl:w-1/2 xl:max-w-lg">
        <div class="">
          <img
            src="@/assets/image/rdanang.jpg"
            alt="rdanang"
            class="
              xl:w-9/12
              mx-auto
              border-r-8 border-b-8 border-green-500
              rounded-2xl
            "
          />
        </div>
      </div>
      <div class="flex flex-row pb-3 lg:hidden lg:pb-0">
        <span class="text-custom-title text-xl md:text-3xl w-3/12">
          About Me
        </span>
        <hr class="border-green-500 my-auto w-9/12" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style></style>
