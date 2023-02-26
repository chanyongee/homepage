<template>
  <nuxt-link to="/" tag="a" class="logo">
    <Logo />
    <span>㈜좋은이엔지</span>
  </nuxt-link>
</template>

<script>
  import Logo from '@@/assets/icons/logo.svg?inline'

  export default {
    components: {
      Logo,
    },
  }
</script>
<style lang="scss" scoped>
  .logo {
    display: flex;
    flex-direction: column;
    position: relative;

    &::v-deep {
      svg {
        path:not(:first-child) {
          fill: $default-black;
        }
      }
    }

    span {
      text-align: center;
      letter-spacing: -2.5px;
      margin-top: -0.125rem;
      position: absolute;
      right: 0;
      bottom: 0;
      font-weight: 500;
    }
  }
</style>
