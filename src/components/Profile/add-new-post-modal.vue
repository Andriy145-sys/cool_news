<template>
  <div class="text-center">
    <v-dialog v-model="visibility" width="500">
      <v-card class="card">
          <v-row class="px-5">
          <v-card-title>Adding new post</v-card-title>
          <v-spacer />
          <v-icon @click="$emit('close')">mdi-close</v-icon>
        </v-row>
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