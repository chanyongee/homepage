<template>
  <div class="history-item">
    <div v-for="parent in content" :key="parent.year" class="year-wrapper">
      <div class="year">{{ parent.year }}</div>
      <div class="line"></div>
      <ul>
        <li class="desc-item" v-for="child in parent.months" :key="child.month">
          <div class="month">{{ child.month }}</div>
          <div class="desc-list">
            <div class="desc-item" v-for="d in child.desc" :key="d">{{ d }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      content: {
        type: Array,
        default: () => [],
      },
    },
  }
</script>

<style lang="scss" scoped>
  .history-item {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .year-wrapper {
      display: flex;
      gap: 1.5rem;
    }

    .year {
      font-size: 2.5rem;
      color: #205f83;
      font-weight: bold;
    }

    .line {
      align-self: flex-start;
      flex-basis: 10%;
      height: 0.125rem;
      background-color: #205f83;
      flex-grow: 1;
      margin-top: 0.75rem;
    }

    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-basis: 35%;
      gap: 0.5rem;

      li {
        display: flex;
        gap: 0.5rem;

        .month {
          color: #205f83;
          font-weight: bold;
        }

        .desc-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
      }
    }
  }

  @include media('<tablet') {
    .history-item {
      gap: 1rem;

      .year-wrapper {
        gap: 1rem;
      }

      .year {
        font-size: 1.5rem;
      }

      .line {
        flex-grow: 0;
      }

      ul {
        flex-grow: 1;
        li {
          .desc-list {
            font-size: 1rem;
            line-height: 2rem;
            letter-spacing: -1.5px;
          }
        }
      }
    }
  }
</style>
