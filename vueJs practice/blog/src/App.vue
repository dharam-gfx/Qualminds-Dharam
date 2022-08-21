<template>
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <MyHome msg1="hello dharam props" />
  <MyPresTwoVue />
  <condationalStmVue />
  <ParentTochildOneVue />
  <BindingModuleVue />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import MyHome from './components/MyHome.vue';
import MyPresTwoVue from './components/MyPresTwo.vue';
import condationalStmVue from './components/condationalStm.vue';
import ParentTochildOneVue from './components/ParentTochildOne.vue';
import BindingModuleVue from './components/binding/BindingModule.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    MyHome,
    MyPresTwoVue,
    condationalStmVue,
    ParentTochildOneVue,
    BindingModuleVue
    
  },
}
</script>

