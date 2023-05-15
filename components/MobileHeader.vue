<template>
  <div v-if="!isMobileHeaderOpened" class="top" :class="{ 'main-page': $route.name === 'index' }">
    <Logo class="logo" @click="$router.push('/')" />
    <Hamburger class="hamburger" @click="setIsMobileHeaderOpened(true)" />
    <breadcrumbs />
  </div>
  <div v-else class="panel">
    <div class="logo-wrapper">
      <Logo class="logo" />
      <Close class="close" @click="setIsMobileHeaderOpened(false)" />
    </div>
    <div class="menu-wrapper">
      <MobileHeaderItem
        v-for="{ name, path, children } in menuList"
        :name="name"
        :menu-list="children"
        :key="name"
        :path="path"
        @close="close"
      />
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import Hamburger from '@@/assets/icons/bars-solid.svg?inline'
  import Close from '@@/assets/icons/close.svg?inline'
  import Logo from '@@/assets/icons/joeun_logo.svg?inline'
  import MobileHeaderItem from '@@/components/header/MobileHeaderItem'
  import menuList from '@@/assets/data/menuList'
  import Breadcrumbs from '@@/components/Breadcrumbs'

  export default {
    components: {
      Hamburger,
      Close,
      Logo,
      MobileHeaderItem,
      Breadcrumbs,
    },
    data() {
      return {
        menuList,
      }
    },
    computed: {
      ...mapState(['isMobileHeaderOpened']),
    },
    methods: {
      ...mapMutations(['setIsMobileHeaderOpened']),
      close() {
        this.setIsMobileHeaderOpened(false)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .top {
    display: flex;
    justify-content: space-between;
    position: absolute;
    height: 7.5rem;
    width: 100%;
    padding: 1rem;

    &:not(.main-page) {
      background: url(~@@/assets/images/house.webp);
    }

    .logo {
      transform: scale(0.5);
      transform-origin: top left;
    }

    .hamburger {
      width: 1.5rem;
      height: 1.5rem;
      z-index: 1;

      path {
        fill: $default-black;
      }
    }
  }

  .panel {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: 2;
    overflow: hidden auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    ::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
    .logo-wrapper {
      border-bottom: 1px solid $grey;
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 6.5rem;
      padding: 1rem;

      .logo {
        transform: scale(0.8);
        transform-origin: top left;

        &::v-deep {
          span {
            bottom: 0.5rem;
          }
        }
      }

      .close {
        transform: scale(0.6);

        path {
          fill: $default-black;
        }
      }
    }
  }
</style>
