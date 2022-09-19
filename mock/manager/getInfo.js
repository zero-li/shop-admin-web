export default [
    {
        url: '/admin/login',
        method: 'post',
        response: ({
            body
        }) => {
            console.log('body>>>>>>>>', body)
            return {
                "msg": "ok",
                "data": {
                    "token": "e2d38e009179e5bcd9e9ced56dc9d1ade22838dd"
                }
            }
        },
    }, 
    
    {
    url: '/admin/getinfo',
    method: 'post',
    response: ({
        body
    }) => {
        console.log('body>>>>>>>>', body)
        return {
            "msg": "ok",
            "data": {
                "id": 3,
                "username": "admin",
                "avatar": "http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5f50505928e60.jpg",
                "super": 1,
                "role": {
                    "id": 2,
                    "name": "超级管理员"
                },
                "menus": [{
                        "id": 5,
                        "rule_id": 0,
                        "status": 1,
                        "create_time": "2019-08-11 13:36:09",
                        "update_time": "2021-12-21 19:31:11",
                        "name": "后台面板",
                        "desc": "index",
                        "frontpath": null,
                        "condition": null,
                        "menu": 1,
                        "order": 1,
                        "icon": "help",
                        "method": "GET",
                        "child": [{
                            "id": 10,
                            "rule_id": 5,
                            "status": 1,
                            "create_time": "2019-08-11 13:37:02",
                            "update_time": "2021-12-21 20:21:23",
                            "name": "主控台",
                            "desc": "index",
                            "frontpath": "/",
                            "condition": null,
                            "menu": 1,
                            "order": 20,
                            "icon": "home-filled",
                            "method": "GET",
                            "child": []
                        }]
                    },
                    {
                        "id": 6,
                        "rule_id": 0,
                        "status": 1,
                        "create_time": "2019-08-11 13:36:36",
                        "update_time": "2021-12-21 19:37:11",
                        "name": "商品管理",
                        "desc": "shop_goods_list",
                        "frontpath": null,
                        "condition": null,
                        "menu": 1,
                        "order": 2,
                        "icon": "shopping-bag",
                        "method": "GET",
                        "child": [{
                                "id": 13,
                                "rule_id": 6,
                                "status": 1,
                                "create_time": "2019-12-28 13:42:13",
                                "update_time": "2021-12-21 20:21:42",
                                "name": "商品管理",
                                "desc": "shop_goods_list",
                                "frontpath": "/goods/list",
                                "condition": "",
                                "menu": 1,
                                "order": 20,
                                "icon": "shopping-cart-full",
                                "method": "GET",
                                "child": []
                            },
                            {
                                "id": 14,
                                "rule_id": 6,
                                "status": 1,
                                "create_time": "2019-12-28 13:44:00",
                                "update_time": "2021-12-21 20:22:00",
                                "name": "分类管理",
                                "desc": "shop_category_list",
                                "frontpath": "/category/list",
                                "condition": "",
                                "menu": 1,
                                "order": 20,
                                "icon": "menu",
                                "method": "GET",
                                "child": []
                            },
                            {
                                "id": 15,
                                "rule_id": 6,
                                "status": 1,
                                "create_time": "2019-12-28 13:44:32",
                                "update_time": "2021-12-21 20:22:11",
                                "name": "规格管理",
                                "desc": "shop_sku_list",
                                "frontpath": "/skus/list",
                                "condition": "",
                                "menu": 1,
                                "order": 20,
                                "icon": "aim",
                                "method": "GET",
                                "child": []
                            },
                            {
                                "id": 157,
                                "rule_id": 6,
                                "status": 1,
                                "create_time": "2021-06-12 21:57:02",
                                "update_time": "2021-12-21 20:22:52",
                                "name": "优惠券管理",
                                "desc": "shop_coupon_list",
                                "frontpath": "/coupon/list",
                                "condition": "",
                                "menu": 1,
                                "order": 50,
                                "icon": "postcard",
                                "method": "GET",
                                "child": []
                            }
                        ]
                    },
                    {
                        "id": 173,
                        "rule_id": 0,
                        "status": 1,
                        "create_time": "2021-12-21 19:38:21",
                        "update_time": "2021-12-21 19:38:21",
                        "name": "用户管理",
                        "desc": "",
                        "frontpath": "",
                        "condition": "",
                        "menu": 1,
                        "order": 3,
                        "icon": "user",
                        "method": "GET",
                        "child": [{
                                "id": 21,
                                "rule_id": 173,
                                "status": 1,
                                "create_time": "2019-12-28 13:46:45",
                                "update_time": "2021-12-21 20:22:35",
                                "name": "用户管理",
                                "desc": "user_user-list_list",
                                "frontpath": "/user/list",
                                "condition": "",
                                "menu": 1,
                                "order": 20,
                                "icon": "user-filled",
                                "method": "GET",
                                "child": []
                            },
                            {
                                "id": 22,
                                "rule_id": 173,
                                "status": 1,
                                "create_time": "2019-12-28 13:46:59",
                                "update_time": "2021-12-21 20:22:44",
                                "name": "会员等级",
                                "desc": "user_user-level_list",
                                "frontpath": "/level/list",
                                "condition": "",
                                "menu": 1,
                                "order": 20,
                                "icon": "data-analysis",
                                "method": "GET",
                                "child": []
                            }
                        ]
                    },
                    {
                        "id": 7,
                        "rule_id": 0,
                        "status": 1,
                        "create_time": "2019-08-11 13:36:40",
                        "update_time": "2021-12-21 19:37:18",
                        "name": "订单管理",
                        "desc": "order_order_list",
                        "frontpath": null,
                        "condition": null,
                        "menu": 1,
                        "order": 4,
                        "icon": "message-box",
                        "method": "GET",
                        "child": [{
                                "id": 18,
                                "rule_id": 7,
                                "status": 1,
                                "create_time": "2019-12-28 13:45:42",
                                "update_time": "2021-12-21 20:23:02",
                                "name": "订单管理",
                                "desc": "order_order_list",
                                "frontpath": "/order/list",
                                "condition": "",
                                "menu": 1,
                                "order": 1,
                                "icon": "reading",
                                "method": "GET",
                                "child": []
                            },
                            {
                                "id": 17,
                                "rule_id": 7,
                                "status": 1,
                                "create_time": "2019-12-28 13:44:56",
                                "update_time": "2021-12-21 20:22:26",
                                "name": "评论管理",
                                "desc": "shop_comment_list",
                                "frontpath": "/comment/list",
                                "condition": "",
                                "menu": 1,
                                "order": 20,
                                "icon": "comment",
                                "method": "GET",
                                "child": []
                            }
                        ]
                    },
                    {
                        "id": 8,
                        "rule_id": 0,
                        "status": 1,
                        "create_time": "2019-08-11 13:36:43",
                        "update_time": "2021-12-21 19:37:25",
                        "name": "管理员管理",
                        "desc": "user_user-list_list",
                        "frontpath": null,
                        "condition": null,
                        "menu": 1,
                        "order": 5,
                        "icon": "management",
                        "method": "GET",
                        "child": [{
                                "id": 25,
                                "rule_id": 8,
                                "status": 1,
                                "create_time": "2019-12-28 13:47:39",
                                "update_time": "2021-12-21 20:23:53",
                                "name": "管理员管理",
                                "desc": "set_manager",
                                "frontpath": "/manager/list",
                                "condition": "",
                                "menu": 1,
                                "order": 20,
                                "icon": "coordinate",
                                "method": "GET",
                                "child": []
                            },
                            {
                                "id": 27,
                                "rule_id": 8,
                                "status": 1,
                                "create_time": "2020-01-03 21:05:50",
                                "update_time": "2021-12-21 20:24:04",
                                "name": "权限管理",
                                "desc": "",
                                "frontpath": "/access/list",
                                "condition": "",
                                "menu": 1,
                                "order": 20,
                                "icon": "connection",
                                "method": "GET",
                                "child": []
                            },
                            {
                                "id": 33,
                                "rule_id": 8,
                                "status": 1,
                                "create_time": "2020-01-04 18:15:47",
                                "update_time": "2021-12-21 20:18:11",
                                "name": "角色管理",
                                "desc": "",
                                "frontpath": "/role/list",
                                "condition": "",
                                "menu": 1,
                                "order": 20,
                                "icon": "histogram",
                                "method": "GET",
                                "child": []
                            }
                        ]
                    },
                    {
                        "id": 9,
                        "rule_id": 0,
                        "status": 1,
                        "create_time": "2019-08-11 13:36:50",
                        "update_time": "2021-12-21 19:10:15",
                        "name": "系统设置",
                        "desc": "set_base",
                        "frontpath": null,
                        "condition": null,
                        "menu": 1,
                        "order": 20,
                        "icon": "setting",
                        "method": "GET",
                        "child": [{
                                "id": 23,
                                "rule_id": 9,
                                "status": 1,
                                "create_time": "2019-12-28 13:47:15",
                                "update_time": "2021-12-21 20:23:12",
                                "name": "基础设置",
                                "desc": "set_base",
                                "frontpath": "/setting/base",
                                "condition": "",
                                "menu": 1,
                                "order": 19,
                                "icon": "baseball",
                                "method": "GET",
                                "child": []
                            },
                            {
                                "id": 26,
                                "rule_id": 9,
                                "status": 1,
                                "create_time": "2019-12-28 13:47:57",
                                "update_time": "2021-12-21 20:23:22",
                                "name": "交易设置",
                                "desc": "set_payment",
                                "frontpath": "/setting/buy",
                                "condition": "",
                                "menu": 1,
                                "order": 20,
                                "icon": "credit-card",
                                "method": "GET",
                                "child": []
                            },
                            {
                                "id": 24,
                                "rule_id": 9,
                                "status": 1,
                                "create_time": "2019-12-28 13:47:27",
                                "update_time": "2021-12-21 20:20:53",
                                "name": "物流设置",
                                "desc": "set_express",
                                "frontpath": "/setting/ship",
                                "condition": "",
                                "menu": 1,
                                "order": 21,
                                "icon": "bicycle",
                                "method": "GET",
                                "child": []
                            }
                        ]
                    },
                    {
                        "id": 180,
                        "rule_id": 0,
                        "status": 1,
                        "create_time": "2022-05-03 17:51:24",
                        "update_time": "2022-05-03 17:52:58",
                        "name": "分销模块",
                        "desc": "",
                        "frontpath": "",
                        "condition": "",
                        "menu": 1,
                        "order": 30,
                        "icon": "shopping-cart",
                        "method": "GET",
                        "child": [{
                                "id": 181,
                                "rule_id": 180,
                                "status": 1,
                                "create_time": "2022-05-03 17:52:15",
                                "update_time": "2022-05-03 17:52:15",
                                "name": "分销员管理",
                                "desc": "",
                                "frontpath": "/distribution/index",
                                "condition": "",
                                "menu": 1,
                                "order": 50,
                                "icon": "user-filled",
                                "method": "GET",
                                "child": []
                            },
                            {
                                "id": 182,
                                "rule_id": 180,
                                "status": 1,
                                "create_time": "2022-05-03 17:52:35",
                                "update_time": "2022-05-03 17:52:35",
                                "name": "分销设置",
                                "desc": "",
                                "frontpath": "/distribution/setting",
                                "condition": "",
                                "menu": 1,
                                "order": 50,
                                "icon": "set-up",
                                "method": "GET",
                                "child": []
                            }
                        ]
                    },
                    {
                        "id": 172,
                        "rule_id": 0,
                        "status": 1,
                        "create_time": "2021-12-21 19:10:34",
                        "update_time": "2021-12-21 19:10:47",
                        "name": "其他模块",
                        "desc": "",
                        "frontpath": "",
                        "condition": "",
                        "menu": 1,
                        "order": 50,
                        "icon": "mostly-cloudy",
                        "method": "GET",
                        "child": [{
                                "id": 11,
                                "rule_id": 172,
                                "status": 1,
                                "create_time": "2019-12-28 13:38:32",
                                "update_time": "2021-12-21 20:23:43",
                                "name": "图库管理",
                                "desc": "image",
                                "frontpath": "/image/list",
                                "condition": null,
                                "menu": 1,
                                "order": 20,
                                "icon": "picture-filled",
                                "method": "GET",
                                "child": []
                            },
                            {
                                "id": 149,
                                "rule_id": 172,
                                "status": 1,
                                "create_time": "2021-06-11 23:21:24",
                                "update_time": "2021-12-21 20:23:33",
                                "name": "公告管理",
                                "desc": "set_notice",
                                "frontpath": "/notice/list",
                                "condition": "",
                                "menu": 1,
                                "order": 50,
                                "icon": "notification",
                                "method": "GET",
                                "child": []
                            }
                        ]
                    }
                ],
                "ruleNames": [
                    "createRule,POST",
                    "updateRule,POST",
                    "deleteRule,POST",
                    "getRuleList,GET",
                    "updateRuleStatus,POST",
                    "createRole,POST",
                    "updateRole,POST",
                    "deleteRole,POST",
                    "getRoleList,GET",
                    "updateRoleStatus,POST",
                    "getGoodsList,GET",
                    "getCurrentImageList,GET",
                    "getImageClassList,GET",
                    "createImageClass,POST",
                    "updateImageClass,POST",
                    "deleteImageClass,POST",
                    "uploadImage,POST",
                    "updateImage,POST",
                    "deleteImage,POST",
                    "getCategoryList,GET",
                    "createCategory,POST",
                    "sortCategory,POST",
                    "updateCategory,POST",
                    "updateCategoryStatus,POST",
                    "deleteCategory,POST",
                    "getSkusList,GET",
                    "createSkus,POST",
                    "updateSkus,POST",
                    "updateSkusStatus,POST",
                    "deleteSkus,POST",
                    "getOrderList,GET",
                    "deleteOrder,POST",
                    "shipOrder,POST",
                    "refundOrder,POST",
                    "exportOrder,POST",
                    "getCommentList,GET",
                    "reviewComment,POST",
                    "updateCommentStatus,POST",
                    "getUserList,GET",
                    "createUser,POST",
                    "updateUser,POST",
                    "updateUserStatus,POST",
                    "deleteUser,POST",
                    "getUserLevelList,GET",
                    "createUserLevel,POST",
                    "updateUserLevel,POST",
                    "updateUserLevelStatus,POST",
                    "deleteUserLevel,POST",
                    "deleteManager,POST",
                    "getManagerList,GET",
                    "createManager,POST",
                    "updateManager,POST",
                    "updateManagerStatus,POST",
                    "getSysSetting,GET",
                    "sysconfigUpload,POST",
                    "setSysSetting,POST",
                    "getSysSetting,GET",
                    "setSysSetting,POST",
                    "readGoods,GET",
                    "updateGoodsSkus,POST",
                    "setGoodsBanner,POST",
                    "restoreGoods,POST",
                    "destroyGoods,POST",
                    "deleteGoods,POST",
                    "updateGoodsStatus,POST",
                    "createGoods,POST",
                    "updateGoods,POST",
                    "checkGoods,POST",
                    "createGoodsSkusCard,POST",
                    "sortGoodsSkusCard,POST",
                    "updateGoodsSkusCard,POST",
                    "deleteGoodsSkusCard,POST",
                    "createGoodsSkusCardValue,POST",
                    "updateGoodsSkusCardValue,POST",
                    "deleteGoodsSkusCardValue,POST",
                    "getNoticeList,GET",
                    "createNotice,POST",
                    "updateNotice,POST",
                    "deleteNotice,POST",
                    "getCouponList,GET",
                    "createCoupon,POST",
                    "updateCoupon,POST",
                    "updateCouponStatus,POST",
                    "getCategoryGoods,GET",
                    "connectCategoryGoods,POST",
                    "deleteCategoryGoods,POST",
                    "getStatistics1,GET",
                    "getStatistics2,GET",
                    "getStatistics3,GET",
                    "deleteCoupon,POST",
                    "getExpressCompanyList,GET",
                    "setRoleRules,POST"
                ]
            }
        }
    },
}, ]
