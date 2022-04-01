<template>
  <div>
    <Header />
    <v-app>
      <v-main>
        <v-container>
          <router-view style="margin-top:60px;"/>
        </v-container>
      </v-main>
    </v-app>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  font-family: "Comic Sans MS", "Comic Sans", "cursive";
}
</style>
