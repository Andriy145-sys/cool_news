<template>
  <v-col v-if="password && !this.$v.password.valid" class="mb-5">
    <span>The password must contain</span><br />
    <span>
      <v-icon x-small color="error" v-if="!this.$v.password.minLength"
        >mdi-close-circle</v-icon
      >
      <v-icon x-small color="success" v-if="this.$v.password.minLength"
        >mdi-check-circle</v-icon
      >
      Be at least 8 characters long </span
    ><br />
    <span>
      <v-icon x-small color="error" v-if="!this.$v.password.validUppercase"
        >mdi-close-circle</v-icon
      >
      <v-icon x-small color="success" v-if="this.$v.password.validUppercase"
        >mdi-check-circle</v-icon
      >
      Have at least 1 uppercase</span
    ><br />
    <span>
      <v-icon x-small color="error" v-if="!this.$v.password.validLowercase"
        >mdi-close-circle</v-icon
      >
      <v-icon x-small color="success" v-if="this.$v.password.validLowercase"
        >mdi-check-circle</v-icon
      >

      Have at least 1 lowercase</span
    ><br />
    <span>
      <v-icon x-small color="error" v-if="!this.$v.password.validNumber"
        >mdi-close-circle</v-icon
      >
      <v-icon x-small color="success" v-if="this.$v.password.validNumber"
        >mdi-check-circle</v-icon
      >
      Have at least 1 number</span
    ><br />
    <span>
      <v-icon x-small color="error" v-if="!this.$v.password.validSpecial"
        >mdi-close-circle</v-icon
      >
      <v-icon x-small color="success" v-if="this.$v.password.validSpecial"
        >mdi-check-circle</v-icon
      >
      Have at least 1 special character (@, $, !)</span
    ><br />
  </v-col>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  props: {
    password: {
      require: false,
    },
  },
  validations: {
    password: {
      required,
      minLength: minLength(8),
      validUppercase: function (value) {
        const containsUppercase = /[A-Z]/.test(value);
        return containsUppercase;
      },
      validLowercase: function (value) {
        const containsLowercase = /[a-z]/.test(value);
        return containsLowercase;
      },
      validNumber: function (value) {
        const containsNumber = /[0-9]/.test(value);
        return containsNumber;
      },
      validSpecial: function (value) {
        const containsSpecial = /[#?!@$%^&*-]/.test(value);
        return containsSpecial;
      },
      valid: function (value) {
        const containsUppercase = /[A-Z]/.test(value);
        const containsLowercase = /[a-z]/.test(value);
        const containsNumber = /[0-9]/.test(value);
        const containsSpecial = /[#?!@$%^&*-]/.test(value);
        return (
          containsUppercase &&
          containsLowercase &&
          containsNumber &&
          containsSpecial &&
          minLength(8)
        );
      },
    },
  },
};
</script>

<style>
</style>