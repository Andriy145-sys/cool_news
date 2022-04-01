<template>
  <div>
    <v-row justify="center">
      <v-col align-self="center" cols="6" lg="6">
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
          label="Username"
          v-model="user.username"
        />
        <v-btn dark color="green" @click="updateUserInfo">Update</v-btn>
        <v-card-title><h3>Change password</h3></v-card-title>
        <v-text-field
          color="green"
          dense
          outlined
          placeholder="Type here..."
          label="Current password"
          v-model="user.current_password"
           :type="currentPasswordVisible ? 'text' : 'password'"
          :append-icon="currentPasswordVisible ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="currentPasswordVisible = !currentPasswordVisible"
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
        />
        <v-text-field
          color="green"
          dense
          outlined
          placeholder="Type here..."
          label="Confirm password"
          v-model="user.confirm_password"
           :type="confirmPasswordVisible ? 'text' : 'password'"
          :append-icon="confirmPasswordVisible ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="confirmPasswordVisible= !confirmPasswordVisible"
        />
        <v-btn class="mb-5" dark color="green" @click="updateUserInfo"
          >Update</v-btn
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: {},
    currentPasswordVisible: false,
    passwordVisible: false,
    confirmPasswordVisible: false,
  }),
  methods: {
    updateUserInfo() {
      console.log("update");
    },
  },
};
</script>

<style>
</style>