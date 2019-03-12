<template>
	<div>
    <sideRouter></sideRouter>
    <el-col :span="21">
      <div class="titleSty">新增友情链接</div>
      <el-form :label-position="left" label-width="120px" :model="form">
        <el-form-item label="链接名">
          <el-input v-model="form.linkName"></el-input>
        </el-form-item>
        <el-form-item label="链接地址">
          <el-input v-model="form.addr"></el-input>
        </el-form-item>
        <el-form-item label="链接备注">
          <el-input v-model="form.info"></el-input>
        </el-form-item>
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

    },
    components:{
      sideRouter
   }
}
</script>
<style>
	
</style>