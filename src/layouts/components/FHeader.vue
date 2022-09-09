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
        <el-icon class="icon-btn">
            <refresh />
        </el-icon>
        <div class="ml-auto flex items-center">
            <el-icon class="icon-btn">
                <full-screen />
            </el-icon>
            <el-dropdown class="dropdown">
                <span class="flex items-center justify-center text-lime-50">
                    <el-avatar
                    class="mr-2" :size="25"
                        src="https://lh3.googleusercontent.com/ogw/AOh-ky3IrFVSKffFDgmdVln80wIC9NtJFDje3vEWl8TS-Q=s64-c-mo" />
                    Admin
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>修改密码</el-dropdown-item>
                        <el-dropdown-item>退出登录</el-dropdown-item>

                    </el-dropdown-menu>
                </template>
            </el-dropdown>

        </div>
    </div>
</template>


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

.icon-btn:hover{
    @apply bg-indigo-500
}


.f-header .dropdown{
    height: 64px;
    cursor: pointer;
    @apply flex items-center justify-center mr-5;
}

</style>