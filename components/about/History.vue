<template>
  <Content>
    <div class="wrapper">
      <h1>
        (주)좋은이엔지가
        <br />
        걸어온 발자취입니다.
      </h1>
      <history-item :content="content" />
    </div>
  </Content>
</template>

<script>
  import HistoryItem from '@@/components/about/HistoryItem.vue'
  import Content from '@@/components/common/Content.vue'

  export default {
    components: {
      HistoryItem,
      Content,
    },
    props: {
      content: {
        type: Array,
        default: () => [],
      },
    },
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    margin: 0 6rem;

    h1 {
      margin-bottom: 3rem;
    }
  }
</style>
