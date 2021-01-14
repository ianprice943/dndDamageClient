<template>
  <div>
    <div>
      <img :src="$auth.user.picture">
      <h2>{{ $auth.user.name }}</h2>
      <p>{{ $auth.user.email }}</p>
    </div>

    <div class="text-left">
      <pre>{{ JSON.stringify($auth.user, null, 2) }}</pre>
    </div>
    <div id="adminControls" v-if="checkAdmin" class="container mx-auto border-2 border-blue-700 flex flex-col md:flex-row">
      <CreateSpell />
      <div id="updateContainer" class="container border-2 border-purple-700 text-left">
        <h2 class="underline text-lg text-center">Update Spell</h2>
        <form @submit.prevent="">

        </form>
      </div>
      <div id="deleteContainer" class="container border-2 border-red-700 text-left">
        <h2 class="underline text-lg text-center">Delete Spell</h2>
        <form @submit.prevent="">

        </form>
      </div>
    </div>
  </div>
</template>

<script>
import CreateSpell from "../components/CreateSpell";

export default {
  name: "Profile",
  components: {
    CreateSpell
  },
  data() {
    return {
      
    }
  },
  methods: {
    //check if the user is dnd-damage-admin from Auth0
    checkAdmin() {
      if(JSON.stringify(this.$auth.user["https://dnd-damage.com/roles"]) === "dnd-damage-admin") {
        return true;
      } else {
        return false;
      }
    }
  }
}
</script>

<style lang="postcss" scoped>

</style>