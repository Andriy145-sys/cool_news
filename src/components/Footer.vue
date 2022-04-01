<template>
  <v-footer class="footer">
    <span> Developed by Holinskiy Andriy </span>
      <v-spacer></v-spacer>
      <v-icon>mdi-copyright</v-icon>
      {{ new Date().getFullYear() }}
     
  </v-footer>
</template>

<script>
export default {
    name: "appFooter"

}
</script>

<style>
.footer {
  font-size: 16px;
  align-content: center;
  background-color: black;
}
</style>