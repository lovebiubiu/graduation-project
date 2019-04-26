<template>
  <div>
    <topmenu></topmenu>
    <div class="newsbody_4">
      <div style="width:100%;"><h2>球员数据</h2></div>
      <div class="playerSty" v-for="(player,index) in players" :key="index" @click="toPlayerDetail(index)">
        <div class="playerInfoSty">
          <span>{{player.playerName}}</span>
          <div><img src="../assets/player/1628959.png" style="height:130px;width:150px" /></div>
          <span>能力评分：{{player.playerRate}}</span>
        </div>
        <div :id="player.id" class="chartSty">
        
        </div>
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
import echarts from 'echarts'
export default {
  data () {
    return {
      pageNum:0,
      limitPage:10,
      players:[
        {
          id:'1',
          playerName:'劳勒 Alkins',
          playerRate:'92.5',
        },
        {
          id:'2',
          playerName:'劳勒 Alkins',
          playerRate:'92.5',
        },
        {
          id:'3',
          playerName:'劳勒 Alkins',
          playerRate:'92.5',
        },
        {
          id:'4',
          playerName:'劳勒 Alkins',
          playerRate:'92.5',
        },
        {
          id:'5',
          playerName:'劳勒 Alkins',
          playerRate:'92.5',
        },
        {
          id:'6',
          playerName:'劳勒 Alkins',
          playerRate:'92.5',
        },
      ],
    }
  },
  created: function () { 
      this.getPlayerList();
  },
 mounted() {
            this.$nextTick(function() {
                var idIter;
                for(idIter=1;idIter<=this.players.length;idIter++){
                  this.drawPie(idIter);
                }
            })
        },
  methods: {
      getPlayerList(){
        var that = this;
        $.ajax({
          url: this.$host+'getPlayerList',
          type: 'get',
          success: function (data) {
              console.log(data);
          },
          error: function(xhr, errorType, error) {
              alert('请求错误, 错误类型: ' + errorType +  ', error: ' + error)
          }
      });
      },
      toPlayerDetail(id){
        console.log(id);
        this.$router.push({path:'/dataPlayerDetail',query:{playerId:133}});
      },
      drawPie(id){
                var charts = echarts.init(document.getElementById(id));
                var option = {
                    title: {
                        text: "",
                        link: 'https://www.baidu.com',
                        target: "blank",
                        textAlign: 'left',
 
                    },
                    tooltip: {},//提示层
                    legend: {
                        data: ['name1']
                    },
                    radar: {
                        name: {
                            textStyle: {
                                color: 'white', //字体颜色
                                backgroundColor: '#CCC', //背景色
                                borderRadius: 3, //圆角
                                padding: [3, 5] //padding

                            }
                        },
                        center: ['50%', '50%'],
                        radius: '60%',
                        startAngle: 270,
                        indicator: [{
                                name: '得分',
                                max: 100
                            },
                            {
                                name: '篮板',
                                max: 100
                            },
                            {
                                name: '盖帽',
                                max: 100
                            },
                            {
                                name: '罚篮',
                                max: 100
                            },
                            {
                                name: '助攻',
                                max: 100
                            },
                            {
                                name: '防守',
                                max: 100
                            }
                        ],
                    },
                    series: [{
                        name: '测试标题名字',
                        type: 'radar',
                        itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        data: [{
                            value: [80,60,70,95,74,90],
                            name: "数据详情 "
                        }]
                    }]
                }
                charts.setOption(option);
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
      position: absolute;
      bottom: 10px;
      right: 80px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
  }
  .playerInfoSty{
    width: 150px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .chartSty{
    width: 200px;
    height: 200px;
  }
  .playerSty{
    cursor: pointer;
    margin-bottom: 80px;
    margin-left: 20px;
    width: 350px;
    height: 200px;
    border:2px solid #DDD;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .newsbody_4{
    position: relative;
    margin-top: 20px;
    margin-left: 10%;
    width: 80%;
    border:1px solid black;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
</style>