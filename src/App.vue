<template>
  
  <my-header />
  <div class="">
    <router-view></router-view>
  </div>
  <my-body />
  <welcome-item />
  <my-end />

</template>

<script>
import MyHeader from './components/MyHeader.vue';
import MyBody from "./components/MyBody.vue";
import WelcomeItem from "./components/WelcomeItem.vue";
import MyEnd from "./components/MyEnd.vue";
export default {
  components: { MyHeader, MyBody, WelcomeItem , MyEnd},

}
</script>

<style>

</style>