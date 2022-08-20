<template>
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <MyHome msg1="hello dharam props" />
  <MyPresTwoVue />
  <condationalStmVue />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import MyHome from './components/MyHome.vue';
import MyPresTwoVue from './components/MyPresTwo.vue';
import condationalStmVue from './components/condationalStm.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    MyHome,
    MyPresTwoVue,
    condationalStmVue,
  },
}
</script>

