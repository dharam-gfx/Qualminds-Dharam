<template >
    <div>
        <h1 style="background-color: blue;">form</h1>
    </div>
    <div>
        <refComponetVue />
        <simpleFormComponentVue />
        <formValidaionvue />
    </div>
</template>
<script>
import refComponetVue from './refComponet.vue';
import simpleFormComponentVue from './simpleFormComponent.vue';
import formValidaionvue from './formValidation.vue'

export default {
    name: "formModule",
    components: {
        refComponetVue,
        simpleFormComponentVue,
        formValidaionvue
    }
}
</script>
<style >
</style>