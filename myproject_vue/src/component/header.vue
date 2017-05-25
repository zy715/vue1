<template id="header">
	<div id="">
		
		<router-view  @to-parent='getdata'>
			
		</router-view>
		<footer>
	  		<router-link to="/index">
			  		<div>
			  			<div class="iconfont icon-gongyi01 nic"></div>
			  			<p>公益</p>
			  		</div>
	  		</router-link>
	  		<router-link to="/zixun">
			  		<div>
			  			<div class="iconfont icon-zixun nic"></div>
			  			<p>资讯</p>
			  		</div>
	  		</router-link>
	  		<router-link to="/me">
			  		<div>
			  			<div class="iconfont icon-guanyuwomen nic"></div>
			  			<p>我的</p>
			  		</div>
	  		</router-link>
  		</footer>
	</div>
	
</template>

<script>
	export default {
		name:'header',
		data:function(){
			return {
				str:'走秀网',
				isshow:false
			}
		},
		methods:{
			getdata:function (res) {
				this.str=res,
				this.isshow=true
			},
			tap:function () {
				this.isshow=false,
				this.str="走秀网"
			}
		}
		
		
	}
</script>

<style>
	*{ padding: 0; margin: 0;}
	#head { background: #000; height: 0.8rem; font-size: 0.3rem; line-height:0.6rem;}
	footer { height:0.8rem; background: #fff; position: fixed; bottom: 0; width: 100%;}
	footer a>div{ float: left; height: 100%; width: 33.33%; text-align: center;}
	footer a>div p { font-size:0.2rem; color: #000;}
	.nic { color: #ccc; font-size: 0.4rem;}
</style>