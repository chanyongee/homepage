<template>
  <div>
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th v-for="th in data.headers" :key="th">
              {{ th }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="tds in selectedBody" :key="tds[0] + tds[1]">
            <td v-for="tdx in tds.length" :key="tdx">{{ tds[tdx - 1] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- <table v-else-if="data.headers.length === 2" class="two-headers">
      <thead>
        <tr v-for="th in data.headers" :key="th">
          <th>{{ th }}</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="tds in selectedBody">
          <tr v-for="tdx in tds.length" :key="tdx">
            <td>{{ tds[tdx - 1] }}</td>
          </tr>
        </template>
      </tbody>
    </table> -->
    <pagination :page-count="pageCount" :records="data.body.length" @changePage="changePage" />
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Pagination from '@@/components/common/Pagination'

  export default {
    components: {
      Pagination,
    },
    props: {
      data: {
        type: Object,
        default: () => {},
      },
    },
    data() {
      return {
        selectedPage: 1,
      }
    },
    computed: {
      ...mapState(['isPhone']),
      rowPerPage() {
        return this.isPhone ? 15 : 20
      },
      pageCount() {
        return Math.ceil(this.data.body.length / this.rowPerPage)
      },
      selectedBody() {
        const start = this.rowPerPage * (this.selectedPage - 1)
        const end = start + this.rowPerPage
        return this.data.body.slice(start, end)
      },
    },
    methods: {
      changePage(index) {
        this.selectedPage = index
      },
    },
  }
</script>

<style lang="scss" scoped>
  .table-wrapper {
    table {
      border-top: 2px solid #ddd;
      border-bottom: 2px solid #ddd;
      width: 100%;

      tr {
        th {
          border-top: 1px solid #ddd;
          border-bottom: 1px solid #ddd;
          padding: 1rem 0;
          font-weight: 500;
        }

        td {
          padding: 0.5rem;
          border-top: 1px solid #ddd;
          border-bottom: 1px solid #ddd;
          text-align: center;
          min-width: 9.375rem;
        }
      }
    }
  }

  @include media('<tablet') {
    .table-wrapper {
      overflow: auto;

      table {
        font-size: 0.9rem;

        tr {
          th {
            padding: 0.5rem 0;
          }
          td {
            padding: 0.25rem;
            min-width: 6rem;
            white-space: nowrap;
          }
        }

        &.two-headers {
          tr {
            th {
              padding: 0;
            }
            &:nth-child(2n-1) {
              td {
                border-top: 2px solid #ddd;
              }
            }
          }
        }
      }
    }
  }
</style>
