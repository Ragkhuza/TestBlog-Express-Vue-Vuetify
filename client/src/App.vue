<template>
  <v-app>
    <app-toolbar/>

    <router-view></router-view>

    <app-footer/>
  </v-app>
</template>

<script>
    import AppToolbar from './components/AppToolbar';

    import AppFooter from './components/AppFooter';

    export default {
        name: 'App',
        components: {
            AppToolbar,
            AppFooter
        },
        data() {
            return {
                //
            }
        }
    }
</script>

<style>
</style>