<template>
    <div>
        后台首页
        <el-button @click="addCount">{{count}}</el-button>
        <el-button type="primary" @click="addCount2">{{form.count}}</el-button>
        <el-button @click="set">设置</el-button>
        <el-button @click="get">读取</el-button>
        <el-button @click="remove">删除</el-button>
    </div>
</template>

<script setup>
    import {ref, reactive} from "vue"
    import { useCookies } from "@vueuse/integrations/useCookies";


    let count = ref(1)

    function addCount(){
        console.log("addCount");
        count.value++
        console.log(count.value)
    }

    const form = reactive({
        count:2
    })

    function addCount2(){
        console.log("addCount");
        form.count++
        console.log(form.count)
    }

    const cookie = useCookies()

    function set(){
        cookie.set("admin","1232456")
    }

    function get(){
        console.log(cookie.get("admin"));
    }

    function remove(){
        cookie.remove("admin")
    }




</script>