<template>
  <common-card title="累计用户数" :value="userToday">
    <template>
      <!-- 图表 -->
      <v-chart :options="getOptions()"></v-chart>
    </template>
    <template v-slot:footer>
      <div class="total-users-footer">
        <span>日同比</span>
        <span class="emphasis">{{userGrowthLastDay}}%</span>
        <div class="increase"></div>
        <span class="month">月同比</span>
        <span class="emphasis">{{userGrowthLastMonth}}%</span>
        <div class="decrease"></div>
      </div>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '../mixins/commonCardMixin'
import commonDataMixin from '../mixins/commonDataMixin'
export default {
  mixins: [commonCardMixin, commonDataMixin],
  methods: {
    getOptions () {
      return {
        tooltip: {},
        xAxis: {
          type: 'value',
          show: false
        },
        yAxis: {
          type: 'category',
          show: false
        },
        series: [{
          name: '今日平台用户数',
          type: 'bar',
          data: [this.userTodayNumber],
          barWidth: '10px',
          itemStyle: {
            color: '#45c946'
          }
        },
        {
          name: '上月平台用户数',
          type: 'bar',
          data: [this.userTotal],
          barWidth: '10px',
          barGap: '-100%',
          z: "-1",
          itemStyle: {
            color: '#eee'
          }
        },
        {
          type: 'custom', // 自定义数据
          data: [this.userTodayNumber],
          renderItem: (params, api) => {
            const value = api.value(0)
            const endPoint = api.coord([value, 0]) // 找到x=200 y=0这个点的坐标
            return {
              type: 'group',
              position: endPoint,
              children: [{
                type: 'path',
                shape: {
                  d: 'M1024 255.996 511.971 767.909 0 255.996 1024 255.996z', // svg图像
                  x: -5,
                  y: -20, // x y轴偏移
                  width: 10,
                  height: 10, // 宽高
                  layout: 'cover' // PathData 拉伸为矩形的长宽比，完全填满矩形，不会超出矩形
                },
                style: {
                  fill: '#45c946'
                }
              }, {
                type: 'path',
                shape: {
                  d: 'M0 767.909l512.029-511.913L1024 767.909 0 767.909z',
                  x: -5,
                  y: 10,
                  width: 10,
                  height: 10,
                  layout: 'cover'
                },
                style: {
                  fill: '#45c946'
                }
              }]
            }
          }
        }],
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.total-users-footer {
  display: flex;
  align-items: center;
  .month {
    margin-left: 10px;
  }
}
</style>
