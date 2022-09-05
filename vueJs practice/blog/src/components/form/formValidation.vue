<template>
    <div>
        <h1> form Validation</h1>

    </div>
    <div>
        <h2>show error</h2>
        <ol>
            <li v-for="(item, index) in error" :key="index">
                {{item}} is empty please fill this field.
            </li>
        </ol>
    </div>
    <div>
        {{formData}}
        <form action="">
            <label for="email1">Email</label>
            <input type="email" id="email1" placeholder="Enter email" v-model="formData.email" >

            <label for="password1">Password</label>
            <input type="password" id="password1" placeholder="Enter password" v-model="formData.password">
          <h3>Country</h3>
            <select name="select" id="select1" v-model="formData.Country">
                <option >INDIA</option>
                <option >CHINA</option>
                <option>USA</option>
            </select>
            <h3>Courses</h3>
            <label for="Java1">Java</label>
            <input type="checkbox" id="Java1" value="Java"  v-model="formData.Courses" >
            <label for="Python1">Python</label>
            <input type="checkbox" id="Python1" value="Python"  v-model="formData.Courses" >
            <h3>Gender</h3>
            <label for="Male1">Male</label>
            <input type="radio" name="Gender" value="Male" id="Male1"  v-model="formData.Gender" >
            <label for="Female1">Female</label>
            <input type="radio"  name="Gender" value="Female"  id="Female1"  v-model="formData.Gender" >

           
            
            <br><br>

            <button type="button" v-on:click="getFormData" >submit</button>
        </form>
    </div>
</template>
<script>
export default {
    name:"formValidation",
    data() {
        return {
            formData:{
                email:"",
                password:"",
                Country:"",
                Courses:[],
                Gender:"",
            },
            error:[],
        }
    },
    methods: {
        getFormData(){
            console.log(this.formData);
            this.error=[];
            for (const item in this.formData) {
                
                    const element = this.formData[item];
                    if (element==="" || element.length==0) {
                        this.error.push(item);
                    }
                    
                    
                
            }
            console.log(this.error);
        },

    },
}
</script>
<style >
    h1,li{
        background-color: red;
    }
    input,select{
        display: block;
        margin: .5rem 0rem;
        padding: 0.5em;
    }
</style>