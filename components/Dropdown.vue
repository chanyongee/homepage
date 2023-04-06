<template>
  <ul v-if="opened" class="dropdown">
    <li v-for="menu in _list" :key="menu.name" @click="move(menu)" v-html="menu.name"></li>
  </ul>
</template>

<script>
  export default {
    props: {
      opened: {
        type: Boolean,
        default: false,
      },
      list: {
        type: Array,
        default: () => [],
      },
    },
    methods: {
      move({ defaultPath, path, hash }) {
        if (defaultPath) {
          this.$router.push(defaultPath)
        } else if (path) {
          const _path = hash ? path + '#' + hash : path
          this.$emit('closeDropdown')
          this.$router.push(_path)
        }
      },
    },
    computed: {
      _list() {
        return this.list.length === 1 ? this.list[0].children : this.list
      },
    },
  }
</script>

<style lang="scss" scoped>
  .dropdown {
    position: absolute;
    top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
    background: white;
    border: 1px solid $grey;
    width: 100%;
    justify-content: center;
    align-items: center;
    box-shadow: 3px 3px 7px rgb(0 0 0 / 10%);

    li {
      cursor: pointer;
      text-align: center;
    }
  }

  @include media('<tablet') {
    .dropdown {
      align-items: flex-start;

      li {
        letter-spacing: -2px;
      }
    }
  }
</style>
