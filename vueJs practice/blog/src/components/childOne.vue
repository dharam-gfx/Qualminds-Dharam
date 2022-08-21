<template >
    <div class="div">
        <h3>childOne</h3>
        {{ data }}

        <button v-on:click="ShowAlert(name)">ShowAlert</button>
        <p>
        <ul>
            <li v-for="(user, index) in Users" :key="index">
                {{ user }}
            </li>
        </ul>
        </p>
    </div>
</template>
<script>
export default {
    name: "childOne",
    data() {
        return {
            name: 'Dharmenrda kumar',
        }
    },
    props: {
        data: String,
        ShowAlert: Function,
        Users: Object,
    }
}
</script>
<style scoped>
.div{
    border: 2px solid red;
}
</style>