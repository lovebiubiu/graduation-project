<template>
	<div>
		<topmenu></topmenu>
    <div class="newsbody_2">
      <h2>赛程安排</h2>
      <el-button  v-for=" (date,index) in dateTable" :key="index" @click="chooseDate(index)" class="DatebuttonSty">
        <span v-if="index==5" style="color: #86B404;">{{date}}</span>
        <span v-else>{{date}}</span>
      </el-button>
      <div v-for="(team,index) in schedule" :key="index" class="scheduleSty">
        <div class="teamNameSty">
          <div><img class="teamimg" /></div>
          <span>{{team.mainTeamName}}</span>
        </div>
        <div class="matchInfoSty">
          <div class="detailSty_1">
            <span style="font-size:45px;">{{team.mainScore}}</span>
            <span>势力值</span>
            <span>{{team.mainTeamRate}}</span>
            <span>预测胜率</span>
            <span>{{team.mainWinRate}}</span>
          </div>
          <div class="detailSty_2">
            <span style="font-size:45px;">VS</span>
            <span style="font-size:20px;">{{team.matchTime}}</span>
            <span style="font-size:18px;">{{team.matchPlace}}</span>
            <span v-if="team.matchStatus==2" style="font-size:18px;color:#DC143C">已结束</span>
            <span v-else-if="team.matchStatus==1" style="font-size:18px;">暂未开始</span>
          </div>
          <div class="detailSty_1">
            <span style="font-size:45px;">{{team.secondScore}}</span>
            <span>势力值</span>
            <span>{{team.secondTeamRate}}</span>
            <span>预测胜率</span>
            <span>{{team.secondWinRate}}</span>
          </div>
        </div>
        <div class="teamNameSty">
            <div><img class="teamimg" /></div>
            <span>{{team.secondTeamName}}</span>
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
      schedule:[
        {
          mainTeamName:'森林狼',
          mainTeamId:'1',
          mainTeamRate:'94.5',
          mainWinRate:'56%',
          mainScore:'98',
          secondTeamName:'灰熊',
          secondTeamId:'2',
          secondTeamRate:'87.2',
          secondWinRate:'44%',
          secondScore:'106',
          matchTime:'18:00',
          matchPlace:'小区门口篮球场',
          matchStatus:'2',
        },
        {
          mainTeamName:'森林狼',
          mainTeamId:'1',
          mainTeamRate:'94.5',
          mainWinRate:'56%',
          mainScore:'98',
          secondTeamName:'灰熊',
          secondTeamId:'2',
          secondTeamRate:'87.2',
          secondWinRate:'44%',
          secondScore:'106',
          matchTime:'18:00',
          matchPlace:'小区门口篮球场',
          matchStatus:'1',
        },
        {
          mainTeamName:'森林狼',
          mainTeamId:'1',
          mainTeamRate:'94.5',
          mainWinRate:'56%',
          mainScore:'98',
          secondTeamName:'灰熊',
          secondTeamId:'2',
          secondTeamRate:'87.2',
          secondWinRate:'44%',
          secondScore:'106',
          matchTime:'18:00',
          matchPlace:'小区门口篮球场',
          matchStatus:'1',
        },
      ],
      dateTable:[],
    }
  },
  methods: {
      chooseDate(index){
        console.log("现在应跳转到"+this.dateTable[index]);
      },
      
    },
  mounted:function(){
    var i;
    var tempDate;
    var month;
    var day;
    var temp;
    var mydate = new Date();
    for(i=5;i>=1;i--){
      tempDate = new Date(mydate.getTime()-24*60*60*1000*i);
      month = parseInt(tempDate.getMonth())+1;
      day = tempDate.getDate();
      temp = month+"月"+day+"日";
      this.dateTable.push(temp);
    }
    month = parseInt(mydate.getMonth())+1;
    day = mydate.getDate();
    temp = month+"月"+day+"日";
    this.dateTable.push(temp);
    for(i=1;i<=5;i++){
      tempDate = new Date(mydate.getTime()+24*60*60*1000*i);
      month = parseInt(tempDate.getMonth())+1;
      day = tempDate.getDate();
      temp = month+"月"+day+"日";
      this.dateTable.push(temp);
    }
    console.log(this.dateTable);
  },
  components:{
  topmenu,
  bottom,
  side,
   }
}
</script>
<style>
  .detailSty_1{
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 50px;
  }
  .detailSty_2{
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .matchInfoSty{
    width: 40%;
    margin-top:25px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .teamimg{
    width: 200px;
    height: 200px;
  }
  .teamNameSty{
    width: 30%;
    margin-top: 25px;
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
  }
  .scheduleSty{
    width: 80%;
    margin-top: 50px;
    margin-left: 10%;
    border:1px solid #333;
    height: 300px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .DatebuttonSty{
    background-color: #EEE;
  }
	.newsbody_2{
    margin-top: 20px;
    margin-left: 10%;
    width: 80%;
    height: 1300px;
    border:1px solid black;
  }
</style>