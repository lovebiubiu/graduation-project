<template>
	<div>
		<topmenu></topmenu>
    <div class="newsbody_5">
      <div style="width:100%;"><h2>球员数据</h2></div>
      <div v-for="(team,index) in teams" class="teamSty" :key="index" @click="toTeamDetail">
        <div><img src="../assets/team/senlinglang.jpg" style="width:250px;height:150px;" /></div>
        <span style="font-size:25px;font-weight:600;">{{team.teamName}}</span>
        <span>球队势力</span>
        <span style="font-size:20px;">{{team.teamRate}}</span>
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
      teams:[
          {
            id:'1',
            teamName:'森林狼',
            teamRate:'92.4',
          },
          {
            id:'2',
            teamName:'森林狼',
            teamRate:'92.4',
          },
          {
            id:'3',
            teamName:'森林狼',
            teamRate:'92.4',
          },
          {
            id:'4',
            teamName:'森林狼',
            teamRate:'92.4',
          },
          {
            id:'5',
            teamName:'森林狼',
            teamRate:'92.4',
          },
          {
            id:'6',
            teamName:'森林狼',
            teamRate:'92.4',
          },
          {
            id:'7',
            teamName:'森林狼',
            teamRate:'92.4',
          },
        ],
    }
  },
  methods: {
      toTeamDetail(){
        this.$router.push({path:'/dataTeamDetail',query:{teamId:133}});
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
  .teamSty{
    cursor: pointer;
    margin-bottom: 20px;
    width: 300px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
	.newsbody_5{
    margin-top: 20px;
    margin-left: 10%;
    width: 80%;
    height: 800px;
    border:1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
</style>