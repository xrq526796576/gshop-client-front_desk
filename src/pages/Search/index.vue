<template>
  <div>
    Search
    <br />
    <!-- params:{{this.$route.params.keyword}}
    query:{{this.$route.query.keyword1}}-->
    params:{{keyword}}
    query:{{keyword1}}
  </div>
</template>
<script>
export default {
  name: 'Search',
  props: ['keyword', 'keyword1']
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
</style>