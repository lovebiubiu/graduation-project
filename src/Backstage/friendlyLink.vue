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
          prop="linkname"
          label="链接名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="linkurl"
          label="地址"
          width="300">
        </el-table-column>
        <el-table-column
          prop="linkdescription"
          label="网站描述"
          width="320">
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
          width="80">
          <template slot-scope="scope">
            <el-button type="danger" @click="deleteLink(scope)" size="mini" icon="el-icon-delete" circle></el-button>
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
      tableData: []
    }
  },
  created: function () { 
      this.getList();
  },
  methods: {
      getList(){
        var that = this;
        $.ajax({
              url: this.$host+'getFriendlyLinkList',
              type: 'get',
              xhrFields: {
                  withCredentials: true
              },
              success: function (data) {
                console.log(data);
                that.tableData = data;
              },
              error: function(xhr, errorType, error) {
                  alert('Ajax request error, errorType: ' + errorType +  ', error: ' + error)
              }
          }); 
      },
      handleClick(row) {
        console.log(row);
      },
      toAddNewLink(){
        this.$router.push({path:'/admin/addFriendlyLink'});
      },
      deleteLink(scope){
        var that = this;
        console.log(scope.$index);
        $.ajax({
          url: this.$host+'deleteFriendlyLink',
          type: 'post',
          data:{
              id:that.tableData[scope.$index].id
          },
          xhrFields: {
              withCredentials: true
          },
          success: function (data) {
            console.log(data);
            alert('删除成功');
            that.getList();
          },
          error: function(xhr, errorType, error) {
              alert('Ajax request error, errorType: ' + errorType +  ', error: ' + error)
          }
      });   
      }
    },
    components:{
  sideRouter
   }
}
</script>
<style>
</style>