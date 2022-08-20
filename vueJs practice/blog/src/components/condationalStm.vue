<template >
    <div>
        <h1>for loop</h1>
        <div>
            <ol>
                <li v-for="item of nameList" :key=" item ">
                    <p>{{ item }}</p>
                </li>

            </ol>

            <ol type="i">
            <li v-for="user of users" :key="user">
                <p><b>Name:</b>{{user.name}}</p>
                <p><b>Email: </b> {{user.email}}</p>
                <p><b>Mobile No: </b> {{user.mNo}}</p>
            </li>
            </ol>

        </div>
    </div>
</template>
<script>
export default {
    name: 'condationalStm',
    data() {
        return {
            nameList: ["dharam", "pawan", "rahul", "raj"],

            users:[
                {
                    name:"rahul",
                    email:"rahul@gmail.com",
                    mNo:70254,
                },
                {
                    name:"dharam",
                    email:"dharam@gmail.com",
                    mNo:66585,
                },
                {
                    name:"pawan",
                    email:"pawan@gmail.com",
                    mNo:44455,
                }
            ]
        }
    },

}
</script>
<style >
</style>