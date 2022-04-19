<template>
  <ve-wordcloud :data="chartData" height="100%"></ve-wordcloud>
</template>

<script>
export default {
  data () {
    return {
      chartData: {
        columns: ['name', 'value'],
        rows: [{
          name: '慕课网',
          value: 100
        }, {
          name: '慕课网2',
          value: 80
        }, {
          name: '慕课网3',
          value: 60
        }, {
          name: '慕课网4',
          value: 40
        }, {
          name: '慕课网5',
          value: 20
        }, {
          name: '慕课网6',
          value: 10
        }]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>