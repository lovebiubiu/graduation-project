<template>
	<div>
    <el-row class="backgroundsty">
      <el-row class="loginStyle">
        <div class="loginsty1">
          管理员登录
        </div>
        <div class="loginsty2">
          <div>
            <span class="fontsty">账号:</span>
            <el-input v-model="userName" placeholder="请输入账号"></el-input>
          </div>
          <div>
            <span class="fontsty">密码:</span>
            <el-input v-model="password" type="password" placeholder="请输入密码"></el-input>
          </div>
          
        </div>
        <el-button type="primary" @click="loginValidate()">登录</el-button>
        <el-button type="info">忘记密码?</el-button>
      </el-row>
		</el-row>
	</div>
</template>
<script>
export default {
  data () {
    return {
      userName:'',
      password:'',
    }
  },
  created: function () {
     

  },
  methods: {
      loginValidate(){
        var that = this;
        console.log(that.userName+"----"+that.password);
        $.ajax({
                url: this.$host+'loginValidate',
                type: 'post',
                data:{
                  userName:that.userName,
                  password:that.password
                },
                success: function (data) {
                  console.log(data);
                  if(data=="-1"){
                    alert('用户名或密码错误');
                  }else{
                    that.$config.setToken(data);
                    that.$config.setUserName(that.userName);
                    console.log(that.$config);
                    that.$router.push({
                      name:'后台主页',
                    });
                  }
                },
                error: function(xhr, errorType, error) {
                    alert('Ajax 请求 error, errorType: ' + errorType +  ', error: ' + error)
                }
            });
      }
    }
}
</script>
<style>
  .fontsty{
    font-size: 20px;
  }
  .loginsty1{
    height: 100px;
    text-align: center;
    line-height: 100px;
    font-size: 20px;
   }
   .loginsty2{
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
   }
  .el-input{
    width: 80%;
  }
	.loginStyle{
    margin-top: 10%;
    background-color: white;
    width:28%;
    border:3px #666 solid;
    border-radius: 30px;
    height:350px;
    margin-left: 60%;
  }
  .backgroundsty{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:url(../assets/loginbackground.jpg) center no-repeat;
    background-size:100%;
  }
</style>