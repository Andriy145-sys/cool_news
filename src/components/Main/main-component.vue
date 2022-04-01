<template>
  <v-row style="justify: space-between">
    <posts-list :posts="posts"/>
  </v-row>
</template>

<script>
import postsList from "@/components/Main/posts-list";
export default {
  components: {
    postsList,
  },
  data: () => ({
    posts: [
      { _id: 1, title: "Cool news", text: "Text dsahdsajdghjsagdhsgadgjsgdjashgdjsagdhsagjd" },
      { _id: 2, title: "Cool news", text: "TextText dsahdsajdghjsagdhsgadgjsgdjashgdjsagdhsagjd" },
      { _id: 3, title: "Cool news", text: "TexText dsahdsajdghjsagdhsgadgjsgdjashgdjsagdhsagjdt" },
      { _id: 4, title: "Cool news", text: "TText dsahdsajdghjsagdhsgadgjsgdjashgdjsagdhsagjdext" },
      { _id: 5, title: "Cool news", text: "Text" },
    ],
  }),
};
</script>

<style>
</style>