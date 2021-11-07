<template>
<div class="wrapper">
  <div class="listings">
    <div class="post" v-for="listing in listings" :key="listing.id">
      <div class="info">
        <h1><u>{{listing.company}}</u></h1><h3> is seeking a </h3>
        <h2><em>{{listing.job_title}}</em>,</h2>
        <h3>with <em>{{listing.buzzwords}}</em> skills</h3>

      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ListingList',
  props: {
    listings: Array
  }
}
</script>
<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.lisitngs {
  display: flex;
}
.post {
  margin: 30px;
  padding: 10px;
  display: inline-block;
  width: 40%;
  background-color: #D8FFED;
  border-radius: 160px / 60px;
  -webkit-box-shadow: inset 0px 5px 10px 2px #363F3B;
  box-shadow: inset 0px 3px 10px 2px #363F3B;
}
.info {

}
</style>

