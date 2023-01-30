<template>
  <Content>
    <component :is="selectedPage" :data="data"></component>
  </Content>
</template>

<script>
  import Content from '@@/components/common/Content'
  import Introduction from '@@/components/story/Introduction'
  import EachPart from '@@/components/story/EachPart'

  export default {
    async asyncData({ params }) {
      const ret = {}
      const { scope, index } = params
      await import(`@@/assets/data/story/${scope}/${index}`).then(module => {
        ret.data = module.default
      })
      return ret
    },
    components: {
      Content,
      Introduction,
      EachPart,
    },
    computed: {
      selectedPage() {
        return this.data.intro ? Introduction : EachPart
      },
    },
  }
</script>
