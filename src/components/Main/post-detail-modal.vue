<template>
  <div class="text-center">
    <v-dialog v-model="visibility" width="500">
      <v-card class="card">
        <v-row class="px-5">
          <v-card-title>{{ post.title }}</v-card-title>
          <v-spacer />
          <v-icon @click="$emit('close')">mdi-close</v-icon>
        </v-row>
        <v-col>
          <v-img
            height="150"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          />
          <v-card-text> {{ post.text }}</v-card-text></v-col
        >
        <v-card-subtitle class="px-5">
          <v-row justify="end">
            <span>
              {{ post.date_of_create }}
            </span>
          </v-row>
          <v-row justify="start"
            ><span> Author: {{ post.author_username }} </span>
          </v-row>
        </v-card-subtitle>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      require: true,
    },
    post: {
      require: true,
    },
  },
  computed: {
    visibility: {
      get() {
        return this.visible;
      },
      set() {
        this.$emit("close");
      },
    },
  },
};
</script>

<style>
.card {
  overflow-x: hidden;
}
</style>