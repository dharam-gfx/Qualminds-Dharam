<template >
    <div>
        <form action="">
            <label for="name">name</label>
            <input type="text" ref="input1">
            <button type="button" v-on:click="getData">click me</button>
        </form>
    </div>
</template>
<script>
export default {
    name:"refComponent",
   data() {
    return {
      
    }
   },
    methods:{
        getData(){
            this.$refs.input1.focus();
            let val=this.$refs.input1.value;
            console.log(val);

            this.$refs.input1.style.color="red";
        }
    }
    
}
</script>
<style lang="">
    
</style>