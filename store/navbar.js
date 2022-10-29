export const state = () => ({
    show_sm_navbar: false
  })
  
  export const mutations = {
    change_state (state, value) {
      state.show_sm_navbar = value
    },
  }