<template>
  <div id="app" class="app">
    <Header />
    <Nuxt />
    <Footer v-if="$route.name !== 'index'" />
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import menuList from '@@/assets/data/menuList'

  export default {
    data() {
      return {
        menuList,
      }
    },
    methods: {
      ...mapMutations(['setBreadcrumbs']),
      findBreadcrumbs(path) {
        const breadcrumbs = path.split('/').slice(1)
        const breadcrumbsKo = []
        breadcrumbs.forEach((crumb, i) => {
          if (i) {
            const _children = breadcrumbsKo[i - 1].children[0].path
              ? breadcrumbsKo[i - 1].children
              : breadcrumbsKo[i - 1].children[0].children
            breadcrumbsKo.push(_children.find(menu => menu.path === crumb))
          } else {
            breadcrumbsKo.push(this.menuList.find(menu => menu.path === crumb))
          }
        })
        this.setBreadcrumbs(breadcrumbsKo)
      },
    },
    mounted() {
      this.findBreadcrumbs(this.$route.path)
    },
    watch: {
      $route(to) {
        this.findBreadcrumbs(to.path)
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
    src: url('../assets/fonts/Gugi-Regular.ttf') format('truetype');
  }

  * {
    font-family: Spoqa;
    color: $default-black;
    box-sizing: border-box;
  }

  body {
    margin: 0;
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
</style>
