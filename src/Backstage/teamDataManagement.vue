<template>
	<div>
    <sideRouter></sideRouter>
		<el-col :span="21">
      <div class="titleSty">球队信息管理</div>
      <div style="margin-left:40px;margin-top:20px;margin-bottom:20px;text-align:left">
          <el-button type="primary" @click="toAddResult">录入球队战绩</el-button>
      </div>
      <el-table
        :data="teamDataList"
        @cell-click="onCellClick"
        style="width: 60%;margin-left:20%;">
        <el-table-column
          prop="teamid"
          label="球队编号"
          align="center"
          width="250">
        </el-table-column>
        <el-table-column
          prop="chinesenickname"
          label="球队中文名"
          align="center"
          width="250">
        </el-table-column>
        <el-table-column
          prop="rank"
          label="rank"
          width="200">
        </el-table-column>
        <el-table-column
          prop="win"
          label="胜场"
          width="100">
        </el-table-column>
        <el-table-column
          prop="lose"
          label="败场"
          width="100">
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
      teamDataList:[],
    }
  },
  created: function () {
      this.getTeamRankList();
  },
  methods: {
      getTeamRankList(){
          var that = this;
          $.ajax({
              url: this.$host+'getTeamEloList',
              type: 'get',
              dataType: 'json',
              success: function (data) {
                console.log(data);
                that.teamDataList = data;
              },
              error: function(xhr, errorType, error) {
                  alert('Ajax request error, errorType: ' + errorType +  ', error: ' + error)
              }
          });
      },
      toAddResult(){
        this.$router.push({path:'/admin/teamDataInput'});
      }
    },
    components:{
  sideRouter
   }
}
</script>
<style>
	
</style>