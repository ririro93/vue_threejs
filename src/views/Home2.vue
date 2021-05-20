<template>
  <p>movies rotate</p>
  <button @click="onTriggerScrollEvent('up')">up</button>
  <button @click="onTriggerScrollEvent('down')">down</button>
  <canvas id="c"></canvas>
  <a href="#" class="close">X</a>
  <ScrollNav @onClickNavMenu="onClickNavMenu"/>
</template>

<script>
import ScrollNav from '@/components/ScrollNav.vue'
import { start, main } from '@/scripts/movie_rotation.js'

export default {
  name: 'Home2',
  components: {
    ScrollNav,
  },
  setup() {
    const onTriggerScrollEvent = (direction) => {
      main.onScrollEvent(direction)
    }

    const onClickNavMenu = (genre) => {
      main.onScrollEvent(genre)
    }

    return {
      onTriggerScrollEvent,
      onClickNavMenu
    }
  },

  mounted() {
    start(['yes'])
    main()
  }
}
</script>

<style>
body {
  background: rgb(37, 37, 37);
}
button {
  position: relative;
  z-index: 3;
}
#c {
  position: fixed;
  display: block;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 2;
}

.close {
    background: rgb(218, 218, 218);
    position: fixed;
    z-index: 100;
    left: 50%;
    top: 8vh;
    font-size: 50px;
    font-family: Helvetica, Arial, "sans-serif";
    border-radius: 50%;
    width: 60px;
    height: 60px;
    text-align: center;
    color: rgb(31, 31, 31);
    text-decoration: none;
    line-height: 50px;
    display: none;
}
</style>