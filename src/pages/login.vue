<template>
    <el-row>
        <el-col :span="16">
            <div>
                <div>欢迎光临</div>
                <div>此站点是Zgo 商城后台</div>
            </div>
        </el-col>

        <el-col :span="8">
            <h2>欢迎回来</h2>
            <div>
                <span></span>
                <span>账号密码登录</span>
                <span></span>
            </div>
            <el-form :model="form" label-width="120px">
                <el-form-item >
                    <el-input v-model="form.username" />
                </el-form-item>
                <el-form-item >
                    <el-input v-model="form.password" />
                </el-form-item>
                
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">登 录</el-button>
                </el-form-item>
            </el-form>



        </el-col>
    </el-row>


</template>


<script setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
    username: '',
    password: '',
    
})

const onSubmit = () => {
    console.log('submit!')
}
</script>