<template>
  <div>
    <v-row justify="center">
      <v-col align-self="center" cols="6" lg="6">
        <v-text-field
          color="green"
          dense
          outlined
          placeholder="Type here..."
          label="Username"
          v-model="user.username"
          :error-messages="usernameError"
          @blur="$v.user.username.$touch()"
        />
        <v-text-field
          color="green"
          dense
          outlined
          placeholder="Type here..."
          label="First name"
          v-model="user.first_name"
          :error-messages="firstNameError"
          @blur="$v.user.first_name.$touch()"
        />
        <v-text-field
          color="green"
          dense
          outlined
          placeholder="Type here..."
          label="Last name"
          v-model="user.last_name"
          :error-messages="lastNameError"
          @blur="$v.user.last_name.$touch()"
        />
        <v-text-field
          color="green"
          dense
          outlined
          placeholder="Type here..."
          label="Email"
          autocomplete="email"
          v-model="user.email"
           :error-messages="emailError"
          @blur="$v.user.email.$touch()"
        />
        <v-btn dark color="green" @click="updateUserInfo">Update</v-btn>
        <v-card-title><h3>Change password</h3></v-card-title>
        <v-text-field
          color="green"
          dense
          outlined
          placeholder="Type here..."
          label="Current password"
          v-model="password.current_password"
          :type="currentPasswordVisible ? 'text' : 'password'"
          :append-icon="currentPasswordVisible ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="currentPasswordVisible = !currentPasswordVisible"
          :error-messages="currentPasswordError"
          @blur="$v.password.current_password.$touch()"
        />
        <v-text-field
          color="green"
          dense
          outlined
          placeholder="Type here..."
          label="New password"
          v-model="password.password"
          :type="passwordVisible ? 'text' : 'password'"
          :append-icon="passwordVisible ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="passwordVisible = !passwordVisible"
          :error-messages="passwordError"
          :hide-details="password.password !== ''"
          @blur="$v.password.password.$touch()"
        />
        <password-helper :password="password.password" />
        <v-text-field
          color="green"
          dense
          outlined
          placeholder="Type here..."
          label="Confirm password"
          v-model="password.confirm_password"
          :type="confirmPasswordVisible ? 'text' : 'password'"
          :append-icon="confirmPasswordVisible ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="confirmPasswordVisible = !confirmPasswordVisible"
          :error-messages="confirmPasswordError"
          @blur="$v.password.confirm_password.$touch()"
        />
        <v-btn class="mb-5" dark color="green" @click="updateUserPassword"
          >Update</v-btn
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, sameAs, email } from "vuelidate/lib/validators";
import passwordHelper from "../UI/password-helper.vue";
export default {
  components: { passwordHelper },
  mixins: [validationMixin],
  data: () => ({
    user: {},
    password: {
      password: "",
    },
    currentPasswordVisible: false,
    passwordVisible: false,
    confirmPasswordVisible: false,
  }),
  validations: {
    user: {
      email: {
        required,
        email,
      },
      first_name: {
        required,
      },
      last_name: {
        required,
      },
      username: {
        required,
      },
    },
    password: {
      current_password: {
        required,
      },
      password: {
        required,
      },
      confirm_password: {
        required,
        sameAsPassword: sameAs("password"),
      },
    },
  },
  methods: {
    updateUserInfo() {
      this.$v.user.$touch();
      if(!this.$v.user.$invalid){
        console.log("work")
      }
    },
    updateUserPassword() {
      this.$v.password.$touch();
      if(!this.$v.password.$invalid){
        console.log("work")
      }
    },
  },
  computed: {
     emailError() {
      const errors = [];
      if (!this.$v.user.email.$dirty) {
        return errors;
      }
      !this.$v.user.email.required && errors.push("Email is required");
      if (!this.$v.user.email.email) {
        errors.push("Email is incorrect");
        return errors;
      }
      return errors;
    },
    firstNameError() {
      const errors = [];
      if (!this.$v.user.first_name.$dirty) {
        return errors;
      }
      if (!this.$v.user.first_name.required) {
        errors.push("First name is required");
        return errors;
      }
      return errors;
    },
    lastNameError() {
      const errors = [];
      if (!this.$v.user.last_name.$dirty) {
        return errors;
      }
      if (!this.$v.user.last_name.required) {
        errors.push("Last name is required");
        return errors;
      }
      return errors;
    },
    usernameError() {
      const errors = [];
      if (!this.$v.user.username.$dirty) {
        return errors;
      }
      if (!this.$v.user.username.required) {
        errors.push("Username is required");
        return errors;
      }
      return errors;
    },
    currentPasswordError() {
      const errors = [];
      if (!this.$v.password.current_password.$dirty) {
        return errors;
      }
      if (!this.$v.password.current_password.required) {
        errors.push("Current password is required");
        return errors;
      }
      return errors;
    },
    passwordError() {
      const errors = [];
      if (!this.$v.password.password.$dirty) {
        return errors;
      }
      if (!this.$v.password.password.required) {
        errors.push("Password is required");
        return errors;
      }
      return errors;
    },
    confirmPasswordError() {
      const errors = [];
      if (!this.$v.password.confirm_password.$dirty) {
        return errors;
      }
      if (
        !this.$v.password.confirm_password.sameAsPassword &&
        this.password.password !== ""
      ) {
        errors.push("Password don`t match");
        return errors;
      }
      !this.$v.password.confirm_password.required &&
        errors.push("Confirm password is required");
      return errors;
    },
  },
};
</script>

<style>
</style>