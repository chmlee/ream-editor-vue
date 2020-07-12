<template>
  <b-container fluid class="raw-editor-container">
    <h2>Raw text:</h2>
    <button @click="update" class="btn btn-primary">Update</button>
    <b-form-textarea
      id="raw-text-area"
      placeholder="Enter something..."
      no-auto-shrink
      rows="50"
      v-model="rawText"
      v-on:keyup.ctrl="update"
    ></b-form-textarea>
  </b-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import exampleRawText from '@/data/LowCountry'

export default {
  data () {
    return {
      rawText: ''
    }
  },
  mounted () {
    this.rawText = exampleRawText.text
  },
  computed: {
    ...mapState([
      'updatedRawText'
    ])
  },
  methods: {
    ...mapActions([
      'updateRawText'
    ]),
    update () {
      console.log(1)
      this.updateRawText(this.rawText)
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
