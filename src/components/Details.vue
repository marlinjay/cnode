<template>
	<div>
			<div class="content_main">
				<!--文章头部-->
				<div class="header">
					<div class="header_title">
						<span class="cell_tab" v-if="topicData.top">置顶</span>
						<span class="cell_tab" v-else-if="topicData.good">精华</span>
						{{topicData.title}}
					</div>
					<p class="info"> 
						&bull; 发布于 <span class="reply_num">{{replyNum(topicData.last_reply_at)}}</span>
						 <span class="reply_bef">{{replyBef(topicData.last_reply_at)}}</span> 
						 &bull; 作者 <span class="author"></span>
						  &bull; <span class="visit_count">{{topicData.visit_count}}</span> 次浏览 
						  &bull; 来自 <span class="tab">{{tab}}</span>
					</p>
				</div>
				<!--文章正文-->
				<div class="text">{{topicData.content}}</div>
				
			</div>
			<!--回复-->
			<div class="reply_list" v-if="topicData.reply_count!=0">
				<p class="reply_header"><span class="reply_count">{{topicData.reply_count}}</span> 回复</p>
				<ul>
					<li class="reply_cell clearfix" v-for="item,index in topicData.replies">
						<div class="reply_pic">
							<img :src="item.author.avatar_url" :title="item.author.loginname" class="reply_img">
						</div>
						
						<div class="reply_info">
							<span class="reply_id">{{item.author.loginname}}</span>
							<a href="" class="reply_time">
								<span class="reply_sort">{{index}}楼</span>
								<span>&bull;</span>
								<span class="reply_num">{{replyNum(item.create_at)}}</span>
								<span class="reply_bef">{{replyBef(item.create_at)}}</span>
							</a>
							<span class="cell_tab" v-if="topicData.author.loginname==item.author.loginname">作者</span>

						</div>
						<p class="reply_content">{{item.content}}</p>
						<div class="like" v-if="item.ups.length">
							<span href="" class="like_pic"><i class="el-icon-star-on"></i></span>
							<span class="like_count">{{item.ups.length}}</span>
						</div>
					</li>
				</ul>
			</div>
	</div>
		

</template>

<script>
  
  export default {
    
    data() {
      return {
        topicData:''
        
        
      };
    },
    props:['getdata'],
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
    	tab(){
    		switch (this.topicData.tab) {
					case 'share':
						return '分享';
						break;
					case 'ask':
						return '问答';
						break;
					case 'job':
						return '招聘';
						break;
					case 'dev':
						return '客户端测试';
						break;
					}
    	}
    },
    created:function(){
    	//console.log(this.$route.params)
    	const This = this ;
    	 this.axios.get(`https://cnodejs.org/api/v1/topic/${This.$route.params.id}?mdrender=false`).then(function(response){
    	 	//console.log(response.data.data)
        This.topicData=response.data.data;
   	 })
    
    }
 
	

  };
</script>



<style scoped>
	ul,li,p{padding:0;margin:0;list-style-type:none;}
	.content_main{background: white;}
		.content_main>.header{padding:10px;border-bottom: 1px solid #e5e5e5;}
		.content_main>.header>.header_title{padding:8px 0;font-size: 22px;font-weight: 700;display: inline-block;text-indent:5px;vertical-align: bottom;max-width: 90%;}
		
		.content_main>.header>.header_title>.cell_tab{width: 32px;height: 20px;line-height: 20px; float: left;border-radius: 2px;text-align: center;font-size: 12px;background-color: #e5e5e5;color: #999;margin-top:6px;text-align: center;text-indent:0;background: #80bd01;color: white;background: #80bd01;color: white;}
		
		.content_main>.header>.info{font-size: 12px;color: #838383;padding-top:5px;margin: 0;word-spacing: 2px;line-height: 14px;}
		
		.content_main>.text{padding:20px;}
		.content_main>.text img{width: 100%;}

		.reply_list{background: white;margin: 20px 0;}
		.reply_list>.reply_header{background-color: #f6f6f6;padding:10px;margin: 0;}
		.reply_cell{border-top:1px solid #e5e5e5;padding:10px;position: relative;}
		.reply_cell>.reply_pic{width: 30px;height: 30px;background: red;margin-right:8px;float: left;border-radius: 5
			px;overflow: hidden;}
		.reply_cell>.reply_pic>.reply_img{width: 30px;height: 30px;background: blue;}
		.reply_cell>.reply_info{display: inline-block;height: 30px;font-size: 11px;line-height: 14px;}
		.reply_cell>.reply_info>.reply_id{font-weight: bold;}
		

		.reply_cell>.reply_info>.cell_tab{font-size: 13px;line-height: 20px; background: #80bd01;color: white;display: inline-block;}

		.reply_cell>.like{position: absolute;right: 10px;top: 10px;vertical-align: bottom;}
		.reply_cell>.like span{line-height: 16px;font-size: 16px;}
		.reply_cell>.reply_info{height: 20px;}
		.reply_cell>.reply_content{margin-left: 50px;}

</style>