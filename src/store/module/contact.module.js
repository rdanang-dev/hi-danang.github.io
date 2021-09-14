import axios from "axios"

export const state = {}

export const getters = {}

export const mutations = {}

export const actions = {
  async sentMail({ payload }) {
    try {
      await axios.post("https://formsubmit.co/rdanang.dev@gmail.com", payload)
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
}

const contact = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}

export default contact
