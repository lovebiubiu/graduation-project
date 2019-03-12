<template>
	<div class="">
		<topmenu></topmenu>
    
    <div class="newsbody">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      </el-breadcrumb>
      <h2>最新新闻</h2>
    </div>
    <side></side>
    <bottom></bottom>
	</div>
</template>
<script>
import topmenu from '@/components/topmenu.vue'
import bottom from '@/components/bottom.vue'
import side from '@/components/side.vue'
export default {
  data () {
    return {
      
    }
  },
  methods: {

    },
  components:{
  topmenu,
  bottom,
  side,
   }
}
</script>
<style>
  .el-breadcrumb{
    font-size: 20px;
  }
	.newsbody{
    margin-top: 20px;
    margin-left: 10%;
    width: 80%;
    height: 800px;
    border:1px solid black;
  }
</style>