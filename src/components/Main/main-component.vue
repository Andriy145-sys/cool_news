<template>
  <div>
    <v-card-title>Recent news</v-card-title>
    <posts-list type="main" :posts="posts" />
    <v-pagination v-model="page" :length="pageCount" circle color="green" />
  </div>
</template>

<script>
import postsList from "@/components/UI/posts-list";
export default {
  components: {
    postsList,
  },
  data: () => ({
    page: 1,
    pageCount: 6,
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
      {
        _id: 3,
        title: "Cool news",
        text: "TexText dsahdsajdghjsagdhsgadgjsgdjashgdjsagdhsagjdt",
      },
      {
        _id: 4,
        title: "Cool news",
        text: "TText dsahdsajdghjsagdhsgadgjsgdjashgdjsagdhsagjdext",
      },
      { _id: 5, title: "Cool news", text: "Text" },
    ],
  }),
};
</script>

<style>
</style>