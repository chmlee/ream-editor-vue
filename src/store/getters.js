import { parseMarkdata } from '@/libs/markdata.js/parser.js'

export default {
  getDefaultInputRaw: (state) => {
    return state.input.raw
  },
  getInput: (state) => {
    return state.input
  },
  getSetting: (state) => {
    return state.setting
  },
  getInputTree: (state) => {
    return parseMarkdata(state.input.raw)
  }
}
