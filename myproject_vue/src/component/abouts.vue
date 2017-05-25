<template id="abouts">
	<div class="about1">
		 <mt-header  id='head' fixed>
			  <router-link to="/" slot="left">
			    <mt-button icon="back">返回</mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<img src="../img/10.jpg"/>
		<p>关于我们</p>
		深圳市咫尺网络科技开发有限公司，专注于移动互联网营销及移动应用开发，可视化操作、组件化，一键生成专属APP。
随着微信近年来用户的爆发性增长，微信作为一个移动互联网的超级平台不断向电子商务，在线支付，线下生活等领域不断的渗透。微信因其庞大的使用用户，特有的营销优势与其移动入口，为广大的中小企业所看重和期待。
中国庞大的中小企业都想利用微信平台做好自己的品牌营销，业务流程整合，企业的信息化等，但苦于无相应的技术支持与整体解决方案。
	</div>
</template>

<script>
	export default {
		name:'abouts',
		
	}
</script>

<style>
	.about1 img {width:100vw; height: 4.5rem;}
	.about1 p {text-align:center; height: 0.5rem; background: #fff;font-size: 0.35rem; line-height: 0.5rem;}
	.about1 { font-size: 0.25rem;}
</style>