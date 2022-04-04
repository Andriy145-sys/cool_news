<template>
  <v-card elevation="10" class="mb-5">
    <v-row justify="center">
      <v-col align-self="center" cols="6" lg="6">
        <h3>Sign Up</h3>
        <v-text-field
          class="mt-5"
          color="green"
          dense
          outlined
          placeholder="Type here..."
          label="Username"
          v-model="user.username"
          :error-messages="
            usernameError.length ? usernameError : usernameErrorMsg
          "
          @blur="$v.user.username.$touch()"
          @input="usernameErrorMsg"
        />
        <v-text-field
          color="green"
          dense
          outlined
          placeholder="Type here..."
          label="First name"
          v-model="user.first_name"
        />
        <v-text-field
          color="green"
          dense
          outlined
          placeholder="Type here..."
          label="Last name"
          v-model="user.last_name"
        />
        <v-text-field
          color="green"
          dense
          outlined
          placeholder="Type here..."
          label="Email"
          autocomplete="email"
          v-model="user.email"
          :error-messages="emailError.length ? emailError : emailErrorMsg"
          @blur="$v.user.email.$touch()"
          @input="emailErrorMsg = []"
        />
        <v-text-field
          color="green"
          dense
          outlined
          placeholder="Type here..."
          label="Password"
          v-model="password.password"
          :type="passwordVisible ? 'text' : 'password'"
          :append-icon="passwordVisible ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="passwordVisible = !passwordVisible"
          :error-messages="passwordError"
          :hide-details="
            password.password !== '' && password.password.lenght >= 8
          "
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
        <v-btn class="mb-5" dark color="green" @click="signUp">sign Up</v-btn
        ><br />
        <span
          >Have account?<router-link to="/login"
            >&nbsp;Sign in</router-link
          ></span
        >
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, sameAs, email } from "vuelidate/lib/validators";
import passwordHelper from "@/components/UI/password-helper.vue";
import authService from "@/request/requests/authService";
export default {
  components: { passwordHelper },
  mixins: [validationMixin],
  data: () => ({
    user: {},
    password: {
      password: "",
    },
    emailErrorMsg: [],
    usernameErrorMsg: [],
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
      username: {
        required,
      },
    },
    password: {
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
    async signUp() {
      this.$v.$touch();
      const userData = [];
      if (!this.$v.user.$invalid) {
        userData.email = this.user.email;
        if (this.user.first_name) {
          userData.first_name = this.user.first_name;
        }
        if (this.user.last_name) {
          userData.last_name = this.user.last_name;
        }
        userData.username = this.user.username;
        userData.password = this.password.password;
        const response = await authService.sign_up({ ...userData });
        if (response.status === 401 && response.error.type === "Unique email") {
          this.emailErrorMsg.push(
            "The email field must contain a unique value"
          );
        }
        if (
          response.status === 401 &&
          response.error.type === "Unique username"
        ) {
          this.usernameErrorMsg.push(
            "The username field must contain a unique value"
          );
        }
        if (response.status === 200) {
          this.$router.push("/login");
        }
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