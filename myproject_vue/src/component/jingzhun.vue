<template id="jz">
	<div id="">
		 <mt-header  id='head' fixed>
			  <router-link to="/" slot="left">
			    <mt-button icon="back">返回</mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div class="jz1 first">
			<img src="../img/18.jpg"/>
			<p>记得住乡愁 融得进产业</p>
		</div>
		<div class="jz1">
			<img src="../img/19.jpg"/>
			<p>“集善扶贫健康行—孙楠·重塑未来”专项基金在京成立</p>
		</div>
	</div>
</template>

<script>
	export default {
		name:"jz"
	}
</script>

<style>
	.jz1 { width: 90%;margin: 0 auto;}
	.first { margin-top: 0.9rem; margin-bottom: 0.1rem;}
	.jz1 img { width: 100%; height:3.8rem;}
	.jz1 p { font-size: 0.25rem; text-indent:0.2rem;}
</style>