<template>
  <div id="app">
    <div >
      <!-- <staticHeader></staticHeader> -->
      <div class="bg-class" :class="{'bg-color':bg}">
        <div class="common-width">
          <router-view/>
        </div>
      </div>
      <!-- <staticFooter></staticFooter> -->
    </div>
  </div>
</template>
h
<script>
import api from './common/api/index'
import staticHeader from './components/ele/staticHeader'
import staticFooter from './components/ele/staticFooter'
export default {
  name: 'App',
  data(){
    return {
      bg:true
    }
  },
  components:{
    staticHeader,
    staticFooter
  },
  mounted(){
    // api.post('auth/login',
    //   {
    //     username:'qutest',
    //     password:'123456'
    //   }
    // ).then(res=>{
    //   console.log(res)
    //   this.$cookie.set('token',res.data.data.common.sk,res.data.data.common.sk_expire)
    // })
    //
    // this.$ajax.get('suggest/logs',
    //   {
    //     t:2
    //   }
    // ).then(res=>{
    //   console.log(res)
    // })
  },
  watch:{
    "$route": function(){
      if(this.$route.path=='/ask'){
        this.bg=false
      }else {
        this.bg=true
      }

      }
  }
}
</script>

<style lang="less">
  @import url('./common/css/scratch_1');

#app {
  .bg-color{
    background-color: @bgColor;
  }
.bg-class{
  padding-bottom: 100px;
  padding-top: 20px;
  min-height: 500px;
  .common-width{
    width: 1200px;
    margin: 0 auto;
  }
}

}
</style>
