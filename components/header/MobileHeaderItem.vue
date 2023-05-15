<template>
  <li @click.stop="opened = !opened">
    <div class="item" :class="[isChild ? 'item-child' : 'item-parent', { up: opened }]">
      <span>{{ name }}</span>
      <div class="icon">
        <IconArrow />
      </div>
    </div>
    <template v-if="opened">
      <ul v-if="!isChild && path !== 'about'">
        <mobile-header-item
          v-for="{ name, path: childPath, children } in _menuList"
          :name="name"
          :key="name"
          :menu-list="children"
          :path="`${path}/${childPath}`"
          is-child
          @close="$emit('close')"
        />
      </ul>
      <ul v-else>
        <li v-for="{ name, path } in _menuList" :key="name" @click="moveTo(path)" class="smallest-item">
          {{ name }}
        </li>
      </ul>
    </template>
  </li>
</template>

<script>
  import IconArrow from '@@/assets/icons/icon-arrow-down.svg?inline'

  export default {
    name: 'MobileHeaderItem',
    components: {
      IconArrow,
    },
    props: {
      name: {
        type: String,
        required: true,
      },
      menuList: {
        type: Array,
        default: () => [],
      },
      isChild: {
        type: Boolean,
        default: false,
      },
      path: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        opened: false,
      }
    },
    computed: {
      _menuList() {
        return this.menuList.length === 1 ? this.menuList[0].children : this.menuList
      },
    },
    methods: {
      moveTo(childPath) {
        this.$emit('close')
        this.$router.push(`/${this.path}/${childPath}`)
      },
    },
  }
</script>

<style lang="scss" scoped>
  li {
    list-style: none;

    .item {
      display: flex;
      justify-content: space-between;

      &.up {
        span {
          color: #8a9a5b;
        }

        svg {
          transform: rotate(0.5turn);
        }
      }

      span {
        align-items: center;
        display: flex;
        font-weight: 500;
      }

      &-parent {
        font-weight: 500;
        padding: 0.5rem 1rem;

        .icon {
          width: 1.5rem;
          height: 1.5rem;
        }
      }

      &-child {
        background: #f5f5f5;
        padding: 0.5rem 1.5rem;
      }
    }

    ul {
      background: #f5f5f5;

      .smallest-item {
        font-size: 0.8rem;
        list-style: circle;
        padding: 0.5rem 2rem;
      }
    }
  }
</style>
