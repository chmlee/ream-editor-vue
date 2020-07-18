import demo from '@/assets/demo/demo.js'

export default {
  TOGGLE_UPDATE_SIGNAL: (state) => {
    state.updateSignal *= -1
  },
  MUTATE_SETTING: (state, setting) => {
    state.setting = setting
  },
  MUTATE_INPUT: (state, input) => {
    state.input.raw = input.raw
  },
  MUTATE_DEMO: (state, fileName) => {
    if (fileName === 'Clear Demo') {
      state.input.raw = '# Placeholder'
    } else {
      const demoName = fileName.split('.')[0]
      state.input.raw = demo[demoName]
    }
  }
}
