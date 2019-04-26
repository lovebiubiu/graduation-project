<template>
	<div>
    <sideRouter></sideRouter>
    <el-col :span="21" class="contentSty_1">
      <div class="titleSty">球员数据管理</div>
      <el-table
        :data="playerDataList"
        @cell-click="onCellClick"
        style="width: 100%">
        <el-table-column
          prop="title"
          label="球员编号"
          align="center"
          width="250">
        </el-table-column>
        <el-table-column
          prop="title"
          label="球员头像"
          align="center"
          width="250">
        </el-table-column>
        <el-table-column
          prop="title"
          label="球队"
          width="500">
        </el-table-column>
        <el-table-column
          prop="author"
          label="ELO等级分"
          width="200">
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
      
    }
  },
  mounted:function(){

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