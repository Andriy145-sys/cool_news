<template>
  <div>
    <v-col>
      <v-row class="px-5 mb-5" align="center">
        <v-card-title>Your posts</v-card-title>
        <v-spacer />
        <v-btn outlined color="green" @click="visible = true"
          >Add new post</v-btn
        ></v-row
      >
      <posts-list
        :showLoader="showLoader"
        class="px-10"
        type="profile"
        :posts="posts"
        @getPosts="getAutorPosts()"
      />
      <v-pagination
        v-if="posts.length > 0"
        class="mt-5"
        v-model="page"
        :length="pageCount"
        circle
        color="green"
      />
    </v-col>
    <add-new-post-modal
      :visible="visible"
      @close="visible = !visible"
      @createPost="getAutorPosts(), visible = !visible"
    />
  </div>
</template>

<script>
import postsList from "@/components/UI/posts-list";
import AddNewPostModal from "./add-new-post-modal.vue";
import postsService from "@/request/requests/postsService";
import { mapGetters } from "vuex";
export default {
  components: {
    postsList,
    AddNewPostModal,
  },
  data: () => ({
    page: 1,
    pageCount: 1,
    visible: false,
    showLoader: true,
    posts: [],
  }),
  mounted() {
    this.getAutorPosts();
  },
  methods: {
    async getAutorPosts() {
      let id = this.loggedUser.userId;
      const response = await postsService.getPostsByAuthor(id, this.page);
      this.posts = response.result;
      console.log(response);
      this.pageCount = parseInt(response.total_items/ 10) + 1;
      console.log(this.pageCount);
      this.showLoader = false;
    },
  },
  computed: {
    ...mapGetters(["loggedUser"]),
  },
  watch: {
    page: {
      deep: true,
      handler() {
        this.showLoader = true;
        this.getAutorPosts();
      },
    },
  },
};
</script>

<style>
</style>