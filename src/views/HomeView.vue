<template>
  <div class="home">
    <top-view></top-view>
    <sales-view></sales-view>
    <bottom-view></bottom-view>
    <map-view></map-view>
  </div>
</template>

<script>
import TopView from '../components/TopView'
import SalesView from '../components/SalesView'
import BottomView from '../components/BottomView'
import MapView from '../components/MapView'
import { wordCloud, screenData, mapScatter } from '../api/index'



export default {
  name: 'HomeView',
  components: {
    TopView, SalesView, BottomView, MapView
  },
  mounted () {
    screenData().then(data => this.reportData = data)
    wordCloud().then(data => this.wordCloud = data)
    mapScatter().then(data => this.mapData = data)
  },
  data () {
    return {
      reportData: null,
      wordCloud: null,
      mapData: null
    }
  },
  methods: {
    getReportData () {
      return this.reportData
    },
    getWordCloud () {
      return this.wordCloud
    },
    getMapData () {
      return this.mapData
    }
  },
  provide () {
    return {
      getReportData: this.getReportData,
      getWordCloud: this.getWordCloud,
      getMapData: this.getMapData
    }
  }
}
</script>

<style>
.home {
  width: 100%;
  background: #eee;
  padding: 20px;
  box-sizing: border-box;
}
</style>
