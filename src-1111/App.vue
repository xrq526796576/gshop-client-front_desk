<template>
  <div class="outer">
    <!-- 头部 -->
    <Header></Header>
    <!-- 商品分类导航 -->
    <router-view></router-view>
    <!-- 底部 -->
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
</style>