<template>
    <div>
        <h3>html binding</h3>
        <div v-html="tag"></div>
        <div v-html="tag1"></div>

    </div>
</template>
<script>
export default {
    name: "htmlBinding",
    data() {
        return {
            tag: "<h1>hello world 1</h1>",
            tag1: "<h1>hello world 2</h1>",
        }
    },
}
</script>
<style scoped>
div {
    color: red;
}
</style>