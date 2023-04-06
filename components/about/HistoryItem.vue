<template>
  <div class="history-item">
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <circle cx="6" cy="6" r="5" fill="#6e6b70" />
    </svg>
    <div class="history-content-wrapper">
      <div class="history-content" ref="history-content">
        <div class="year">{{ item.year }}</div>
        <ul>
          <li class="desc-item" v-for="child in item.months" :key="child.month">
            <div class="month">{{ child.month }}</div>
            <div class="desc-list">
              <div class="desc-item" v-for="d in child.desc" :key="d">{{ d }}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        default: () => ({}),
      },
    },
  }
</script>

<style lang="scss" scoped>
  .history-item {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: flex-start;
    position: relative;

    svg {
      position: absolute;
      top: 2rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
    }

    &:nth-child(odd) {
      align-items: flex-end;
    }

    .history-content-wrapper {
      padding: 1.5rem;
      width: 50%;

      .history-content {
        transform: translate3d(0, 4.125rem, 0);
        transition: border 0.3s ease, opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94),
          transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        opacity: 0;

        &.visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        .year {
          font-size: 2rem;
          color: #8e8c84;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        ul {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0.5rem;

          li {
            display: flex;
            gap: 0.5rem;

            .month {
              color: #848c8c;
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
    }
  }

  @include media('<tablet') {
    .history-item {
      gap: 1rem;

      .history-content-wrapper {
        .history-content {
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
    }
  }
</style>
