<template>
  <div>
    <v-col>
      <v-row class="px-5 mb-5" align="center">
        <v-card-title>Your posts</v-card-title>
        <v-spacer />
        <v-btn outlined color="green">Add new post</v-btn></v-row
      >
      <posts-list class="px-10" type="profile" :posts="posts" />
    </v-col>
  </div>
</template>

<script>
import postsList from "@/components/UI/posts-list";
export default {
  components: {
    postsList,
  },
  data: () => ({
    posts: [
      {
        _id: 1,
        title: "Cool news",
        text: "Text dsahdsajdghjsagdhsgadgjsgdjashgdjsagdhsagjd",
      },
      {
        _id: 2,
        title: "Cool news",
        text: "TextText dsahdsajdghjsagdhsgadgjsgdjashgdjsagdhsagjd",
      },
    ],
  }),
};
</script>

<style>
</style>