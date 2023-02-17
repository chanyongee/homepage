<template>
  <footer>
    (주)좋은이엔지 | (우)27339 충청북도 충주시 응골1길 37-6 (금릉동 154-9) | 대표자 : 김주식 | 사업자등록번호 :
    303-81-44454 | 대표전화 : 043-845-9005 | Fax: 043-845-9077
    <br />
    COPYRIGHT © ㈜좋은이엔지. All rights reserved.
  </footer>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  footer {
    border-top: 1px solid $grey;
    padding: 1rem 2rem;
    line-height: 32px;
    font-weight: 100;
    font-size: 12px;
    text-align: center;
  }

  @include media('<tablet') {
    footer {
      line-height: 1.25rem;
    }
  }
</style>
