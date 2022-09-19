<template>
    <div>
        后台首页
        <el-row :gutter="20">

            <template v-if="panels.length == 0">
                <el-col :span="6" :offset="0" v-for="i in 4" :key="i">
                    <el-skeleton animated loading>
                        <template #template>
                            <el-card class="border-0" shadow="hover">
                        <template #header>
                            <div class="card-header">
                                <el-skeleton-item variant="text" style="width: 50%" />
                                <el-skeleton-item variant="text" style="width: 20%" />

                            </div>
                        </template>

                        <el-skeleton-item variant="text" class="text-3xl text-gray-600 font-bold" />
                        <el-divider />
                        <div class="flex justify-between text-sm text-gray-500">

                            <el-skeleton-item variant="text" style="width:40%" />
                            <el-skeleton-item variant="text" style="width:10%"/>
                        </div>


                    </el-card>
                        </template>
                    </el-skeleton>
                </el-col>
            </template>



            <el-col :span="6" :offset="0" v-for="(item, index) in panels" :key="index">
                <el-card class="border-0" shadow="hover">
                    <template #header>
                        <div class="flex justify-between">
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

<script setup>
import { ref } from 'vue'
import { getStatistics1 } from "~/api/index"



const panels = ref([])

getStatistics1().then((res) => {
    panels.value = res.panels
    console.log(panels.value)

})




</script>