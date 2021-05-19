<template>
  <p>camera roates</p>
  <canvas id="c"></canvas>
  <a href="#" class="close">X</a>
</template>

<script>
import main from '@/scripts/cam_rotation.js'

export default {
  name: 'Home',
  setup() {
  },
  mounted() {
    main()
  }

}
</script>

<style >
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
    background: #f00;
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
    color: #fff;
    text-decoration: none;
    line-height: 50px;
    display: none;
}
</style>