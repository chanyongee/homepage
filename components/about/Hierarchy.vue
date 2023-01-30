<template>
  <Content>
    <h1>조직도</h1>
    <img :src="require('@@/assets/images/조직도.png')" alt="" />
  </Content>
</template>

<script>
  import Content from '@@/components/common/Content'
  export default {
    components: {
      Content,
    },
  }
</script>

<style lang="scss" scoped>
  h1 {
    margin-bottom: 4rem;
  }
  img {
    width: 100%;
  }
</style>
