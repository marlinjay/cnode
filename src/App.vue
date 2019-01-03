<template>
  <div id="app">
    <app-header></app-header>
    <el-row class="content">
        <el-col   :lg="18">
          <router-view  :getdata='getdata' name="content"  @changetab='changetab' @changepage='changepage' ></router-view>
          <router-view name='topic'></router-view>
        </el-col>
        <el-col :span="6" class="hidden-md-and-down"><router-view name="side"></router-view></el-col>
    </el-row>
    <app-footer></app-footer>
    
  

    </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    'app-header':Header,
    'app-footer':Footer,

  },
  data(){
    return {
      getdata:{
          all:'',
          good:'',
          share:'',
          ask:'',
          job:'',
          dev:''
        },

        
    }
  },
  methods:{
    changetab(item){
     // console.log('我是父级'+item);
      const This=this;
      this.axios.get('https://cnodejs.org/api/v1/topics?tab='+item+'&limit=20&page=1').then(function(response){
        This.getdata[item]=response.data.data;
        
      })

    },
    changepage(item1,item2){
        const This=this;
         this.axios.get(`https://cnodejs.org/api/v1/topics?tab=${item2}&limit=20&page=${item1}`).then(function(response){
        This.getdata[item2]=response.data.data;
        console.log(This.getdata[item2])
        
      })



      console.log("我是父级"+item1,item2)
    }
  },
  created:function(){
    const This=this;
    this.axios.get('https://cnodejs.org/api/v1/topics?tab=all&limit=20&page=1').then(function(response){
        This.getdata.all=response.data.data;
       // console.log(response.data.data)
  })
}
}
</script>

<style lang="less">
#app {
 
 
  .content{
    background: #e1e1e1;
    padding:20px 50px;
    
  }
}
</style>
