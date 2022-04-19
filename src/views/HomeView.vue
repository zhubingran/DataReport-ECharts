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
import { wordcloud } from '../api/index'



export default {
  name: 'HomeView',
  components: {
    TopView, SalesView, BottomView, MapView
  },
  mounted () {
    wordcloud().catch(err => alert(err.message))
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
