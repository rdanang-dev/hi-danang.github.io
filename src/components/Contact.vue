<template>
  <div class="flex w-full min-h-screen items-center justify-center">
    <div class="flex flex-col w-full">
      <div class="flex flex-row">
        <span
          class="text-custom-title text-xl md:text-3xl pr-2 bg-custom-background"
          >Contact</span
        >
        <hr class="border-green-500 my-auto w-full" />
      </div>
      <div class="flex flex-row">
        <div class="flex flex-col w-full pt-6 px-2">
          <form @submit.prevent="onSubmit">
            <div class="flex flex-row">
              <div class="pr-2 w-1/2">
                <label
                  class="block mb-2 text-sm font-bold text-custom-content"
                  for="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  v-model="formBind.name"
                  name="name"
                  class="
                  w-full
                  px-3
                  py-2
                  text-sm
                  leading-tight
                  text-gray-700
                  border
                  rounded
                  shadow
                  appearance-none
                  focus:outline-none focus:shadow-outline
                "
                  type="text"
                  placeholder="Name"
                />
                <div class="relative h-5">
                  <span
                    v-if="errors.data && errors.data.name"
                    class="text-sm text-red-500 absolute top-1 left-0"
                  >
                    {{ errors.data.name }}
                  </span>
                </div>
              </div>
              <div class="pl-2 w-1/2">
                <label
                  class="block mb-2 text-sm font-bold text-custom-content"
                  for="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  v-model="formBind.email"
                  name="email"
                  class="
                  w-full
                  px-3
                  py-2
                  text-sm
                  leading-tight
                  text-gray-700
                  border
                  rounded
                  shadow
                  appearance-none
                  focus:outline-none focus:shadow-outline
                "
                  type="text"
                  placeholder="Name@Doman.Tld"
                />
                <div class="relative h-5">
                  <span
                    v-if="errors.data && errors.data.email"
                    class="text-sm text-red-500 absolute top-1 left-0"
                  >
                    {{ errors.data.email }}
                  </span>
                </div>
              </div>
            </div>
            <div class="py-3">
              <label
                class="block mb-2 text-sm font-bold text-custom-content"
                for="subject"
              >
                Subject
              </label>
              <input
                id="subject"
                v-model="formBind.subject"
                name="_subject"
                class="
                w-full
                px-3
                py-2
                text-sm
                leading-tight
                text-gray-700
                border
                rounded
                shadow
                appearance-none
                focus:outline-none focus:shadow-outline
              "
                type="text"
                placeholder="Subject"
              />
              <div class="relative h-5">
                <span
                  v-if="errors.data && errors.data.subject"
                  class="text-sm text-red-500 absolute top-1 left-0"
                >
                  {{ errors.data.subject }}
                </span>
              </div>
            </div>
            <div class="pb-6">
              <label
                class="block mb-2 text-sm font-bold text-custom-content"
                for="content"
              >
                Content
              </label>
              <div class="relative">
                <textarea
                  id="content"
                  v-model="formBind.content"
                  name="message"
                  maxlength="300"
                  rows="8"
                  class="
                  w-full
                  px-3
                  py-2
                  text-sm
                  leading-tight
                  text-gray-700
                  border
                  rounded
                  shadow
                  appearance-none
                  focus:outline-none focus:shadow-outline
                "
                  placeholder="Leave your massage here.."
                />
                <span
                  class="
                  absolute
                  bottom-8
                  right-3
                  bg-green-500
                  p-1
                  rounded-lg
                  text-custom-title
                "
                  >{{ 300 - formBind.content.length }}</span
                >
                <div class="relative h-5">
                  <span
                    v-if="errors.data && errors.data.content"
                    class="text-sm text-red-500 absolute top-0 left-0"
                  >
                    {{ errors.data.content }}
                  </span>
                </div>
              </div>
              <div class="flex flex-row justify-between mt-2">
                <button
                  type="submit"
                  class="
                  border border-green-500
                  text-green-500
                  p-3
                  max-w-max
                  hover:border-green-300 hover:text-green-300
                "
                >
                  Submit!
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="flex flex-col mt-14 pl-2 space-y-2">
          <a href="https://github.com/rdanang-dev" target="blank">
            <font-awesome-icon
              :icon="['fab', 'github-square']"
              class="fa-3x"
              style="color: #181717;"
            />
          </a>
          <a href="https://www.instagram.com/ikan_gondrong" target="blank">
            <font-awesome-icon
              :icon="['fab', 'instagram-square']"
              class="fa-3x"
              style="color: #E4405F;"
            />
          </a>
          <a
            href="https://wa.me/+6285718530636?text=Hallo%20Danang%2C%20I%20liked%20to%20use%20your%20service%2C%20please%20contact%20me%20at%20%2E%2E%2E%2E%2E"
            target="blank"
          >
            <font-awesome-icon
              :icon="['fab', 'whatsapp-square']"
              class="fa-3x"
              style="color: #25D366;"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/ridho-danang-sanyoto"
            target="blank"
          >
            <font-awesome-icon
              :icon="['fab', 'linkedin']"
              class="fa-3x"
              style="color: #0A66C2;"
            />
          </a>
          <a href="mailto:rdanang.dev@gmail.com">
            <font-awesome-icon
              :icon="['fas', 'envelope-square']"
              class="fa-3x"
              style="color: #EA4335;"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formBind: {
        name: "",
        email: "",
        subject: "",
        content: "",
      },
      errors: {
        data: [],
      },
    }
  },
  methods: {
    async onSubmit() {
      this.validate()
      if (Object.keys(this.errors.data).length !== 0) {
        this.$toasted.error("Oops, Something Went Wrong!", {
          duration: 1500,
          position: "bottom-right",
        })
      } else {
        await this.submitForm()
        this.formBind = {}
        this.formBind.content = ""
      }
    },

    validate() {
      this.errors.data = {}
      if (this.formBind.name === "") {
        this.errors.data.name = "Name field is required!"
      }
      if (this.formBind.email === "") {
        this.errors.data.email = "Email field is required!"
      } else {
        const validate = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          this.formBind.email.toLowerCase()
        )
        if (!validate) {
          this.errors.data.email = "Incorrect email format!"
        }
      }
      if (this.formBind.subject === "") {
        this.errors.data.subject = "Subject field is required!"
      }
      if (this.formBind.content === "") {
        this.errors.data.content = "Content field is required!"
      }
    },

    async submitForm() {
      const formData = new FormData()
      for (const key in this.formBind) {
        if (this.formBind[key]) {
          formData.append(key, this.formBind[key])
        }
      }
      formData.append("_next", "/#content")
      formData.append("_captcha", false)
      await this.sentMail(formData)
    },

    async sentMail(payload) {
      try {
        await this.axios.post(
          "https://formsubmit.co/rdanang.dev@gmail.com",
          payload
        )
        this.$toasted.success("Message Sent!", {
          duration: 1500,
          position: "bottom-right",
        })
      } catch (error) {
        console.log(error)
        this.$toasted.error("Oops, Something Went Wrong!", {
          duration: 1500,
          position: "bottom-right",
        })
      }
    },
  },
}
</script>

<style scoped>
.fa-3x {
  background-image: linear-gradient(
    to bottom,
    transparent 10%,
    white 20%,
    white 93%,
    transparent 1%
  );
  background-size: 83%;
  background-position: 60% 0;
  background-repeat: no-repeat;
}
</style>
