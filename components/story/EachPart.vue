<template>
  <div class="contents-wrapper">
    <h1>{{ data.title }}</h1>
    <div v-if="data.descriptions" class="desc-list">
      <div v-for="(desc, index) in data.descriptions" :key="index" v-html="desc"></div>
    </div>
    <div v-if="data.subItems" class="sub-item-list">
      <div v-for="subItem in data.subItems" :key="subItem.title" class="sub-item-wrapper">
        <h3>・ {{ subItem.title }}</h3>
        <div v-for="(desc, index) in subItem.descriptions" :key="index" class="sub-item">{{ desc }}</div>
      </div>
    </div>
    <div v-if="data.diagram">
      <h3>・ {{ data.diagramName }}</h3>
      <img class="diagram-img" :src="require(`@@/assets/images/${data.diagram}`)" alt="" />
    </div>
    <img class="cover-img" v-if="data.cover" :src="require(`@@/assets/images/${data.cover}`)" alt="" />
    <div class="button-wrapper">
      <button @click="$router.push(performancePage)">
        실적 보러가기
        <Arrow />
      </button>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Arrow from '@@/assets/icons/t-icon-long-left.svg?inline'

  export default {
    components: {
      Arrow,
    },
    props: {
      data: {
        type: Object,
        default: () => {},
      },
    },
    computed: {
      ...mapState(['breadcrumbs']),
      performancePage() {
        const currentPath = this.breadcrumbs.map(crumb => crumb.path)
        currentPath.splice(0, 1, 'performance')
        return '/' + currentPath.join('/')
      },
    },
  }
</script>

<style lang="scss" scoped>
  .contents-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h3 {
      margin-bottom: 0.5rem;
    }

    .sub-item-wrapper {
      margin-bottom: 0.5rem;
    }

    .cover-img {
      width: 100%;
    }

    .diagram-img {
      display: block;
      margin: 0 auto;
      width: 60%;
    }

    .button-wrapper {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      margin-top: 2rem;

      button {
        cursor: pointer;
        background: $default-white;
        font-weight: 700;
        border: 1px solid $default-black;
        width: 12.5rem;
        height: 3rem;
        transition: all 0.2s ease;

        &:hover {
          background: $default-black;
          color: $default-white;

          svg {
            path {
              fill: $default-white;
            }
          }
        }

        svg {
          transform: rotate(0.5turn);
        }
      }
    }
  }

  @include media('<desktop') {
    .contents-wrapper {
      .diagram-img {
        width: 80%;
      }
    }
  }

  @include media('<tablet') {
    .contents-wrapper {
      gap: 0.5rem;

      .desc-list,
      .sub-item-list {
        font-size: 1rem;
        line-height: 1.5625rem;
      }

      .diagram-img {
        width: 100%;
      }

      .button-wrapper {
        button {
          width: 10rem;
          height: 2.5rem;
        }
      }
    }
  }
</style>
