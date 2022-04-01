<template>
  <v-app-bar dense class="app-bar">
    <router-link to="/"
      ><v-app-bar-title>Cool news</v-app-bar-title></router-link
    >
    <v-spacer></v-spacer>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-icon v-bind="attrs" v-on="on"> mdi-account </v-icon>
      </template>
      <v-list dense>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item
            v-for="(profileItem, index) in profileDropDown"
            :key="index"
            @click="goTo(profileItem.path)"
          >
            <v-list-item-icon
              ><v-icon v-text="profileItem.icon"
            /></v-list-item-icon>
            <v-list-item-title v-text="profileItem.title"></v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: "appHeader",
  data: () => ({
    selectedItem: 2,
    profileDropDown: [
      {
        icon: "mdi-account",
        title: "My profile",
        path: "profile",
      },
      {
        icon: "mdi-logout-variant",
        title: "Logout",
        path: "logout",
      },
    ],
  }),
  methods: {
    goTo(path) {
      switch (path) {
        case "profile":
          {
            this.$router.push("/profile");
          }
          break;
        case "logout":
          {
            this.logout();
          }
          break;
      }
    },
    async logout() {
      console.log("log");
    },
  },
};
</script>

<style>
.app-bar {
  background: #9fddae !important;
}
a {
  color: black;
  text-decoration: none;
}
</style>