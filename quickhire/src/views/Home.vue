<template>
  <div class="home">
    <img alt="QuickHire logo" src="../assets/search_logo.png" style="width:300px;height:auto;" >
    <HelloWorld msg="Welcome to QuickHire"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

