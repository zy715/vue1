<template>
  <div id="app">
			<v-header></v-header>
  </div>
</template>

<script>
	import header from './component/header.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
  	"v-header":header
  }
}
</script>

<style>

</style>
