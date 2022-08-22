<template>
    <div>
        <h1>student to teacher data transfer</h1>
        {{getData(name)}}
    </div>
</template>
<script>
export default {
    name:"stdTotechDataTrans",

    data() {
        return {
            name:"Dharmendra kumar",
        }
    },
    props:{
        getData:Function
    },
    methods:{
        
    },
    
    
}
</script>
<style lang="">
    
</style>