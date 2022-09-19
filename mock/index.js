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
                            "value": 49,
                            "unit": "年",
                            "unitColor": "success",
                            "subTitle": "总支付订单",
                            "subValue": 49,
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
                            "value": "￥3.54",
                            "unit": "年",
                            "unitColor": "primary",
                            "subTitle": "总销售额",
                            "subValue": 3.54,
                            "subUnit": ""
                        },
                        {
                            "title": "新增用户",
                            "value": 16,
                            "unit": "年",
                            "unitColor": "warning",
                            "subTitle": "总用户",
                            "subValue": 16,
                            "subUnit": "人"
                        }
                    ]
                }
            }
        },
    },
]