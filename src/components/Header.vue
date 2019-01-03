<template>
	<div id="header">
	 	<el-row class='nav'>
	 		<el-col :span="3" ><div class="ico"><img src="../assets/nav.png" class="img"></div></el-col>
	 		<el-col :span="4">
		 		
		 			<el-input 
					  placeholder="请输入内容"
					  prefix-icon="el-icon-search"
					  v-model="input"
					  size="mini">
					</el-input>
		 		
			</el-col>
	  		<el-col :span="8" :push='8'>
	  			<el-menu
				  :default-active="activeIndex"
				  class="el-menu-demo"
				  mode="horizontal"
				  @select="handleSelect"
				  background-color="#444"
				  text-color="#ccc"
				  active-text-color="#ffd04b"
				  router>
				  <el-menu-item index="/">首页</el-menu-item>
				  <el-menu-item index="/newer">新手入门</el-menu-item>
				  <el-menu-item  index="/api" >API</el-menu-item>
				  <el-menu-item index="/about" >关于</el-menu-item>
				  <el-menu-item index="/register">注册</el-menu-item>
				  <el-menu-item index="/login">登陆</el-menu-item>
				</el-menu>
	  		</el-col>

		</el-row>
		
	</div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        input:''
        
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@size:50px;
.el-row{height: @size;background: #444;
	.el-col{
		&:first-child{
			div{height: 30px;padding:10px;
			img{height: 25px;}
			}
		}
		&:nth-of-type(2){
			.el-input{
				margin-top: 10px;
				
				
			}
		}
		.el-menu{width: 400px;
			.el-menu-item{height: @size;line-height: @size;padding:0 15px;border-bottom: 0;}
		}
		
	}
}


	.nav/deep/.el-input__inner{border-radius: 14px;}
</style>

<style type="text/css">
	
</style>