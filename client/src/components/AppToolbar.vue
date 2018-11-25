<template>
  <div>
  <v-toolbar dark color="teal lighten-1">
    <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
    <router-link to="/">
      <v-toolbar-title class="white--text">Rag's Blog</v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <div class="hidden-sm-and-down">
      <v-btn flat>About</v-btn>
      <router-link to="/contact"><v-btn flat>Contact</v-btn></router-link>
      <router-link to="/login"><v-btn flat>Login</v-btn></router-link>
    </div>
  </v-toolbar>

    <app-toolbar-navigation-drawer :value="drawer"/>
  </div>
</template>

<script>
    import AppToolbarNavigationDrawer from './AppToolbarNavigationdrawer';

    export default {
        components: {
            AppToolbarNavigationDrawer
        },
        data () {
            return {
                drawer: null,
            }
        }
    }
</script>

<style>

</style>
