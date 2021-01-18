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
        <optgroup label="Artificer">
          <option value="alchemist">Alchemist</option>
          <option value="armorer">Armorer</option>
          <option value="artillerist">Artillerist</option>
          <option value="battle smith">Battle Smith</option>
        </optgroup>
        <optgroup label="Barbarian">
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
          <option value="wild magic - barbarian">Wild Magic</option>
          <option value="zealot">Zealot</option>
        </optgroup>
        <optgroup label="Bard">
          <option value="college of creation">College of Creation</option>
          <option value="college of eloquence">College of Eloquence</option>
          <option value="college of glamour">College of Glamour</option>
          <option value="college of lore">College of Lore</option>
          <option value="college of spirits">College of Spirits</option>
          <option value="college of swords">College of Swords</option>
          <option value="college of valor">College of Valor</option>
          <option value="college of whispers">College of Whispers</option>
        </optgroup>
        <optgroup label="Cleric">
          <option value="arcana domain">Arcana Domain</option>
          <option value="death domain">Death Domain</option>
          <option value="forge domain">Forge Domain</option>
          <option value="grave domain">Grave Domain</option>
          <option value="knowledge domain">Knowledge Domain</option>
          <option value="life domain">Life Domain</option>
          <option value="light domain">Light Domain</option>
          <option value="nature domain">Nature Domain</option>
          <option value="order domain">Order Domain</option>
          <option value="peace domain">Peace Domain</option>
          <option value="tempest domain">Tempest Domain</option>
          <option value="trickery domain">Trickery Domain</option>
          <option value="twilight domain">Twilight Domain</option>
          <option value="war domain">War Domain</option>
        </optgroup>
        <optgroup label="Druid">
          <option value="circle of dreams">Circle of Dreams</option>
          <option value="circle of the land">Circle of the Land</option>
          <option value="circle of the shepherd">Circle of the Shepherd</option>
          <option value="circle of spores">Circle of Spores</option>
          <option value="circle of stars">Circle of Stars</option>
          <option value="circle of twilight">Circle of Twilight</option>
          <option value="circle of wildfire">Circle of Wildfire</option>
        </optgroup>
        <optgroup label="Fighter">
          <option value="arcane archer">Arcane Archer</option>
          <option value="battle master">Battle Master</option>
          <option value="cavalier">Cavalier</option>
          <option value="champion">Champion</option>
          <option value="eldritch knight">Eldritch Knight</option>
          <option value="psi warrior">Psi Warrior</option>
          <option value="purple dragon knight">Purple Dragon Knight</option>
          <option value="rune knight">Rune Knight</option>
          <option value="samurai">Samurai</option>
        </optgroup>
        <optgroup label="Monk">
          <option value="way of the ascendant dragon">Way of the Ascendant Dragon</option>
          <option value="way of the astral self">Way of the Astral Self</option>
          <option value="way of the drunken master">Way of the Drunken Master</option>
          <option value="way of the four elements">Way of the Four Elements</option>
          <option value="way of the kensei">Way of the Kensei</option>
          <option value="way of the long death">Way of the Long Death</option>
          <option value="way of mercy">Way of Mercy</option>
          <option value="way of the open hand">Way of the Open Hand</option>
          <option value="way of shadow">Way of Shadow</option>
          <option value="way of the sun soul">Way of the Sun Soul</option>
        </optgroup>
        <optgroup label="Paladin">
          <option value="oath of ancients">Oath of Ancients</option>
          <option value="oath of conquest">Oath of Conquest</option>
          <option value="oath of the crown">Oath of the Crown</option>
          <option value="oath of devotion">Oath of Devotion</option>
          <option value="oath of glory">Oath of Glory</option>
          <option value="oathbreaker">Oathbreaker</option>
          <option value="oath of redemption">Oath of Redemption</option>
          <option value="oath of vengeance">Oath of Vengeance</option>
          <option value="oath of the watchers">Oath of the Watchers</option>
        </optgroup>
        <optgroup label="Ranger">
          <option value="beast master">Beast Master</option>
          <option value="drakewarden">Drakewarden</option>
          <option value="fey wanderer">Fey Wanderer</option>
          <option value="gloom stalker">Gloom Stalker</option>
          <option value="horizon walker">Horizon Walker</option>
          <option value="hunter">Hunter</option>
          <option value="monster slayer">Monster Slayer</option>
          <option value="swarmkeeper">Swarmkeeper</option>
        </optgroup>
        <optgroup label="Rogue">
          <option value="arcane trickster">Arcane Trickster</option>
          <option value="assassin">Assassin</option>
          <option value="inquisitive">Inquisitive</option>
          <option value="mastermind">Mastermind</option>
          <option value="phantom">Phantom</option>
          <option value="scout">Scout</option>
          <option value="soulknife">Soulknife</option>
          <option value="swashbuckler">Swashbuckler</option>
          <option value="thief">Thief</option>
        </optgroup>
        <optgroup label="Sorcerer">
          <option value="aberrant mind">Aberrant Mind</option>
          <option value="clockwork soul">Clockwork Soul</option>
          <option value="divine soul">Divine Soul</option>
          <option value="draconic bloodline">Draconic Bloodline</option>
          <option value="psionic soul">Psionic Soul</option>
          <option value="shadow sorcery">Shadow Sorcery</option>
          <option value="storm sorcery">Storm Sorcery</option>
          <option value="wild magic - sorcerer">Wild Magic</option>
        </optgroup>
        <optgroup label="Warlock">
          <option value="the archfey">The Archfey</option>
          <option value="the celestial">The Celestial</option>
          <option value="the fathomless">The Fathomless</option>
          <option value="the fiend">The Fiend</option>
          <option value="the genie">The Genie</option>
          <option value="the great old one">The Great Old One</option>
          <option value="the hexblade">The hexblade</option>
          <option value="the undead">The Undead</option>
          <option value="the undying">The Undying</option>
        </optgroup>
        <optgroup label="Wizard">
          <option value="school of abjuration">School of Abjuration</option>
          <option value="bladesinging">Blade Singing</option>
          <option value="school of conjuration">School of Conjuration</option>
          <option value="school of divination">School of Divination</option>
          <option value="school of enchantment">School of Enchantment</option>
          <option value="school of evocation">School of Evocation</option>
          <option value="school of illusion">School of Illusion</option>
          <option value="school of necromancy">School of Necromancy</option>
          <option value="order of scribes">Order of Scribes</option>
          <option value="psionics">Psionics</option>
          <option value="school of transmutation">School of Transmutation</option>
          <option value="war magic">War Magic</option>
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