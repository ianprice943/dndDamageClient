<template>
  <div>
    <div>
      <img :src="$auth.user.picture">
      <h2>{{ $auth.user.name }}</h2>
      <p>{{ $auth.user.email }}</p>
    </div>

    <!--<div class="text-left">
      <pre>{{ JSON.stringify($auth.user, null, 2) }}</pre>
    </div>-->
    <div id="adminControls" v-if="checkAdmin" class="container mx-auto border-2 border-blue-700 flex flex-col md:flex-row">
      <CreateSpell />
      <UpdateSpell />
      <DeleteSpell />
    </div>
  </div>
</template>

<script>
import CreateSpell from "../components/CreateSpell";
import UpdateSpell from "../components/UpdateSpell";
import DeleteSpell from "../components/DeleteSpell";

export default {
  name: "Profile",
  components: {
    CreateSpell,
    UpdateSpell,
    DeleteSpell
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