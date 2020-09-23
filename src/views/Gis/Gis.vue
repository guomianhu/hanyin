<template>
    <div class="page"></div>
</template>

<script>	

  export default {
      data () {
        return {

		 }
	  },
      components: {},
      mounted(){
		  window.open("http://web.xathinksoft.com:8082/#/realTimeDetection");      
		  this.$router.back()
      },
      methods:{
		 
      }
    }
</script>

<style lang="less" scoped>
	*{margin: 0;padding: 0;}
</style>