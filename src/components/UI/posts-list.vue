<template>
  <div>
    <v-row style="justify: space-between">
      <v-col cols="6" lg="3" v-for="post in posts" :key="post._id">
        <v-card evalution="10" @click="getDetailPost(post._id)">
          <v-img
            height="150"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>
          <v-card-title>{{ post.title }}</v-card-title>
          <v-card-text
            ><span>{{ post.text }}</span>
          </v-card-text>
        </v-card>
      </v-col>
      <post-detail-modal
        :post="postDetail"
        :visible="visibleMainModal"
        @close="visibleMainModal = !visibleMainModal"
      />
      <add-new-post-modal
        :post="postDetail"
        :visible="visibleProfileModal"
        @close="visibleProfileModal = !visibleProfileModal"
      />
    </v-row>
  </div>
</template>

<script>
import postDetailModal from "@/components/Main/post-detail-modal";
import addNewPostModal from "@/components/Profile/add-new-post-modal";
export default {
  components: {
    postDetailModal,
    addNewPostModal,
  },
  data: () => ({
    visibleMainModal: false,
    visibleProfileModal: false,
    postDetail: {},
  }),
  props: {
    posts: {
      require: true,
    },
    type: {
      require: true,
    },
  },
  methods: {
    async getDetailPost(id) {
      this.postDetail = {
        title: "Col",
        text: "twfsdsfdsfdsfdf",
      };
      console.log(id);
      if (this.type === "main") {
        this.visibleMainModal = true;
      }
      if (this.type === "profile") {
        this.visibleProfileModal = true;
      }
    },
  },
};
</script>

<style>
</style>