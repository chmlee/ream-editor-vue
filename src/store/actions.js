export default {
  toggleUpdateSignal: ({ commit, state }) => {
    console.log('toggle update signal in Actions')
    commit('TOGGLE_UPDATE_SIGNAL')
  },
  updateSetting: ({ commit, state }, setting) => {
    commit('MUTATE_SETTING', setting)
  },
  updateInput: ({ commit, state }, input) => {
    commit('MUTATE_INPUT', input)
  },
  importDemo: ({ commit, state }, fileName) => {
    commit('MUTATE_DEMO', fileName)
  }
}
