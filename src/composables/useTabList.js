import {
    ref
} from 'vue'
import {
    useRoute,
    onBeforeRouteUpdate
} from "vue-router";
import {
    useCookies
} from '@vueuse/integrations/useCookies';
import {
    router
} from '~/router';


export function useTabList() {

    const cookie = useCookies()
    const route = useRoute()

    const activeTab = ref(route.path)
    const tabList = ref([{
            name: '后台首页',
            path: '/'
        },

    ])

    // 添加标签导航
    const addTab = (tab) => {
        let noTab = tabList.value.findIndex(t => t.path == tab.path) == -1;
        if (noTab) {
            tabList.value.push(tab);
        }

        cookie.set("tabList", tabList.value);
    }

    // 初始化标签导航列表
    function initTabList() {
        let tabs = cookie.get('tabList');
        if (tabs) {
            tabList.value = tabs;
        }

    }

    //调用
    initTabList()

    onBeforeRouteUpdate((to, from) => {
        activeTab.value = to.path;
        addTab({
            name: to.meta.title,
            path: to.path
        })
    })

    const changeTab = (t) => {
        activeTab.value = t
        router.push(t)
    }




    const removeTab = (path) => {
        const tabs = tabList.value
        let active = activeTab.value
        if (active === path) {
            tabs.forEach((tab, index) => {
                if (tab.path === active) {
                    const nextTab = tabs[index + 1] || tabs[index - 1]
                    if (nextTab) {
                        active = nextTab.path
                    }
                }
            })
        }

        activeTab.value = active
        tabList.value = tabs.filter((tab) => tab.path !== path)

        cookie.set("tabList", tabList.value)
    }

    const handleClose = (c) => {
        if (c == "clearAll") {
            // 切换回首页
            activeTab.value = '/'
            // 只保留首页
            tabList.value = [{
                name: '后台首页',
                path: '/'
            }, ]

        } else if (c == 'clearOther') {
            //过滤只剩下首页和当前激活
            tabList.value = tabList.value.filter(tab => tab.path == '/' || tab.path == activeTab.value)
        }

        cookie.set("tabList", tabList.value)
    }




    return {
        activeTab,
        tabList,
        changeTab,
        removeTab,
        handleClose
    }
}