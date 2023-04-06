<template>
  <Content>
    <section v-for="table in content" :key="table.title">
      <h1>{{ table.title }}</h1>
      <perform-card-list v-if="table.grid" :data="table" />
      <perform-table v-else :data="table" />
    </section>
  </Content>
</template>

<script>
  import Content from '@@/components/common/Content'
  import PerformTable from '@@/components/performance/PerformTable'
  import PerformCardList from '@@/components/performance/PerformCardList'

  export default {
    async asyncData({ params }) {
      const ret = {}
      const { scope, index } = params
      await import(`@@/assets/data/performance/${scope}/${index}`).then(module => {
        ret.content = module.default
      })
      return ret
    },
    components: {
      Content,
      PerformTable,
      PerformCardList,
    },
  }
</script>

<style lang="scss" scoped>
  .content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
</style>
