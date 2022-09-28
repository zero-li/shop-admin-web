<template>
    <el-card shadow="never" :body-style="{ padding: '20px' }">
        <template #header>
        <div class="flex justify-between">
            <span class="text-sm">{{title}}</span>
            <el-tag type="danger" effect="plain">
                {{tip}}
            </el-tag>
        </div>
        </template>


        <el-row :gutter="20">
            <el-col :span="6" :offset="0" v-for="(item,index) in btns" :key="index">
                <el-card shadow="hover" class="bg-light-400 border-0">
                    <div class="flex flex-col justify-center items-center">
                        <span>{{item.value}}</span>
                        <span>{{item.label}}</span>
                    </div>
                </el-card>
                
            
            </el-col>
        </el-row>
        
    </el-card>
    
    
</template>

<script setup>
defineProps({
    title:String,
    tip:String,
    btns:Array
})

</script>
