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
		<p>{{prise}}</p>
		<!--watch监听-->
		<p>
			千米：<input type="text" v-model="kilomenters" /> 千米：
			<input type="text" v-model="meters" /> 米:
		</p>
		<!--动态样式-->
		<!--<div class="stat" v-bind:class="{'stat':isA,'text':hasErr}">

		</div>-->
		<div class="stat" v-bind:class="{'stat':isA,'text':hasErr}">
		</div>
		<div v-bind:class="classobj">
		</div>
		<!--style-->
		<div v-bind:style="{color:activeColor,fontSize:fontSize + 'px'}">
			我是动态 style
		</div>
		<!--点击事件  让ent加1-->
		<button v-on:click="ent+=1">这个按钮被点了{{ent}}次</button>
        <button v-on:click="say('hi')">点我说hi</button>
        <button v-on:click="say('hello')">点我说hello</button>
        <!--允许点击一次-->
        <button v-on:click.once='doThis'>只点击一次</button>
        <!--阻止冒泡    同事件处理器-->
        <button v-on:click.stop="doThis">阻止冒泡</button>
         <!--input-->
         
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
				num: 10,
				cents: 100,
				kilomenters: 0,
				meters: 0,
				isA: true,
				hasErr: true,
				classObj: true,
				classobj: {
					acts: true,
					tere: false
				},
				activeColor: 'green',
				fontSize: 40,
				ent: 0
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
			},
			say:function(massage){
				alert(massage)
			},
			doThis:function(){
				console.log('点击了一次')
			}
		},//计算属性
		//计算属性的getter
		//this指向vm实列
		//计算属性get用来获取，set用来设置  num=10
		computed: {
			reserveName: function() {
				return this.name.split('').reverse().join('')
			},
			//setter
			num1: {
				get: function() { //必须有返回值，用来获取属性，称为get函数
					return this.num - 1;
				},
				set: function(val) {
					console.log(val)
					console.log('修改num1的值');
					this.num = 11;
				}
			},
			prise: {
				get: function() {
					return(this.cents / 100).toFixed(2)
				}
			}
		},
		watch: {
			kilomenters: function(val) {
				console.log(val)
				this.kilomenters = val;
				this.meters = this.kilomenters * 1000
			},
			meters: function(val) {
				this.kilomenters = val / 1000;
				this.meters = val;
			}
		}
	}
</script>
<style scoped>
	.stat {
		width: 100px;
		height: 100px;
		background: green;
	}
	
	.text {
		width: 200px;
		height: 200px;
		background: red;
	}
	
	.acts {
		width: 100px;
		height: 10px;
		background: teal;
	}
	
	.tere {
		width: 100px;
		height: 10px;
		background: blue;
	}
</style>