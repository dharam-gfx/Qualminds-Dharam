<template>
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <MyHome msg1="hello dharam props" />
  <MyPresTwoVue hidden/>
  <condationalStmVue hidden/>
  <ParentTochildOneVue  hidden/>
  <BindingModuleVue hidden/>
  <propsmoduleVue hidden/>

  <formModuleVue />


</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import MyHome from './components/MyHome.vue';
import MyPresTwoVue from './components/MyPresTwo.vue';
import condationalStmVue from './components/condationalStm.vue';
import ParentTochildOneVue from './components/ParentTochildOne.vue';
import BindingModuleVue from './components/binding/BindingModule.vue';
import propsmoduleVue from './components/props/propsmodule.vue';
import formModuleVue from './components/form/formModule.vue';


export default {
  name: 'App',
  components: {
    HelloWorld,
    MyHome,
    MyPresTwoVue,
    condationalStmVue,
    ParentTochildOneVue,
    BindingModuleVue,
    propsmoduleVue,
    formModuleVue,
    
  
  },
}
</script>

