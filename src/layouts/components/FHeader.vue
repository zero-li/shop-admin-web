<template>

    <div class="f-header">
        <span class="logo">
            <el-icon class="mr-1">
                <eleme-filled />
            </el-icon>
            Zgo商城
        </span>



        <el-icon class="icon-btn" @click="$store.commit('handleAsideWidth')">
            <fold v-if="$store.state.asideWidth == '240px'"/>
            <Expand v-else/>
        </el-icon>
        <el-tooltip content="刷新" effect="dark" placement="bottom">
            <el-icon class="icon-btn" @click="handleRefresh">
                <refresh />
            </el-icon>
        </el-tooltip>

        <div class="ml-auto flex items-center">
            <el-tooltip content="全屏" effect="dark" placement="bottom">

                <el-icon class="icon-btn" @click="toggle">
                    <full-screen v-if="!isFullscreen" />
                    <aim v-else />
                </el-icon>
            </el-tooltip>
            <el-dropdown class="dropdown" @command="handleCommand">
                <span class="flex items-center justify-center text-lime-50">
                    <el-avatar class="mr-2" :size="25"
                        src="https://lh3.googleusercontent.com/ogw/AOh-ky3IrFVSKffFDgmdVln80wIC9NtJFDje3vEWl8TS-Q=s64-c-mo" />
                    Admin
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item command="rePassword">修改密码</el-dropdown-item>
                        <el-dropdown-item command="logout">退出登录</el-dropdown-item>

                    </el-dropdown-menu>
                </template>
            </el-dropdown>


            <!-- <el-drawer v-model="showDrawer" title="修改密码" size="45%" :close-on-click-modal="false">
                <el-form ref="formRef" :rules="rules" :model="form" label-width="80px" size="small">
                    <el-form-item prop="oldPassword" label="旧密码">
                        <el-input v-model="form.oldPassword" placeholder="请输入旧密码"></el-input>
                    </el-form-item>
                    <el-form-item prop="password" label="新密码">
                        <el-input type="password" v-model="form.password" placeholder="请输入密码" show-password></el-input>
                    </el-form-item>
                    <el-form-item prop="rePassword" label="确认密码">
                        <el-input type="password" v-model="form.rePassword" placeholder="请输入确认密码" show-password>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit" :loading="loading">提交</el-button>
                    </el-form-item>
                </el-form>
            </el-drawer> -->

            <form-drawer ref="formDrawerRef" title="修改密码" destroyOnClose @submit="onSubmit">
                <el-form ref="formRef" :rules="rules" :model="form" label-width="80px" size="small">
                    <el-form-item prop="oldpassword" label="旧密码">
                        <el-input v-model="form.oldpassword" placeholder="请输入旧密码"></el-input>
                    </el-form-item>
                    <el-form-item prop="password" label="新密码">
                        <el-input type="password" v-model="form.password" placeholder="请输入密码" show-password></el-input>
                    </el-form-item>
                    <el-form-item prop="repassword" label="确认密码">
                        <el-input type="password" v-model="form.repassword" placeholder="请输入确认密码" show-password>
                        </el-input>
                    </el-form-item>
                </el-form>
            </form-drawer>

        </div>
    </div>
</template>

<script setup>
    import FormDrawer from '~/components/FormDrawer.vue'

import { useFullscreen } from '@vueuse/core'
import { useRePassword,useLogout} from "~/composables/useManager"

const {
    // 是否全屏状态
    isFullscreen,
    // 切换全屏
    toggle
} = useFullscreen()

const {
    formDrawerRef,
    form,
    rules,
    formRef,
    onSubmit,
    openRePasswordForm
} = useRePassword()

const {
    handleLogout
} = useLogout()




const handleCommand = (c) => {
    switch (c) {
        case "logout":
        handleLogout()
            break;
        case "rePassword":
            openRePasswordForm()
            break;
    }
}

// 刷新
const handleRefresh = () => location.reload()


</script>


<style scoped>
.f-header {
    @apply flex bg-indigo-700 items-center text-light-50 fixed top-0 left-0 right-0;
    height: 64px;
}

.logo {
    width: 240px;
    @apply flex items-center justify-center text-xl font-thin;

}

.icon-btn {
    width: 42px;
    height: 64px;
    @apply flex items-center justify-center;
    cursor: pointer;
}

.icon-btn:hover {
    @apply bg-indigo-500
}


.f-header .dropdown {
    height: 64px;
    cursor: pointer;
    @apply flex items-center justify-center mr-5;
}
</style>