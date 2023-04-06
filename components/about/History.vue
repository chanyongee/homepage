<template>
  <Content>
    <div class="wrapper">
      <h1>
        ㈜좋은이엔지가
        <br />
        걸어온 발자취입니다.
      </h1>
      <div class="history-page">
        <history-item v-for="item in content" :key="item.year" :item="item" ref="item" />
        <div class="line"></div>
        <div class="line-progress" ref="progress"></div>
      </div>
    </div>
  </Content>
</template>

<script>
  import HistoryItem from '@@/components/about/HistoryItem.vue'
  import Content from '@@/components/common/Content.vue'

  export default {
    components: {
      HistoryItem,
      Content,
    },
    props: {
      content: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        progress: null,
        ticking: false,
        lastKnownScrollPosition: 0,
      }
    },
    methods: {
      handleEvent(scrollHeight) {
        this.progress.style.height = scrollHeight + 'px'
      },
      addScrollEvent() {
        window.addEventListener('scroll', e => {
          this.last_known_scroll_position = window.scrollY

          if (!this.ticking) {
            window.requestAnimationFrame(() => {
              this.handleEvent(this.last_known_scroll_position)
              this.ticking = false
            })

            this.ticking = true
          }
        })
      },
    },
    mounted() {
      this.progress = this.$refs.progress
      this.addScrollEvent()

      const io = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.intersectionRatio >= 0.7) {
              entry.target.className = 'history-content visible'
            } else if (entry.intersectionRatio === 0) {
              entry.target.className = 'history-content'
            }
          })
        },
        {
          threshold: [0, 0.7],
        },
      )
      this.$refs.item.forEach(item => {
        io.observe(item.$refs['history-content'])
      })
    },
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    margin: 0 6rem;

    h1 {
      margin-bottom: 3rem;
      text-align: center;
    }

    .history-page {
      position: relative;
      margin-bottom: 10rem;

      .line,
      .line-progress {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 2px;
      }

      .line {
        background-color: #d8d8d5;
        height: 100%;
      }

      .line-progress {
        background-color: #6e6b70;
        height: 0;
      }
    }
  }

  @include media('<tablet') {
    .wrapper {
      margin: 0;

      h1 {
        margin-bottom: 1.5rem;
      }
    }
  }
</style>
