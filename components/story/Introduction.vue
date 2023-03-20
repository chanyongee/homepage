<template>
  <div class="content-wrapper">
    <h1>
      <div class="title1">
        {{ data.title1 }}
      </div>
      <div class="title2">
        {{ data.title2 }}
      </div>
    </h1>
    <div class="desc" v-html="data.desc"></div>
    <div class="sub-desc" v-html="data.subDesc"></div>
    <h2>・ {{ data.diagramName }}</h2>
    <img class="diagram" :src="require(`@@/assets/images/${data.diagram}`)" alt="" />
    <img :src="require(`@@/assets/images/${data.cover}`)" alt="" />
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object,
        default: () => {},
      },
    },
  }
</script>

<style lang="scss" scoped>
  .content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h1 {
      font-size: 3.125rem;

      .title1 {
        font-size: 3.125rem;
        font-family: 'Spoqa Thin';
        font-weight: 100;
      }

      .title2 {
        font-size: 3.125rem;
        font-family: 'Spoqa Medium';
        font-weight: 500;
        color: rgba(121, 135, 89, 1);
      }
    }

    .desc {
      font-weight: 700;
      font-family: 'Spoqa Bold';
      font-size: 30px;
      line-height: 40px;
    }

    .sub-desc {
      font-weight: 500;
      font-size: 1.125rem;
      line-height: 25px;
      color: rgba(102, 102, 102, 1);
      width: 80%;
    }

    img.diagram {
      display: block;
      margin: 0 auto;
      width: 80%;
    }
  }

  @include media('<tablet') {
    .content-wrapper {
      gap: 1rem;

      h1 {
        .title1 {
          font-size: 2rem;
        }
        .title2 {
          font-size: 2rem;
        }
      }

      .desc {
        font-size: 1.125rem;
        line-height: 1.75rem;
        letter-spacing: -1px;
      }

      .sub-desc {
        font-size: 0.9rem;
        width: 100%;
      }

      img.diagram {
        width: 100%;
      }
    }

    h2 {
      font-size: 1.25rem;
    }
  }
</style>
