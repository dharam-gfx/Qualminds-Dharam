<template>
    <div>
        <!-- <h1>MyPresTwo</h1>
        <label for="">Email</label>
        <input type="email" v-model=" inputF1 "> <br><br>
        <label for="">Password</label>
        <input type="password" v-model=" inputF2 "> <br><br>
        <button type="button" v-on:click=" GetData() ">Get Value</button> <br><br>

        <div>
            <label for="">java</label>
            <input type="checkbox" value="java" v-model=" checkData ">
            <label for="">sql</label>
            <input type="checkbox" value="sql" v-model=" checkData ">
            <label for="">html</label>
            <input type="checkbox" value="html" v-model=" checkData ">
        </div>
        <h2>{{ checkData }}</h2> -->

        <!-- <div>
            <label for="">Dharmendra</label>
            <input type="radio" value="Dharmendra" name="Name" checked v-model=" whoIm ">
            <label for="">Rahul</label>
            <input type="radio" value="Rahul" name="Name" v-model=" whoIm ">
            <label for="">Pawan</label>
            <input type="radio" value="Pawan" name="Name" v-model=" whoIm ">
        </div>
        <h2>{{ whoIm }}</h2>

        <h2>Show hide toggle </h2> -->

        <div class="para">
        <!-- <p v-if="showHide">Show data</p>
        <p v-else> Hide data</p> -->

        <!-- <button type="button" v-on:click="toggleFun()">Show/hide</button> -->

        <!-- one line  -->
        <!-- <button type="button" v-on:click="showHide= !showHide">Show/hide2</button> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyPresTwo',

    data() {
        return {
            inputF1: null,
            inputF2: null,
            checkData: [],
            whoIm: "Dharmendra",
            showHide:false,
        }
    },
    methods: {
        GetData() {
            console.log( "Email= " + this.inputF1 );
            console.log( "Password= " + this.inputF2 );
        },
        toggleFun(){
            this.showHide= !this.showHide;
        }

    },
}
</script>
<style>
.para p{
    background-color: red;
    font-size: 25px;
    padding: 15px;
    color: white;
    font-weight: 900;
}
</style>