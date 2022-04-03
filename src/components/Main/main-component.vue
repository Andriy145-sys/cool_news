<template>
  <div>
    <v-card-title>Recent news</v-card-title>
    <posts-list :show-loader="showLoader" type="main" :posts="posts"/>
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
    pageCount: 0,
    posts: [],
    showLoader: true
  }),
  mounted(){
    this.getAllPosts();
  },
  methods: {
    async getAllPosts(){
      const response = await postsService.getAllPosts(this.page);
      console.log(response);
      this.posts = response.result;
      this.pageCount = parseInt(response.total_items) / 10 + 1;
      this.showLoader = false
    }
  },
  watch: {
    page: {
      deep: true,
      handler() {
        this.showLoader = true;
        this.getAllPosts();
      },
    },
  },
};
</script>

<style>
</style>