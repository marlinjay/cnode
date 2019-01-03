<template>
	<div id="mudle">
		<div class="head"><slot name="title"> 这里是插槽1</slot></div>
		<div class="body"><slot name="body">这里是插槽2</slot></div>
	</div>
</template>

<style scoped>
	#mudle{border-radius: 2px;overflow: hidden;}
	#mudle .head{padding:10px;font-size: 14px;line-height: 20px;background: #f6f6f6;text-align: left;height: 20px;}
	#mudle .body{background: white;text-align: left;padding:10px;}
</style>