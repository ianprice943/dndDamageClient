<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      Search for a spell below to get started
    </div>
    <form @submit.prevent="getSpell" method="get">
      <label for="spell">Spell </label>
      <input type="text" id="spell" name="spell" v-model="spell"><br>
      <input type="submit" id="submit" value="submit">
    </form>
    <div id="apiResponse">
      {{ apiResponse }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  },
  data() {
    return {
      apiResponse: '',
      spell: 'Eldritch Blast'
    }
  },
  methods: {
    getSpell: async function () {
      const requestOptions = {
        method: "GET",
        header: { "Content-Type": "application/json" },
      }
      const response = await fetch("http://localhost:7000/spells/" + this.spell, requestOptions);
      this.apiResponse = await response.json();
    }
  }
}
</script>

<style scoped>
#spell {
  border: 1px solid black;
  text-align: center;
}
#submit {
  margin: 1vh 0 0;
  padding: 0 5px;
  border: 1px solid black;
}
</style>