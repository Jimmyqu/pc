<template>
  <div class="container">
    <!--登录盒子-->
      <div class="container-box" v-if="loginShow">
          <h3>
            登录
          </h3>
        <el-form  :model="loginForm">
          <el-form-item  class="login-input">
            <el-input  placeholder="请输入手机号" v-model="loginForm.uname"></el-input>
          </el-form-item>
          <el-form-item class="login-input">
            <el-input placeholder="请输入密码" type="password" v-model="loginForm.pass" ></el-input>
          </el-form-item>
          <el-form-item class="login-btn">
            <div class="container-box-forget">
              <span>
                    忘记密码
              </span>
            </div>
            <el-button>登录</el-button>
            <div class="container-box-reg-text">
                <span>
                  立即注册
                </span>
            </div>
          </el-form-item>
        </el-form>
      </div>
    <!--注册盒子-->
      <div class="container-reg">
        <h3>
          注册
        </h3>
        <el-form  :model="regForm">
          <el-form-item  class="login-input">
            <el-input  placeholder="请输入手机号" v-model="regForm.mobile"></el-input>
          </el-form-item>
          <el-form-item class="login-input reg-code">
            <el-input placeholder="请输入验证码"  v-model="regForm.code" ></el-input>
            <div class="el-btn">
              <el-button loading="true" >获取验证码</el-button>
            </div>
          </el-form-item>
          <el-form-item class="login-input">
            <el-input placeholder="请输入密码" type="password" v-model="regForm.name" ></el-input>
          </el-form-item>
          <el-form-item class="login-input">
            <el-input placeholder="请输入昵称"  v-model="regForm.pass" ></el-input>
          </el-form-item>

          <el-form-item class="login-btn login-input">
            <div class="container-reg-info">
              <div >
              </div>
              <div >
                <span>
                   <el-radio v-model="regForm.radio" label="1">已阅读并确认用户协议</el-radio>
              </span>
              </div>

            </div>
            <el-button>确认</el-button>
            <div class="container-box-forget">
                <span>
                  已有账号，去登录
                </span>
            </div>
          </el-form-item>
        </el-form>
      </div>
  </div>
</template>

<script>
    export default {
      name: "index",
      data(){
          return {
            loginShow:false,
            loginForm:{
              uname:'',
              pass:''
            },
            regForm:{
              radio:'0',
              mobile:'',
              code:'',
              pass:'',
              name:''
            }
          }
      }
    }
</script>

<style scoped lang="less">
  @import url('../../../common/css/scratch_1');

.container{
  display: flex;
  justify-content: center;
  align-items: center;
  h3{
    font-size: 32px;
    color: @title;
    font-weight: bold;
    text-align: center;
    height: 104px;
    line-height: 104px;
  }
  &-box{
    background-color: #fff;
    width: 640px;
    height: 480px;
    border: 1px solid @boderColor;
    span{
      color: @title;
      cursor: pointer;
    }
    &-forget{
      width: 500px;
      margin: 0 auto 10px auto;
      direction: rtl;
    }
    &-reg-text{
      margin-top: 10px;
      text-align: center;
    }
  }

  &-reg{
    background-color: #fff;
    width: 640px;
    margin-top: 50px;
    border: 1px solid @boderColor;
    span{
      color: @title;
      cursor: pointer;
    }
    &-info{
      display: flex;
      justify-content: space-between;
    }
  }
}

</style>
