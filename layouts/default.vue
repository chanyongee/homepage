<template>
  <div id="app" class="app" :class="{ noscroll: isMobileHeaderOpened }">
    <Header v-if="!isPhone" />
    <MobileHeader v-else />
    <Nuxt />
    <Footer v-if="$route.name !== 'index'" />
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import menuList from '@@/assets/data/menuList'
  import { throttle } from 'lodash'
  export default {
    data() {
      return {
        menuList,
      }
    },
    computed: {
      ...mapState(['isPhone', 'isMobileHeaderOpened']),
    },
    methods: {
      ...mapMutations(['setBreadcrumbs', 'setIsPhone']),
      findBreadcrumbs(path) {
        const breadcrumbs = path.split('/').slice(1)
        const breadcrumbsKo = []
        breadcrumbs.forEach((crumb, i) => {
          if (i) {
            if ('children' in breadcrumbsKo[i - 1]) {
              const _children = breadcrumbsKo[i - 1].children[0].path
                ? breadcrumbsKo[i - 1].children
                : breadcrumbsKo[i - 1].children[0].children
              breadcrumbsKo.push(_children.find(menu => menu.path === crumb))
            }
          } else {
            breadcrumbsKo.push(this.menuList.find(menu => menu.path === crumb))
          }
        })
        this.setBreadcrumbs(breadcrumbsKo)
      },
      handleResize() {
        this.setIsPhone(window.matchMedia('(max-width: 767px)').matches)
      },
    },
    beforeMount() {
      window.addEventListener('resize', throttle(this.handleResize, 300))
    },
    mounted() {
      const { path, hash } = this.$route
      this.findBreadcrumbs(path, hash)
      this.handleResize()
    },
    watch: {
      $route({ path }) {
        this.findBreadcrumbs(path)
      },
    },
  }
</script>

<style lang="scss">
  @font-face {
    font-family: 'Spoqa';
    src: url('../assets/fonts/SpoqaHanSansNeo-Bold.otf') format('truetype');
    font-weight: 700;
  }
  @font-face {
    font-family: 'Spoqa';
    src: url('../assets/fonts/SpoqaHanSansNeo-Medium.otf') format('truetype');
    font-weight: 600;
  }
  @font-face {
    font-family: 'Spoqa';
    src: url('../assets/fonts/SpoqaHanSansNeo-Regular.otf') format('truetype');
    font-weight: 500;
  }
  @font-face {
    font-family: 'Spoqa';
    src: url('../assets/fonts/SpoqaHanSansNeo-Light.otf') format('truetype');
    font-weight: 400;
  }
  @font-face {
    font-family: 'Spoqa';
    src: url('../assets/fonts/SpoqaHanSansNeo-Thin.otf') format('truetype');
    font-weight: 300;
  }

  @font-face {
    font-family: 'Logo';
    src: url('../assets/fonts/GowunDodum-Regular.ttf') format('truetype');
  }

  html {
    font-size: 16px;
  }

  * {
    font-family: Spoqa;
    font-weight: 400;
    color: $default-black;
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  html,
  body,
  #__nuxt,
  #__layout,
  #app {
    height: 100%;
  }

  #app {
    &.noscroll {
      overflow: hidden;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    margin: 0;
    padding: 0;

    li {
      list-style-type: none;
    }
  }

  table {
    border-collapse: collapse;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 3.75rem;
    letter-spacing: -0.0063rem;
  }

  h1,
  h2,
  h3 {
    margin: 0;
    font-weight: 600;
  }

  @include media('<tablet') {
    h1 {
      font-size: 1.5rem;
      line-height: 2.5rem;
    }
  }
</style>
