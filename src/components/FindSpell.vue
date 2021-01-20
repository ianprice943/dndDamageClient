<template>
  <div id="findSpellComponent" class="flex flex-col text-center">
    <h2>
      {{ title }}
    </h2>
    <form @submit.prevent="getSpell" method="get">
      <label for="spell">Spell </label>
      <input type="text" id="spell" name="spell" v-model="spell"><br>
      <input type="submit" id="submit" value="submit">
    </form>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  data() {
    return {
      apiResponse: '',
      spell: 'Eldritch Blast',
    }
  },
  methods: {
    getSpell: async function () {
      const requestOptions = {
        method: "GET",
        header: { "Content-Type": "application/json" },
      };
      let response;
      if(this.spell !== '') {
        response = await fetch("http://localhost:7000/api/spells/" + this.spell, requestOptions);

        if(!response.ok) {
          const message = `${response.status}: ` + await response.text();
          this.apiResponse = message;
        } else {
          this.apiResponse = await response.json();
        }
      } else {
        response = await fetch("http://localhost:7000/api/spells/", requestOptions);
        this.apiResponse = await response.json();
      }
      this.$emit('clicked', this.apiResponse);
    },
  }
}
</script>

<style lang="postcss" scoped>
/*#findSpellComponent {
  
}*/
#spell {
  border: 1px solid black;
  text-align: center;
}
#submit {
  margin: 1vh 0 0;
  padding: 0 5px;
  border: 1px solid black;
  cursor: pointer;
}
</style>