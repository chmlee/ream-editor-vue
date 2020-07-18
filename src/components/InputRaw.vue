<template>
  <div class="raw-input-container" @keydown.ctrl.enter="toggleUpdateSignal">
    <codemirror v-model="input.raw" :options="cmOptions" @click="test"/>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

import 'prismjs'
import 'prismjs/themes/prism.css'
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/markdown/markdown.js'
import 'codemirror/keymap/vim'

export default {
  components: {
    codemirror
  },
  data () {
    return {
      cmOptions: {
        // keyMap: 'vim'
        tabSize: 2,
        mode: 'text/markdown',
        lineNumbers: true,
        line: true
      }
    }
  },
  computed: {
    ...mapGetters([
      'getDefaultInputRaw'
    ]),
    ...mapState([
      'updateSignal',
      'input'
    ])
  },
  methods: {
    ...mapActions([
      'toggleUpdateSignal',
      'updateInput'
    ]),
    test () {
      alert('test')
    }
  },
  watch: {
    updateSignal () {
      this.updateInput(this.input)
    }
  }
}
</script>

<style>
.raw-input-container {
  position: relative;
  height: 100vh;
}

.vue-codemirror {
  font-family: Arial, monospace;
  position: relative;
  height: 80px;
}

.CodeMirror {
    border: 1px solid #eee;
    height: 100vh;
    max-height: 100vh;
}

.CodeMirror-scroll {
    height: auto;
    height: 90vh;
    max-height: 90vh;
}

</style>
