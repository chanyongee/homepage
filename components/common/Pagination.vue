<template>
  <div>
    <div>
      <paginate
        :page-count="pageCount"
        :page-range="pageRange"
        :click-handler="changePage"
        :prev-text="'<'"
        :next-text="'>'"
        :container-class="'pagination'"
        :page-class="'page-item'"
      ></paginate>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      pageCount: {
        type: Number,
        default: 0,
      },
      pageRange: {
        type: Number,
        default: 5,
      },
    },
    data() {
      return {
        selectPage: 1,
        pageCount: 15,
      }
    },
    methods: {
      changePage: function (pageNum) {
        this.$emit('changePage', pageNum)
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
</style>
