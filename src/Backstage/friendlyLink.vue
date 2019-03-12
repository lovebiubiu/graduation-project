<template>
	<div>
    <sideRouter></sideRouter>
    <el-col :span="21">
        <div class="titleSty">友情链接管理</div>
        <div style="margin-left:40px;margin-top:20px;margin-bottom:20px;text-align:left">
          <el-button type="primary" @click="toAddNewLink">添加新的友情链接</el-button>
        </div>
        <el-table
        :data="tableData"
        border
        align="center"
        style="width: 100%">
        <el-table-column
          label="编号"
          type="index"
          width="150">
        </el-table-column>
        <el-table-column
          prop="linkName"
          label="链接名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="date"
          label="添加日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="300">
        </el-table-column>
        <el-table-column
          prop="info"
          label="备注"
          width="120">
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
          width="80">
          <template slot-scope="scope">
            <el-button type="danger" size="mini" icon="el-icon-delete" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
	</div>
</template>
<script>
import sideRouter from '@/Backstage/BackstageComponents/router.vue'
export default {
  data () {
    return {
      tableData: [{
          date: '2016-05-02',
          linkName: '洛谷',
          address: 'www.luogu.org',
          info: "在线刷题"
        }, {
          date: '2016-05-04',
          linkName: '百度',
          address: 'www.baidu.com',
          info: "搜索引擎"
        }, {
          date: '2016-05-01',
          linkName: '哔哩哔哩',
          address: 'www.bilibili.tv',
          info: "视频网站"
        }, {
          date: '2016-05-03',
          linkName: '斗鱼',
          address: 'www.douyu.tv',
          info: "热门直播"
        }]
    }
  },
  methods: {
      handleClick(row) {
        console.log(row);
      },
      toAddNewLink(){
        this.$router.push({path:'/admin/addFriendlyLink'});
      }
    },
    components:{
  sideRouter
   }
}
</script>
<style>
</style>