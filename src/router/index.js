import {
    createRouter,
    createWebHashHistory
} from "vue-router"

import Admin from "~/layouts/admin.vue"
import Index from "~/pages/index.vue"
import Login from "~/pages/login.vue"
import NotFound from "~/pages/404.vue"
import GoodList from "~/pages/goods/list.vue"
import CategoryList from "~/pages/category/list.vue"





// 动态路由，用于匹配菜单动态添加路由
const asyncRoutes = [{
    path: "/",
    name: "/",
    component: Index,
    meta: {
        title: "后台首页"
    }
}, {
    path: "/goods/list",
    name: "/goods/list",
    component: GoodList,
    meta: {
        title: "商品管理"
    }
}, {
    path: "/category/list",
    name: "/category/list",
    component: CategoryList,
    meta: {
        title: "分类列表"
    }
}]



const routes = [{
    path: "/",
    name: "admin",
    component: Admin,
    children:asyncRoutes
}, {
    path: "/login",
    component: Login,
    meta: {
        title: "登录页"
    }
}, {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: {
        title: "404"
    }
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


// 动态添加路由的方法
export function addRouters(menus) {
    // 是否有新的路由
    let hasNewRoutes = false;
    const findAndAddRoutesByMenus = (arr) => {
        arr.forEach(element => {
            let item = asyncRoutes.find(o => o.path == element.frontpath);
            if (item && !router.hasRoute(item.path)) {
                router.addRoute("admin", item);
                hasNewRoutes = true;
            }

            if (element.child && element.child.length > 0) {
                findAndAddRoutesByMenus(element.child);
            }

        });
        
    }

    findAndAddRoutesByMenus(menus);

    return hasNewRoutes;


}



export default router