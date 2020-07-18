<template>
  <div class="home-container">

    <div class="menu-container">
      <Menu />
    </div>

    <div class="content-container">
      <div class="left-container content-col">
        <Input />
      </div>
      <div class="right-container content-col">
        <Output />
      </div>
    </div>

  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import Input from '@/components/Input.vue'
import Output from '@/components/Output.vue'

export default {
  name: 'Home',
  components: {
    Menu,
    Input,
    Output
  },
  methods: {
    onEnter: function () {
      alert('test')
    }
  }
}
</script>

<style>
html{
    min-height:100%;/* make sure it is at least as tall as the viewport */
    position:relative;
}
body{
    height:100%; /* force the BODY element to match the height of the HTML element */
}

.home-container{
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    overflow:hidden;
}

.header-container {
  height: 5vh;
  display: flex;
  justify-content: center;
  background-color: white;
  padding-left: 2vh;
}

.menu-container {
  height: 5vh;
  background-color: grey;
  display: flex;
  justify-content: center;
  background-color: white;
}

.content-container {
  height: 95vh;
  display: flex;
  text-align: left;
  font-size: 25px;
  flex: 0 0 auto;
}

.left-container {
    width: 50vw;
    background-color: blue;
}

.right-container {
    width: 50vw;
    background-color: green;
}
</style>
