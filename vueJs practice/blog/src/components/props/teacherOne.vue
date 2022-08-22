<template >
    <div>
        <h2>techer Name: {{techer_Name}}</h2>

        <div>
        <stdTotechDataTrans  :getData="getDataChind"/>

        <h1>{{studentName}}</h1>
        </div>
    </div>
</template>
<script>

import stdTotechDataTrans from './studentToteacherDataTrans.vue';
export default {
    name: 'teacherOne',

    data() {
        return {
            studentName:"",
        }
    },
    props:{
        techer_Name:String
    },
    components:{
        stdTotechDataTrans,
    },
    methods:{
        getDataChind(name){
            this.studentName=name;
            console.log(name);
        }
    }
}
</script>
<style >
</style>