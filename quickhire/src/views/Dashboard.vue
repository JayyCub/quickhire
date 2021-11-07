<template>
  <div>
    <h1>Employer Dashboard</h1>
    <h2>Here you can manage your Applicant Search posts and your selected candidates</h2><br>
    <div class="selected">
      <div v-if="this.$root.$data.dashList.length > 0">
        <h1>Number of Applicants: {{this.$root.$data.dashList.length}}</h1>
      </div>
      <div v-else>
        <h3>No candidates selected</h3>
        <p>Return to Home page to search candidates</p>
      </div>
      <dashList :candidate="candidate" />
    </div>
    <div class="posts">
      <h1 class="posts-title">Your Job Ads</h1>
      <div v-if="this.$root.$data.userListings.length > 0">
        <h2>Your Ads ({{this.$root.$data.userListings.length}})</h2>
        <UserAdList :listings="listings" />
      </div>
      <div v-else>
        <h3>You do not have any jobs at this time.</h3>
        <p>Visit the Job Listings tab to post an ad</p>
      </div>
    </div>
  </div>
</template>

<script>
import dashList from "../components/dashList.vue"
import UserAdList from "../components/UserAdList.vue"
export default {
  name: 'Home',
  components: {
    dashList,
    UserAdList
  },
  computed: {
    candidate() {
      return this.$root.$data.dashList;
    },
    listings() {
      return this.$root.userListings;
    }
  }
}
</script>

<style>
.selected {
  width: 59%;
  border-right: thick double #4631A0;
  display: inline-block;
}
.posts {
  width: 36%;
  display: inline-block;
  border-left: thick double #4631A0;

}
.posts-title{
  width: 100%;
}
</style>
