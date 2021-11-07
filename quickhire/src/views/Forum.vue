<template>
<div>
  <br><br>
  <div class="post-wrapper">
    <form class="post-form">
      <h1>Job Ad Submission</h1>
      <h2>Company Name:</h2>
      <input id="employer" type="text">
      <h2>Job Title:</h2>
      <input id="position" type="text">
      <h2>Skill Area</h2>
      <input id="skill" type="text"><br><br>
      <button v-on:click.prevent="submitAd()">Post</button>
    </form>
  </div>
  <h3><em>Submitted Job Ads will appear at end of list</em></h3>
  <h1>All Job Listings</h1>
  <ListingList :listings="listings" />
</div>
</template>

<script>
import ListingList from "../components/ListingList.vue"
export default {
  name: 'Forum',
  components: {
    ListingList
  },
  computed: {
    listings(){
      return this.$root.$data.listings;
    }
  },
  methods: {
    submitAd() {
      const employer = document.getElementById("employer").value;
      const position = document.getElementById("position").value;
      const skill = document.getElementById("skill").value;
      const listing = {id:(this.$root.$data.listings.length + 1), company:employer, job_title:position, buzzwords:skill};
      this.$root.$data.listings.push(listing);
      this.$root.$data.userListings.push(listing);
      document.getElementById("employer").value = "";
      document.getElementById("position").value = "";
      document.getElementById("skill").value = "";
      return;
    }
  }

}
</script>

<style>
.post-form {
    background-color: #D8EBFE;
    width: 50%;
    border: medium double #213254;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 10px;
}
</style>
