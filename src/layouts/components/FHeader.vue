<template>

    <div class="f-header">
        <span class="logo">
            <el-icon class="mr-1">
                <eleme-filled />
            </el-icon>
            Zgo商城
        </span>



        <el-icon class="icon-btn">
            <fold />
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

        </div>
    </div>
</template>

<script setup>

import { showModal, toast } from "~/composables/util"
import { useRouter } from "vue-router"
import { useStore } from "vuex"
import { useFullscreen } from '@vueuse/core'

const {
    // 是否全屏状态
    isFullscreen,
    // 切换全屏
    toggle } = useFullscreen()

const router = useRouter()
const store = useStore()

const handleRefresh = ()=> location.reload()

const handleCommand = (c) => {
    switch (c) {
        case "logout":
            handleLogout();
            break;
        case "rePassword":
            console.log("修改密码");
            break;
    }

};


function handleLogout() {

    showModal("是否要退出登录？").then(res => {

    }).finally(() => {
        // 提示退出登录成功
        toast("退出登录成功")
    })

}


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