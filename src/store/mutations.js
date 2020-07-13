export default {
  TOGGLE_UPDATE_SIGNAL: (state) => {
    state.updateSignal *= -1
  },
  MUTATE_SETTING: (state, setting) => {
    state.setting = setting
  },
  MUTATE_INPUT: (state, input) => {
    state.input.raw = input.raw
  }
}
