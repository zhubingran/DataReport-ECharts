// 从provide 读取接口数据

// 金额千分号
function format(val) {
    // return (+val).toLocaleString()
    const reg = /\d{1,3}(?=(\d{3})+$)/g
    return `${val}`.replace(reg, '$&,')
}

// 封装金额
function wrapperMoney(obj, key) {
    return obj && obj[key] ? `￥ ${format(obj[key])}` : 0
}

// 封装数字
function wrapperNumber(obj, key) {
    return obj && obj[key] ? format(obj[key]) : '￥ 0.00'
}

// 返回原生数字
function wrapperOriginalNumber(obj, key) {
    return obj && obj[key] ? obj[key] : 0
}

// 封装百分数
function wrapperPercentage(obj, key) {
    return obj && obj[key] ? `${obj[key]}%` : '0%'
}

// 封装数组
function wrapperArray(obj, key) {
    return obj && obj[key] ? obj[key] : []
}

// 封装对象
function wrapperObject(obj, key) {
    if (obj && key.indexOf('.') >= 0) {
        const keys = key.split('.')
        keys.forEach((key) => {
            obj = obj[key]
        })
        return obj
    } else {
        return obj && obj[key] ? obj[key] : {}
    }
}

export default {
    computed: {
        reportData() {
            return this.getReportData()
        },
        wordCloud() {
            return this.getWordCloud()
        },
        mapData() {
            return this.getMapData()
        },
        // 累计销售额
        salesToday() {
            return wrapperMoney(this.reportData, 'salesToday')
        },
        // 销售额日同比
        salesGrowthLastDay() {
            return wrapperPercentage(this.reportData, 'salesGrowthLastDay')
        },
        // 销售额月同比
        salesGrowthLastMonth() {
            return wrapperPercentage(this.reportData, 'salesGrowthLastMonth')
        },
        // 昨日销售额
        salesLastDay() {
            return wrapperMoney(this.reportData, 'salesLastDay')
        },
        // 今日订单量
        orderToday() {
            return wrapperNumber(this.reportData, 'orderToday')
        },
        // 昨日订单量
        orderLastDay() {
            return wrapperNumber(this.reportData, 'orderLastDay')
        },
        // 订单销售趋势
        orderTrend() {
            return wrapperArray(this.reportData, 'orderTrend')
        },
        // 今日交易用户数
        orderUser() {
            return wrapperNumber(this.reportData, 'orderUser')
        },
        // 退货率
        returnRate() {
            return wrapperPercentage(this.reportData, 'returnRate')
        },
        // 用户交易趋势
        orderUserTrend() {
            return wrapperArray(this.reportData, 'orderUserTrend')
        },
        orderUserTrendAxis() {
            return wrapperArray(this.reportData, 'orderUserTrendAxis')
        },
        // 截止今日累计用户数
        userToday() {
            return wrapperNumber(this.reportData, 'userToday')
        },
        userTodayNumber() {
            return wrapperOriginalNumber(this.reportData, 'userToday')
        },
        // 日同比
        userGrowthLastDay() {
            return wrapperNumber(this.reportData, 'userGrowthLastDay')
        },
        // 月同比
        userGrowthLastMonth() {
            return wrapperNumber(this.reportData, 'userGrowthLastMonth')
        },
        userTotal() {
            return wrapperOriginalNumber(this.reportData, 'orderToday')
        },
        // 全年销售额
        orderFullYear() {
            return wrapperArray(this.reportData, 'orderFullYear')
        },
        orderFullYearAxis() {
            return wrapperArray(this.reportData, 'orderFullYearAxis')
        },
        // 排行榜
        orderRank() {
            return wrapperArray(this.reportData, 'orderRank')
        },
        userFullYear() {
            return wrapperArray(this.reportData, 'userFullYear')
        },
        userFullYearAxis() {
            return wrapperArray(this.reportData, 'userFullYearAxis')
        },
        userRank() {
            return wrapperArray(this.reportData, 'userRank')
        },
        // 针对品类数据
        category1() {
            return wrapperObject(this.reportData, 'category.data1')
        },
        // 针对商品数据
        category2() {
            return wrapperObject(this.reportData, 'category.data2')
        }
    },
    methods: {
        format(val) {
            return format(val)
        }
    },
    // 获取provide数据
    inject: ['getReportData', 'getWordCloud', 'getMapData']
}
