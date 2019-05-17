<template>
  <div>
    	<el-col :span="3">
    		<el-menu
		      :default-active="defaultActive"
		      class="el-menu-vertical-demo"
		      ref="menutable"
		      @open="handleOpen"
		      @close="handleClose"
		      @select="handelSelect"
		      background-color="#545c64"
		      text-color="#fff"
		      :router="true"
		      :default-openeds="openeds"
		      active-text-color="#ffd04b">
		      <el-submenu index="1">
		        <template slot="title">
		          <i class="el-icon-document"></i>
		          <span>首页管理</span>
		        </template>
		        <el-menu-item-group>
		          <el-menu-item index="/admin/scrollPicture">轮播图片</el-menu-item>
		          <el-menu-item index="/admin/friendlyLink">友情链接管理</el-menu-item>
				  <el-menu-item index="/admin/addFriendlyLink">新增友情链接</el-menu-item>
		        </el-menu-item-group>
		      </el-submenu>
		      <el-submenu index="2">
		        <template slot="title">
		          <i class="el-icon-document"></i>
		          <span>数据管理</span>
		        </template>
		        <el-submenu index="2-1">
		          <template slot="title">球员数据</template>
		          <!-- <el-menu-item index="/admin/playerDataManagement">球员数据管理</el-menu-item>
		          <el-menu-item index="/admin/playerDataInput">球员数据录入</el-menu-item> -->
		        </el-submenu>
		        <el-submenu index="2-2">
		          <template slot="title">球队数据</template>
		          <el-menu-item index="/admin/teamDataManagement">球队数据管理</el-menu-item>
		          <el-menu-item index="/admin/teamDataInput">球队数据录入</el-menu-item>
		        </el-submenu>
		      </el-submenu>

		      <el-submenu index="3">
		        <template slot="title">
		          <i class="el-icon-news"></i>
		          <span>新闻管理</span>
		        </template>
		        <el-menu-item-group>
		          <el-menu-item index="/admin/newsManagement">管理新闻</el-menu-item>
		          <!-- <el-menu-item index="/admin/addNews">添加新闻</el-menu-item> -->
		        </el-menu-item-group>
		      </el-submenu>
		    </el-menu>
    	</el-col>
	<el-col :span="21" class="topsty">
    		<h1>NBA数据统计网站后台</h1>
    	</el-col>
  </div>
</template>
<script>
export default {
  data () {
    return {
      openeds:["1","2","3"],
      defaultActive:"",
    }
  },
  created:function(){
  	this.defaultActive=this.$router.history.current.path;
	 var that = this;
	  console.log(that.$token+"---------"+that.$userName);
	  if(that.$config.token==''||that.$config.userName==''){
	    alert('请重新登录后操作');
	    that.$router.push({path:'/admin/login'});
	  }else{
	       $.ajax({
	        url: this.$host+'tokenValidate',
	        type: 'post',
	        data:{
	            token:that.$config.token,
	            userName:that.$config.userName
	        },
	        xhrFields: {
	            withCredentials: true
	        },
	        success: function (data) {
	          console.log(data);
	          if(data=="1"){
	            console.log("登录成功");
	          }else{
	            alert('请重新登录后操作');
	            that.$router.push({path:'/admin/login'});
	          }
	        },
	        error: function(xhr, errorType, error) {
	            alert('Ajax request error, errorType: ' + errorType +  ', error: ' + error)
	        }
	    });   
      }
  },
  methods: {
  	 handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
	 handelSelect(key,keyPath){
		console.log(key, keyPath);
  		}
    }
}
</script>
<style>
  .titleSty{
  	border-bottom: 1px solid #DDD;
    color: #555;
    height: 60px;
    line-height: 60px;
    text-align: left;
    padding-left: 50px;
    font-family: "Microsoft YaHei";
    font-size:25px;
    font-weight: 600;
  }

  .el-submenu .el-menu-item{
    min-width:0px;
  }
.topsty{
	height: 100px;
	background-color: #819FF7;
	color: #FFF;
}
 .el-menu-vertical-demo{
 	min-width: 150px;
 	padding-left: 0%;
 }
 body{
 	height: 100%;
 }
</style>
