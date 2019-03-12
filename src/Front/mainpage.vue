<template>
	<div>
		<topmenu></topmenu>
		<div class="bodystyle">
			<div>
				<newscard></newscard>
			</div>
			<el-row>
				<el-col :span="18"  >
					<div class="newsboard">
						最新新闻
					</div>
				</el-col>
				<el-col :span="6">
					<div class="playerboard">
						球员排行榜
					</div>
					<div class="teamboard">
						球队排行榜
					</div>
				</el-col>
			</el-row>
		</div>
		<side></side>
		<bottom></bottom>
	</div>
</template>
<script>
import topmenu from '@/components/topmenu.vue'
import bottom from '@/components/bottom.vue'
import newscard from '@/components/newsCard.vue'
import side from '@/components/side.vue'

export default {
  data () {
    return {
      
    }
  },
  methods: {

    },
   components:{
	topmenu,
	newscard,
	bottom,
	side,
   }
}
</script>
<style>
.newsboard{
	width: 95%;
	margin-right: 5%;
	border:1px solid #000;
	height: 500px;
	margin-top: 20px;
}
.playerboard{
	border:1px solid #000;
	height: 300px;
	margin-top: 20px;
}
.teamboard{
	border:1px solid #000;
	height: 180px;
	margin-top: 20px;
}
.bodystyle{
	margin-left: 10%;
	margin-right: 10%;
}
</style>