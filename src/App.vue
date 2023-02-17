<template>
  
  <my-header />
  <div class="">
    <Router-view></Router-view>
  </div>
  <my-end class="mt-20" />

</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import MyHeader from './components/MyHeader.vue';
import MyEnd from "./components/MyEnd.vue";
export default {
  components: { MyHeader, MyEnd},

}
</script>

<style>

</style>