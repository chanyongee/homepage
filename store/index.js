export const state = () => ({
  breadcrumbs: [],
})

export const mutations = {
  setBreadcrumbs(state, list) {
    state.breadcrumbs = list
  },
}
