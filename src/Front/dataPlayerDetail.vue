<template>
	 <div>
    <topmenu></topmenu>
    <div class="newsbody_5">
        
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
      
    }
  },
  mounted:function(){
    console.log(this.$route.query);
    this.getPlayerInfo(this.$route.query.id);
  },
  methods: {
    getPlayerInfo(id){
      var that = this;
         $.ajax({
          url: this.$host+'getPlayerInfo?id='+id,
          type: 'get',
          success: function (data) {
              console.log(data);
              
          },
          error: function(xhr, errorType, error) {
              alert('请求错误, 错误类型: ' + errorType +  ', error: ' + error)
          }
      });
    }
    },
  components:{
  topmenu,
  bottom,
  side,
   }
}
</script>
<style>
	.newsbody_5{
    position: relative;
    margin-top: 20px;
    margin-left: 10%;
    width: 80%;
    border:1px solid black;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
</style>