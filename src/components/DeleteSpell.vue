<template>
  <div id="deleteContainer" class="container text-left">
    <h2 class="underline text-lg text-center">Delete Spell</h2>
    <FindSpell v-bind:title=findSpellTitle @clicked="setReturnedSpell"/>
    <div id="errorMessage" class="text-center">
      {{ errorMessage }}
    </div>
    <SpellCard v-bind:passedSpell=searchApiResponse />
    <div class="text-center my-4">
      <button id="deleteSpellBtn" class="text-center rounded-md border-red-700 bg-red-700" v-on:click="deleteSpell">Delete Spell?</button>
    </div>
    {{ delApiResponse }}
  </div>
</template>

<script>
import FindSpell from "./FindSpell";
import SpellCard from "./SpellCard";

export default {
  name: 'DeleteSpell',
  components: {
    FindSpell,
    SpellCard
  },
  data() {
    return {
      searchApiResponse: {},
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
      if(this.searchApiResponse.name === undefined) {
        alert("No spell to delete");
        return;
      }
      if(confirm("Are you sure you want to delete: " + this.searchApiResponse.name + "?")) {
        const token = await this.$auth.getTokenSilently();
        const requestOptions = await {
          method: "DELETE",
          headers: { 
            "Content-Type": "application/json",
            "authorization": "Bearer " + token 
          },
        };
        let response;
        response = await fetch("http://localhost:7000/api/v1/spells/" + this.searchApiResponse.name, requestOptions);
        this.delApiResponse = await response.json();
        this.searchApiResponse = {};
      }
    },
  }
}
</script>

<style lang="postcss" scoped>
#deleteSpellBtn {
  color: #000;
  padding: 3px 6px;
}
</style>