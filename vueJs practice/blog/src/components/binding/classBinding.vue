<template >
    <div>
        <h2>class binding</h2>
        <div :class="{ bg_green: flag }">
            <h2>Dynamic class</h2>
        </div>
        <button type="button" v-on:click="flag = !flag">remove bg color</button>

        <div :class="applymultiClass">
            <h2>multi class binding</h2>
        </div>
        <div :class="applymultiClass">
            <h2>multi class binding</h2>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            flag: true,
        }
    },
    computed: {
        applymultiClass() {
            return {
                tex_color: true,
                text_size: true,
                bg_color2: true,

            }
        }
    }

}
</script>
<style >
.bg_green {
    background-color: greenyellow;
    padding: 5px 10px;
}

.tex_color {
    color: blue;
}

.text_size {
    font-size: 40px;
}

.bg_color2 {
    background-color: aquamarine;
    padding: 0px 25px;
}
</style>