export const state = () => ({
  breadcrumbs: [],
  isPhone: false,
  isMobileHeaderOpened: false,
})

export const mutations = {
  setBreadcrumbs(state, list) {
    state.breadcrumbs = list
  },
  setIsPhone(state, val) {
    state.isPhone = val
  },
  setIsMobileHeaderOpened(state, val) {
    state.isMobileHeaderOpened = val
  },
}
