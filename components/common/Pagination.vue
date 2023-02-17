<template>
  <paginate v-model="selectedPage" :per-page="isPhone ? 10 : 15" :records="records" :options="options" />
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    props: {
      records: {
        type: Number,
        default: 0,
      },
    },
    data() {
      return {
        selectedPage: 1,
        options: {
          chunk: 5,
          edgeNavigation: false,
          texts: { count: '' },
        },
      }
    },
    computed: {
      ...mapState(['isPhone']),
    },
    methods: {
      changePage: function (pageNum) {
        this.$emit('changePage', pageNum)
      },
    },
    watch: {
      selectedPage(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.changePage(newVal)
        }
      },
    },
  }
</script>

<style lang="scss">
  .pagination {
    display: flex;
    margin: 24px;
    justify-content: center;

    li {
      min-width: 32px;
      text-align: center;
      margin: 0 0.25rem;
      border-radius: 6px;
      border: 1px solid #eee;
      color: #666;

      a {
        display: block;
        width: 100%;
      }

      &:hover {
        background: #f3f7fb;
      }

      &.active {
        background-color: #f3f7fb;
        color: $default-black;

        & {
          a {
            color: #666;
            text-decoration: none;
          }
        }
      }
    }
  }

  .pagination li.active a {
    color: $default-black;
  }

  @include media('<tablet') {
    .pagination {
      li {
        min-width: unset;
        flex-basis: auto;
        flex-grow: 1;
      }
    }
  }
</style>
