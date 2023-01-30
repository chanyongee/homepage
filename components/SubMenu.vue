<template>
  <div
    class="sub-menu-bar"
    v-show="menuOpened"
    :class="{ show: menuOpened }"
    @mouseleave="$emit('onMouseleave', $event)"
  >
    <div class="current-menu-big">
      <div class="title">{{ selectedMenu.name }}</div>
    </div>

    <div class="sub-menu-wrapper">
      <div v-for="child in selectedMenu.children" :key="child.path" class="sub-menu-list">
        <div v-if="!selectedMenu.oneColumn" class="child">
          {{ child.name }}
        </div>
        <div class="grandchild-list">
          <div
            v-for="grandchild in child.children"
            :key="grandchild.name"
            class="grandchild"
            :class="{ 'one-column': selectedMenu.oneColumn }"
          >
            <nuxt-link :to="getPath([selectedMenu.path, child.path, grandchild.path])">
              {{ grandchild.name }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    props: {
      menuOpened: {
        type: Boolean,
        default: false,
      },
      selectedMenu: {
        type: Object,
        default: () => {},
      },
    },
    methods: {
      ...mapMutations(['setBreadcrumbs']),
      changeBreadcrumbs(child, grandchild) {
        this.setBreadcrumbs([this.selectedMenu.name, child, grandchild])
      },
      getPath(pathList) {
        const _pathList = pathList.filter(path => path)
        return '/' + _pathList.join('/')
      },
    },
  }
</script>

<style lang="scss" scoped>
  .sub-menu-bar {
    background-color: $default-white;
    border-top: 1px solid $grey;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    min-height: $mid-area-height;
    position: absolute;
    top: $top-area-height;
    left: 0;
    width: 100%;
    transition: background-color 0.5s ease;
    -webkit-transition: background-color 0.5s ease;
    opacity: 0;

    &.show {
      opacity: 1;
    }

    .current-menu-big {
      border-right: 1px solid $grey;
      display: flex;
      justify-content: flex-end;
      padding: 4rem 2rem;
      flex-basis: 30%;
      white-space: nowrap;

      .title {
        font-weight: 500;
        font-size: 46px;
        line-height: 53px;
      }
    }

    .sub-menu-wrapper {
      display: flex;
      flex-basis: 70%;
      gap: 1rem;
      padding: 2rem 2.5rem;
      width: 80%;

      .sub-menu-list {
        display: flex;
        flex-direction: column;
        width: calc(20% - 1rem);
        gap: 1rem;
        word-break: keep-all;

        .child {
          height: 2.5rem;
        }

        .grandchild-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;

          .grandchild {
            color: #666666;
            cursor: pointer;
            font-size: 0.875rem;
            word-break: break-all;

            &.one-column {
              color: #000;
              font-size: 1rem;
            }
          }
        }
      }
    }

    .nav {
      position: absolute;
      bottom: 0;
    }
  }
</style>
