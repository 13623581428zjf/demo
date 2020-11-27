<template>
	<div>
		<!--指令-->
		<input v-on:input='inputHand' type="text" v-model="msg" />
		<div>{{msg}}</div>
		<!--v-if-->
		<div v-if='!seen'>不if语句看不到我</div>
		<div v-if='seen'>if语句看到我了</div>
		<!--判断ASD-->
		<div v-if="type ==='A'">显示A</div>
		<div v-else-if="type ==='S'">显示S</div>
		<div v-else-if="type ==='D'">显示S</div>
		<div v-else="type ===''">谁也不是</div>
		<!--v-show-->
		<div v-show="ok">我是v-show</div>
		<div v-show="!ok">我不是v-show</div>
		<div v-for="item in items">{{item.name}}</div>
		<!--循环整数-->
		<div v-for="item in 10">{{item}}</div>
		<!--v-for 第一个为对象属性，第二个为健名，第三个为索引-->
		<p>v-for 第一个为对象属性，第二个为健名，第三个为索引</p>
		<div v-for="(item,value,index) in inputList">
			<p>{{item}},{{value}},{{index}}</p>
		</div>
		<!--计算属性-->
		<!--computed-->
		<p>{{name}}</p>
		<p>计算后反转字符串{{reserveName}}</p>
		<!--computed中setter-->
		<!--get用来获取，set用来设置   num = 10-->
		<p>{{num}}</p>
		<p>{{num1}}</p>
		<button @click="changeNum1">点我修改num1</button>
	</div>
</template>
<script>
	export default {
		name: 'hello',
		data() {
			return {
				msg: '',
				seen: 'true',
				type: '',
				ok: 'true',
				items: [{
						name: '张某某'
					},
					{
						name: '李某某'
					}
				],
				inputList: [{
						lable: 'gg',
						key: 'one'
					},
					{
						lable: 'dd',
						key: 'two'
					},
					{
						lable: 'ss',
						key: 'three'
					}
				],
				name: '张景峰',
				url: '11岁了',
				num: 10
			}
		},
		methods: {
			inputHand(ev) {
				console.log(ev.target.value

				)
				console.log('触发input')
			},
			changeNum1: function() {
				this.num1 = 11;
			}
		},
		//计算属性
		//计算属性的getter
		//this指向vm实列
		//计算属性get用来获取，set用来设置  num=10
		computed: {
			reserveName: function() {
				return this.name.split('').reverse().join('')
			},
			//setter
			 num1:{
                    get:function(){//必须有返回值，用来获取属性，称为get函数
                        return this.num-1;
                    },
                    set:function(val){
                    	console.log(val)
                        console.log('修改num1的值');
                        this.num = 11;
                    }
                }
		}
	}
</script>
<style scoped></style>