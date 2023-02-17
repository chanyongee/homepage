<template>
  <Content>
    <section class="wrapper">
      <section class="left">
        <h1 v-html="content.title"></h1>
        <div v-html="content.contents"></div>
        <sub>{{ content.signature }}</sub>
      </section>
      <section v-if="!isPhone" class="right">
        <img :src="require('@@/assets/images/about_us.jpg')" alt="" />
      </section>
    </section>
  </Content>
</template>

<script>
  import { mapState } from 'vuex'
  import Content from '@@/components/common/Content'

  export default {
    components: {
      Content,
    },
    props: {
      content: {
        type: Object,
        default: () => {},
      },
    },
    computed: {
      ...mapState(['isPhone']),
    },
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    gap: 1rem;

    .left {
      flex-basis: 50%;
      flex-shrink: 0;

      h1 {
        font-weight: 700;
        font-size: 2rem;
        line-height: 1.3;
        letter-spacing: -1px;
      }

      div {
        line-height: 1.7;
        word-break: keep-all;
        letter-spacing: -1.25px;

        br {
          margin-top: 0.5rem;
        }
      }

      sub {
        font-weight: normal;
      }
    }

    .right {
      display: flex;
      flex-basis: 50%;
      align-items: center;

      img {
        object-fit: cover;
        width: 100%;
        height: 90%;
      }
    }
  }

  @include media('<tablet') {
    .wrapper {
      .left {
        flex-basis: 100%;
        h1 {
          font-size: 1.5rem;
          font-weight: 700;
        }

        div {
          font-size: 1rem;
        }
      }
    }
  }
</style>
