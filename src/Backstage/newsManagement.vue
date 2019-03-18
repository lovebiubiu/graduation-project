<template>
	<div>
    <sideRouter></sideRouter>
    <el-col :span="21" class="contentSty_1">
      <div class="titleSty">管理新闻</div>
		  <el-table
        :data="newsData"
        border
        align="center"
        style="width: 100%">
        <el-table-column
          prop="id"
          label="新闻编号"
          align="center"
          width="100">
        </el-table-column>
        <el-table-column
          prop="newsTitle"
          label="新闻标题"
          width="600">
        </el-table-column>
        <el-table-column
          prop="newsAuthor"
          label="发布方"
          width="150">
        </el-table-column>
        <el-table-column
          prop="newsTime"
          label="发布日期"
          width="150">
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
          width="120">
          <template slot-scope="scope">
            <el-button type="danger" size="mini" icon="el-icon-delete" circle></el-button>
            <el-button type="danger" size="mini" icon="el-icon-delete" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pageRouter_2">
        <div>
          <el-button type="primary" icon="el-icon-arrow-left" size="mini">上一页</el-button>
          <span>1/13</span>
          <el-button type="primary" size="mini">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </div>
        <div style="margin-left:20px;"> 
          <el-input v-model="toPageNum" placeholder="请输入页数" size="mini" style="width:95px;"></el-input>
          <el-button type="primary" size="mini">跳转</el-button>
        </div>
      </div>
    </el-col>
	</div>
</template>
<script>
import sideRouter from '@/Backstage/BackstageComponents/router.vue'
export default {
  data () {
    return {
      newsData:[
        {
          id:'10001',
          newsTitle:'詹姆斯1节连得14分，打出NBA第1人尊严，率领摆烂湖人知耻而后勇',
          newsAuthor:'毛罗聊球',
          newsTime:'2019-3-13',
        },
        {
          id:'10002',
          newsTitle:'多谢火箭放人！弃将12+7+2成3巨头绝配，莫雷这交易操作一举两得',
          newsAuthor:'体育谈资',
          newsTime:'2019-3-13',
        },
        {
          id:'10003',
          newsTitle:'再砍54+10+7！火箭帮送湖人出局，场下400亿老板振臂高呼',
          newsAuthor:'体坛新人小刘',
          newsTime:'2019-3-13',
        },
        {
          id:'10004',
          newsTitle:'悍将归来！火箭宣布转正豪斯合同，冲刺西部第一又添利器',
          newsAuthor:'罗说NBA',
          newsTime:'2019-3-13',
        },
        {
          id:'10005',
          newsTitle:'詹姆斯1节连得14分，打出NBA第1人尊严，率领摆烂湖人知耻而后勇',
          newsAuthor:'毛罗聊球',
          newsTime:'2019-3-13',
        },
        {
          id:'10006',
          newsTitle:'詹姆斯1节连得14分，打出NBA第1人尊严，率领摆烂湖人知耻而后勇',
          newsAuthor:'毛罗聊球',
          newsTime:'2019-3-13',
        },
        {
          id:'10007',
          newsTitle:'詹姆斯1节连得14分，打出NBA第1人尊严，率领摆烂湖人知耻而后勇',
          newsAuthor:'毛罗聊球',
          newsTime:'2019-3-13',
        },
        {
          id:'10008',
          newsTitle:'詹姆斯1节连得14分，打出NBA第1人尊严，率领摆烂湖人知耻而后勇',
          newsAuthor:'毛罗聊球',
          newsTime:'2019-3-13',
        },
        {
          id:'10009',
          newsTitle:'詹姆斯1节连得14分，打出NBA第1人尊严，率领摆烂湖人知耻而后勇',
          newsAuthor:'毛罗聊球',
          newsTime:'2019-3-13',
        },
        {
          id:'10010',
          newsTitle:'詹姆斯1节连得14分，打出NBA第1人尊严，率领摆烂湖人知耻而后勇',
          newsAuthor:'毛罗聊球',
          newsTime:'2019-3-13',
        },
      ],
    }
  },
  methods: {

    },
  components:{
  sideRouter,
   }
}
</script>
<style>
	.pageRouter_2{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 55%;
    margin-top: 20px;
  }
</style>