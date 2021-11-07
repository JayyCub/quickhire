<template>
  <div class="home">
    <p class="title"><em>Q u i c k H i r e</em></p>
    <img alt="QuickHire logo" src="../assets/search_logo.png" style="width:300px;height:auto;" >
    <div>
      <h2>Here you can find potential employees with a quick search!</h2>
      <p class="subby">Enter a job title to find job candidates (e.g. "engineer"). Then navigate the to Employer dashboard to view selected candidates</p>
      <form action="" class="search-bar">
        <i class="fas fa-search"></i><input v-model="searchText" class="search-bar">
      </form>
    </div>
    <h1 class="subtitle">Applicants Looking for Work:</h1>
    <CandidateList :candidates="candidates" />

  </div>
</template>

<script>
import CandidateList from '../components/CandidateList.vue'
export default {
  name: 'Home',
  components: {
    CandidateList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    candidates() {
      return this.$root.$data.candidates.filter(candidate => candidate.previous_job.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    }
  },
}
</script>

<style>
.home {
  margin-top: 50px;
  margin-bottom: 0px;
}
.title {
  font-size: 48px;
  color: rgba(36,83,242,1.00);
  font-weight: bold;
}
.subtitle {
  margin-bottom: -25px;
}
.subby {
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  height: auto;
}
.search-bar {
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    height: 40px;
    padding: 5px;
    font-size: large;
    margin-bottom: 20px;
}
.search-bar:enabled {
}
.search-btn {
    border: medium solid rgba(132,176,237,1.00);
    border-radius: 25px;
    color: rgba(24,33,71,1.00);
    background-color: rgba(0,0,0,0.00);
    height: 60px;
    font-size: large;
}
.search-btn:hover {
    background-color: rgba(138,166,247,1.00);
    transition: 0.25s;
    color: rgba(255,255,255,1.00);
    border-color: rgba(51,51,51,1.00);
}
</style>
