<template>
	<div>
    <sideRouter></sideRouter>
    <el-col :span="21" class="contentSty_1">
      <div class="titleSty">球员数据管理</div>
		  <template>
        <pano title="demo_photo" width="720" height="480" bundle="../assets/" format="jpg"></pano>
      </template>
    </el-col>
	</div>
</template>
<script>
import sideRouter from '@/Backstage/BackstageComponents/router.vue'
import Pano from 'vue-pano'

export default {
  data () {
    return {
      
    }
  },
  mounted:function(){

  },
  methods: {

    },
    components:{
      Pano,
      sideRouter
   }
}
</script>
<style>
	
</style>