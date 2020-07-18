<template>
  <div class="output-wrapper">
    <pre
      v-if="getOutputComponent === 'OutputRaw'" class="output-raw-pre"
    >{{ input.raw }}</pre>
    <component
      v-else
      :is="getOutputComponent"
      :inputTree="getInputTree"
      :inputRaw="input.raw"
      :mdFile="getMdFile"
      class="output-content-container"
    ></component>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import OutputCSV from './OutputCSV.vue'
import OutputHTML from './OutputHTML.vue'
import OutputTree from './OutputTree.vue'
import OutputPDF from './OutputPDF.vue'

export default {
  components: {
    OutputCSV,
    OutputHTML,
    OutputTree,
    OutputPDF
  },
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'input',
      'setting'
    ]),
    ...mapGetters([
      'getInputTree',
      'getMdFile'
    ]),
    getOutputComponent () {
      return 'Output' + this.setting.outputMode
    }
  }
}
</script>

<style>
.output-wrapper {
  background: white;
  height: 100%;
  overflow-y: scroll;
}

.output-content-container {
  background: white;
  height: 100%;
  overflow-y: scroll;
}

.output-raw-pre {
  font-size: 25px;
}
</style>
