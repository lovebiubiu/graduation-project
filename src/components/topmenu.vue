<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="topStyle">
          <img src="../assets/NBAlogo.png" width="150" height="100" />
          <font class="titleStyle">
            NBA球员数据统计网  
          </font>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-menu
      :default-active="activeIndex"
      class="el-menu"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      router="true"
      active-text-color="#ffd04b">
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/schedule">比赛赛程</el-menu-item>
        <el-menu-item index="/news">新闻</el-menu-item>
        <el-submenu index="4">
          <template slot="title">数据</template>
          <el-menu-item index="/dataPlayer">球员</el-menu-item>
          <el-menu-item index="/dataTeam">球队</el-menu-item>
        </el-submenu>
        <el-menu-item @click="showdialog">友情链接</el-menu-item>
    </el-menu>
    </el-row>
    <el-dialog
      class="dialogSty"
      title="友情链接"
      :visible.sync="dialogVisible"
      width="45%"
      :before-close="handleClose">
      <el-table
          :data="linkData"
          @cell-click="onCellClick"
          style="width: 100%">
          <el-table-column
            prop="linkname"
            label="链接名"
            >
          </el-table-column>
          <el-table-column
            prop="linkurl"
            label="地址"
            >
          </el-table-column>
          <el-table-column
            prop="linkdescription"
            label="链接简介"
            >
          </el-table-column>
        </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">返回</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      dialogVisible:false,
      linkData:[],
    }
  },
  methods: {
    onCellClick(row){
      console.log(row);
      window.open(row.linkurl);
    },
    showdialog(){
      var that = this;
      console.log("showdialog");
      $.ajax({
          url: this.$host+'getFriendlyLinkList',
          type: 'get',
          data:{},
          xhrFields: {
              withCredentials: true
          },
          success: function (data) {
            console.log(data);
            that.dialogVisible=true;
            that.linkData = data;
          },
          error: function(xhr, errorType, error) {
              alert('Ajax request error, errorType: ' + errorType +  ', error: ' + error)
          }
        });
      }
    }
}
</script>


<style>
  .el-menu{
    padding-left: 10%;
  }
  .topStyle{
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 30px;
    margin-top: 10px;
  }
  .titleStyle{
    text-align: center;
    line-height: 100px;
    font-size: 25px;
    margin-left: 30px;
  }
  .el-row{
    margin-top: 0px;
    margin-left: 0px;
  }
  .test1{
    background-color:red;
  }
</style>
