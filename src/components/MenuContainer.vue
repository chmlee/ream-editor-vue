<template>
  <div class="main-menu-wrapper">

    <div class="main-menu-col">
      <button
        type="button"
        @click="toggleUpdateSignal"
      >Update Input
      </button>
    </div>

    <div class="main-menu-col">
      <label>Output Mode:</label>
      <select v-model="setting.outputMode" @change="toggleUpdateSignal">
          <option v-for="outputMode in outputModes" v-bind:key="outputMode.value">
            {{ outputMode.text }}
          </option>
      </select>
    </div>

  </div>

</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      setting: {
        outputMode: 'raw'
      },
      outputModes: [
        { text: 'raw', value: 'raw' },
        { text: 'html', value: 'html' },
        { text: 'tree', value: 'tree' },
        { text: 'csv', value: 'csv' }
      ]
    }
  },
  methods: {
    ...mapActions([
      'toggleUpdateSignal',
      'updateSetting'
    ])
  },
  computed: {
    ...mapState([
      'updateSignal'
    ])
  },
  watch: {
    updateSignal () {
      this.updateSetting(this.setting)
    }
  }
}
</script>

<style>
.main-menu-wrapper {
   display: flex;
   width: 100%;
}

.main-menu-col {
  margin: 10px;
  text-align: center;
  font-size: 25px;
}
</style>
