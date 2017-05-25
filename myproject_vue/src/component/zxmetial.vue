<template id="zxmetial">
	<div id="">
		<mt-header  id='head' fixed>
			  <router-link to="/zixun" slot="left">
			    <mt-button icon="back">返回</mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<h2>{{arr.title}}</h2>
		<p>{{arr.con}}</p>
	</div>
</template>

<script>
	export default {
		name:"zxmetial",
		data(){
			return {
				arr:""
			}
		},
		mounted(){
		var _this=this;
			axios.get('./src/js/zxmetial.json')
           .then(function (response) {
				console.log(typeof(response.data))
               _this.arr=response.data[_this.$route.params.id];
               console.log( _this.arr)
           })
           .catch(function (error) {
               console.log(error);
           });
           

		}
	}
</script>

<style scoped>
	h2 { font-size:.34rem; margin-top: 0.9rem; margin-bottom: 0.2rem; text-align: center;}
	p { font-size:0.25rem; line-height: 0.4rem; text-indent: 0.5rem; width:90%; margin: 5% auto;}
</style>