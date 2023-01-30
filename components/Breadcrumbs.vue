<template>
  <div class="nav" v-if="$route.name !== 'index'">
    <div
      class="nav-item"
      v-for="(crumb, index) in breadcrumbs"
      :key="crumb.name + index"
      @mouseenter="openDropdown(index)"
      @mouseleave="closeDropdown"
    >
      {{ crumb.name }}
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

  export default {
    components: {
      Dropdown,
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
    },
  }
</script>

<style lang="scss" scoped>
  .nav {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #205f83;
    height: 3rem;
    width: 80%;
    display: flex;
    z-index: -1;

    &-item {
      color: $default-white;
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 16rem;
      position: relative;
    }
  }
</style>
