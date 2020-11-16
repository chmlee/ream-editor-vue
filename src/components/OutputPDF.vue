<template>
  <div>
    <div>
      <button type="button" @click="downloadPDF">Download PDF</button>
     (not working)
    </div>
    <div>
      {{ input.raw }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import jsPDF from 'jspdf'

export default {
  computed: {
    ...mapState([
      'input'
    ])
  },
  methods: {
    downloadPDF () {
      console.log(2)
      const JsPDF = jsPDF
      const pdfName = 'demo.pdf'
      var doc = new JsPDF()
      doc.text(this.input.raw, 10, 10)
      doc.save(pdfName)
      console.log(1)
    }
  }
}
</script>
