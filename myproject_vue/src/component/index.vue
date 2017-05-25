<template id="index">
	<div id="">
		 <mt-header  id='head' fixed>
			  <router-link to="/" slot="left">
			    <mt-button icon="back">返回</mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<mt-swipe :auto="3000" style="height:3rem;width:100vw; overflow: hidden; margin-top: 0.6rem;">
		  <mt-swipe-item class='sl1' style="height:3rem;width: 100vw;"><img src="../img/01.jpg"/></mt-swipe-item>
		  <mt-swipe-item class='sl1' style="height:3rem;width: 100vw;"><img src="../img/02.jpg"/></mt-swipe-item>
		  <mt-swipe-item class='sl1' style="height:3rem;width: 100vw;"><img src="../img/03.jpg"/></mt-swipe-item>
		</mt-swipe>
		<div id="list">
			<router-link to='/jingzhun' class='list1'>
				<i class="iconfont icon-gongyi01" style="color: #fb5653;"></i>
				<p>精准扶贫</p>		
			</router-link >
			<router-link to='/gy' class='list1'>
				<i class="iconfont icon-jilu" style="color: #ffb400;"></i>
				<p>公益进行时</p>
			</router-link>
			<router-link to='/meside' class='list1'>
				<i class="iconfont icon-feiji" style="color: #06d276;"></i>
				<p>公益在身边</p>
			</router-link>
		</div>
		<router-link class="aboutus" to="/abouts">
			<img src="../img/04.png" class="img4"/><p>咫尺公益，让公益不遥远</p>
		</router-link>
		<div class="faxian">
			<p class="faxian1">最新发现</p>
			<div class="faxian2" v-for='(item,i) in arr'>
				<img :src="'./src/img/'+item.img"/>
				<p>{{item.title}}</p>
			</div>
		</div>
		<div class="zhuanti">
			<p class="zhuanti1">推荐专题</p>
			<div class="zhuanti2" v-for="(item,i) in arr1">
				<img :src="'./src/img/'+item.img"/>
				<p>{{item.title}}</p>
			</div>
		</div>
	</div>
	
</template>

<script>
	export default {
		name:"index",
		data(){
			return {
				arr:"",
				src:"",
				arr1:""
			}
		},
		mounted(){
			var _this=this;
				axios.get('./src/js/list.json')
	           .then(function (response) {
	
	               _this.arr=response.data;
	               console.log(_this.arr)
	           })
	           .catch(function (error) {
	               console.log(error);
	           });
	           
	           axios.get('./src/js/tuijian.json')
	           .then(function (response) {
	
	               _this.arr1=response.data;
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
	#list { height: 1rem; width: 100%; background: #fff;}
	
	#list .list1{ width: 33.33%; height: 80%; float: left; font-size: 0.2rem; text-align: center; margin-top: 0.1rem;text-decoration:none;}
	#list .list1 i { font-size: 0.5rem;}
	#list .list1 p { color: #CCCCCC;}
	.aboutus { height:0.6rem; margin: 0.1rem 0; background: #FFF; display: block; color: #000000; text-decoration: none;}
	.aboutus img { width: 1.2rem; height: 0.5rem; float: left; margin-left: 0.2rem;margin-top: 0.1rem;}
	.aboutus p {font-size: 0.25rem; line-height: 0.6rem;}
	.faxian1 { font-size: 0.3rem; line-height: 0.6rem; color: #ccc; background:#fff url(../img/05.png) no-repeat 0.2rem 0.1rem; background-size:0.4rem;}
	.faxian1 { text-indent: 0.6rem;}
	.faxian2 { height: 1rem; width: 100%; margin-top: 0.05rem; overflow: hidden; background: #FFFFFF;}
	.faxian2 img { width:1.2rem; float: left; height: 100%;}
	.faxian2 p { float: left; font-size: 0.3rem; text-indent: 0.2rem;}
	.zhuanti { background: ##FFFFFF; margin-top: 0.05rem; height:4.4rem;}
	.zhuanti1{ font-size: 0.3rem; line-height: 0.6rem; color: #ccc; background:#fff url(../img/05.png) no-repeat 0.2rem 0.1rem; background-size:0.4rem;text-indent: 0.6rem;}
	.zhuanti2 { float: left; margin: 0 2.5%; width: 45%; height: 2rem;}
	.zhuanti2 img { width:100%; height: 1.8rem;}
	.zhuanti2 p {font-size: 0.25rem; float: left;}
</style>