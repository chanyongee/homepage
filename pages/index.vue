<template>
  <div class="home-background">
    <video :src="video" autoplay muted loop></video>
    <section id="section1">
      <h1>
        BUILD VALUE
        <br />
        TOGETHER
      </h1>
      <h4>Sustainable Business & Unlimited Innvation With Joeun Engineering</h4>
    </section>
  </div>
</template>

<script>
  import video from '@@/assets/park.mp4'

  export default {
    data() {
      return {
        video,
      }
    },
  }
</script>

<style lang="scss" scoped>
  .home-background {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: absolute;

    .hamburger {
      position: absolute;
      right: 0.625rem;
      top: 0.625rem;
      height: 1.5rem;
    }

    video {
      z-index: -1;
      width: 100vw;
      position: absolute;
    }

    section {
      padding: 0;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
    }

    #section1 {
      text-align: center;
    }

    #section1 h1 {
      margin-top: 42vh;
      font-size: 48px;
      font-weight: 900;
      color: #fff;
    }

    #section1 h4 {
      color: #fff;
    }
  }

  /* 1219/685 is an aspect ratio of the video */
  @media screen and (max-aspect-ratio: 1219/685) {
    .home-background {
      video {
        width: auto;
        height: 100%;
      }
    }
  }

  @include media('<tablet') {
    .home-background {
      #section1 h1 {
        font-size: 2.5rem;
        line-height: 2.5rem;
      }
    }
  }
</style>
