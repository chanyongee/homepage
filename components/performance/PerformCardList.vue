<template>
  <!-- <ul class="card-list">
    <li v-for="(desc, num) in body" :key="num" class="card" :class="{ isPhone }" ref="card">
      <span class="num">{{ num + 1 }}</span>
      <h3 class="title">{{ desc[0] }}</h3>
      <ul class="desc-list">
        <li class="desc" v-for="index in desc.length - 1" :key="index">
          {{ `${data.headers[index]}: ${desc[index]}` }}
        </li>
      </ul>
    </li>
  </ul> -->
  <ul class="card-list">
    <li v-for="(desc, num) in body" :key="num" class="card" :class="{ isPhone }" ref="card">
      <h3 class="title">{{ desc[0] }}</h3>
      <ul class="desc-list">
        <li class="desc">
          {{ desc[1] }}
        </li>
        <li class="desc" v-for="index in desc.length - 3" :key="index">
          {{ `${data.headers[index + 1]}: ${desc[index + 1]}` }}
        </li>
        <li class="desc">
          {{ desc[4] }}
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    props: {
      data: {
        type: Object,
        default: () => {},
      },
    },
    computed: {
      ...mapState(['isPhone']),
      body() {
        return this.data.body
      },
    },
    mounted() {
      const isPhone = this.isPhone ? ' isPhone' : ''
      const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.className = 'card visible' + isPhone
          } else {
            entry.target.className = 'card' + isPhone
          }
        })
      })
      this.$refs.card.forEach(card => {
        io.observe(card)
      })
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
      flex-basis: calc(33.3% - 4rem / 3);
      padding: 2.5rem 2.5rem 1.5rem 2.5rem;
      opacity: 0;
      transform: translate3d(0, -3.125rem, 0);
      transition: border 0.3s ease, opacity 2s cubic-bezier(0.25, 0.46, 0.45, 0.94),
        transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      border: 1px solid $grey;
      box-shadow: 0px 0px 15px 0px rgb(0 0 0 / 15%);
      min-height: 24.25rem;

      opacity: 0;

      &.visible {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }

      // &:not(.isPhone):hover {
      //   border: 1px solid #00b4ef;
      //   box-shadow: 0px 0px 15px 0px rgb(0 180 239 / 15%);

      //   .title {
      //     border-top: 1px solid #00b4ef;
      //   }
      // }

      .num {
        font-weight: 700;
        font-size: 1.125rem;
      }

      .title {
        padding-top: 1.587vw;
        padding-bottom: 0.5rem;
        padding-left: 0.5rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        font-weight: 700;
        font-size: 1.5rem;
        min-height: 3.5rem;
        word-break: keep-all;
        transition: border-top 0.3s ease;
      }

      .desc-list {
        font-weight: 500;
        font-size: 0.875rem;
        color: rgba(0, 0, 0, 0.5);
        padding-left: 0.5rem;
        margin-top: 1.5rem;
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

  @include media('<tablet') {
    .card-list {
      gap: 0.5rem;

      .card {
        flex-basis: 100%;
        min-height: unset;
        padding: 2rem;
      }
    }
  }
</style>
