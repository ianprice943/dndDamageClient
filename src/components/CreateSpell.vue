<template>
  <div id="createContainer" class="container border-2 border-green-700 text-left">
    <h2 class="underline text-lg text-center">Create Spell</h2>
    <p>* must be filled in</p>
    <form @submit.prevent="validateSpell" class="flex flex-col">
      <label for="name">Name* </label>
      <input type="text" name="name" v-model="spellName" required>
      <label for="classes">Classes (on desktop hold ctrl or cmd to select multiple)* </label>
      <select name="classes" id="classes" v-model="spellClasses" multiple="true" size="4">
        <option value="artificer">Artificer</option>
        <option value="barbarian">Barbarian</option>
        <option value="bard">Bard</option>
        <option value="cleric">Cleric</option>
        <option value="druid">Druid</option>
        <option value="fighter">Fighter</option>
        <option value="monk">Monk</option>
        <option value="paladin">Paladin</option>
        <option value="ranger">Ranger</option>
        <option value="rogue">Rogue</option>
        <option value="sorcerer">Sorcerer</option>
        <option value="warlock">Warlock</option>
        <option value="wizard">Wizard</option>
      </select>
      <label for="subClasses">Sub Classes (on desktop hold ctrl or cmd to select multiple)</label>
      <!--<input type="text" name="subClasses" v-model="spellSubClasses">-->
      <select name="subClasses" id="subClasses" v-model="spellSubClasses" multiple="true" size="5">
        <optgroup label="Artificer" v-if="spellClasses.includes('artificer')">
          <option value="alchemist">Alchemist</option>
          <option value="armorer">Armorer</option>
          <option value="artillerist">Artillerist</option>
          <option value="battle smith">Battle Smith</option>
        </optgroup>
        <optgroup label="Barbarian" v-if="spellClasses.includes('barbarian')">
          <option value="ancenstral guardian">Ancestral Guardian</option>
          <option value="battlerager">Battlerager</option>
          <option value="beast">Beast</option>
          <option value="berserker">Berserker</option>
          <option value="storm herald">Storm Herald</option>
          <option value="totem warrior - bear">Totem Warrior - Bear</option>
          <option value="totem warrior - eagle">Totem Warrior - Eagle</option>
          <option value="totem warrior - elk">Totem Warrior - Elk</option>
          <option value="totem warrior - tiger">Totem Warrior - Tiger</option>
          <option value="totem warrior - wolf">Totem Warrior - Wolf</option>
          <option value="wild magic">Wild Magic</option>
          <option value="zealot">Zealot</option>
        </optgroup>
        <optgroup label="Bard" v-if="spellClasses.includes('bard')">

        </optgroup>
      </select> {{ spellSubClasses }}
      <!--need to rewrite this^ as a select -->
      <label for="level">Spell Level*</label>
      <select name="level" id="level">
        <option value="0">Cantrip</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
      <label for="school">Spell School*</label>          
      <select name="school" id="school" required v-model="spellSchool">
        <option value="abjuration">Abjuration</option>
        <option value="conjuration">Conjuration</option>
        <option value="divination">Divination</option>
        <option value="enchantment">Enchantment</option>
        <option value="evocation">Evocation</option>
        <option value="illusion">Illusion</option>
        <option value="necromancy">Necromancy</option>
        <option value="transmutation">Transmutation</option>
      </select>
      <label for="castTime">Casting Time*</label>
      <input type="text" name="castTime" v-model="spellCastingTime" required>
      <label for="range">Range*</label>
      <input type="text" name="range" v-model="spellRange" required>
      <label for="aoe">Area of Effect (ex: sphere, 20 feet)</label>
      <input type="text" name="aoe" v-model="spellAreaOfEffect">
      <label for="ritual">Ritual</label>
      <input type="checkbox" name="ritual" v-model="spellRitual">
      <label for="concentration">Concentration</label>
      <input type="checkbox" name="concentration" v-model="spellConcentration">
      <label for="components">Components (on desktop use ctrl or cmd to select multiple)*</label>
      <!--<input type="text" name="components" v-model="spellComponents" required>-->
      <select name="components" id="components" required multiple="true" size="3" v-model="spellComponents">
        <option value="V">V</option>
        <option value="S">S</option>
        <option value="M">M</option>
      </select>
      <label for="materials">Materials</label>
      <input type="text" name="materials" v-model="spellMaterials">
      <label for="duration">Duration*</label>
      <input type="text" name="duration" v-model="spellDuration" required>
      <label for="description">Description*</label>
      <textarea name="description" rows="10" v-model="spellDescription" required></textarea>
      <label for="damage">Damage (please use json notation)</label> 
      <textarea name="damage" rows="10" v-model="spellDamage" placeholder="{baseDamage: 2d6,...}"></textarea>
      <label for="damageType">Damage Type (on desktop hold ctrl or cmd to select multiple)</label>
      <!--<input type="text" name="damageType" v-model="spellDamageType">-->
      <select name="damageType" id="damageType" v-model="spellDamageType" multiple=true size="4">
        <option value="slashing">Slashing</option>
        <option value="piercing">Piercing</option>
        <option value="bludgeoning">Bludgeoning</option>
        <option value="poison">Poison</option>
        <option value="acid">Acid</option>
        <option value="fire">Fire</option>
        <option value="cold">Cold</option>
        <option value="radiant">Radiant</option>
        <option value="necrotic">Necrotic</option>
        <option value="lightning">Lightning</option>
        <option value="thunder">Thunder</option>
        <option value="force">Force</option>
        <option value="psychic">Psychic</option>
      </select>
      <label for="numTargets">Number of Targets (please use json notation)</label>
      <textarea name="numTargets" rows="10" v-model="spellNumTargets" placeholder="{baseTargets: 3,...}"></textarea>
      <input type="submit" id="submitNewSpell" value="submit">
    </form>
  </div>
</template>

<script>
export default {
  name: 'CreateSpell',
  data() {
    return {
      apiResponse: '',
      spellName: '',
      spellClasses: [],
      spellSubClasses: [],
      spellLevel: '',
      spellSchool: '',
      spellCastingTime: '',
      spellRange: '',
      spellAreaOfEffect: '',
      spellRitual: '',
      spellConcentration: '',
      spellComponents: [],
      spellMaterials: '',
      spellDuration: '',
      spellDescription: '',
      spellDamage: '',
      spellDamageType: [],
      spellNumTargets: '',
    }
  },
  methods: {
    validateSpell: async function () {
      
    }
  }
}
</script>

<style lang="postcss" scoped>
.container > p {
  padding: 0 1vw;
}
form {
  padding: 0 1vw 1vh;
}
textarea {
  resize: none;
}
#submitNewSpell {
  margin: 1vh auto 0;
  padding: 0 5px;
  border: 1px solid black;
  cursor: pointer;
}
</style>