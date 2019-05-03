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
          width="200">
        </el-table-column>
        <el-table-column
          prop="title"
          label="新闻标题"
          width="600">
        </el-table-column>
        <el-table-column
          prop="author"
          label="发布方"
          width="120">
        </el-table-column>
        <el-table-column
          prop="date"
          label="发布日期"
          width="150">
        </el-table-column>
        <el-table-column
          label="是否显示"
          align="center"
          width="100">
          <template slot-scope="scope">
            <el-button v-if="scope.row.visible==1" size="mini" @click="setVisible(scope)" type="success" icon="el-icon-check" circle></el-button>
            <el-button v-else-if="scope.row.visible==0" size="mini" @click="setVisible(scope)" type="info" icon="el-icon-check" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pageRouter_2">
        <div>
          <el-button type="primary" @click="lastPage()" v-if="pageNum!=0" icon="el-icon-arrow-left" size="mini">上一页</el-button>
          <span>页数：{{pageNum+1}}/5</span>
          <el-button type="primary" @click="nextPage()" v-if="pageNum!=4" size="mini">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </div>
        <div style="margin-left:20px;"> 
          <el-input v-model="toPageNum" placeholder="请输入页数" size="mini" style="width:95px;"></el-input>
          <el-button type="primary" size="mini" @click="inputToPage()">跳转</el-button>
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
      toPageNum:null,
      newsData:[],
      pageNum:0,
    }
  },
  created: function () { 
      this.getNewsInfo();
  },
  methods: {
      setVisible(scope){
        var that = this;
        console.log(scope);
        $.ajax({
          url: this.$host+'setVisible',
          type: 'post',
          data:{
            id:scope.row.id
          },
          success: function (data) {
              alert('设置成功');
              that.getNewsInfo();
          },
          error: function(xhr, errorType, error) {
              alert('请求错误, 错误类型: ' + errorType +  ', error: ' + error)
          }
      });
      },
      onCellClick(row, column, cell, event){
      console.log(row);
      window.open(row.url);
      },
      lastPage(){
        console.log("lastPage");
        var that = this;
        that.pageNum-=1;
        that.getNewsInfo();
        window.scroll(0,80);
      },
      nextPage(){
        console.log("nextPage");
        var that = this;
        that.pageNum+=1;
        that.getNewsInfo();
        window.scroll(0,80);
      },
      inputToPage(){
        var that = this;
        console.log(that.toPageNum);
        if(that.toPageNum>5||that.toPageNum<1){
          alert('请输入正确的页数');
        }else{
          that.pageNum=parseInt(that.toPageNum)-1;
          that.getNewsInfo();
          window.scroll(0,80);
          that.toPageNum=null;
        }
        
      },
      getNewsInfo(){
      var that = this;
      $.ajax({
          url: this.$host+'getNewsBackstage?pageNum='+that.pageNum,
          type: 'get',
          dataType: 'json',
          success: function (data) {
            var i ;
            var arr = new Array();
            for(i=0;i<data.length;i++){
              var temp ={};
              temp["id"]=data[i]["id"];
              temp["title"]=data[i]["title"];
              temp["author"]=data[i]["description"];
              temp["date"]=data[i]["ctime"];
              temp["pictrueUrl"]=data[i]["picurl"];
              temp["url"]=data[i]["url"];
              temp["visible"]=data[i]["visible"];
              arr.push(temp);
            }
            that.newsData=arr;
          },
          error: function(xhr, errorType, error) {
              alert('请求错误, 错误类型: ' + errorType +  ', error: ' + error)
          }
      });
    },
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
    bottom: -50px;
  }
</style>