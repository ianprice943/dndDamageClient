<template>
  <header id="header" aria-label="header">
    <nav id="nav" aria-label="navigation">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link><span v-if="$auth.isAuthenticated">&nbsp;|&nbsp;</span>
      <router-link v-if="$auth.isAuthenticated" to="/profile">Profile</router-link>
    </nav>
    <!-- Check that the SDK client is not currently loading before accessing is methods -->
    <div id="login" v-if="!$auth.loading">
      <!-- show login when not authenticated -->
      <button v-if="!$auth.isAuthenticated" @click="login">Log in</button>
      <!-- show logout when authenticated -->
      <button v-if="$auth.isAuthenticated" @click="logout">Log out</button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
}
</script>

<style scoped>
#header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}

#nav {
  padding: 1vh 1vw;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#login {
  padding: 1vh 1vw;
}

#login > button {
  outline: none;
  border: none;
  background: none;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: underline;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  cursor: pointer;
  font-size: 16px;
  line-height: 100%;
}
</style>