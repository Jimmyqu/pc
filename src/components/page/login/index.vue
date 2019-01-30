<template>
  <div class="container">
    <!--登录盒子-->
      <div class="container-box" v-if="loginShow">
          <h3>
            登录
          </h3>
        <el-form  :model="loginForm" :rules="loginRules" ref="ruleLogin">
          <el-form-item  class="login-input" prop="uname">
            <el-input  placeholder="请输入手机号" v-model="loginForm.uname"></el-input>
          </el-form-item>
          <el-form-item class="login-input" prop="pass">
            <el-input placeholder="请输入密码" type="password" v-model="loginForm.pass" ></el-input>
          </el-form-item>
          <el-form-item class="login-input login-btn">
            <div class="container-box-forget">
              <span @click = "toForgot('ruleLogin')">
                    忘记密码
              </span>
            </div>
            <el-button @click="handlerLogin" :loading="loginLoading">登录</el-button>
            <div class="container-box-reg-text">
                <span @click="toReg('ruleLogin')">
                  立即注册
                </span>
            </div>
          </el-form-item>
        </el-form>
      </div>
    <!--注册盒子-->
      <div class="container-reg" v-if="regShow">
        <h3>
          注册
        </h3>
        <el-form  :model="regForm" :rules="regRules" ref="ruleReg">
          <el-form-item  class="login-input" prop="mobile">
            <el-input  placeholder="请输入手机号" v-model="regForm.mobile"></el-input>
          </el-form-item>
          <el-form-item class="login-input reg-code" prop="code">
            <el-input placeholder="请输入验证码"  v-model="regForm.code" ></el-input>
            <div class="el-btn">
              <el-button :loading="smsLoading" @click="postCode">{{smsLoading?smsSec+'s后获取':'获取验证码'}}</el-button>
            </div>
          </el-form-item>
          <el-form-item class="login-input reg-code" prop="code" v-show="false">
            <el-input placeholder="请输入验证码"  v-model="regForm.code" ></el-input>
            <div class="el-btn">
              <el-button :loading="smsLoading" @click="postCode">{{smsLoading?smsSec+'s后获取':'获取验证码'}}</el-button>
            </div>
          </el-form-item>
          <el-form-item class="login-input" prop="pass2">
            <el-input placeholder="请输入密码" type="password" v-model="regForm.pass2" ></el-input>
          </el-form-item>


          <el-form-item class="login-input" prop="name">
            <el-input placeholder="请输入昵称"  v-model="regForm.name" ></el-input>
          </el-form-item>

          <el-form-item class="login-btn login-input" prop="radio">
            <div class="container-reg-info">
              <div >
              </div>
              <div >
                <span>
                   <el-radio v-model="regForm.radio" label="1">已阅读并确认用户协议</el-radio>
              </span>
              </div>
            </div>
            <el-button @click="handlerReg('ruleReg')">确认</el-button>
            <div class="container-box-forget">
                <span @click="toLogin('ruleReg')">
                  已有账号，去登录
                </span>
            </div>
          </el-form-item>
        </el-form>
      </div>
    <!--找回盒子-->
    <div class="container-reg" v-if="forgetShow" >
      <h3>
        忘记密码
      </h3>
      <el-form  :model="ForgotForm" :rules="forgetRules" ref="ruleForgot">
        <el-form-item  class="login-input" prop="mobile">
          <el-input  placeholder="请输入手机号" v-model="ForgotForm.mobile"></el-input>
        </el-form-item>
        <el-form-item class="login-input reg-code" prop="code">
          <el-input placeholder="请输入验证码"  v-model="ForgotForm.code" ></el-input>
          <div class="el-btn">
            <el-button :loading="smsLoading" @click="postCode">{{smsLoading?smsSec+'s后获取':'获取验证码'}}</el-button>
          </div>
        </el-form-item>
        <el-form-item class="login-input reg-code" prop="code" v-show="false">
          <el-input placeholder="请输入验证码"  v-model="ForgotForm.code" ></el-input>
          <div class="el-btn">
            <el-button :loading="smsLoading" @click="postCode">{{smsLoading?smsSec+'s后获取':'获取验证码'}}</el-button>
          </div>
        </el-form-item>
        <el-form-item class="login-input" prop="pass3">
          <el-input placeholder="请输入新密码" type="password" v-model="ForgotForm.pass3" ></el-input>
        </el-form-item>
        <el-form-item class="login-input" prop="repass">
          <el-input placeholder="请再次输入新密码"  v-model="ForgotForm.repass" ></el-input>
        </el-form-item>

        <el-form-item class="login-btn login-input">
          <div class="container-reg-info">
            <div >
            </div>
            <div >
                <span>
                   <el-radio v-model="ForgotForm.radio" ></el-radio>
              </span>
            </div>

          </div>
          <el-button @click="handlerForgot">确认</el-button>
          <div class="container-box-forget">
                <span @click="toLogin('ruleForgot')">
                  已想起，去登录
                </span>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <!--用户协议-->
    <div class="container-agreement" v-if ='agreementShow' >
      <span @click="closeAgreement" class="el-icon-close">
      </span>
      <div class="container-agreement-box">
        <h3>
            用户协议
        </h3>
        <div >
         <p>
           欢迎您加入"荆楚网络问政平台"参加交流，荆楚网络问政平台是政府与广大网民交流的平台，为维护网上公共秩序和社会稳定，请您自觉遵守以下条款：
         </p>
          <p>
            一、不得利用本站危害国家安全、泄露国家秘密，不得侵犯国家社会集体的和公民的合法权益，不得利用本站制作、复制和传播下列信息：
          </p>

          <p>
            （一）煽动抗拒、破坏宪法和法律、行政法规实施的；
          </p>
          <p>          （二）煽动颠覆国家政权，推翻社会主义制度的；
          </p>
          <p>
            （三）煽动分裂国家、破坏国家统一的；

          </p>
          <p>
            （四）煽动民族仇恨、民族歧视，破坏民族团结的；

          </p>
          <p>
            （五）捏造或者歪曲事实，散布谣言，扰乱社会秩序的；

          </p>
          <p>
            （六）宣扬封建迷信、淫秽色情、赌博、暴力、凶杀恐怖、教唆犯罪；

          </p>
          <p>
            （七）公然侮辱他人或捏造事实诽谤他人的，或进行其他恶意攻击的；

          </p>
          <p>
            （八）损害国家机关信誉的；

          </p>
          <p>
            （九）其他违反宪法和法律行政法规的；

          </p>

          <p>
            二、互相尊重，对自己的言论和行为负责。
          </p>
          <p>
            责权声明：本站平台中用户所表述观点仅代表作者或发布者观点，与问政平台无关。对于违反上述声明规定的用户和网贴，问政平台有权进行屏蔽、编辑、删除等相关处置。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const postCodeUrl= 'regsendmsg'
  const regisUrl ='regis'
  const postLogin='login'

    export default {
      name: "index",
      data(){
          return {
            loginLoading:false,
            showAskStatement:'',
            smsSec:0,
            smsLoading:false,
            loginShow:true,
            regShow:false,
            forgetShow:false,
            agreementShow:false,
            loginForm:{
              uname:'',
              pass:''
            },
            regForm:{
              radio:'0',
              mobile:'',
              code:'',
              pass2:'',
              name:''
            },
            ForgotForm:{
              radio:true,
              mobile:'',
              code:'',
              pass:'',
              repass:''
            },
            loginRules: {
              uname: [
                {required: true, message: '请输入手机号码', trigger: 'change'},
                {min: 11, max: 11, message: '长度为11位', trigger: 'change'}
              ],
              pass:[
                {required: true, message: '请输入密码', trigger: 'change'},
                {min: 6, max: 8, message: '长度为6-8位的数字或字母', trigger: 'change'}
              ]
            },
            regRules:{
              mobile: [
                {required: true, message: '请输入手机号码', trigger: 'change'},
                {min: 11, max: 11, message: '长度为11位', trigger: 'change'}
              ],
              code: [
                {required: true, message: '请输入验证码', trigger: 'change'},
                {min:4, max: 4, message: '长度为4位', trigger: 'change'}
              ],
              pass2:[
                {required: true, message: '请输入密码', trigger: 'change'},
                {min: 6, max: 8, message: '长度为6-8位的数字或字母', trigger: 'change'}
              ],
              name:[
                {required: true, message: '请输入用户名', trigger: 'change'},
                {min: 6, max: 8, message: '长度为6-8位的数字或字母', trigger: 'change'}
              ],
              radio: [
                { required: true, message: '请阅读用户协议', trigger: 'change' }
              ],
            },
            forgetRules:{
              mobile: [
                {required: true, message: '请输入手机号码', trigger: 'change'},
                {min: 11, max: 11, message: '长度为11位', trigger: 'change'}
              ],
              code: [
                {required: true, message: '请输入验证码', trigger: 'change'},
                {min:4, max: 4, message: '长度为4位', trigger: 'change'}
              ],
              pass3:[
                {required: true, message: '请输入密码', trigger: 'change'},
                {min: 6, max: 8, message: '长度为6-8位的数字或字母', trigger: 'change'}
              ],
              repass:[
                {required: true, message: '请输入密码', trigger: 'change'},
                {min: 6, max: 8, message: '长度为6-8位的数字或字母', trigger: 'change'}
              ]
            }
          }
      },
      methods:{
        //关用户协议
        closeAgreement(){
          this.agreementShow=false
          this.regShow=true
        },
        //切换忘记页
        toForgot(val){
          this.loginShow=false;
          this.forgetShow=true
          this.$refs[val].resetFields();
        },
        //切换注册框
        toReg(val){
          this.loginShow=false;
          this.regShow=true
          this.$refs[val].resetFields();
        },
        //切换登录框
        toLogin(val){
          this.forgetShow=false
          this.regShow=false
          this.loginShow=true;
          this.$refs[val].resetFields();
        },
        //验证码
        async postCode(){
          if(this.regForm.mobile.length===11){
           this.smsLoading =true;
           this.smsSec=3;
            let timer = setInterval(()=>{
              if(this.smsSec>0){
                this.smsSec--;

              }else {
                this.smsSec=0
                this.smsLoading =false
                clearInterval (timer)
              }
            },1000);
           let res =await this.$ajax.post(postCodeUrl,{
             mobile:this.regForm.mobile,
             type:'pc'
           });
            if (res.data.state){
              this.$notify.success({
                title: '成功',
                message: '验证码发送成功'
              });
            }else {
              this.$notify.error({
                title: '错误',
                message: '网络请求错误'
              });
            }


          }else {
            this.$notify.error({
              title: '错误',
              message: '请输入正确的手机号码'
            });
          }
        },
        // 登入
        handlerLogin(){
          this.$refs['ruleLogin'].validate((valid) => {
            if (valid) {
              this.loginLoading=true
              this.$ajax.post(postLogin,{
                mobile:this.loginForm.uname,
                password:this.loginForm.pass,
                type:'pc'
              }).then(res=>{
                console.log(res)
                if(res.data.state){
                  //todo 跳转页面
                 this.$cookie.set('token',res.data.data.common.app.skey,res.data.data.common.app.expire)
                  this.$notify.success({
                    title: '成功',
                    message: '登录成功'
                  });
                  this.loginLoading=true
                    if(window.localStorage.getItem('showAgreement')==1){
                      this.$router.push('ask')
                    }else {
                      this.$router.push('askStatement')
                    }
                }else {
                  this.loginLoading=false
                  this.$notify.error({
                    title: '错误',
                    message: res.data.message
                  });
                }
              }).catch(e=>{
                this.loginLoading=false
                this.$notify.error({
                  title: '错误',
                  message: '服务器错误'
                });
              })

            } else {
              return false;
            }
          });
        },
        //注册
        handlerReg(){
          this.$refs['ruleReg'].validate((valid) => {
            if (valid) {
              if(this.regForm.radio==='1'){
                this.$ajax.post(regisUrl,{
                  mobile:this.regForm.mobile,
                  password:this.regForm.pass2,
                  yzm:this.regForm.code,
                  type:'pc'
                }).then((res)=>{

                    if(res.data.state){
                      this.regShow=false
                      this.loginShow=true
                      this.$notify.success({
                        title: '成功',
                        message: '注册成功'
                      });
                    }else {
                      this.$notify.error({
                        title: '错误',
                        message: res.data.message
                      });
                    }
                }).catch(e=>{
                  this.$notify.error({
                    title: '错误',
                    message: '服务器错误'
                  });
                })

              }else {
                this.$notify.error({
                  title: '错误',
                  message: '请先确定用户协议'
                });
              }

            } else {

              return false;
            }
          });
        },
        // 找回
        handlerForgot(){

          this.$refs['ruleForgot'].validate((valid) => {
            if (valid) {
              //todo pass&repass  要多验证一次
              alert('submit!');
            } else {

              return false;
            }
          });
        }
      },
      watch:{
        ['regForm.radio'](val){

          if(val==='1'){
            this.agreementShow=true,
            this.regShow=false
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
    border: 1px solid @boderColor;
    margin-top: 40px;
    width: 640px;
    height: 480px;
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

  &-agreement{
    margin-top: 20px;
    width: 1200px;
    background-color: #fff;
    border: 1px solid @boderColor;
    display: flex;
    justify-content: center;
    position: relative;
    >span{
      cursor: pointer;
      font-size: 30px;
      position: absolute;
      top:20px;
      right: 20px;
      font-weight: bolder;
    }
    &-box{
      width: 880px;
      h3{
        color: #2D3557;
        font-size: 30px;
        text-align: left;
        height: 160px;
        line-height: 160px;
        border-bottom: 1px solid #F8F8F8;
      }
      >div{
        margin-top: 20px;
        font-size: 16px;
        color: #2D3557;
        p{
          margin: 25px auto;
        }
      }
    }
  }
}

</style>
