<template>
  <div class="wrapper">
    <div class="candidates">
      <div class="candidate" v-for="candidate in candidates" :key="candidate.id">
        <h2>{{candidate.name}}</h2>
        <div class="info">
          <h2>Studied at <em>{{candidate.education}}</em></h2>
          <h2>Previously worked at <em>{{candidate.previous_employer}}</em> as <em>{{candidate.previous_job}}</em></h2>
          <h2>Top Skill: <br><em>{{candidate.skill}}</em></h2><br>
          <button v-on:click="addToDash(candidate)" class="candidate-add">Add to Dashboard</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CandidateList',
  props: {
    candidates: Array
  },
  methods: {
    addToDash(candidate){
      if (this.$root.$data.dashList.includes(candidate)){
        return;
      } else {
        this.$root.$data.dashList.push(candidate);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 25px;
  padding-right: 25px;
}
.candidates {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.candidate {
    position: relative;
    margin: 10px;
    margin-top: 50px;
    width: 200px;
    min-height: 240px;
    padding-left: 10px;
    padding-right: 10px;
    border: thick outset #A2A2A2;
    border-radius: 20px / 60px;
    -webkit-box-shadow: 0px 0px 10px 1px #373737;
    box-shadow: 0px 0px 10px 1px #373737;
    background-color: #BAE5FF;
}
.info {
    color: #000;
    text-align: left;
    margin-left: 10px;
    margin-right: 10px;
    padding-bottom: 10px;
}
.info h1 {
  font-size: 16px;
}
.info h2 {
  font-size: 14px;
}
.info p {
  margin: 0px;
  font-size: 10px;
}
.candidate-add {
  font-size: large;
  margin-bottom: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  position: absolute;
  bottom: 0;
  width: 80%;
}
</style>
