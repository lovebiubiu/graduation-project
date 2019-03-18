<template>
	<div>
    <sideRouter></sideRouter>
		<el-col :span="21">
      <div class="titleSty">添加新闻</div>
      <el-form :label-position="left" label-width="120px" :model="form" class="contentSty_1">
        <el-form-item label="新闻标题" style="width:30%;" class="item">
          <el-input v-model="form.newsTitle" class="inner"></el-input>
        </el-form-item>
        <el-form-item label="新闻发布方"  style="width:30%;" class="item">
          <el-input v-model="form.newsAuthor"></el-input>
        </el-form-item>
        <el-form-item label="插入图片1">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="true"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              
            </el-form-item>
        <el-form-item label="新闻内容1"  class="item">
          <el-input v-model="form.newsContent1" type="textarea" :row="15"></el-input>
        </el-form-item>
        <el-form-item label="插入图片2">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="true"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-iocn"></i>
                </el-upload>
              
            </el-form-item>
        <el-form-item label="新闻内容2"  class="item">
          <el-input v-model="form.newsContent2" type="textarea" :row="15"></el-input>
        </el-form-item>
        <el-form-item label="插入图片3">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="true"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              
            </el-form-item>
        <el-form-item label="新闻内容3"  class="item">
          <el-input v-model="form.newsContent3" type="textarea" :row="15"></el-input>
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
        newsTitle:'',
        newsAuthor:'',
        newsTime:'',
        newsContent1:'',
        newsContent2:'',
        newsContent3:'',
      },
      imageUrl:'',
    }
  },
  methods: {
      onSubmit(){
        console.log("添加此新闻");
      },
      cancel(){
        this.$router.push({path:'/admin/newsManagement',params:{}});
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
        console.log(file);
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        this.imgSrc = URL.createObjectURL(file.raw);
      }, 
    },
  components:{
  sideRouter,
   }
}
</script>
<style>
  .contentSty_1{
    margin-top: 20px;
  }
	.avatar_2 {
    border:1px solid #DDD;
    width: 178px;
    height: 178px;
    display: block;
    text-align: center;
    line-height: 178px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
</style>