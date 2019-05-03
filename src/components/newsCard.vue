<template>
	<div>
		<el-carousel :interval="4000" type="card" height="300px" @change="imgTextShow" style="z-index:1;">
		    <el-carousel-item v-for="item in cardInfo" :key="item.pictureTitle">
		      <img :src="item.pictureUrl" style="width:100%;" height="300">
		    </el-carousel-item>
	  	</el-carousel>
	  	<div class="infoStyle" style="cursor:pointer">
        <p style="margin-bottom:0px;color:#444444" @click="toNews">{{showInfo}}</p>
	  	</div>
	  	
	</div>
</template>
<script>
export default {
  data () {
    return {
      cardInfo:[],
      showInfo:'',
      showUrl:'',
    }
  },
  created: function () {
    this.getScrollpictureList();
  },
  methods: {
    toNews(){
      window.open(this.showUrl);
    },
    getScrollpictureList(){
    var that = this;
      $.ajax({
                url: this.$host+'selectScrollPicture',
                type: 'get',
                dataType: 'json',
                success: function (data) {
                  console.log(data);
                  that.cardInfo = data;
                },
                error: function(xhr, errorType, error) {
                    alert('Ajax request error, errorType: ' + errorType +  ', error: ' + error)
                }
            });
    },
  	imgTextShow:function(index,key){
  		this.showInfo=this.cardInfo[index].pictureTitle;
      this.showUrl = this.cardInfo[index].newsUrl;
      // console.log(this.showInfo);
  	}
    }
}	
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .infoStyle{
  	width: 50%;
  	z-index: 10;
  	margin-left: 25%;
  	margin-top: -30px;
  	height: 50px;
  	background: linear-gradient( white , #bbbbbb);
  	color:#666666;
  	display: flex;
  	flex-direction: column-reverse;
  	justify-content: flex-start;
  }
</style>