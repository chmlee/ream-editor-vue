<template>
  <nav class="navbar">
    <ul class="navbar-nav">

      <li class="nav-item">
        <button
          type="button"
          class="update"
          title="Shortcut: Ctrl+Enter"
          @click="toggleUpdateSignal"
        >Update
        </button>
      </li>

      <li class="nav-item-gap">
      </li>

      <li>
        Demo:
        <select v-model="demo" @click="updateDemo">
          <option v-for="demo in demos" v-bind:key="demo.text">
            {{ demo.text }}
          </option>
        </select>
      </li>

      <li class="nav-item-gap">
      </li>

      <li class="nav-item">
        Output:
        <select v-model="setting.outputMode" @change="toggleUpdateSignal">
          <option v-for="outputMode in outputModes" v-bind:key="outputMode.value">
            {{ outputMode.text }}
          </option>
        </select>
      </li>

      <li class="nav-item title">
          Markdata Editor
      </li>

    </ul>
  </nav>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      setting: {
        outputMode: 'CSV'
      },
      outputModes: [
        { text: 'Raw', value: 'Raw' },
        { text: 'HTML', value: 'HTML' },
        { text: 'Tree', value: 'Tree' },
        { text: 'CSV', value: 'CSV' },
        { text: 'PDF', value: 'PDF' }
      ],
      demo: 'Example.md',
      demos: [
        { text: 'Example.md' },
        { text: 'EuropeUnion.md' },
        { text: 'Clear Demo' }
      ]
    }
  },
  methods: {
    ...mapActions([
      'toggleUpdateSignal',
      'updateSetting',
      'importDemo'
    ]),
    updateDemo () {
      this.importDemo(this.demo)
    }
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

<style scoped>

.navbar {
  width: 100%;
  height: 100%;
  font-size: 2vh;
  background: silver;
}

.navbar-nav {
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.nav-item {
  height: 100%;
  padding: 0;
  margin: 0 0px;
  height: 100%;
  display: flex;
  text-align: center;
  align-items: center;
}

.nav-item:last-child {
  right: 3vh;
  position: absolute;
}

.title {
  font-size: 4vh;
}

.nav-item-gap {
  width: 10px;
}

</style>
