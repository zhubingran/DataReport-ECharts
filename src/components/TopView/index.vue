<template>
  <div class="top-view">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <total-sales></total-sales>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-sales></total-sales>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-sales></total-sales>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-sales></total-sales>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TotalSales from '../TotalSales'
export default {
  components: {
    TotalSales
  }
}
</script>

<style>
</style>
