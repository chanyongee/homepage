export const state = () => ({
  breadcrumbs: [],
  isPhone: false,
})

export const mutations = {
  setBreadcrumbs(state, list) {
    state.breadcrumbs = list
  },
  setIsPhone(state, val) {
    state.isPhone = val
  },
}
