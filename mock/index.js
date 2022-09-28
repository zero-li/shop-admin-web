export default [

    // 后台首页统计1
    {
        url: '/admin/statistics1',
        method: 'get',
        response: ({
            body
        }) => {
            console.log('query>>>>>>>>', body)
            return {
                "msg": "ok",
                "data": {
                    "panels": [{
                            "title": "支付订单",
                            "value": 51,
                            "unit": "年",
                            "unitColor": "success",
                            "subTitle": "总支付订单",
                            "subValue": 51,
                            "subUnit": ""
                        },
                        {
                            "title": "订单量",
                            "value": 555,
                            "unit": "周",
                            "unitColor": "danger",
                            "subTitle": "转化率",
                            "subValue": "60%",
                            "subUnit": ""
                        },
                        {
                            "title": "销售额",
                            "value": 3.74,
                            "unit": "年",
                            "unitColor": "",
                            "subTitle": "总销售额",
                            "subValue": 3.74,
                            "subUnit": ""
                        },
                        {
                            "title": "新增用户",
                            "value": 21,
                            "unit": "年",
                            "unitColor": "warning",
                            "subTitle": "总用户",
                            "subValue": 21,
                            "subUnit": "人"
                        }
                    ]
                }
            }
        },
    },
    // 后台首页统计 店铺及商品提示
    {
        url: '/admin/statistics2',
        method: 'get',
        response: ({
            query
        }) => {
            console.log('query>>>>>>>>', query.type)

            return {
                "msg": "ok",
                "data": {
                    "goods": [{
                        "label": "审核中",
                        "value": 8
                    }, {
                        "label": "销售中",
                        "value": 30
                    }, {
                        "label": "已下架",
                        "value": 32
                    }, {
                        "label": "库存预警",
                        "value": 6
                    }],
                    "order": [{
                        "label": "待付款",
                        "value": 171
                    }, {
                        "label": "待发货",
                        "value": 16
                    }, {
                        "label": "已发货",
                        "value": 1
                    }, {
                        "label": "退款中",
                        "value": 17
                    }]
                }
            };


        },
    },

    // 后台首页统计 订单统计 图标
    {
        url: '/admin/statistics3',
        method: 'get',
        response: ({
            query
        }) => {
            console.log('query>>>>>>>>', query.type)
            if (query.type == 'month') {
                return {
                    "msg": "ok",
                    "data": {
                        "x": ["07-24", "07-23", "07-22", "07-21", "07-20", "07-19", "07-18", "07-17", "07-16", "07-15",
                            "07-14", "07-13", "07-12", "07-11", "07-10", "07-09", "07-08", "07-07", "07-06", "07-05",
                            "07-04", "07-03", "07-02", "07-01", "06-30", "06-29", "06-28", "06-27", "06-26", "06-25"
                        ],
                        "y": [51, 0, 1, 1, 0, 2, 1, 0, 0, 0, 2, 0, 1, 0, 5, 1, 0, 0, 0, 1, 0, 0, 4, 6, 0, 0, 0, 0, 0, 0]
                    }
                };

            } else if (query.type == 'week') {
                return {
                    "msg": "ok",
                    "data": {
                        "x": ["07-24", "07-23", "07-22", "07-21", "07-20", "07-19", "07-18"],
                        "y": [51, 0, 1, 1, 0, 2, 1]
                    }
                };
            } else {
                return {
                    "msg": "ok",
                    "data": {
                        "x": ["00", "23", "22", "21", "20", "19", "18", "17", "16", "15", "14", "13", "12", "11", "10", "09", "08", "07", "06", "05", "04", "03", "02", "01"],
                        "y": [0, 0, 0, 0, 0, 4, 6, 3, 0, 6, 3, 0, 0, 11, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    }
                };
            }


        },
    },
]