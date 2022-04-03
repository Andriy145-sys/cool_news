<template>
  <div
    class="justify-center align-center mx-auto col-12 col-sm-7 col-md-4 my-15"
  >
    <v-card elevation="10" class="mb-5">
      <v-row justify="center">
        <v-col align-self="center" cols="6" lg="10">
          <h3 class="mb-5">Login</h3>
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
          <v-text-field
            color="green"
            dense
            outlined
            placeholder="Type here..."
            label="New password"
            v-model="user.password"
            :type="passwordVisible ? 'text' : 'password'"
            :append-icon="passwordVisible ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="passwordVisible = !passwordVisible"
            :error-messages="passwordError"
            @blur="$v.user.password.$touch()"
          />
          <v-btn class="mb-5" dark color="green" @click="login">Login</v-btn
          ><br />
          <span
            >Are you new?<router-link to="/sign_up"
              >&nbsp;Sign up</router-link
            ></span
          >
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
import authService from "@/request/requests/authService";
import userService from "@/request/requests/userService";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "loginComponent",
  mixins: [validationMixin],
  data: () => ({
    user: {},
    passwordVisible: false,
  }),
  validations: {
    user: {
      email: {
        required,
        email,
      },
      password: {
        required,
      },
    },
  },
  methods: {
    ...mapActions(["updateInfo"]),
    async login() {
      this.$v.$touch();
      if (!this.$v.user.$invalid) {
        const userData = [];
        userData.email = this.user.email;
        userData.password = this.user.password;
        const response = await authService.login({ ...userData });
        console.log(response);
        if (response.status == 200) {
          console.log(response.result._id);
          const profileRes = await userService.getUserById(response.result._id);
          console.log(profileRes);
          this.updateInfo({
            userId: profileRes.result._id,
            username: profileRes.result.username,
          });
          console.log(this.loggedUser);
          this.$router.push("/");
        }
      }
    },
  },
  computed: {
    ...mapGetters(['loggedUser']),
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
    passwordError() {
      const errors = [];
      if (!this.$v.user.password.$dirty) {
        return errors;
      }
      if (!this.$v.user.password.required) {
        errors.push("Password is required");
        return errors;
      }
      return errors;
    },
  },
};
</script>

<style>
</style>