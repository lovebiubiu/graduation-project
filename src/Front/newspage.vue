<template>
	<div class="">
		<topmenu></topmenu>
    
    <div class="newsbody_3">
      <h2>最新新闻</h2>
      <el-table
        :data="newsdata"
        @cell-click="onCellClick"
        style="width: 100%">
        <el-table-column
          label="新闻编号"
          align="center"
          type="index"
          width="100">
        </el-table-column>
        <el-table-column
          label="新闻图片"
          align="center"
          width="100">
          <template slot-scope="scope">
              <img :src="scope.row.pictrueUrl" style="width:100px;height:100px;" />
          </template>
        </el-table-column>
        <el-table-column
          prop="title"
          label="新闻标题"
          width="700">
        </el-table-column>
        <el-table-column
          prop="author"
          label="发布方">
        </el-table-column>
        <el-table-column
          prop="date"
          label="发布时间">
        </el-table-column>
      </el-table>
     
      <div class="pageRouter">
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
       <div class="statement">
        <span style="font-size:14px;color:#708090">数据来源：凤凰网，若有侵权，请联系删除</span>
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
      toPageNum:null,
      pageNum:0,
      newsdata:[],
    }
  },
  created: function () {
            console.group('created 创建完毕状态===============》');
            this.getNewsInfo();
        },
  
  methods: {
      onCellClick(row, column, cell, event){
      console.log(row);
      window.open(row.url);
      },
      lastPage(){
        console.log("lastPage");
        var that = this;
        that.pageNum-=1;
        that.getNewsInfo();
        window.scroll(0,110);
      },
      nextPage(){
        console.log("nextPage");
        var that = this;
        that.pageNum+=1;
        that.getNewsInfo();
        window.scroll(0,110);
      },
      inputToPage(){
        var that = this;
        console.log(that.toPageNum);
        if(that.toPageNum>5||that.toPageNum<1){
          alert('请输入正确的页数');
        }else{
          that.pageNum=parseInt(that.toPageNum)-1;
          that.getNewsInfo();
          window.scroll(0,110);
          that.toPageNum=null;
        }
        
      },
      getNewsInfo(){
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
                      console.log(that.newsdata);
                  },
                  error: function(xhr, errorType, error) {
                      alert('请求错误, 错误类型: ' + errorType +  ', error: ' + error)
                  }
              });
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
  .statement{
    margin-left: 75%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
  }
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
    border:1px solid black;
  }
</style>