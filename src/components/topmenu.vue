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
      @select="handleSelect"
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
        <el-menu-item index="5">友情链接</el-menu-item>
    </el-menu>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
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
