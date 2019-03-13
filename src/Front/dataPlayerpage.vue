<template>
  <div>
    <topmenu></topmenu>
    <div class="newsbody">
      <h2>球员数据</h2>
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
  methods: {

    },
  components:{
  topmenu,
  bottom,
  side,
   }
}
</script>
<style>
  .newsbody{
    margin-top: 20px;
    margin-left: 10%;
    width: 80%;
    height: 800px;
    border:1px solid black;
  }
</style>