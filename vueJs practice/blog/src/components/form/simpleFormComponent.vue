<template>
    <div>
        <h1>simple form</h1>

    </div>
    <div>
        {{formData}}
        <form action="">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Enter email" v-model="formData.email" >

            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Enter password" v-model="formData.password">
          <h3>Country</h3>
            <select name="select" id="select" v-model="formData.Country">
                <option >INDIA</option>
                <option >CHINA</option>
                <option>USA</option>
            </select>
            <h3>Courses</h3>
            <label for="Java">Java</label>
            <input type="checkbox" id="Java" value="Java"  v-model="formData.Courses" >
            <label for="Python">Python</label>
            <input type="checkbox" id="Python" value="Python"  v-model="formData.Courses" >
            <h3>Gender</h3>
            <label for="Male">Male</label>
            <input type="radio" name="Gender" value="Male" id="Male"  v-model="formData.Gender" >
            <label for="Female">Female</label>
            <input type="radio"  name="Gender" value="Female"  id="Female"  v-model="formData.Gender" >

           
            
            <br><br>

            <button type="button" v-on:click="getFormData" >submit</button>
        </form>
    </div>
</template>
<script>
export default {
    name:"simpleForm",
    data() {
        return {
            formData:{
                email:"",
                password:"",
                Country:"",
                Courses:[],
                Gender:"",
            }
        }
    },
    methods: {
        getFormData(){
            console.log(this.formData);
        }
    },
}
</script>
<style >
    h1{
        background-color: red;
    }
    input,select{
        display: block;
        margin: .5rem 0rem;
        padding: 0.5em;
    }
</style>