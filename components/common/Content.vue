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
    padding: 4rem 25rem;
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 300;
    letter-spacing: -0.02em;

    h1 {
      margin-bottom: 2rem;
    }
  }

  @include media('<xlarge-desktop') {
    .content {
      padding: 4rem 14rem;
    }
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

  @include media('<tablet') {
    .content {
      padding: 1rem;
      font-size: 1rem;
      padding-top: 8rem;

      h1 {
        margin-bottom: 1rem;
      }
    }
  }
</style>
