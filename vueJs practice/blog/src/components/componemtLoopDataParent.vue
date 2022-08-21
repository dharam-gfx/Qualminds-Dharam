<template>
    <div>
        <h4>{{ myuser.name }}</h4>
        <h4>{{ myuser.email }}</h4>
        <button v-on:click="shownname(myuser.name)">showName</button>
    </div>
</template>
<script>
export default {
    name: "componemtLoopDataParent",
    props: {
        myuser: Object,
        shownname:Function,
    }



}
</script>
<style scoped>
*{
    padding: 0;
    margin: 6px;
}
div{
    background-color: blueviolet;
    padding: 10px;
    
}
</style>
