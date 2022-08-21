<template>
    <div>
        <h2>all binding html ,css </h2>
        <htmlBindingVue/>
        <classBindingVue/>
    </div>
</template>
<script>

import htmlBindingVue from './htmlBinding.vue';
import classBindingVue from './classBinding.vue';
export default {
    name: "BindingModule",
    components: {
        htmlBindingVue,
        classBindingVue
    }
}
</script>
<style>

</style>