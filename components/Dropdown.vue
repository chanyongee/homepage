<template>
  <ul v-if="opened" class="dropdown">
    <li v-for="menu in _list" :key="menu.name" @click="moveTo(menu.defaultPath || getPath(menu.path))">
      {{ menu.name }}
    </li>
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
      getPath(endpoint) {
        if (!endpoint) {
          return
        }
        const current = this.$route.path.split('/').slice(1)
        current[current.length - 1] = endpoint
        return '/' + current.join('/')
      },
      moveTo(path) {
        if (!path) {
          return
        }
        this.$emit('closeDropdown')
        this.$router.push(path)
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
  }
</style>
