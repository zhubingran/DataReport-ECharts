<template>
  <div class="bottom-view">
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">关键词搜索</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <div class="chart-inner">
              <div class="chart">
                <div class="chart-title">搜索用户数</div>
                <div class="chart-data">92,546</div>
                <v-chart :options="searchUserOption"></v-chart>
              </div>
              <div class="chart">
                <div class="chart-title">搜索量</div>
                <div class="chart-data">192,935</div>
                <v-chart :options="searchUserOption"></v-chart>
              </div>
            </div>
            <div class="table-wrapper">
              <el-table :data="tableData">
                <el-table-column prop="rank" label="排名"></el-table-column>
                <el-table-column prop="keyword" label="关键词"></el-table-column>
                <el-table-column prop="count" label="总搜索量"></el-table-column>
                <el-table-column prop="users" label="搜索用户数"></el-table-column>
              </el-table>
              <!-- 翻页器 -->
              <el-pagination
                layout="prev,pager,next"
                :total="100"
                :page-size="4"
                background
                @current-change="onPageChange"
              ></el-pagination>
            </div>
          </div>
        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover">
        <!-- 头部 -->
        <template v-slot:header>
          <div class="title-wrapper">
            <div class="title">分类销售排行</div>
            <div class="radio-wrapper">
              <el-radio-group v-model="radioSelect" size="small">
                <el-radio-button label="品类"></el-radio-button>
                <el-radio-button label="商品"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <!-- 内容 -->
        <template>
          <div class="chart-wrapper">
            <v-chart :options="categoryOption"></v-chart>
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchUserOption: {
        xAxis: {
          type: 'category',
          // 消除左侧间距
          boundaryGap: false
        },
        yAxis: {
          show: false,
          // 自定义y轴坐标系范围
          min: 0,
          max: 350
        },
        series: [
          {
            type: 'line',
            areaStyle: {
              color: 'rgba(95,187,255,.5)'
            },
            data: [100, 150, 200, 250, 200, 150, 100, 50, 100, 150],
            lineStyle: {
              color: 'rgba(95,187,255,.5)'
            },
            itemStyle: {
              opacity: 0
            },
            smooth: true
          }
        ],
        grid: {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        }
      },
      searchNumberOption: {},
      // 列表数据
      tableData: [
        { id: 1, rank: 1, keyword: '北京', count: 100, users: 90, range: '90%' },
        { id: 2, rank: 2, keyword: '北京', count: 100, users: 90, range: '90%' },
        { id: 3, rank: 3, keyword: '北京', count: 100, users: 90, range: '90%' },
        { id: 4, rank: 4, keyword: '北京', count: 100, users: 90, range: '90%' }
      ],
      radioSelect: '品类',
      categoryOption: {}
    }
  },
  methods: {
    // 分页器点击事件
    onPageChange (page) {

    },
    renderPieChart () {
      const mockData = [{
        legendname: '粉面粥店',
        value: 67,
        percent: '15.40',
        itemStyle: {
          color: '#e7e702'
        },
        name: '粉面粥店 | 15.40%'
      },
      {
        legendname: '简餐便当',
        value: 97,
        percent: '22.30',
        itemStyle: {
          color: '#8d7fec'
        },
        name: '简餐便当 | 22.30%'
      },
      {
        legendname: '汉堡披萨',
        value: 92,
        percent: '21.15',
        itemStyle: {
          color: '#5085f2'
        },
        name: '汉堡披萨 | 21.15%'
      }
      ]
      this.categoryOption = {
        title: [{
          text: '品类分布',
          textStyle: {
            fontSize: 14,
            color: '#666'
          },
          left: 20,
          top: 20
        },
        {
          text: '累计订单量',
          // 副标题
          subtext: '320',
          x: '34.5%',
          y: '42.5%',
          textAlign: 'center',
          textStyle: {
            fontSize: 14,
            color: '#999'
          },
          subtextStyle: {
            fontSize: 28,
            color: '#333'
          }
        }],
        // 饼图不需要坐标系 直接写series
        series: [{
          name: '品类分布',
          type: 'pie',
          data: mockData,
          label: {
            normal: {
              show: true,
              position: 'outer',
              formatter: function (params) {
                return params.data.legendname
              }
            }
          },
          // 圆心位置
          center: ['35%', '50%'],
          // 环形 内半径 外半径
          radius: ['45%', '60%'],
          // label旁边的线
          labelLine: {
            normal: {
              // 线段一
              length: 5,
              // 线段二
              length2: 3,
              smooth: true
            }
          },
          // 数据排列顺序 true顺时针
          clockwise: false,
          itemStyle: {
            // 加边距
            borderWidth: 4,
            borderColor: '#fff'
          }
        }],
        // 右侧legend
        legend: {
          type: 'scroll',
          // 垂直方向
          orient: 'vertical',
          height: 250,
          left: '70%',
          top: 'middle',
          textStyle: {
            color: '#8c8c8c'
          }
        },
        tooltip: {
          // 鼠标移到item触发
          trigger: 'item',
          // 定制展示信息
          formatter: function (params) {
            const str = params.seriesName + '<br/>' + params.marker + params.data.legendname + '<br/>' + '数量：' +
              params.data.value + '<br/>' + '占比：' + params.data.percent + '%'
            return str
          }
        }
      }
    }
  },
  mounted () {
    this.renderPieChart()
  }
}
</script>

<style lang="scss" scoped>
.bottom-view {
  display: flex;
  margin-top: 20px;
  .view {
    flex: 1;
    width: 50%;
    box-sizing: border-box;
    &:first-child {
      padding: 0 10px 0 0;
    }
    &:last-child {
      padding: 0 0 0 10px;
    }
    .title-wrapper {
      display: flex;
      align-items: center;
      height: 60px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      font-weight: 500;
      padding: 0 0 0 20px;
      .radio-wrapper {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        padding-right: 20px;
      }
    }
    .chart-wrapper {
      display: flex;
      flex-direction: column;
      height: 452px;
      .chart-inner {
        display: flex;
        padding: 0 10px;
        margin-top: 20px;
        .chart {
          flex: 1;
          padding: 0 10px;
          .chart-title {
            color: #999;
            font-size: 14px;
          }
          .chart-data {
            font-size: 22px;
            color: #333;
            font-weight: 500;
            letter-spacing: 2px;
          }
          .echarts {
            height: 50px;
          }
        }
      }
      .table-wrapper {
        flex: 1;
        margin-top: 20px;
        padding: 0 20px 20px;
        .el-pagination {
          display: flex;
          justify-content: flex-end;
          margin-top: 15px;
        }
      }
    }
  }
}
</style>