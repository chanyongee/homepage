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
    <li v-for="(desc, num) in body" :key="desc[0]" class="card" :class="{ isPhone }" ref="card">
      <span class="num">{{ String(num + 1).padStart(2, '0') }}</span>
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
    gap: 4rem;
    width: 100%;

    .card {
      display: flex;
      flex-direction: column;
      width: calc(30% - 8rem / 3);
      padding: 2.5rem 0 1.5rem 4rem;
      opacity: 0;
      transform: translate3d(0, -3.125rem, 0);
      transition: border 0.3s ease, opacity 2s cubic-bezier(0.25, 0.46, 0.45, 0.94),
        transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      border: 1px solid $grey;
      box-shadow: 0px 0px 15px 0px rgb(0 0 0 / 15%);
      opacity: 0;
      min-height: 20rem;

      &.visible {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }

      .num {
        font-weight: 700;
        font-size: 1.125rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }

      .title {
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
        font-weight: 700;
        font-size: 1.5rem;
        min-height: 3.5rem;
        word-break: keep-all;
        transition: border-top 0.3s ease;
        margin-right: 2.5rem;
      }

      .desc-list {
        font-weight: 500;
        font-size: 0.875rem;
        color: rgba(0, 0, 0, 0.5);
        margin-right: 2.5rem;

        li {
          line-height: 1.7;
        }
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

  @include media('<xlarge-desktop') {
    .card-list {
      gap: 2.5rem;

      .card {
        width: calc(33.3% - 5rem / 3);

        .title {
          word-break: break-all;
        }
      }
    }
  }

  @include media('<tablet') {
    .card-list {
      gap: 0.5rem;

      .card {
        width: 100%;
        min-height: unset;
        padding: 2rem;
      }
    }
  }
</style>
