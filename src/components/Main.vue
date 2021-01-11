<template>
  <main id="main" aria-label="main">
    <router-view />
  </main>
</template>

<script>
export default {
  name: 'Main',
  watch: {
    '$route':{
      handler: (to) => {
        document.title = to.meta.title || 'D&D Damage'
      },
      immediate: true
    }
  }
}
</script>

<style scoped>
#main {
  padding: 1vh 1vw;
}
</style>