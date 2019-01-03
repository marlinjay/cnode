<template>
	<ul>
      <li class="list clearfix" v-for=' item in listdata'>
        
        <img :src="item.author.avatar_url" class="author_img"
        :title="item.author.loginname">
        <div class="count">
          <span class="reply_count">{{item.reply_count}}</span>
          <span class="separat_count">/</span>
          <span class="visit_count">{{item.visit_count}}</span>
        </div>
        <span class="list_tab list_tab_top" v-if='item.top'>置顶</span>
        <span class="list_tab list_tab_top" v-else-if='item.good'>精华</span>
        <span class="list_tab" v-else-if="item.tab==='ask'">问答</span>
        <span class="list_tab" v-else-if="item.tab==='share'">分享</span>
        <router-link :to="'/topic/'+item.id" class="list_title">{{item.title}}</router-link>
        <div class="reply_time">
          <span class="reply_num">{{replyNum(item.last_reply_at)}}</span>
          <span class="reply_bef">{{replyBef(item.last_reply_at)}}</span>
        </div>
        <img :src="item.author.avatar_url" class="reply_img">
      </li>
     </ul>
</template>
<script>
 export default {
    data() {
      return {
        
        
      };
    },
    props:['listdata'],
    methods: {
      
      replyNum(item){
        let now_time=new Date();
        let relay_time=new Date(item);
        let t=(now_time-relay_time)/1000;
        var yearC=Math.floor(t/(3600*24*365));
        var monC=Math.floor(t%(3600*24*365)/(3600*24*30));
        var dayC=Math.floor(t%(3600*24*365)%(3600*24*30)/(3600*24));
        var houC=Math.floor(t%(3600*24*365)%(3600*24*30)%(3600*24)/(3600));
        var minC=Math.floor(t%(3600*24*365)%(3600*24*30)%(3600*24)%(3600)/(60));
        var secC=Math.floor(t%(3600*24*365)%(3600*24*30)%(3600*24)%(3600)%(60));
        
        if (yearC==0) {
          if (monC==0) {
            if (dayC==0) {
              if (houC==0) {
                if (minC==0) {
                  return secC;
                }else {
                  return minC;
                }
              }else {
                return houC;
              }
            }else {
                return dayC;
            }
          }else {
            return monC;
          }
        }else{
         return yearC;
        }
        console.log(item)
        
      },
       replyBef(item){
        let now_time=new Date();
        let relay_time=new Date(item);
        let t=(now_time-relay_time)/1000;
        var yearC=Math.floor(t/(3600*24*365));
        var monC=Math.floor(t%(3600*24*365)/(3600*24*30));
        var dayC=Math.floor(t%(3600*24*365)%(3600*24*30)/(3600*24));
        var houC=Math.floor(t%(3600*24*365)%(3600*24*30)%(3600*24)/(3600));
        var minC=Math.floor(t%(3600*24*365)%(3600*24*30)%(3600*24)%(3600)/(60));
        var secC=Math.floor(t%(3600*24*365)%(3600*24*30)%(3600*24)%(3600)%(60));
        
        if (yearC==0) {
          if (monC==0) {
            if (dayC==0) {
              if (houC==0) {
                if (minC==0) {
                  //return secC;
                  return  '秒前';
                }else {
                 // return minC;
                 return '分钟前';
                }
              }else {
                //return houC;
                return '小时前';
              }
            }else {
               // return dayC;
              return '天前';
            }
          }else {
           // return monC;
           return '个月前';
          }
        }else{
         //return yearC;
         return '年前';
        }
      }
    },
    computed:{
      
    }
 
	

  };

</script>


<style scoped>
	.list{padding: 10px;border-top: 1px solid #f0f0f0;position: relative;}
    .list:hover{background:#f6f6f6; }
    .list:nth-of-type(1){border:none}
    .list>.author_img{height: 30px;width: 30px;float: left;}
    .list>.list_tab{width: 32px;height: 20px;line-height: 20px; float: left;border-radius: 2px;text-align: center;font-size: 12px;background-color: #e5e5e5;color: #999;}
    .list>.list_tab_top{background: #80bd01;color: white;}
    .list>.list_title{max-width: 60%;float: left;font-size: 16px;line-height: 30px;text-indent: 5px;overflow:hidden;height: 30px;text-overflow: ellipsis;white-space:nowrap;color: black;text-decoration: none}
    .list>.list_title:visited{color: #888;}
    .list>.reply_img{float:right;height: 20px;width: 20px;margin: 5px 0;}
    .list>.reply_time{float:right;width: 50px;font-size: 10px;height: 30px;line-height: 30px;text-align: right;color:#778087}
    .list>.count{padding:5px 0;vertical-align: bottom; width: 70px;float: left;height: 20px;color: #b4b4b4;font-size: 10px;position: relative;}
      .list>.count>.reply_count{color: #9e78c0;font-size: 14px;display: inline-block;width: 25px;text-align: right; }
      .list>.count>.separat_count{display: inline-block;width: 5px;text-align: center;}
      .list>.count>.visit_count{display: inline-block;width: 28px;text-align:left;}
      .list>.list_tab{margin: 5px 0;}
		.clearfix:after{content: '';display: block;clear: both;}
</style>