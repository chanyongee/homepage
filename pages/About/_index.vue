<template>
  <component :is="selectedComponents" :content="content"></component>
</template>

<script>
  import AboutPages from '@@/components/about'

  export default {
    async asyncData({ params }) {
      const ret = { content: null }
      const { index } = params
      await import(`@@/assets/data/about/${index}`)
        .then(module => {
          ret.content = module.default
        })
        .catch(() => {})
        .finally(() => {
          ret.index = index
        })
      return ret
    },
    data() {
      return {
        components: AboutPages,
      }
    },
    computed: {
      selectedComponents() {
        return this.components[this.index]
      },
    },
  }
</script>
