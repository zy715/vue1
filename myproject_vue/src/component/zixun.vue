<template id="zixun">
	<div>
		<mt-header  id='head' fixed>
			  <router-link to="/" slot="left">
			    <mt-button icon="back">返回</mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<mt-swipe :auto="3000" style="height:3.2rem;width:100vw; overflow: hidden; margin-top: 0.8rem;">
		  <mt-swipe-item class='sl1' style="height:3.2rem;width: 100vw;"><img src="../img/12.jpg"/></mt-swipe-item>
		  <mt-swipe-item class='sl1' style="height:3.2rem;width: 100vw;"><img src="../img/13.jpg"/></mt-swipe-item>
		  <mt-swipe-item class='sl1' style="height:3.2rem;width: 100vw;"><img src="../img/03.jpg"/></mt-swipe-item>
		</mt-swipe>
		<div class="zixun1">  
			<router-link class="zixun2" v-for="(item,i) in arr" :to="'/zixun/'+i">
				<img :src="'./src/img/'+item.img"/>
				<p>{{item.title}}</p>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name:"zixun",
		data(){
			return {
				arr:"",
				src:""
			}
		},
		mounted(){
			var _this=this;
				axios.get('./src/js/zixun.json')
	           .then(function (response) {
					console.log(typeof(response.data))
	               _this.arr=response.data;
	               console.log(_this.arr)
	           })
	           .catch(function (error) {
	               console.log(error);
	           });
	           

		}
	}
</script>

<style>
	*{padding: 0; margin: 0;}
	.sl1 img{ width: 100vw; height: 3rem;}
	.zixun2 { height: 1.5rem; width: 100%; overflow: hidden; margin-top:0.05rem; display: block; color: #000000; text-decoration: none;}
	.zixun2 img { height: 1.5rem; width: 2.3rem; float: left;}
	.zixun2 p {font-size: 0.25rem; margin-top: 0.4rem; text-indent: 0.2rem;}
</style>