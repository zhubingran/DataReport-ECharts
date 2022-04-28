<template>
  <ve-wordcloud :data="chartData" height="100%" />
</template>

<script>
import commonDataMixin from '../mixins/commonDataMixin'
export default {
  mixins: [commonDataMixin],
  watch: {
    wordCloud () {
      const data = []
      this.wordCloud.forEach(item => {
        data.push({
          name: item.word,
          value: item.count
        })
      })
      this.chartData = {
        columns: ['name', 'value'],
        rows: data
      }
    }
  },
  data () {
    return {
      chartData: {}
    }
  }
}
</script>

<style lang="scss" scoped>
</style>