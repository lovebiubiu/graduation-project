<template>
	<div>
		<topmenu></topmenu>
    <div class="newsbody_2">
      <h2>赛程安排</h2>
      <el-button  v-for=" (item,index) in dateTable" :key="index" @click="chooseDate(index)" class="DatebuttonSty">
        <span v-if="index==clickDate" style="color: #86B404;">{{item.title}}</span>
        <span v-else>{{item.title}}</span>
      </el-button>
      <div v-for="(item,index) in schedule" class="scheduleSty">
        <div class="teamNameSty">
          <div><img :src="item.player1LogoBig" class="teamimg" /></div>
          <span>{{item.player1}}</span>
        </div>
        <div class="matchInfoSty">
          <div class="detailSty_1">
            <span>势力值</span>
            <span>{{forecastA.rank}}</span>
            <span>预测胜率</span>
            <span>{{forecastA.rate}}%</span>
          </div>
          <div class="detailSty_2">
            <span style="font-size:45px;">{{item.score}}</span>
            <span style="font-size:45px;">VS</span>
            <span style="font-size:20px;">{{item.time}}</span>
            <!-- <span style="font-size:18px;">{{item.matchPlace}}</span> -->
            <span v-if="item.status==2" style="font-size:18px;color:#DC143C">已结束</span>
            <span v-else-if="item.status==1" style="font-size:18px;color:#DC143C">正在比赛</span>
            <span v-else-if="item.status==0" style="font-size:18px;">暂未开始</span>
          </div>
          <div class="detailSty_1">
            <span>势力值</span>
            <span>{{forecastB.rank}}</span>
            <span>预测胜率</span>
            <span>{{forecastB.rate}}%</span>
          </div>
        </div>
        <div class="teamNameSty">
            <div><img :src="item.player2LogoBig" class="teamimg" /></div>
            <span>{{item.player2}}</span>
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
      clickDate:0,
      schedule:[],
      dateTable:[],
      scheduleTable:[],
      forecastA:{},
      forecastB:{},
    }
  },
  created: function () {
            this.getScheduleInfo();
        },
  methods: {
      getRankAndRate(team1,team2){
        var that = this;
        var list ;
        $.ajax({
          url: this.$host+'getEloscoreandRate?team1='+team1+"&team2="+team2,
          type: 'get',
          dataType: 'json',
          success: function (data) {
            console.log(data);
              that.$set(that.forecastA,"rank",data[0].rank.toFixed(2));
              that.$set(that.forecastA,"rate",(data[0].rate*100).toFixed(2));
              that.$set(that.forecastB,"rank",data[1].rank.toFixed(2));
              that.$set(that.forecastB,"rate",(data[1].rate*100).toFixed(2));
          },
          error: function(xhr, errorType, error) {
              alert('请求错误, 错误类型: ' + errorType +  ', error: ' + error)
          }
      });
      },
      chooseDate(index){
        var that = this;
        console.log("现在应跳转到"+index);
        that.clickDate=index;
        that.schedule=that.scheduleTable[that.clickDate];
        /*console.log(that.schedule[0]);*/
        that.getRankAndRate(that.schedule[0].player1,that.schedule[0].player2);
      },
      getScheduleInfo(){
        var that = this;
              $.ajax({
                  url: this.$host+'getSchedule',
                  type: 'get',
                  dataType: 'json',
                  success: function (data) {
                    var i,j;
                    console.log(data);
                    var list = [];
                    for(i=0;i<data.length;i++){
                      var arr = new Array();
                      that.dateTable.push(data[i][0]);
                      for(j=1;j<data[i].length;j++){
                          var temp={};
                          temp["player1"]=data[i][j].player1;
                          temp["player2"]=data[i][j].player2;
                          temp["player1Logo"]=data[i][j].player1Logo;
                          temp["player2Logo"]=data[i][j].player2Logo;
                          temp["player1LogoBig"]=data[i][j].player1LogoBig;
                          temp["player2LogoBig"]=data[i][j].player2LogoBig;
                          temp["score"]=data[i][j].score;
                          temp["status"]=data[i][j].status;
                          temp["time"]=data[i][j].time;
                          if(data[i][j].player2!=''){
                            arr.push(temp);
                            // $.ajax({
                            //     url: that.$host+'getEloscoreandRate?team1='+data[i][j].player1+"&team2="+data[i][j].player2,
                            //     type: 'get',
                            //     dataType: 'json',
                            //     success: function (res) {
                            //       console.log(res);
                            //       temp["player1Rank"]=res[0].rank;
                            //       temp["player2Rank"]=res[1].rank;
                            //       temp["player1Rate"]=res[0].rate;
                            //       temp["player2Rate"]=res[1].rate;
                                  

                            //     },
                            //     error: function(xhr, errorType, error) {
                            //         alert('请求错误, 错误类型: ' + errorType +  ', error: ' + error)
                            //     }
                            // });
                            

                          }

                      }
                      list.push(arr);
                    }
                    console.log(list);
                    that.clickDate=0;
                    that.scheduleTable=list;
                    that.schedule=that.scheduleTable[0];
                    console.log(that.schedule);
                    that.getRankAndRate(that.schedule[0].player1,that.schedule[0].player2);
                  },
                  error: function(xhr, errorType, error) {
                      alert('请求错误, 错误类型: ' + errorType +  ', error: ' + error)
                  }
              });
      }
    },
  mounted:function(){
   
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
    margin-top: 80px;
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
    width: 90%;
    margin-top: 50px;
    margin-left: 5%;
    height: 280px;
    display: flex;
    border:2px solid #DDD;
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
    padding-bottom: 20px;
    width: 80%;
    border:1px solid black;
  }
</style>