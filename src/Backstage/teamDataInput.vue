<template>
	<div>
    <sideRouter></sideRouter>
		<el-col :span="21">
      <div class="titleSty">球队战绩录入</div>
      <el-form  label-width="120px" :model="form" style="margin:20px;">
        <el-form-item label="胜利球队" style="width:30%;" class="item">
          <el-input v-model="form.winer" class="inner"></el-input>
        </el-form-item>
        <el-form-item label="失败球队" style="width:30%;" class="item">
          <el-input v-model="form.loser" class="inner"></el-input>
        </el-form-item>
        <el-button type="primary" @click="onSubmit">录入</el-button>
        <el-button @click="cancel">返回</el-button>
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
        winer:'',
        loser:'',
      },
    }
  },
  methods: {
      onSubmit(){
        console.log("录入球队战绩");
        var that = this;
          $.ajax({
              url: this.$host+'updateEloScore',
              type: 'post',
              data:{
                team1:that.form.winer,
                team2:that.form.loser,
              },
              success: function (data) {
                console.log(data);
              },
              error: function(xhr, errorType, error) {
                  alert('Ajax request error, errorType: ' + errorType +  ', error: ' + error)
              }
          });
      },
      cancel(){
        this.$router.push({path:'/admin/teamDataManagement'});
      }
    },
    components:{
      sideRouter
   }
}
</script>
<style>
	
</style>