<template>
  <div id="updateContainer" class="container border-r-2 border-blue-700 text-left">
    <h2 class="underline text-lg text-center">Update Spell</h2>
    <FindSpell v-bind:title=findSpellTitle @clicked="setReturnedSpell"/>
    <div id="errorMessage" class="text-center">
      {{ errorMessage }}
    </div>
    <p>* must be filled in</p>
    <p>on desktop hold CTRL or CMD to select multiple</p>
    <form @submit.prevent="validateSpell" class="flex flex-col">
      <label for="name">Name* </label>
      <input type="text" name="name" v-model="spellProperties.name" required>
      <label for="classes">Classes* </label>
      <select name="classes" id="classes" v-model="spellProperties.classes" multiple="true" size="4">
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
      <label for="subClasses">Sub Classes</label>
      <select name="subClasses" id="subClasses" v-model="spellProperties.subClasses" multiple="true" size="5">
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
      </select>
      <label for="level">Spell Level*</label>
      <select name="level" id="level" v-model="spellProperties.level">
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
      <select name="school" id="school" required v-model="spellProperties.school">
        <option value="Abjuration">Abjuration</option>
        <option value="Conjuration">Conjuration</option>
        <option value="Divination">Divination</option>
        <option value="Enchantment">Enchantment</option>
        <option value="Evocation">Evocation</option>
        <option value="Illusion">Illusion</option>
        <option value="Necromancy">Necromancy</option>
        <option value="Transmutation">Transmutation</option>
      </select>
      <label for="castTime">Casting Time*</label>
      <input type="text" name="castTime" v-model="spellProperties.castingTime" required>
      <label for="range">Range*</label>
      <input type="text" name="range" v-model="spellProperties.range" required>
      <label for="aoe">Area of Effect (ex: sphere, 20 feet)</label>
      <input type="text" name="aoe" v-model="spellProperties.areaOfEffect">
      <label for="ritual">Ritual</label>
      <input type="checkbox" name="ritual" v-model="spellProperties.ritual">
      <label for="concentration">Concentration</label>
      <input type="checkbox" name="concentration" v-model="spellProperties.concentration">
      <label for="components">Components*</label>
      <select name="components" id="components" required multiple="true" size="3" v-model="spellProperties.components">
        <option value="V">V</option>
        <option value="S">S</option>
        <option value="M">M</option>
      </select>
      <label for="materials">Materials</label>
      <input type="text" name="materials" v-model="spellProperties.materials">
      <label for="duration">Duration*</label>
      <input type="text" name="duration" v-model="spellProperties.duration" required>
      <label for="description">Description*</label>
      <textarea name="description" rows="10" v-model="spellProperties.description" required></textarea>
      <label for="damage">Damage (please separate groups by a '/', subproperties by a ',' and assign key value pairs with a ':'. ex: 1d10/5:2d10,11:3d10,17:4d10/)</label> 
      <input type="text" name="damage" v-model="spellProperties.damage">
      <label for="damageType">Damage Type</label>
      <select name="damageType" id="damageType" v-model="spellProperties.damageType" multiple=true size="4">
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
      <label for="numTargets">Number of Targets (please separate groups by a '/', subproperties by a ',' and assign key value pairs with a ':'. ex: 1/5:2,11:3,17:4/)</label>
      <!--<textarea name="numTargets" rows="10" v-model="spellProperties.numTargets" placeholder="{&quot;baseTargets&quot;: &quot;3&quot;,...}"></textarea>-->
      <input type="text" name="numTargets" v-model="spellProperties.numTargets">
      <input type="submit" id="submitNewSpell" value="Update">
      {{ body }}
      {{ putApiResponse }}
    </form>
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
      putApiResponse:'',
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
    validateSpell: function () {
      this.body = {spell: {}};
      const data = this.spellProperties;
      for(const [key, value] of Object.entries(data)) {
        if(!this.isUnset(data[key])) {
          if(key === "areaOfEffect") {
            const split = value.split(',');
            if(split.length === 2) {
              const aoe = {
                shape: split[0],
                size: split[1]
              };
              this.body.spell[key] = aoe;
            } else {
              window.alert("Please enter Area of Effect like the example");
              throw new Error("Incorrect syntax for Area of Effect");
            }
          } else if(key === "damage") {
            const damage = this.spellProperties.damage;
            const damagePropArr = damage.split('/');
            let damageObject = {};
            for(let i = 0; i < damagePropArr.length; i++) {
              if(i === 0) {
                damageObject["baseDamage"] = damagePropArr[0];
              } else if (i === 1 && damagePropArr[1] !== "") {
                const higherCharLevelArr = damagePropArr[1].split(',');
                let higherCharLevelObj = {};
                for(let j = 0; j < higherCharLevelArr.length; j++) {
                  const curLevelKV = higherCharLevelArr[j].split(':');
                  higherCharLevelObj[curLevelKV[0]] = curLevelKV[1];
                }
                damageObject["damageAtHigherCharacterLevel"] = higherCharLevelObj;
              } else if (i === 2 && damagePropArr[2] !== "") {
                const higherSpellSlotArr = damagePropArr[2].split(',');
                let higherSpellSlotObj = {};
                for(let j = 0; j < higherSpellSlotArr.length; j++) {
                  const curLevelKV = higherSpellSlotArr[j].split(':');
                  higherSpellSlotObj[curLevelKV[0]] = curLevelKV[1];
                }
                damageObject["damageAtHigherSpellSlots"] = higherSpellSlotObj;
              }
            }
            this.body.spell[key] = damageObject;
          } else if(key === "numTargets"){
            const numTargets = this.spellProperties.numTargets;
            const targetPropArr = numTargets.split('/');
            let targetObject = {};
            for(let i = 0; i < targetPropArr.length; i++) {
              if(i === 0) {
                targetObject["baseTargets"] = targetPropArr[0];
              } else if (i === 1 && targetPropArr[1] !== "") {
                const higherCharLevelArr = targetPropArr[1].split(',');
                let higherCharLevelObj = {};
                for(let j = 0; j < higherCharLevelArr.length; j++) {
                  const curLevelKV = higherCharLevelArr[j].split(':');
                  higherCharLevelObj[curLevelKV[0]] = curLevelKV[1];
                }
                targetObject["targetsAtHigherCharacterLevel"] = higherCharLevelObj;
              } else if (i === 2 && targetPropArr[2] !== "") {
                const higherSpellSlotArr = targetPropArr[2].split(',');
                let higherSpellSlotObj = {};
                for(let j = 0; j < higherSpellSlotArr.length; j++) {
                  const curLevelKV = higherSpellSlotArr[j].split(':');
                  higherSpellSlotObj[curLevelKV[0]] = curLevelKV[1];
                }
                targetObject["targetsAtHigherSpellSlot"] = higherSpellSlotObj;
              }
            }
            this.body.spell[key] = targetObject;
          } else {
            this.body.spell[key] = value;
          }
        }
      }
      if(confirm("Are you sure you want to update: " + data.name + "?")) {
        this.putSpell(this.body);
      }
    },
    isUnset: function (data) {
      if(data === '' || data.length === 0) {
        return true;
      } else {
        return false;
      }
    },
    putSpell: async function (dataToSend) {
      const token = await this.$auth.getTokenSilently();
      const requestOptions = await {
        method: "PUT",
        headers: { 
          "Content-Type": "application/json",
          "authorization": "Bearer " + token 
        },
        body: JSON.stringify(dataToSend)
      };
      let response;
      response = await fetch("http://localhost:7000/api/spells", requestOptions);
      this.putApiResponse = await response.json();
    },
    setReturnedSpell(value) {
      if(value !== undefined &&
        value !== null &&
        value !== "" &&
        value !== "404: No record found" &&
        value.id) {
        this.searchApiResponse = value;
        this.setFormValues();
      } else if (!value.id && value === "404: No record found") {
        this.errorMessage = value;
      } else if (!value.id) {
        this.errorMessage = "Please search for an individual spell";
      }
    },
    setFormValues: function() {
      let aoe = "";
      let damageString = "";
      let numTargetsString = "";
      let damageTypeArr = [];
      // convert areaOfEffect object into a string for the form if it's defined
      if(this.searchApiResponse.areaOfEffect !== undefined) {
        aoe += this.searchApiResponse.areaOfEffect.shape + ", " + this.searchApiResponse.areaOfEffect.size;
      }
      // convert damage object into a string for the form if it's defined
      if(this.searchApiResponse.damage !== undefined) {
        let damageObj = this.searchApiResponse.damage;
        damageString += damageObj.baseDamage;
        damageString += "/";
        if(damageObj.damageAtHigherCharacterLevel !== undefined) {
          let keys = Object.keys(damageObj.damageAtHigherCharacterLevel).sort(function(a, b) {
            return a - b;
          });
          for(let i = 0; i < keys.length; i++) {
            damageString += "" + keys[i] + ":" + damageObj.damageAtHigherCharacterLevel[keys[i]];
            if(i !== keys.length - 1) {
              damageString += ",";
            }
          }
        }
        damageString += "/";
        if(damageObj.damageAtHigherSpellSlots !== undefined) {
          let keys = Object.keys(damageObj.damageAtHigherSpellSlots).sort(function(a, b) {
            return a - b;
          });
          for(let i = 0; i < keys.length; i++) {
            damageString += "" + keys[i] + ":" + damageObj.damageAtHigherSpellSlots[keys[i]];
            if(i !== keys.length - 1) {
              damageString += ",";
            }
          }
        }
      }
      // convert numTargets object into a string for the form if it's defined
      if(this.searchApiResponse.numTargets !== undefined) {
        let numTargetsObj = this.searchApiResponse.numTargets;
        numTargetsString += numTargetsObj.baseTargets;
        numTargetsString += "/";
        if(numTargetsObj.targetsAtHigherCharacterLevel !== undefined) {
          let keys = Object.keys(numTargetsObj.targetsAtHigherCharacterLevel).sort(function(a, b) {
            return a - b;
          });
          for(let i = 0; i < keys.length; i++) {
            numTargetsString += "" + keys[i] + ":" + numTargetsObj.targetsAtHigherCharacterLevel[keys[i]];
            if(i !== keys.length - 1) {
              numTargetsString += ",";
            }
          }
        }
        numTargetsString += "/";
        if(numTargetsObj.targetsAtHigherSpellSlot !== undefined) {
          let keys = Object.keys(numTargetsObj.targetsAtHigherSpellSlot).sort(function(a, b) {
            return a - b;
          });
          for(let i = 0; i < keys.length; i++) {
            numTargetsString += "" + keys[i] + ":" + numTargetsObj.targetsAtHigherSpellSlot[keys[i]];
            if(i !== keys.length - 1) {
              numTargetsString += ",";
            }
          }
        }
      }
      if(this.searchApiResponse.damageType !== undefined) {
        damageTypeArr = this.searchApiResponse.damageType;
      }
      this.spellProperties = {
        ... this.searchApiResponse,
        areaOfEffect: aoe,
        damage: damageString,
        numTargets: numTargetsString,
        damageType: damageTypeArr
      };
    },
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