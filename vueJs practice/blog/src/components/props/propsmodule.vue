<template>
    <div>
        <h2>Props Module </h2>
        <studentOnevue :student_name="student_name"/>
        <teacherOnevue :techer_Name="techer_name"/>
    </div>
</template>
<script>
import teacherOnevue from './teacherOne.vue';
import studentOnevue from './studentOne.vue';
export default {
    name: "propsModule",
    data() {
        return {
            techer_name:"peter",
            student_name:"Bhanu", 
        }
    },
    components: {
        teacherOnevue,
        studentOnevue,
    }
}
</script>
<style>
</style>