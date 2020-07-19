import { MdFile } from '@/libs/markdata.js/src/markdata.js'
import { jsPDF as JsPDF } from 'jspdf'
// import { demo } from '@/assets/demo/demo.js'

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
  },
  getPDF: (state) => {
    const doc = new JsPDF()
    doc.text('Hello Word!', 10, 10)
    doc.save('a4.pdf')
    return doc
  }
  // getDemo: (fileNameWithExtension) => {
  //   const fileName = fileNameWithExtension.split('.')[0]
  //   return demo[fileName]
  // }
}
