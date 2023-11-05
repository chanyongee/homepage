<template>
  <Content>
    <h1>오시는 길</h1>
    <div class="map-wrapper">
      <div id="map"></div>
      <a class="info-window" :href="url" target="_blank">
        <div>㈜좋은이엔지</div>
        <sub>네이버지도로 보기</sub>
      </a>
    </div>
    <h2 class="head-title">충주 본사</h2>
    <div class="head-address">충청북도 충주시 응골1길 37-6</div>
    <div class="head-tels">
      <div class="phone">
        <PhoneIcon />
        043) 845-9005
      </div>
      <div class="fax">
        <PrintIcon />
        043) 845-9077
      </div>
    </div>
  </Content>
</template>

<script>
  import Content from '@@/components/common/Content'
  import PhoneIcon from '@@/assets/icons/phone-solid.svg?inline'
  import PrintIcon from '@@/assets/icons/print-solid.svg?inline'

  export default {
    components: {
      Content,
      PhoneIcon,
      PrintIcon,
    },
    props: {
      content: {
        type: Array,
        default: () => [],
      },
      isNaverLoaded: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        map: null,
        marker: null,
        url: 'https://naver.me/ID1kqMFt',
      }
    },
    mounted() {},
    watch: {
      isNaverLoaded(newVal) {
        if (newVal) {
          this.map = new naver.maps.Map('map', {
            center: new naver.maps.LatLng(36.99551962555831, 127.92589728914564),
            zoom: 16,
            minZoom: 14,
            maxZoom: 19,
            zoomControl: true,
            zoomControlOptions: {
              style: naver.maps.ZoomControlStyle.SMALL,
              position: naver.maps.Position.BOTTOM_RIGHT,
            },
            scaleControl: false,
            logoControl: false,
            logoControlOptions: {
              position: naver.maps.Position.TOP_RIGHT,
            },
            mapDataControl: true,
            mapDataControlOptions: {
              position: naver.maps.Position.BOTTOM_LEFT,
            },
          })
          this.marker = new naver.maps.Marker({
            position: this.map.getCenter(),
            map: this.map,
          })
        }
      },
    },
  }
</script>

<style lang="scss" if="true">
  .map-wrapper {
    position: relative;
    margin-bottom: 2.5rem;

    #map {
      width: 100%;
      height: 20.5rem;
    }

    .info-window {
      background-color: white;
      border: 1px solid $grey;
      border-radius: 0.5rem;
      margin-bottom: 0.25rem;
      padding: 0.75rem;
      position: absolute;
      top: 0.5rem;
      left: 0.5rem;
      width: 15rem;
      text-align: center;
      font-weight: 600;

      sub {
        color: skyblue;
        text-decoration: underline;
        margin-top: 0.5rem;
      }
    }
  }

  .head {
    &-title {
      font-size: 30px;
      line-height: 40px;
      letter-spacing: -0.03em;
      font-weight: 300;
      border-bottom: 1px solid #e4e4e4;
      padding: 0 0 19px 0;
      margin: 0 0 20px 0;
    }

    &-address {
      font-size: 18px;
      line-height: 28px;
      letter-spacing: -0.01em;
    }

    &-tels {
      display: flex;
      gap: 1.5rem;
      margin-top: 1.25rem;
      align-items: center;

      div {
        align-items: center;
        display: flex;
        gap: 0.5rem;
        padding-right: 0.5rem;
      }
    }
  }

  @include media('<tablet') {
    .map-wrapper {
      line-height: 1rem;

      .info-window {
        width: 10rem;

        div {
          font-size: 1rem;
        }

        sub {
          font-size: 0.75rem;
        }
      }
    }

    .head {
      &-tels {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
      }
    }
  }
</style>
