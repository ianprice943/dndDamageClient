<template>
  <div class="home">
   <img alt="Vue logo" src="../assets/logo.png">
   <FindSpell v-bind:title=findSpellTitle @clicked="setReturnedSpells"/> 
   {{ returnedSpells }}
  </div>
</template>

<script>
// @ is an alias to /src
import FindSpell from "../components/FindSpell";

export default {
  name: 'Home',
  components: {
    FindSpell
  },
  data() {
    return {
      findSpellTitle: "Search for a spell below to get started",
      returnedSpells: ''
    }
  },
  methods: {
    setReturnedSpells(value) {
      this.returnedSpells = value;
    }
  }
}
</script>

<style lang="postcss" scoped>

</style>