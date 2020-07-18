// import { parseMarkdata } from '@/libs/markdata_.js/parser.js'
import { MdFile } from '@/libs/markdata.js/src/markdata.js'

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
    return 1 // parseMarkdata(state.input.raw)
  },
  getMdFile: (state) => {
    const mdFile = new MdFile(state.input.raw)
    return mdFile
  }
}
