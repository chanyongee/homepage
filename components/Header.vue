<template>
  <div
    class="header"
    :class="[fontColor, { 'main-page': $route.name === 'index' }, { 'menu-opened': menuOpened }]"
    @mouseleave="onMouseleave"
  >
    <div class="header-top" :class="{ 'menu-opened': menuOpened }">
      <div class="logo-wrapper" :class="{ white: menuOpened }">
        <Logo />
      </div>
      <div class="menu-list" @mouseenter="onMouseover">
        <div
          v-for="(menu, index) in menuList"
          :key="menu.path"
          :name="menu.name"
          :path="menu.path"
          class="menu-item"
          :class="{ hovered: menuOpened && hoveredIndex === index }"
          @mouseover.stop="onHoverMenu(index)"
        >
          <nuxt-link :to="menu.defaultPath">
            {{ menu.name }}
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <sub-menu :selected-menu="hoveredMenu" :menu-opened="menuOpened" />
    </div>
    <breadcrumbs />
  </div>
</template>

<script>
  import menuList from '@@/assets/data/menuList'
  import SubMenu from '@@/components/SubMenu'
  import Logo from '@@/components/common/Logo'
  import Breadcrumbs from '@@/components/Breadcrumbs'

  export default {
    components: {
      SubMenu,
      Logo,
      Breadcrumbs,
    },
    data() {
      return {
        menuOpened: false,
        menuList,
        hoveredIndex: 0,
      }
    },
    computed: {
      styleObj() {
        return {
          background: this.menuOpened ? 'white' : '',
          borderBottom: this.menuOpened ? '1px solid rgba(0, 0, 0, 0.1)' : '',
        }
      },
      fontColor() {
        return this.menuOpened || this.$route.name === 'index' ? 'color-black' : 'color-white'
      },
      hoveredMenu() {
        return this.menuList[this.hoveredIndex]
      },
    },
    methods: {
      onMouseover() {
        this.menuOpened = true
      },
      onMouseleave(event) {
        this.menuOpened = false
      },
      onHoverMenu(index) {
        this.hoveredIndex = index
      },
    },
  }
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 2;
    height: $top-area-height;
    transition: background-color 0.5s ease;
    -webkit-transition: background-color 0.5s ease;
    transform: scale(1);

    &.menu-opened {
      background-color: $default-white;
    }

    &-top {
      display: flex;
      border-bottom: 1px solid $grey;
      height: $top-area-height;

      &.menu-opened {
        background-color: $default-white;
        border-bottom: transparent;
      }

      .logo-wrapper {
        display: flex;
        flex-basis: 20%;
        margin: auto 0;
        padding: 1rem 5rem;
        white-space: nowrap;
        justify-content: flex-end;
      }

      .menu-list {
        display: flex;
        flex-basis: 80%;
        gap: 2rem;
        margin-left: 2rem;

        .menu-item {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-basis: 20%;
          height: 100%;
          text-align: center;
          margin: auto 0;
          cursor: pointer;

          &.hovered {
            border-bottom: 5px solid #7f8c8d;
          }
        }
      }

      &.white {
        background-color: $default-white;

        .logo-wrapper {
          .logo {
            color: $default-black;
            &::v-deep {
              svg {
                path:not(:first-child) {
                  fill: $default-black;
                }
              }
            }
          }
        }
      }
    }

    &:not(.main-page) {
      background: url(~@@/assets/images/house.webp) top 40% left 0% no-repeat;
      background-size: cover;
      width: 100%;
      min-height: 25rem;
      position: relative;

      .header-top {
        .logo-wrapper {
          .logo::v-deep {
            svg {
              path:not(:first-child) {
                fill: #5f6a6a;
              }
            }

            span {
              color: #5f6a6a;
            }
          }
        }
      }
    }
  }
</style>
