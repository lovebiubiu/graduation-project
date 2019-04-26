<template>
	<div>
    <sideRouter></sideRouter>
    <el-col :span="21">
      <div class="titleSty">新增友情链接</div>
      <el-form :label-position="left" label-width="120px" :model="form">
        <el-form-item label="链接名" style="width:30%;" class="item">
          <el-input v-model="form.linkName" class="inner"></el-input>
        </el-form-item>
        <el-form-item label="链接地址"  class="item">
          <el-input v-model="form.linkUrl" class="inner"></el-input>
        </el-form-item>
        <el-form-item label="链接备注"  class="item">
          <el-input v-model="form.description" class="inner"></el-input>
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
        linkName:'',
        linkUrl:'',
        description:''
      },
    }
  },
  methods: {
      onSubmit(){
        var that = this;
        console.log("创建此链接");
        console.log(that.form.linkName+"--"+that.form.linkUrl+"--"+that.form.description+"--");
        $.ajax({
          url: this.$host+'insertFriendlyLink',
          type: 'post',
          data:{
              linkName:that.form.linkName,
              linkUrl:that.form.linkUrl,
              linkDescription:that.form.description
          },
          xhrFields: {
              withCredentials: true
          },
          success: function (data) {
            console.log(data);
            alert('添加成功')
            that.$router.push({path:'/admin/friendlyLink'});
          },
          error: function(xhr, errorType, error) {
              alert('Ajax request error, errorType: ' + errorType +  ', error: ' + error)
          }
      }); 
      },
      cancel(){
        this.$router.push({path:'/admin/friendlyLink',params:{}});
      }
    },
    components:{
      sideRouter
   }
}
</script>
<style>
.item{
  margin-top: 10px;
  width: 80%;
}
.inner{
  align-items: left;
}
</style>