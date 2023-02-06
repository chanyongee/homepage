<template>
  <Content>
    <section class="wrapper">
      <section class="left">
        <h2 v-html="content.title"></h2>
        <div v-html="content.contents"></div>
        <sub>{{ content.signature }}</sub>
      </section>
      <section class="right">
        <img :src="require('@@/assets/images/about_us.jpg')" alt="" />
      </section>
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
        type: Object,
        default: () => {},
      },
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

      h2 {
        font-weight: 500;
        font-size: 2.5rem;
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
</style>
