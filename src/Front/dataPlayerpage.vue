<template>
  <div>
    <topmenu></topmenu>
    <div class="newsbody_4">
      <div style="width:100%;"><h2>球员数据</h2></div>
      <div class="playerSty" v-for="(player,index) in players" :key="index" @click="toPlayerDetail(player)">
        <div class="playerInfoSty">
          <span>{{player.chinesename}}</span>
          <div><img :src="player.avatarurl" style="height:110px;width:130px" /></div>
          <span>能力评分：{{player.playerRate}}</span>
        </div>
        <div :id="index+1" class="chartSty">
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
      limitPage:0,
      players:[],
      toPageNum:0,
    }
  },
  created: function () { 
      this.getAllLength();
      this.getPlayerList();
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
        this.getPlayerList();
      },
      nextPage(){
        var that = this;
        that.pageNum+=1;
        this.getPlayerList();
      },
      getAllLength(){
        var that = this;
         $.ajax({
          url: this.$host+'getAllLength',
          type: 'get',
          success: function (data) {
              console.log("length"+data);
              that.limitPage = Math.ceil(data/9);
          },
          error: function(xhr, errorType, error) {
              alert('请求错误, 错误类型: ' + errorType +  ', error: ' + error)
          }
      });
      },
      draw(){
        var idIter;
        //console.log("len="+this.players.length)
        for(idIter=1;idIter<=this.players.length;idIter++){
          console.log("绘制pie")    
          this.drawPie(idIter);
        }
      },
      getPlayerList(){
        var that = this;
        $.ajax({
          url: this.$host+'getPlayerList?pageNum='+that.pageNum,
          type: 'get',
          success: function (data) {
              console.log(data);
              that.players = data;
              that.$nextTick(function() {
                var idIter;
                for(idIter=1;idIter<=that.players.length;idIter++){
                  that.players[idIter-1].defen=that.players[idIter-1].defen>=35?35:that.players[idIter-1].defen;
                  that.players[idIter-1].lanban = that.players[idIter-1].lanban>=15?15:that.players[idIter-1].lanban;
                  that.players[idIter-1].gaimao=that.players[idIter-1].gaimao>=3?3:that.players[idIter-1].gaimao;
                  that.players[idIter-1].zhugong=that.players[idIter-1].zhugong>=10?10:that.players[idIter-1].zhugong;
                  that.players[idIter-1].qiangduan = that.players[idIter-1].qiangduan>=3?3:that.players[idIter-1].qiangduan;
                  that.players[idIter-1].mingzhong1 = that.players[idIter-1].mingzhong1.substring(0,that.players[idIter-1].mingzhong1.length-1);
                  that.players[idIter-1].mingzhong1 = parseFloat(that.players[idIter-1].mingzhong1);
                  that.players[idIter-1].mingzhong1 = that.players[idIter-1].mingzhong1>=55?55:that.players[idIter-1].mingzhong1;
                  console.log(that.players[idIter-1].mingzhong1);
                  that.drawPie(idIter,that.players[idIter-1]);
                }
            })
          },
          error: function(xhr, errorType, error) {
              alert('请求错误, 错误类型: ' + errorType +  ', error: ' + error)
          }
      });
      },
      toPlayerDetail(player){
        console.log(player);
        this.$router.push({path:'/dataPlayerDetail',query:{id:player.id}});
      },
      drawPie(id,player){
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
                                max: 35
                            },
                            {
                                name: '篮板',
                                max: 15
                            },
                            {
                                name: '盖帽',
                                max: 3
                            },
                            {
                                name: '命中',
                                max: 55
                            },
                            {
                                name: '助攻',
                                max: 10
                            },
                            {
                                name: '抢断',
                                max: 3
                            }
                        ],
                    },
                    series: [{
                        name: '测试标题名字',
                        type: 'radar',
                        itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        data: [{
                            value: [player.defen,player.lanban,player.gaimao,player.mingzhong1,player.zhugong,player.qiangduan],
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