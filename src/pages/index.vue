<template>
    <div>
        后台首页
        <el-row :gutter="20">
            <el-col :span="6" :offset="0" v-for="(item, index) in panels" :key="index">
                <el-card class="border-0" shadow="hover">
                    <template #header>
                        <div class="card-header">
                            <span>{{item.title}}</span>
                            <el-tag effect="plain" :type="item.unitColor">{{item.unit}}</el-tag>
                        </div>
                    </template>

                    <div class="text-3xl text-gray-600 font-bold">{{item.value}}</div>
                    <el-divider />
                    <div class="flex justify-between text-sm text-gray-500">
                        <span>{{item.subTitle}}</span>
                        <span>{{item.subValue}}</span>
                    </div>


                </el-card>
            </el-col>


        </el-row>




    </div>
</template>

<style>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}
</style>

<script setup>
import { ref } from 'vue'
import { getStatistics1 } from "~/api/index"



const panels = ref([])

getStatistics1().then((res) => {
    panels.value = res.panels
    console.log(panels.value)

})




</script>