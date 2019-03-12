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
          <el-input v-model="form.addr" class="inner"></el-input>
        </el-form-item>
        <el-form-item label="链接备注"  class="item">
          <el-input v-model="form.info" class="inner"></el-input>
        </el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
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
        addr:'',
        info:''
      },
    }
  },
  methods: {
      onSubmit(){
        console.log("创建此链接");
      },
      cancel(){
        this.$router.push({path:'/admin/friendlyLink',params:{id:'123'}});
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