<template>
  <div class="nav" v-if="$route.name !== 'index'">
    <div
      class="nav-item"
      v-for="(crumb, index) in breadcrumbs"
      :key="crumb.name + index"
      @mouseenter="openDropdown(index)"
      @mouseleave="closeDropdown"
    >
      {{ parse(crumb.name) }}
      <!-- <span>&nbsp;{{ opened[index] ? '⏤' : '🞡' }}</span> -->
      <div class="icon" :class="{ opened: opened[index] }">
        &nbsp;
        <MinusIcon v-if="opened[index]" />
        <PlusIcon v-else />
      </div>
      <dropdown
        :opened="opened[index]"
        :list="index ? breadcrumbs[index - 1].children : firstCrumb"
        @closeDropdown="closeDropdown"
      />
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Dropdown from '@@/components/Dropdown'
  import menuList from '@@/assets/data/menuList'
  import PlusIcon from '@@/assets/icons/icon_plus.svg?inline'
  import MinusIcon from '@@/assets/icons/icon_minus.svg?inline'

  export default {
    components: {
      Dropdown,
      PlusIcon,
      MinusIcon,
    },
    data() {
      return {
        menuList,
        opened: [false, false, false],
        openedIndex: -1,
      }
    },
    computed: {
      ...mapState(['breadcrumbs']),
      firstCrumb() {
        return this.menuList.map(({ name, defaultPath, path }) => ({ name, defaultPath, path }))
      },
    },
    methods: {
      openDropdown(selected) {
        if (selected === this.openedIndex) {
          this.closeDropdown()
          return
        }
        this.opened = this.opened.map((_, index) => (index === selected ? true : false))
        this.openedIndex = selected
      },
      closeDropdown() {
        this.opened = [false, false, false]
        this.openedIndex = -1
      },
      parse(name) {
        return name.replace('<br/>', '')
      },
    },
  }
</script>

<style lang="scss" scoped>
  .nav {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #7f8c8d;
    height: 3rem;
    width: 80%;
    display: flex;
    z-index: 1;

    &-item {
      color: $default-white;
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 16rem;
      position: relative;

      .icon.opened {
        &::v-deep svg line:nth-child(2) {
          stroke: transparent;
        }
      }
    }
  }

  @include media('<tablet') {
    .nav {
      font-size: 0.875rem;
      height: 2.5rem;
      justify-content: space-around;
      width: 100%;
      &-item {
        min-width: 30%;
      }
    }
  }
</style>
