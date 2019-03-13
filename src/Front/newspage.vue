<template>
	<div class="">
		<topmenu></topmenu>
    
    <div class="newsbody_3">
      <h2>最新新闻</h2>
      <el-table
        :data="newsData"
        style="width: 100%">
        <el-table-column
          label="新闻编号"
          align="center"
          type="index"
          width="100">
        </el-table-column>
        <el-table-column
          prop="newsTitle"
          label="新闻标题"
          width="700">
        </el-table-column>
        <el-table-column
          prop="newsAuthor"
          label="发布方">
        </el-table-column>
        <el-table-column
          prop="newsTime"
          label="发布时间">
        </el-table-column>
      </el-table>
      <div class="pageRouter">
        <div>
          <el-button type="primary" icon="el-icon-arrow-left" size="mini">上一页</el-button>
          <el-button type="primary" size="mini">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </div>
        <div style="margin-left:20px;"> 
          <el-input v-model="toPageNum" placeholder="请输入页数" size="mini" style="width:95px;"></el-input>
          <el-button type="primary" size="mini">跳转</el-button>
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
      toPageNum:'',
      newsData:[
        {
          id:'1',
          newsTitle:'詹姆斯1节连得14分，打出NBA第1人尊严，率领摆烂湖人知耻而后勇',
          newsAuthor:'毛罗聊球',
          newsTime:'2019-3-13',
        },
        {
          id:'2',
          newsTitle:'多谢火箭放人！弃将12+7+2成3巨头绝配，莫雷这交易操作一举两得',
          newsAuthor:'体育谈资',
          newsTime:'2019-3-13',
        },
        {
          id:'3',
          newsTitle:'再砍54+10+7！火箭帮送湖人出局，场下400亿老板振臂高呼',
          newsAuthor:'体坛新人小刘',
          newsTime:'2019-3-13',
        },
        {
          id:'4',
          newsTitle:'悍将归来！火箭宣布转正豪斯合同，冲刺西部第一又添利器',
          newsAuthor:'罗说NBA',
          newsTime:'2019-3-13',
        },
        {
          id:'5',
          newsTitle:'詹姆斯1节连得14分，打出NBA第1人尊严，率领摆烂湖人知耻而后勇',
          newsAuthor:'毛罗聊球',
          newsTime:'2019-3-13',
        },
        {
          id:'6',
          newsTitle:'詹姆斯1节连得14分，打出NBA第1人尊严，率领摆烂湖人知耻而后勇',
          newsAuthor:'毛罗聊球',
          newsTime:'2019-3-13',
        },
        {
          id:'7',
          newsTitle:'詹姆斯1节连得14分，打出NBA第1人尊严，率领摆烂湖人知耻而后勇',
          newsAuthor:'毛罗聊球',
          newsTime:'2019-3-13',
        },
        {
          id:'8',
          newsTitle:'詹姆斯1节连得14分，打出NBA第1人尊严，率领摆烂湖人知耻而后勇',
          newsAuthor:'毛罗聊球',
          newsTime:'2019-3-13',
        },
        {
          id:'9',
          newsTitle:'詹姆斯1节连得14分，打出NBA第1人尊严，率领摆烂湖人知耻而后勇',
          newsAuthor:'毛罗聊球',
          newsTime:'2019-3-13',
        },
        {
          id:'10',
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
  topmenu,
  bottom,
  side,
   }
}
</script>
<style>
  .pageRouter{
    margin-left: 63%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
  }
  .el-breadcrumb{
    font-size: 20px;
  }
	.newsbody_3{
    margin-top: 20px;
    margin-left: 10%;
    width: 80%;
    height: 660px;
    border:1px solid black;
  }
</style>