<template>
	<div id="index">
			<el-tabs slot="title" v-model="activeName" @tab-click="handleClick">
			    <el-tab-pane label="全部" name="all">
            <app-list :listdata='getdata.all'></app-list>
          </el-tab-pane>
			    <el-tab-pane label="精华" name="good">
            <app-list :listdata='getdata.good'></app-list>
          </el-tab-pane>
			    <el-tab-pane label="分享" name="share">
            <app-list :listdata='getdata.share'></app-list>
          </el-tab-pane>
			    <el-tab-pane label="问答" name="ask">
            <app-list :listdata='getdata.ask'></app-list>
          </el-tab-pane>
			    <el-tab-pane label="招聘" name="job">
            <app-list :listdata='getdata.job'></app-list>
          </el-tab-pane>
			    <el-tab-pane label="客户端测试" name="dev">
           <app-list :listdata='getdata.dev'></app-list>
          </el-tab-pane>
  			</el-tabs>
        <div class="page" >
          <el-pagination
            background
            layout="prev, pager, next"
            :total="100"
            :current-page.sync='pageNum'
            @current-change="pagechange"
            >
          </el-pagination>
        </div>
	</div>
</template>

<script>
  import list from "./List";
  export default {
    components:{
      'app-list':list
    },
    data() {
      return {
        activeName: 'all',
        pageNum:1
        
      };
    },
    props:['getdata'],
    methods: {
      handleClick(tab, event) {
      //	console.log(tab.name);
        //console.log(this.activeName)
       this.$emit('changetab',tab.name)
       this.pageNum=1
      },
      pagechange(item){
        console.log('我是子级'+item,this.activeName)
        this.$emit('changepage',item,this.activeName)
      }
    },
    computed:{
      
    },
    
 
	created:function(){
	//	console.log(this.getdata);
	}

  };
</script>

<style scoped lang="less">
	#index{
		/deep/.el-tabs__header{background: #f6f6f6;margin-bottom: 0}

		/deep/.el-tabs__content{background: white;padding: 10px;}
		/deep/.el-tabs__nav-wrap:after{height: 0px;}
		/deep/.el-tabs__active-bar {height: 0;}
		/deep/.el-tabs__nav-scroll{}
		/deep/.el-tabs__item{color: #80bd01;  padding: 0 5px;margin:10px 10px;height: 20px;line-height: 20px;border-radius: 3px;}
		/deep/.el-tabs__item:hover{color:#606266;}
		/deep/.el-tabs__item.is-active{background:#80bd01;color: white }
    .page{background: white;padding: 10px}
    
	}
</style>

<style >
  ul,li,h1,h2,body{list-style-type: none;padding: 0;margin: 0}
</style>