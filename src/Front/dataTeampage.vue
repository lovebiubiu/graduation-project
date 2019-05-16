<template>
	<div>
		<topmenu></topmenu>
    <div class="newsbody_5">
      <div style="width:100%;"><h2>球队数据</h2></div>
      <div v-for="(team,index) in teampage" class="teamSty" :key="index" @click="toTeamDetail">
        <div><img :src="team.teamavatar" style="width:200px;height:150px;" /></div>
        <span style="font-size:25px;font-weight:600;">{{team.chinesename}}</span>
        <span>球队势力</span>
        <span style="font-size:20px;">{{team.teamRate}}</span>
      </div>
      <div class="pageRouter_2">
        <div>
          <el-button type="primary" @click="lastPage()" v-if="pageNum!=0" icon="el-icon-arrow-left" size="mini">上一页</el-button>
          <span>页数：{{pageNum+1}}/{{limitPage}}</span>
          <el-button type="primary" @click="nextPage()" v-if="pageNum+1!=limitPage" size="mini">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </div>
        <div style="margin-left:20px;"> 
          <el-input v-model="toPageNum" placeholder="请输入页数" size="mini" style="width:95px;"></el-input>
          <el-button type="primary" size="mini" @click="inputToPage()">跳转</el-button>
        </div>
      </div>
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
      teams:[],
      teampage:[],
      pageNum:0,
      limitPage:0,
      toPageNum:0,
    }
  },
  created: function () { 
      this.getTeamList();
  },
  methods: {
      inputToPage(){
        var that = this;
        console.log(that.toPageNum);
        if(that.toPageNum>that.limitPage||that.toPageNum<1){
          alert('请输入正确的页数');
        }else{
          that.pageNum=parseInt(that.toPageNum)-1;
          that.getPlayerList();
          window.scroll(0,110);
          that.toPageNum=null;
        }
        
      },
      lastPage(){
        var that = this;
        that.pageNum-=1;
        that.teampage = that.teams.slice(that.pageNum*8,that.pageNum*8+8);
      },
      nextPage(){
        var that = this;
        that.pageNum+=1;
        that.teampage = that.teams.slice(that.pageNum*8,that.pageNum*8+8);
      },
      getTeamList(){
        var that = this;
         $.ajax({
          url: this.$host+'getTeamList',
          type: 'get',
          success: function (data) {
              console.log(data);
              that.limitPage = Math.ceil(data.length/8);
              that.teams = data;
              that.teampage = that.teams.slice(0,8);
          },
          error: function(xhr, errorType, error) {
              alert('请求错误, 错误类型: ' + errorType +  ', error: ' + error)
          }
      });
      },
      toTeamDetail(){
        this.$router.push({path:'/dataTeamDetail',query:{teamId:133}});
      },
    },
  components:{
  topmenu,
  bottom,
  side,
   }
}
</script>
<style>
  .pageRouter_2{
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
  }
  .teamSty{
    cursor: pointer;
    margin-bottom: 20px;
    width: 300px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
	.newsbody_5{
    position: relative;
    margin-top: 20px;
    margin-left: 10%;
    width: 80%;
    border:1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
</style>