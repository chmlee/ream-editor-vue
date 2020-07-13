<template>
  <div class="home-container">

    <div class="header-container">
      <h1>Datamark Editor</h1>
    </div>

    <div class="-menu-container">
      <MenuContainer />
    </div>

    <div class="content-container">
      <div class="left-container content-col">
        <InputContainer />
      </div>
      <div class="right-container content-col">
        <OutputContainer />
      </div>
    </div>

  </div>
</template>

<script>
import MenuContainer from '@/components/MenuContainer.vue'
import InputContainer from '@/components/InputContainer.vue'
import OutputContainer from '@/components/OutputContainer.vue'

export default {
  name: 'Home',
  components: {
    MenuContainer,
    InputContainer,
    OutputContainer
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

h1 {
  font-size: 4vh;
}

.main-menu-container {
  height: 5vh;
  background-color: grey;
  display: flex;
  justify-content: center;
  background-color: white;
  font-size: 25px;
}

.content-container {
  height: 90vh;
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
