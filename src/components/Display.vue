<template>
  <b-container fluid class="display-container">
    <h2>Ouput:</h2>
    <b-form-textarea
      id="display-tree"
      placeholder="Display"
      no-auto-shrink
      rows="50"
      v-model="tree"
    ></b-form-textarea>
  </b-container>
</template>

<script>
import { mapState } from 'vuex'
import { parseMarkdata } from '@/libs/markdata.js/parser'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'updatedRawText'
    ]),
    tree () {
      return 1
    }
  },
  methods: {
    generateTree (rawText) {
      return parseMarkdata(rawText)
    }
  }
}
</script>

<style scoped>
h2 {
  font-size: 24px;
  float: left;
}
</style>
