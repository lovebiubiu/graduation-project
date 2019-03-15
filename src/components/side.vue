<template>
  <div class="sideStyle">
    <el-menu 
    default-active="1-4-1" 
    class="el-menu-side" 
    background-color="#444" 
    text-color="white"
    active-text-color="yellow"
    @close="handleClose" 
    router="true"
    :collapse="isCollapse">
      <el-menu-item @click="toTop()" title="回到顶部">
        <i class="el-icon-arrow-up"></i>
        <span slot="title">回到顶部</span>
      </el-menu-item>
      <el-menu-item index="/" title="首页">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/news" title="新闻">
        <i class="el-icon-news"></i>
        <span slot="title">新闻</span>
      </el-menu-item>
      <el-menu-item index="schedule" title="赛程">
        <i class="el-icon-date"></i>
        <span slot="title">赛程</span>
      </el-menu-item>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span slot="title">数据</span>
        </template>
          <el-menu-item index="/dataPlayer">球员数据</el-menu-item>
          <el-menu-item index="/dataTeam">球队数据</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  data () {
    return {
       isCollapse: true
    }
  },
  methods: {
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      toTop(){
        window.scroll(0,0);
      }
    }
}
</script>
<style>
  .el-menu-side{
    width: 55px;
    min-height: 200px;
  }
  .sideStyle{
      right: 6.1%;
      top: 35%;
      position: fixed;
  }
</style>