<template>
  <div class="home-container">
    <h1>Markdata Editor</h1>

    <b-container fluid class="bv-example-row">
      <b-row>

        <b-col class="col-md-6 vh-80">
          <Editor />
        </b-col>

        <b-col class="col-md-6">
          <Display />
        </b-col>

      </b-row>
    </b-container>

  </div>
</template>

<script>
import Editor from '@/components/Editor.vue'
import Display from '@/components/Display.vue'

export default {
  name: 'Home',
  components: {
    Editor,
    Display
  }
}
</script>

<style>
</style>
