<template>
	<div>
    <sideRouter></sideRouter>
    <el-col :span="21" class="contentSty_1">
      <div class="titleSty">管理轮播图片</div>
      <div class="contentSty_2">
        <el-form ref="form" :inline="true" :model="form" label-width="120px">
            <el-form-item label="选择轮播图片">
                <el-select v-model="value" placeholder="请选择" @change="onChange">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
            </el-form-item>
            <el-form-item v-if="imgVisible==true" label="上传新的图片">
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
            <el-form-item v-if="imgVisible==true" label="添加新闻介绍">
              <el-input v-model="input" placeholder="请文字输入图片介绍"></el-input>
            </el-form-item>
        </el-form>
        <img v-if="imgVisible==true" :src="imgSrc" width="600" height="400" />
      </div>
    </el-col>
      
	</div>
</template>
<script>
import sideRouter from '@/Backstage/BackstageComponents/router.vue'
export default {
  data () {
    return {
      form:{},
      imageUrl:'',
      value:'',
      imgSrc:'',
      imgVisible:false,
       options: [{
          value: '1',
          label: '图片1',
          src:require('../assets/news1.jpg'),
          info:'',
        }, {
          value: '2',
          label: '图片2',
          src:require('../assets/news2.jpg'),
          info:'',
        }, {
          value: '3',
          label: '图片3',
          src:require('../assets/news3.jpg'),
          info:'',
        }, {
          value: '4',
          label: '图片4',
          src:require('../assets/news4.jpg'),
          info:'',
        }, {
          value: '5',
          label: '图片5',
          src:require('../assets/news5.jpg'),
          info:'',
        }],
    }
  },
  methods: {
    onChange(label){
      console.log(label);
      this.imgVisible=true;
      var num=parseInt(label)-1;
      //this.imgSrc=this.options[num-1].src;
      this.imgSrc=this.options[num].src;
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
      sideRouter
   }
}
</script>
<style>
   

  .contentSty_2{
    margin-top: 30px;
    padding-left: 40px;
  }
  .el-form-item__label{
    font-size:18px;
    padding-right: 0px;
  }
  .el-form-item__content{

    text-align: left;
    left: 10px;
    max-width: 80%;
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
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>