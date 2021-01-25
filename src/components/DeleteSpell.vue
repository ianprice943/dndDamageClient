<template>
  <div id="deleteContainer" class="container text-left">
    <h2 class="underline text-lg text-center">Delete Spell</h2>
    <FindSpell v-bind:title=findSpellTitle @clicked="setReturnedSpell"/>
    <div id="errorMessage" class="text-center">
      {{ errorMessage }}
    </div>
    <!--Spell Card Component?-->
    <button id="deleteSpellBtn" class="text-center rounded-sm border-red-700 bg-red-700">Delete Spell?</button>
  </div>
</template>

<script>
import FindSpell from "./FindSpell";

export default {
  name: 'UpdateSpell',
  components: {
    FindSpell
  },
  data() {
    return {
      searchApiResponse: '',
      errorMessage: '',
      delApiResponse:'',
      body: {},
      findSpellTitle: "Search for a spell below to get started",
      spellProperties: {
        name: '',
        classes: [],
        subClasses: [],
        level: '',
        school: '',
        castingTime: '',
        range: '',
        areaOfEffect: '',
        ritual: '',
        concentration: '',
        components: [],
        materials: '',
        duration: '',
        description: '',
        damage: '',
        damageType: [],
        numTargets: '',
      }
    }
  },
  methods: {
    setReturnedSpell(value) {
      if(value !== undefined &&
        value !== null &&
        value !== "" &&
        value !== "404: No record found" &&
        value.id) {
        this.searchApiResponse = value;
        this.errorMessage = "";
      } else if (!value.id && value === "404: No record found") {
        this.errorMessage = value;
      } else if(!value.id) {
        this.errorMessage = "Please search for an individual spell";
      }
    },
    deleteSpell: async function () {
      const token = await this.$auth.getTokenSilently();
      const requestOptions = await {
        method: "DELETE",
        headers: { 
          "Content-Type": "application/json",
          "authorization": "Bearer " + token 
        },
      };
      let response;
      response = await fetch("http://localhost:7000/api/spells/" + this.spellProperties.name, requestOptions);
      this.delApiResponse = await response.json();
    },

  }
}
</script>

<style lang="postcss" scoped>
#deleteSpellBtn {
  color: #000;

}
</style>