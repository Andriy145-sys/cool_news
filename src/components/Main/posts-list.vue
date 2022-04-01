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
        :visible="visible"
        @close="visible = !visible"
      />
    </v-row>
  </div>
</template>

<script>
import postDetailModal from "@/components/Main/post-detail-modal";
export default {
  components: {
    postDetailModal,
  },
  data: () => ({
    visible: false,
    postDetail: {},
  }),
  props: {
    posts: {
      require: true,
    },
  },
  methods: {
    async getDetailPost(id) {
      this.postDetail = {
          title: 'Col',
          text: 'twfsdsfdsfdsfdf'
      };
      console.log(id)
      this.visible = true;
    },
  },
};
</script>

<style>
</style>