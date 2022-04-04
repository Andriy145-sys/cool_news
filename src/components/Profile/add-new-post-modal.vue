<template>
  <div class="text-center">
    <v-dialog v-model="visibility" width="500">
      <v-card class="card">
        <v-row class="px-5 mt-1" align="center">
          <v-card-title v-if="!isEdit">Adding new post</v-card-title>
          <v-card-title v-else>Update post</v-card-title>
          <v-spacer />
          <v-icon class="mr-2" @click="$emit('close')">mdi-close</v-icon>
        </v-row>
        <v-col cols="12" lg="12" md="12" xl="12" sm="12" class="px-8">
          <v-text-field
            placeholder="Type here..."
            label="Post title"
            outlined
            dense
            color="green"
            v-model="posts.title"
            :error-messages="postTitleError"
            @blur="$v.posts.title.$touch()"
          />
          <v-textarea
            placeholder="Type here..."
            label="Post text"
            outlined
            dense
            color="green"
            v-model="posts.text"
            :error-messages="postTextError"
            @blur="$v.posts.text.$touch()"
          />
        </v-col>
        <v-card-actions>
          <v-row justify="end" class="mr-2 mb-5">
            <v-btn v-if="!isEdit" color="green" dark @click="createNewPost">
              Create
            </v-btn>
            <v-row v-else justify="end">
              <v-btn
                color="red"
                dark
                @click="deletePost(posts._id)"
                class="mr-5"
              >
                Delete
              </v-btn>
              <v-btn color="green" dark @click="updatePost(posts._id), $emit('getPosts')"> Update </v-btn>
            </v-row>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import postsService from "@/request/requests/postsService";
import { mapGetters } from "vuex";
export default {
  mixins: [validationMixin],
  data: () => ({
    posts: [],
  }),
  validations: {
    posts: {
      title: {
        required,
      },
      text: {
        required,
      },
    },
  },
  props: {
    visible: {
      require: true,
    },
    post: {
      require: false,
    },
    isEdit: {
      require: false,
    },
  },
  methods: {
    async createNewPost() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const data = [];
        data.title = this.posts.title;
        data.text = this.posts.text;
        data.author_id = this.loggedUser.userId;
        data.author_username = this.loggedUser.username;
        await postsService.createPost({ ...data });
        this.posts = {};
        this.$v.$reset();
        this.$emit('createPost');
      }
    },
    async updatePost(id) {
      this.$v.$touch();
      if (!this.$v.$invalid) {
         const data = [];
        data.title = this.posts.title;
        data.text = this.posts.text;
        data.author_id = this.loggedUser.userId;
        data.author_username = this.loggedUser.username;
        await postsService.updatePost(id,{ ...data });
        this.$emit('getPosts');
      }
    },
    async deletePost(id) {
      await postsService.deletePost(id);
      this.$emit('getPosts');
    },
  },
  watch: {
    post: {
      deep: true,
      handler() {
        if (this.isEdit) {
          this.posts = this.post;
        }
      },
    },
  },
  computed: {
    ...mapGetters(["loggedUser"]),
    visibility: {
      get() {
        return this.visible;
      },
      set() {
        this.$emit("close");
      },
    },
    postTitleError() {
      const errors = [];
      if (!this.$v.posts.title.$dirty) {
        return errors;
      }
      !this.$v.posts.title.required && errors.push("Title is required");
      return errors;
    },
    postTextError() {
      const errors = [];
      if (!this.$v.posts.text.$dirty) {
        return errors;
      }
      !this.$v.posts.text.required && errors.push("Text is required");
      return errors;
    },
  },
};
</script>

<style>
.card {
  overflow-x: hidden;
}
</style>