<template>
  <div>
    <v-card-title>Recent news</v-card-title>
    <posts-list type="main" :posts="posts" />
    <v-pagination class="mt-5" v-model="page" :length="pageCount" circle color="green" />
  </div>
</template>

<script>
import postsList from "@/components/UI/posts-list";
import postsService from '@/request/requests/postsService';
export default {
  components: {
    postsList,
  },
  data: () => ({
    page: 1,
    pageCount: 6,
    posts: [],
  }),
  mounted(){
    this.getAllPosts();
  },
  methods: {
    async getAllPosts(){
      const response = await postsService.getAllPosts();
      console.log(response);
      this.posts = response.result;
    }
  }
};
</script>

<style>
</style>