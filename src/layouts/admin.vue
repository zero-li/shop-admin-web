<template>
    <el-container>
        <el-header>
            <f-header />
        </el-header>
        <el-container>
            <el-aside :width="$store.state.asideWidth">
                <f-menu />
            </el-aside>
            <el-main>
                <f-tag-list />

                <router-view class="mt-44px" v-slot="{ Component }">
                    <Transition name="fade">
                        <keep-alive :max="5">
                            <component :is="Component"></component>
                        </keep-alive>
                    </Transition>

                </router-view>




            </el-main>
        </el-container>
    </el-container>

</template>

<script setup>
import FHeader from './components/FHeader.vue';
import FMenu from './components/FMenu.vue';
import FTagList from './components/FTagList.vue';

</script>

<style>
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}


.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}


.fade-enter-active {
    transition-delay: 0.3s;
}

.fade-leave-active {
    transition: all 0.3s;
}
</style>