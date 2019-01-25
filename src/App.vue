<template>
  <div id="app">
    <div class="inside"></div>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
  import api from './common/api/index'
export default {
  name: 'App',
  mounted(){
    // api.post('auth/login',
    //   {
    //     username:'qutest',
    //     password:'123456'
    //   }
    // ).then(res=>{
    //   console.log(res)
    // })

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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .inside{
    width: 10vh;
    height: 10vh;
    background-color: aqua;
  }
}
</style>
