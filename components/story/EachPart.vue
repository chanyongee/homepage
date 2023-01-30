<template>
  <div>
    <h1>{{ data.title }}</h1>
    <div v-if="data.descriptions" class="desc-list">
      <div v-for="(desc, index) in data.descriptions" :key="index" v-html="desc"></div>
    </div>
    <div v-if="data.subItems" class="sub-item-list">
      <div v-for="subItem in data.subItems" :key="subItem.title">
        <h3>・ {{ subItem.title }}</h3>
        <div v-for="(desc, index) in subItem.descriptions" :key="index">{{ desc }}</div>
      </div>
    </div>
    <img v-if="data.cover" :src="require(`@@/assets/images/${data.cover}`)" alt="" />
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
  img {
    width: 100%;
    margin-top: 2.5rem;
  }
</style>
