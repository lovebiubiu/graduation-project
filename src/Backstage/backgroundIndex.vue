<template>
  <div>
  	<sideRouter></sideRouter>
  </div>
</template>
<script>
import sideRouter from '@/Backstage/BackstageComponents/router.vue'
export default {
  data () {
    return {
      
    }
  },
  methods: {

    },
    created: function () {
  },
	components:{
	 sideRouter,
  }
}
</script>
<style>
 .el-menu-vertical-demo{
 	height: 100%;
 	padding-left: 0%;
 }
 body{
 	height: 100%;
 }
</style>