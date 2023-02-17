<template>
  <Content>
    <section>
      <h1>면허 현황</h1>
      <table class="table">
        <tbody>
          <tr>
            <th>구분</th>
            <th>등록번호</th>
          </tr>
          <tr v-for="license in content[0]" :key="license.name">
            <td>{{ license.name }}</td>
            <td>{{ license.no }}</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section>
      <h2>특허 보유 현황</h2>
      <table class="table">
        <tbody>
          <tr>
            <th>명칭</th>
            <th>출원번호</th>
            <th>발행처</th>
          </tr>
          <tr v-for="license in content[1]" :key="license.name">
            <td>{{ license.name }}</td>
            <td>{{ license.no }}</td>
            <td>{{ license.from }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </Content>
</template>

<script>
  import Content from '@@/components/common/Content'
  export default {
    components: {
      Content,
    },
    props: {
      content: {
        type: Array,
        default: () => [],
      },
    },
  }
</script>

<style lang="scss" scoped>
  section {
    margin-bottom: 4rem;
    h1 {
      margin-bottom: 2rem;
    }

    .table {
      border-top: 2px solid #126bb1;
      width: 100%;

      tr {
        th {
          background: #f3f7fb;
          border: 1px solid #ddd;
          padding: 1rem 0;

          &:first-child {
            width: 60%;
          }
        }

        td {
          padding: 0.5rem;
          border: 1px solid #ddd;
          text-align: center;
        }
      }
    }
  }
</style>
