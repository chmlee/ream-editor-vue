<template>
  <div>
    <div v-html="html">
    </div>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  filters: {
    marked: marked
  },
  props: [
    'inputRaw'
  ],
  computed: {
    html: function () {
      return marked(this.inputRaw)
    }
  }
}
</script>
