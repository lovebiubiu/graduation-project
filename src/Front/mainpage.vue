<template>
	<div>
		<topmenu></topmenu>
		<div class="bodystyle">
			<div>
				<newscard></newscard>
			</div>
			<el-row>
				<el-col :span="18" >
					<div class="newsboard">
						<div style="font-size:20px;text-align:left;font-weight:600;margin:20px 0 20px 20px;">最新新闻</div>
						<el-table
						  @cell-click="onCellClick"
					      :data="newsdata"
					      style="width: 100%">
					      <el-table-column
					        prop="title"
					        label="新闻标题"
					        width="550">
					      </el-table-column>
					      <el-table-column
					        prop="author"
					        label="发布者"
					        width="120">
					      </el-table-column>
					      <el-table-column
					      	align="right"
					        prop="date"
					        label="发布日期"
					        width="190">
					      </el-table-column>
					    </el-table>
					    <el-button type="primary" @click="lookNewsClick" style="margin-top:20px;margin-left:700px;">浏览更多新闻>></el-button>
					</div>
					
				</el-col>
				<el-col :span="6">
					<div class="playerboard">
						<div style="font-size:16px;text-align:left;font-weight:600;margin:10px 0 0 10px;">球员排行榜</div>
						<el-table
					      :data="playerdata"
					      style="width: 100%">
					      <el-table-column
					        prop="chineseName"
					        label="球员"
					        width="200">
					      </el-table-column>
					      <el-table-column
					        prop="defen"
					        label="评分">
					      </el-table-column>
					    </el-table>
					</div>
					<div class="teamboard">
						<div style="font-size:16px;text-align:left;font-weight:600;margin:10px 0 0 10px;">球队排行榜</div>
						<el-table
					      :data="teamdata"
					      style="width: 100%">
					      <el-table-column
					        prop="teamName"
					        label="球队"
					        width="200">
					      </el-table-column>
					      <el-table-column
					        prop="teamRate"
					        label="势力值">
					      </el-table-column>
					    </el-table>
					</div>
				</el-col>
			</el-row>
		</div>
		<side></side>
		<bottom></bottom>
	</div>
</template>
<script>
import topmenu from '@/components/topmenu.vue'
import bottom from '@/components/bottom.vue'
import newscard from '@/components/newsCard.vue'
import side from '@/components/side.vue'
import util from '@/utils/base.js'
export default {
  data () {
    return {
    	pageNum:0,
      newsdata:[],
      playerdata:[],
      teamdata:[
      {
      	id:'1',
      	teamName:'亚特兰大 老鹰',
      	teamRate:'96.7',
      },
      {
      	id:'2',
      	teamName:'波士顿 凯尔特人',
      	teamRate:'95.4',
      },
      {
      	id:'3',
      	teamName:'芝加哥 公牛',
      	teamRate:'95.2',
      },
      {
      	id:'4',
      	teamName:'夏洛特 黄蜂',
      	teamRate:'94.8',
      },
      {
      	id:'5',
      	teamName:'布鲁克林 篮网',
      	teamRate:'94.6',
      },
      ],
    }
  },
  created: function () {
            console.group('created 创建完毕状态===============》');
            var that = this;
            that.getNewsList();
            that.getPlayerRankList();
        },
  methods: {
  	getPlayerRankList(){
  		var that = this;
  		$.ajax({
                url: this.$host+'getPlayerEloList',
                type: 'get',
                dataType: 'json',
                success: function (data) {
                	console.log(data);
                	that.playerdata = data;
                },
                error: function(xhr, errorType, error) {
                    alert('Ajax request error, errorType: ' + errorType +  ', error: ' + error)
                }
            });
  	},
  	getNewsList(){ 
  		var that = this;
  		$.ajax({
                url: this.$host+'getNews?pageNum='+that.pageNum,
                type: 'get',
                dataType: 'json',
                success: function (data) {
                	var i ;
                	var arr = new Array();
                	for(i=0;i<data.length;i++){
                		var temp ={};
                		temp["title"]=data[i]["title"];
                		temp["author"]=data[i]["description"];
                		temp["date"]=data[i]["ctime"];
                		temp["pictrueUrl"]=data[i]["picurl"];
                		temp["url"]=data[i]["url"];
                		arr.push(temp);
                	}
                	that.newsdata=arr;
                    console.log(arr);
                },
                error: function(xhr, errorType, error) {
                    alert('Ajax request error, errorType: ' + errorType +  ', error: ' + error)
                }
            });
  	},
	onCellClick(row, column, cell, event){
      console.log(row);
      window.open(row.url);
      },
	lookNewsClick(){
		this.$router.push({path:'/news'});
	}
    },
   components:{
	topmenu,
	newscard,
	bottom,
	side,
   }
}
</script>
<style>

.newsboard{
	width: 95%;
	margin-right: 5%;
	border:3px solid #BBB;
	height: 660px;
	margin-top: 20px;
}
.playerboard{
	border:1px solid #BBB;
	height: 320px;
	margin-top: 20px;
}
.teamboard{
	border:1px solid #BBB;
	height: 320px;
	margin-top: 18px;
}
.bodystyle{
	margin-left: 10%;
	margin-right: 10%;
}
</style>