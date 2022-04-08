<template>
  <div class="sales-view">
    <el-card shadow="hover">
      <template v-slot:header>
        <div class="menu-wrapper">
          <el-menu mode="horizontal">
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>
        </div>
      </template>
      <template>
        <div>222</div>
      </template>
    </el-card>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.sales-view {
  margin-top: 20px;
}
</style>