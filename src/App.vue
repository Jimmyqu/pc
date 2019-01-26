<template>
  <div id="app">
    <div >
      <staticHeader></staticHeader>
      <div class="bg-class">1
        <div class="common-width">
          <router-view/>
        </div>
      </div>
      <staticFooter></staticFooter>
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
  components:{
    staticHeader,
    staticFooter
  },
  mounted(){
    api.post('auth/login',
      {
        username:'qutest',
        password:'123456'
      }
    ).then(res=>{
      console.log(res)
      this.$cookie.set('token',res.data.data.common.sk,res.data.data.common.sk_expire)
    })

    this.$ajax.get('suggest/logs',
      {
        t:2
      }
    ).then(res=>{
      console.log(res)
    })
  }
}
</script>

<style lang="less">
  @import url('./common/css/scratch_1');

#app {
.bg-class{
  background-color: @bgColor;
  .common-width{
    width: 1200px;
    margin: 0 auto;
  }
}

}
</style>
