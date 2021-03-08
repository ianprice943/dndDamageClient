<template>
  <div v-if="spellProperties.name !== ''" class="spellCard text-left" ref="card">
    <h2 class="font-bold">{{ spellProperties.name }}</h2>
    <p class="italic">{{ spellProperties.school }} {{ spellProperties.level }}</p>
    <p><span class="font-bold">Casting Time: </span>{{ spellProperties.castingTime }}</p>
    <p><span class="font-bold">Range: </span>{{ spellProperties.range }}</p>
    <p><span class="font-bold">Components: </span><span v-for="component in spellProperties.components" :key="component">{{ component }} </span> <span v-if="spellProperties.materials">({{ spellProperties.materials }})</span></p>
    <p class="capitalize"><span class="font-bold">Duration: </span>{{ spellProperties.duration }}</p>
    <p class="my-4 whitespace-pre-line">{{ spellProperties.description }}</p>
    <!-- Still need class and sub class list -->
    <br>
    <br>
    {{ spellProperties }}
  </div>
</template>

<script>
export default {
  name: 'SpellCard',
  props: {
    passedSpell: Object
  },
  data() {
    return {
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
    setSpellProperties: function() {
      console.log(this.passedSpell);
      if(this.passedSpell.name !== undefined) {
        this.spellProperties = {
          ... this.passedSpell
        }
      } else {
        this.resetComponent();
      }
    },
    resetComponent: function() {
      this.spellProperties = {
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
  watch: {
    passedSpell: function() {
      this.setSpellProperties();
    }
  }
}
</script>

<style lang="postcss" scoped>
.spellCard {
  margin: 5px 5px;
  border: 1px solid #000;
  bordeer-radius: 5px;
  box-shadow: 2px 3px;
}
.hideSpellCard {
  display: none;
}
h2 {
  color: #800000;
}

</style>