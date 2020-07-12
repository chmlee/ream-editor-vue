<template>
  <client-only placeholder="Codemirror Loading...">
    <codemirror
      ref="cmEditor"
      :value="code"
      :options="cmOptions"
      @ready="onCmReady"
      @focus="onCmFocus"
      @input="onCmCodeChange"
    />
  </client-only>
</template>

<script>
// import language js
import 'codemirror/mode/javascript/javascript.js'

// import theme style
import 'codemirror/theme/base16-dark.css'

// import more 'codemirror/some-resource...'

export default {
  data () {
    return {
      code: 'const a = 10',
      cmOptions: {
        tabSize: 4,
        mode: 'text/javascript',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true
        // more CodeMirror options...
      }
    }
  },
  methods: {
    onCmReady (cm) {
      console.log('the editor is readied!', cm)
    },
    onCmFocus (cm) {
      console.log('the editor is focused!', cm)
    },
    onCmCodeChange (newCode) {
      console.log('this is new code', newCode)
      this.code = newCode
    }
  },
  computed: {
    codemirror () {
      return this.$refs.cmEditor.codemirror
    }
  },
  mounted () {
    console.log('the current CodeMirror instance object:', this.codemirror)
    // you can use this.codemirror to do something...
  }
}
</script>
