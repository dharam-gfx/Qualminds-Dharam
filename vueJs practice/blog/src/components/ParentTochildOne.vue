<template >
    <div>
        <h1>parent</h1>
        <childOneVue :data="data" :ShowAlert="showAlert" :Users="users" />
        <div>
            <ul>
                <li v-for="(user, index) in myuser" :key="index">
                    <componemtLoopDataParentVue :myuser="user" :shownname="shownname"/>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import childOneVue from './childOne.vue';
import componemtLoopDataParentVue from './componemtLoopDataParent.vue';

export default {
    name: "ParentTochildOneVue",
    components: {
        childOneVue,
        componemtLoopDataParentVue,
    },
    data() {
        return {
            data: "hello world",
            users: {
                name: "rahul",
                email: 'rahul@gmail.com',
                Mno: 77556688,
            },
            myuser: [
                {
                    name: "Pawam",
                    email: 'pawan@gmail.com',
                    Mno: 4554664,
                },
                {
                    name: "ankit",
                    email: 'ankit@gmail.com',
                    Mno: 667664,
                },
                {
                    name: "raj",
                    email: 'raj@gmail.com',
                    Mno: 3333333,
                }
            ]
        }
    },
    methods: {
        showAlert(name) {
            alert(name);
        },
        shownname(userName){
            alert(userName)
        }
    },

}
</script>
<style >
</style>