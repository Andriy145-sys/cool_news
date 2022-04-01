<template>
  <div>
    <v-col>
      <v-row class="px-5 mb-5" align="center">
        <v-card-title>Your posts</v-card-title>
        <v-spacer />
        <v-btn outlined color="green" @click="visible = true">Add new post</v-btn></v-row
      >
      <posts-list class="px-10" type="profile" :posts="posts" />
      <v-pagination class="mt-5" v-model="page" :length="pageCount" circle color="green" />
    </v-col>
    <add-new-post-modal :visible="visible" @close="visible = !visible"/>
  </div>
</template>

<script>
import postsList from "@/components/UI/posts-list";
import AddNewPostModal from './add-new-post-modal.vue';
export default {
  components: {
    postsList,
    AddNewPostModal
  },
  data: () => ({
    page: 1,
    pageCount: 6,
    visible: false,
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