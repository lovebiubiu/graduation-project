<template>
	<div>
    <sideRouter></sideRouter>
		<el-col :span="21" class="contentSty_1">
      <div class="titleSty">添加/修改轮播图片</div>
      <el-form :label-position="left" label-width="120px" :model="form">
        <el-form-item label="轮播图ID" style="width:30%;" class="item">
          <el-input v-model="form.id" class="inner" disabled="ture" placeholder="后台自动生成"></el-input>
        </el-form-item>
        <el-form-item label="轮播图标题"  class="item">
          <el-input v-model="form.pictureTitle" class="inner" placeholder="主页显示的图片标题"></el-input>
        </el-form-item>
        <el-form-item label="轮播图片地址"  class="item">
          <el-input v-model="form.pictureUrl" class="inner" placeholder="图片地址"></el-input>
        </el-form-item>
        <el-form-item label="新闻地址"  class="item">
          <el-input v-model="form.newsUrl" class="inner" placeholder="点击跳转的新闻地址"></el-input>
        </el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form>
    </el-col>
	</div>
</template>
<script>
import sideRouter from '@/Backstage/BackstageComponents/router.vue'
export default {
  data () {
    return {
      form:{
          id:null,
          pictureTitle:'',
          pictureUrl:'',
          newsUrl:''
      },
    }
  },
  created: function () {
    console.log(this.$route.params);
    var that = this;
    if(this.$route.params){
      that.form.id = this.$route.params.id;
      that.form.pictureUrl = this.$route.params.pictureUrl;
      that.form.pictureTitle = this.$route.params.pictureTitle;
      that.form.newsUrl = this.$route.params.newsUrl;
    }
  },
  components:{
      sideRouter
   },
  methods: {
      cancel(){
        this.$router.push({path:'/admin/scrollPicture'});
      },
      onSubmit(){
        var that = this;
        if(that.form.id==null){
          $.ajax({
              url: this.$host+'insertScrollPicture',
              type: 'post',
              data:{
                  pictureTitle:that.form.pictureTitle,
                  pictureUrl:that.form.pictureUrl,
                  newsUrl:that.form.newsUrl,
              },
              xhrFields: {
                  withCredentials: true
              },
              success: function (data) {
                console.log(data);
                alert('添加成功')
                that.$router.push({path:'/admin/scrollPicture'});
              },
              error: function(xhr, errorType, error) {
                  alert('Ajax request error, errorType: ' + errorType +  ', error: ' + error)
              }
          }); 
        }else{
          $.ajax({
              url: this.$host+'updateScrollPicture',
              type: 'post',
              data:{
                  id:that.form.id,
                  pictureTitle:that.form.pictureTitle,
                  pictureUrl:that.form.pictureUrl,
                  newsUrl:that.form.newsUrl,
              },
              xhrFields: {
                  withCredentials: true
              },
              success: function (data) {
                console.log(data);
                alert('修改成功')
                that.$router.push({path:'/admin/scrollPicture'});
              },
              error: function(xhr, errorType, error) {
                  alert('Ajax request error, errorType: ' + errorType +  ', error: ' + error)
              }
          }); 
        }
        
      },
    }
}
</script>
<style>
	
</style>