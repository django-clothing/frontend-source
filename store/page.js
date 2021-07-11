export const state = () => ({
  isNavigation: false
})

export const mutations = {
  toggleNav (state) {
    state.isNavigation = !state.isNavigation
  },
  hideNav (state) {
    state.isNavigation = false
  }
}
