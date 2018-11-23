<template>
  <v-container>
    <v-form v-model="valid" @submit.prevent="submit">
      <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
      ></v-text-field>
      <v-text-field
          v-model="password"
          :rules="passwordRules"
          label="Password"
          type="password"
          required
      ></v-text-field>
      <v-btn
          :disabled="!valid"
          type="submit"
          color="success"
      >
        submit
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
    export default {
        data: () => ({
            valid: false,
            password: '',
            passwordRules: [
                v => !!v || 'Password is required',
                v => v.length >= 6 || 'Name must be at least 6 characters'
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ]
        }),

        methods: {
            submit() {
                // eslint-disable-next-line
                console.log('submit');
            }
        }
    }
</script>