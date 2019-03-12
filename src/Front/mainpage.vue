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
					        prop="playerName"
					        label="球员"
					        width="200">
					      </el-table-column>
					      <el-table-column
					        prop="playerRate"
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

export default {
  data () {
    return {
      newsdata:[
      {
      	id:'10001',
      	title:'美女排球运动员公开择偶标准，不仅要帅还要强！最好是黑人',
      	author:'懂个球',
      	date:'2019-3-12'
      	},
      {
	  	  id:'10002',
	      title:'励志哥又回来了！湖人签下33岁老将，那动情一幕你还记得吗？',
	      author:'罗说NBA',
	      date:'2019-3-12'
		},
      {	
      	  id:'10003',
	      title:'彻底取代奥运最佳！女排24岁新科冠军坐稳第一人，郎平没看走眼',
	      author:'泉城侃球',
	      date:'2019-3-12'
 		 },
      {
      	id:'10004',
	      title:'围棋“七冠王”柯洁被清华免试录取 主攻工商管理',
	      author:'浙江新闻',
	      date:'2019-3-12'
 		 },
      {
      	id:'10005',
      	title:'不买内马尔！齐达内钦点2亿巨头加盟皇马 C罗真正接班人',
      	author:'护球出线',
      	date:'2019-3-12'
		  },
      {
      	id:'10006',
      	title:'新闻标题6',
      	author:'作者6',
      	date:'2019-3-12'
 		 },
      {
      	id:'10007',
      	title:'新闻标题7',
      	author:'作者7',
      	date:'2019-3-12'
  		},
      {
      	id:'10008',
      	title:'新闻标题8',
      	author:'作者8',
      	date:'2019-3-12'
  		},
  		{
      	id:'10009',
      	title:'新闻标题9',
      	author:'作者9',
      	date:'2019-3-12'
  		},
  		{
      	id:'10010',
      	title:'新闻标题10',
      	author:'作者10',
      	date:'2019-3-12'
  		},
      ],
      playerdata:[
      {
      	id:'1',
      	playerName:'杰伦 亚当斯',
      	playerRate:'9.8',
      },
      {
      	id:'2',
      	playerName:'斯蒂文 亚当斯',
      	playerRate:'9.6',
      },
      {
      	id:'3',
      	playerName:'巴姆 阿德巴约',
      	playerRate:'9.6',
      },
      {
      	id:'4',
      	playerName:'邓 Adel',
      	playerRate:'9.5',
      },
      {
      	id:'5',
      	playerName:'劳勒 Alkins',
      	playerRate:'9.5',
      },
      ],
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
  methods: {
	onCellClick(row, column, cell, event){
		console.log(row);
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
	border:1px solid #000;
	height: 660px;
	margin-top: 20px;
}
.playerboard{
	border:1px solid #000;
	height: 320px;
	margin-top: 20px;
}
.teamboard{
	border:1px solid #000;
	height: 320px;
	margin-top: 18px;
}
.bodystyle{
	margin-left: 10%;
	margin-right: 10%;
}
</style>