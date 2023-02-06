<template>
  <ul class="card-list">
    <li v-for="(desc, num) in body" :key="desc[0]" class="card" :class="{ fadeIn }">
      <span class="num">{{ num + 1 }}</span>
      <h3 class="title">{{ desc[0] }}</h3>
      <ul class="desc-list">
        <li class="desc" v-for="index in desc.length - 1" :key="index">
          {{ `${data.headers[index]}: ${desc[index]}` }}
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object,
        default: () => {},
      },
    },
    computed: {
      body() {
        return this.data.body
      },
    },
    data() {
      return {
        fadeIn: false,
      }
    },
    mounted() {
      this.fadeIn = true
    },
  }
</script>

<style lang="scss" scoped>
  .card-list {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    width: 100%;

    .card {
      display: flex;
      flex-direction: column;
      flex-basis: calc(33.3% - 4rem);
      padding: 2.5rem 2.5rem 1.5rem 2.5rem;
      opacity: 0;
      transform: translate3d(0, 100px, 0);
      transition: border 0.3s ease, opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
        transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      border: 1px solid $grey;

      &.fadeIn {
        opacity: 1;
        transform: translateZ(0);
      }

      &:hover {
        border: 1px solid #00b4ef;

        .title {
          border-top: 1px solid #00b4ef;
        }
      }

      .num {
        font-weight: 700;
        font-size: 1.125rem;
      }

      .title {
        margin-top: 0.567vw;
        padding-top: 1.587vw;
        padding-left: 0.5rem;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        font-weight: 700;
        font-size: 1.5rem;
        min-height: 3.75rem;
        word-break: keep-all;
        transition: border-top 0.3s ease;
      }

      .desc-list {
        font-weight: 500;
        font-size: 0.875rem;
        color: rgba(0, 0, 0, 0.5);
        padding-left: 0.5rem;
      }

      .img-wrapper {
        height: 9.375rem;
        overflow: hidden;

        img {
          width: 100%;
          opacity: 0.7;
        }
      }
    }
  }

  @include media('<desktop') {
    .card-list {
    }
  }
</style>
