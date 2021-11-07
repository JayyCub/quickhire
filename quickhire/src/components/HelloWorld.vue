<template>
  <div class="wrapper">
    <div class="products">
      <div class="product" v-for="candidate in candidates" :key="candidate.id">
        <div class="info">
          <p>1</p>
          <h1>{{candidate.name}}</h1>
          <p>{{candidate.gender}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    products: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
