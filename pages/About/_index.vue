<template>
  <component :is="selectedComponents" :content="content" :is-naver-loaded="isNaverLoaded"></component>
</template>

<script>
  import AboutPages from '@@/components/about'

  export default {
    head() {
      return {
        script: [
          {
            hid: 'navermap',
            src: 'https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=0d9nbomngk',
            async: false,
            defer: true,
            callback: () => {
              this.isNaverLoaded = true
            },
          },
        ],
      }
    },
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
        isNaverLoaded: false,
      }
    },
    computed: {
      selectedComponents() {
        return this.components[this.index]
      },
    },
  }
</script>
