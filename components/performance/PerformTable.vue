<template>
  <div>
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
    <pagination :page-count="pageCount" @changePage="changePage" />
  </div>
</template>

<script>
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
        rowPerPage: 15,
        selectedPage: 1,
      }
    },
    computed: {
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
  table {
    border-top: 2px solid #126bb1;
    width: 100%;

    tr {
      th {
        background: #f3f7fb;
        border: 1px solid #ddd;
        padding: 1rem 0;
      }

      td {
        padding: 0.5rem;
        border: 1px solid #ddd;
        text-align: center;
        min-width: 9.375rem;
      }
    }
  }
</style>
