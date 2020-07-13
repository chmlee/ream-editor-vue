<template>
  <div class="output-wrapper">
    <pre
      v-if="getOutputComponent === 'rawOutput'" class="output-raw-pre"
    >{{ input.raw }}</pre>
    <component
      v-else
      :is="getOutputComponent"
      :inputTree="getInputTree"
      :inputRaw="input.raw"
      class="output-content-container"
    ></component>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import csvOutput from './OutputMode/csvOutput.vue'
import htmlOutput from './OutputMode/htmlOutput.vue'
import treeOutput from './OutputMode/treeOutput.vue'

export default {
  components: {
    csvOutput,
    htmlOutput,
    treeOutput
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
      'getInputTree'
    ]),
    getOutputComponent () {
      return this.setting.outputMode + 'Output'
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
