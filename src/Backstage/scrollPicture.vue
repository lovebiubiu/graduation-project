<template>
	<div>
    <sideRouter></sideRouter>
    <el-col :span="21" class="contentSty_1">
      <div class="titleSty">管理轮播图片</div>
      <div style="margin-left:40px;margin-top:20px;margin-bottom:20px;text-align:left">
          <el-button type="primary" @click="toAddScrollpicture">添加新的轮播图</el-button>
      </div>
      <el-table
        :data="scrollPictureData"
        border
        align="center"
        style="width: 100%">
        <el-table-column
          label="编号"
          type="index"
          width="150">
        </el-table-column>
        <el-table-column
          prop="pictureTitle"
          label="图片标题"
          width="180">
        </el-table-column>
        <el-table-column
          prop="pictureUrl"
          label="图片地址"
          width="300">
        </el-table-column>
        <el-table-column
          prop="newsUrl"
          label="新闻地址"
          width="300">
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
          width="120">
          <template slot-scope="scope">
            <el-button type="primary" @click="updateScrollpicture(scope)" size="mini" icon="el-icon-edit" circle></el-button>
            <el-button type="danger" @click="deleteScrollpicture(scope)" size="mini" icon="el-icon-delete" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
	</div>
</template>
<script>
import sideRouter from '@/Backstage/BackstageComponents/router.vue'
export default {
  data () {
    return {
      scrollPictureData:[],
    }
  },
  created: function () { 
      this.getScrollPictureList();
  },
  methods: {
    getScrollPictureList(){
      var that = this;
        $.ajax({
              url: this.$host+'selectScrollPicture',
              type: 'get',
              dataType: 'json',
              xhrFields: {
                  withCredentials: true
              },
              success: function (data) {
                console.log(data);
                that.scrollPictureData = data;
              },
              error: function(xhr, errorType, error) {
                  alert('Ajax request error, errorType: ' + errorType +  ', error: ' + error)
              }
          }); 
    },
    updateScrollpicture(row){
      var that = this;
      console.log(row);
      var temp = that.scrollPictureData[row.$index];
       this.$router.push({name:'添加新的轮播图',params:{
        id:temp.id,
        pictureUrl:temp.pictureUrl,
        pictureTitle:temp.pictureTitle,
        newsUrl:temp.newsUrl
       }});
    },
    deleteScrollpicture(row){
      console.log(row);
       var that = this;
        $.ajax({
              url: this.$host+'deleteScrollPicture',
              type: 'post',
              data:{
                id:that.scrollPictureData[row.$index].id
              },
              xhrFields: {
                  withCredentials: true
              },
              success: function (data) {
                console.log(data);
                alert("删除成功");
                that.getScrollPictureList();
              },
              error: function(xhr, errorType, error) {
                  alert('Ajax request error, errorType: ' + errorType +  ', error: ' + error)
              }
          }); 
    },
    toAddScrollpicture(){
        this.$router.push({path:'/admin/addScrollpicture'});
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
</style>