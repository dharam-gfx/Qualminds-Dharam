<template>
    <div>
        <h1>My home component </h1>
        <h3>{{ msg1 }}</h3>
<!-- 
        <h2>First name : {{ first_name }}</h2>

        <h2>Last name : {{ last_name }}</h2> -->

        <!-- boolean operation  -->

        <!-- <h2>Last name : {{ last_name === "Kumar" }}</h2>

        <h2>Full name : {{ full_name() }}</h2>
        <h2>Email : {{ email_id( "Dharamgfx@gmail.com" ) }}</h2>

        <h2>{{ getName( "my name is khan" ) }}</h2>
        <h2>{{ getData() }}</h2>

        <h2>{{ typeof getData()}}</h2>

        <h2>Name : {{ getData().Name }}</h2>
        <h2>Email: {{ getData().email }}</h2> -->

        <!-- <h2>Array data: {{getArray()}}</h2> -->
        <!-- <h2>Array data: {{}}</h2> -->
        <!-- <h2>Array data instance of : {{getArray() instanceof Object}}</h2> -->

<!-- <h2>COUNT= {{count}}</h2>
<button type="button" v-on:click="clickFun('button 1 clicked')"> button 1</button>
<button type="button" v-on:click="increment()"> count ++</button>
<button type="button" v-on:click="decrement()"> count --</button><br><br> -->

<!-- tow way binding -->
<!-- <input type="text" v-model="showData">
<h2>{{showData}}</h2> -->
    </div>
</template>

<script>
export default {
    name: 'MyHome',
    props: {
        msg1: String
    },
    data() {
        return {
            count:0,
            showData:null,
            first_name: "Dharmendra",
            last_name: "Kumar",
            Rahul_email: "rahul@gamil.com",
            full_name: function () {
                return this.first_name + " " + this.last_name;
            },
            email_id: function ( email ) {
                return email;
            },
        }
    },
    methods: {
        getName( name1 ) {
            return name1;
        },

        getData() {
            return {
                Name: "rahul",
                email: this.Rahul_email,
            }
        },
        getArray(){
            return [20,10,40,60];
        },

        clickFun(value){
            console.warn(value);
        },

        increment(){
            this.count++;

        },
        decrement(){
            if(this.count>0){
                this.count--;
            }

        }
    }


}
</script>

<style scoped>
h1 {
    background-color: bisque;
}
</style>