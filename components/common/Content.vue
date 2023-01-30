<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .content {
    padding: 4rem 14rem;
    font-size: 20px;
    line-height: 32px;
    font-weight: 300;
    letter-spacing: -0.02em;
  }

  @include media('<large-desktop') {
    .content {
      padding: 4rem 6rem;
    }
  }

  @include media('<desktop') {
    .content {
      padding: 1rem 2rem;
    }
  }
</style>
