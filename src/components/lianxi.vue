<template>
	<div>
		  <!--指令-->
		 <input v-on:input='inputHand' type="text"v-model="msg"/>
		 <div>{{msg}}</div>
	</div>
</template>
<script>
	export default {
		name: 'hello',
		data() {
			return {
			 msg:'',
			}
		},
		methods: {
			 inputHand(ev){
			 	console.log(ev.target.value)
			 	console.log('触发input')
			 }
	}
	}
</script>
<style scoped>

</style>