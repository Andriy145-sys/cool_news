<template>
  <v-card>
      <v-card-title class="ml-5">Holinskiy Andriy</v-card-title>
       <v-tabs
          show-arrows
          centered
          v-model="tab"
          color="green"
        >
          <v-tabs-slider color="green"></v-tabs-slider>
          <v-tab href="#info">Info</v-tab>
          <v-tab href="#posts">Posts</v-tab>

           <v-tab-item class="mt-7" value="info">
            <user-info />
          </v-tab-item>
          <v-tab-item class="mt-7" value="posts">
            <user-posts />
          </v-tab-item>
       </v-tabs>
  </v-card>
</template>

<script>
import userPosts from '@/components/Profile/user-posts';
import userInfo from '@/components/Profile/user-info';
export default {
    components: {
        userPosts,
        userInfo
    },
    data: () => ({
        tab: ''
    })

}
</script>

<style>

</style>