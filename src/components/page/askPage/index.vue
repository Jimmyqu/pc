<template>
  <div class="ask-container">
    <div v-if="commitSucc">
      <h3>我要提问</h3>
      <div class="active-bar">
        <el-steps :active="active" finish-status="success">
          <el-step title="选择部门"></el-step>
          <el-step title="填写问题"></el-step>
          <el-step title="提交问题"></el-step>
        </el-steps>
      </div>
      <div class="ask-main">
        <div v-if="setpOneView">
          <el-form ref="form" :model="form">
            <el-form-item>
              <p>选择区域</p>
              <div class="city-select">
                <el-select v-model="provinceId" placeholder="省" class="selsct_city">
                  <el-option
                    v-for="item in provinceList"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>
                <el-select v-model="cityId" placeholder="市" class="selsct_city">
                  <el-option
                    v-for="item in cityList"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>
                <el-select v-model="areaId" placeholder="区" class="selsct_city" @change="handlearea">
                  <el-option
                    v-for="item in areaList"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>
              </div>
            </el-form-item>
            <el-form-item>
              <p>选择部门分类</p>
              <el-select v-model="departmentVal" placeholder="选择部门分类" class="selsct_department" @change="handlerType">
                <el-option
                  v-for="item in departmentList"
                  :key="item.deptype"
                  :label="item.deptype_name"
                  :value="item.deptype+','+item.deptype_name">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <p>选择部门</p>
              <div class="btn-group">
                <el-button v-for="item,index in typeList.slice(0,5)" :class="{'dis':item.disable}" :key="index"
                           :disabled="item.disable" @click="handleChoseType(item)">{{item.dept_name}}
                </el-button>
              </div>
            </el-form-item>
            <el-form-item>
              <div class="btn-group">
                <el-button v-for="item,index in  typeList.slice(5,10)" :class="{'dis':item.disable}" :key="index"
                           :disabled="item.disable" @click="handleChoseType(item)">{{item.dept_name}}
                </el-button>
              </div>
            </el-form-item>
          </el-form>
        </div>
        <div v-if="setpTwoView">
          <el-form ref="form" :model="setpTwoForm">
            <el-form-item>
              <p>选择区域</p>
              <el-input v-model="setpTwoForm.title" placeholder="请输入标题"></el-input>
            </el-form-item>
            <el-form-item>
              <p>问题内容</p>
              <el-input
                type="textarea"
                :rows="5"
                placeholder="请输入内容"
                v-model="setpTwoForm.content">
              </el-input>
            </el-form-item>
            <el-form-item style="height: 150px">
              <el-upload
                :on-success="handleAvatarSuccess"
                :action='uploadUrl'
                list-type="picture-card"
                :limit="4"
                :on-remove="handleAvatarRemove"
                :before-upload="beforeAvatarUpload"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
            </el-form-item>
            <el-form-item>
              <el-switch
                active-color="#13ce66"
                style="display: block"
                v-model="setpTwoForm.switchBtn"
                active-text="隐藏开启(隐藏后仅对自己可见)"
              >
              </el-switch>
            </el-form-item>
          </el-form>
        </div>
        <div v-if="setpThreeView">
          <el-form ref="form" :model="setpThreeForm">
            <el-form-item>
              <p>选择问题类型</p>
              <div class="btns">
                <div :class="{'select':selected==item.stypeid}" v-for="item in qustionTypes"
                     @click="selectQustionType(item.stypeid)">
                  {{item.stypename}}
                </div>
              </div>
            </el-form-item>
            <el-form-item class="concat-container">
              <div class="concat">
                <p>联系方式</p>
                <el-form-item label="您的姓名">
                  <el-input v-model="setpThreeForm.name" placeholder="请输入姓名"></el-input>
                </el-form-item>
                <el-form-item label="联系电话">
                  <el-input v-model="setpThreeForm.mobile" placeholder="请输入手机号码"></el-input>
                </el-form-item>
                <el-form-item label="验证号码" class="concat-code">
                  <el-input v-model="setpThreeForm.code"></el-input>
                  <div class="code-box">
                    <!--<el-button :loading="smsLoading" >获取验证码</el-button>-->
                    <el-button :loading="smsLoading" @click="postCode">{{smsLoading?smsSec+'s后获取':'获取验证码'}}</el-button>
                  </div>
                </el-form-item>
              </div>

              <div class="tips">
                <p>提示:</p>
                <p>留下真实用户信息方便工作人员与您联系，会加快问题的核查和解决。</p>
                <p> 您的信息回被严格保密。</p>
              </div>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="large-btn-box">
        <el-button v-show="setpTwoView" :disabled="btn2" @click="handleSetpTwo">下一3步</el-button>
        <el-button v-show="setpOneView" :disabled="btn1" @click="handleSetpOne">下一2步</el-button>
        <el-button v-show="setpTwoView" @click="TwoToSetpOneView">上2一步</el-button>
        <el-button v-show="setpThreeView" :disabled="submit" @click="handleSubmit">提&nbsp交</el-button>
        <el-button v-show="setpThreeView" @click="ThreeToSetpTwoView">上3一步</el-button>
      </div>
    </div>
    <div v-else class="succ-container">
          <div class="succ-container-box">
             <i style="color: #38BC70;font-size: 112px" class="el-icon-circle-check"></i>
            <h2>提交成功</h2>
            <p class="info">相关部门将尽快联系您</p>
            <div class="sec">
              <span ><i style="color: #F6574E">{{commitSec}}秒</i>后返回首页</span> <a href="">问政首页</a>
            </div>
            <p>
              <a href="">查看我的问政</a> | <a href="">查看问政排行</a>
            </p>
            <el-button>立即返回</el-button>
          </div>
    </div>
  </div>
</template>

<script>
  const qustionTypeList = 'stypelist'
  const getTypeUrl = 'dtypelist'
  const getDepartmentUrl = 'deptlist'
  const submitUrl = 'sub'
  export default {
    name: "index",
    data() {
      return {
        commitSec:5,
        commitSucc:true,
        smsSec: 0,
        active: 0, //进度条
        form: {
          name: ''
        },
        typeList: [],
        departmentList: [],
        departmentVal: '',
        provinceId: '',  //省id
        provinceList: [],//省列表
        cityId: '',     //市id
        cityList: [],    //市列表
        areaId: '',      //区id
        areaList: [],    //区列表
        firstData: {  //第一步数据
          area: '',
          dept_name: '',
          dept_id: '',
        },
        setpOneBtn: true,
        setpOneView: true,
        setpTwoView: false,
        setpTwoForm: {
          title: '',
          content: '',
          switchBtn: false,
          url: []
        },
        setpThreeView: false,
        setpThreeBtn: false,
        qustionTypes: [],
        selected: '',
        setpThreeForm: {
          name: '',
          mobile: '',
          code: '',
          stype_id: ''
        },
        smsLoading: false,
        uploadUrl: `http://api.politics.com/api/uploadimg?skey=${this.$cookie.get('token')}&type=pc`,
        btn1: true,
        btn2: true,
        submit: true
      }
    },
    methods: {
      //提交问政
      async handleSubmit() {
        try {
          let res = await this.$ajax.post(submitUrl, {
            skey: this.$cookie.get('token'),
            title: this.setpTwoForm.title,
            content: this.setpTwoForm.content,
            attach: this.setpTwoForm.url.join(),//附件
            stype_id: this.setpThreeForm.stype_id, //问题类型id
            dept_id: this.firstData.dept_id,//部门类型id
            dept_name: this.firstData.dept_name,
            truename: this.setpThreeForm.name,
            is_pub: this.setpTwoForm.switchBtn?2:1, //swicth
            telphone: this.setpThreeForm.mobile,
            area: this.firstData.area,
            pid: 0, //不是追问传0，是追问传追问的那个留言的ID
            yzm: this.setpThreeForm.code,
            type: 'pc'
          })
          if (res.data.state){
            this.$notify.success({
              title: '成功',
              message: '提交成功'
            });
            this.commitSucc=false
            let timer =setInterval(()=>{
              if(this.commitSec>0){
                this.commitSec--
              }else {
                this.commitSec=0
              }
            },1000)
            clearInterval(timer)

            //todo 跳转链接首页
          }else {
            this.$notify.error({
              title: '错误',
              message:res.data.message
            });
          }
        } catch (e) {
          this.$notify.error({
            title: '错误',
            message: '网络请求错误'
          });
        }
      },
      //短信验证码
      async postCode() {
        if (this.setpThreeForm.mobile.length === 11) {
          this.smsLoading = true;
          this.smsSec = 3;
          let timer = setInterval(() => {
            if (this.smsSec > 0) {
              this.smsSec--;

            } else {
              this.smsSec = 0
              this.smsLoading = false
              clearInterval(timer)
            }
          }, 1000);
          let res = await this.$ajax.post('subsendmsg', {
            mobile: this.setpThreeForm.mobile,
            skey: this.$cookie.get('token'),
            type: 'pc'
          });

          if (res.data.state) {
            this.$notify.success({
              title: '成功',
              message: '验证码发送成功'
            });
          } else {
            this.$notify.error({
              title: '错误',
              message: '手机号码格式错误'
            });
          }
        } else {
          this.$notify.error({
            title: '错误',
            message: '请输入正确的手机号码'
          });
        }
      },
      //第2view的上一步
      TwoToSetpOneView() {
        this.active = 0
        this.setpTwoView = false;
        this.setpOneView = true
      },
      //第3view的上一步
      ThreeToSetpTwoView() {
        this.active = 1
        this.setpTwoView = true;
        this.setpThreeView = false;
      },
      //上一步
      handleLastOne() {
        this.active = 0
        this.setpOneView = true
        this.setpOneBtn = false
      },
      //步骤按钮1
      handleSetpOne() {
        this.active = 1
        this.setpOneView = false
        this.setpTwoView = true
      },
      //步骤按钮2
      handleSetpTwo() {
        this.active = 2
        this.setpTwoView = false
        this.setpThreeView = true
      },
      //部门分类处理
      handlerType() {
        this.getDepartment()
      },
      //上传action成功后
      handleAvatarSuccess(res, file) {

        this.setpTwoForm.url.push(res.data.common.app.src)

      },
      //删除成功后
      handleAvatarRemove(file) {
        let removeUrl = file.response.data.common.app.src

        this.setpTwoForm.url = this.setpTwoForm.url.filter(item => item !== removeUrl)

      },
      //上传之前检查文件
      beforeAvatarUpload(file) {
        let isJPG = ['image/jpg', 'image/png', 'image/jpeg'].includes(file.type)
        let isLt300K = file.size / 1024 / 1024 < 0.3;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG,JPEG,PNG 格式!');
        }
        if (!isLt300K) {
          this.$message.error('上传头像图片大小不能超过 300K!');
        }
        return isJPG && isLt300K;
      },
      //初始化部门分类
      async getType() {
        try {
          let res = await this.$ajax.get(getTypeUrl, {
            type: 'pc',
            skey: this.$cookie.get('token')
          })
          this.departmentList = res.data.data.common.app
        } catch (e) {

          this.$notify.error({
            title: '错误',
            message: '数据请求错误'
          });
        }
      },
      //获取具体部门列表
      async getDepartment() {
        if (this.provinceId && this.cityId && this.areaId) {
          try {
            let res = await this.$ajax.get(getDepartmentUrl, {
              type: 'pc',
              skey: this.$cookie.get('token'),
              area: `${this.provinceId}|${this.cityId}|${this.areaId}`,
              deptype: this.departmentVal.split(',')[0],
              type_name: this.departmentVal.split(',')[1]
            })
            res.data.data.common.app.map(item => {
              item.disable = false
            })
            this.typeList = res.data.data.common.app
          } catch (e) {
            this.$notify.error({
              title: '错误',
              message: '数据请求错误'
            });
          }
        } else {
          this.$notify.error({
            title: '错误',
            message: '请先选择省市区'
          });
        }
      },
      //获取问题类型列表
      async getQustionType() {
        try {
          let res = await this.$ajax.get(qustionTypeList, {
            type: 'pc',
            skey: this.$cookie.get('token'),
          });
          this.qustionTypes = res.data.data.common.app
        } catch (e) {
          this.$notify.error({
            title: '错误',
            message: '数据请求错误'
          });
        }
      },
      //选择部门后
      handleChoseType(val) {
        val.disable = true
        this.typeList.filter(item => {
          if (item.dept_name == val.dept_name) {
            item.disable = true
          } else {
            item.disable = false
          }
        });
        this.firstData = {
          area: `${this.provinceId}|${this.cityId}|${this.areaId}`,
          dept_name: val.dept_name,
          dept_id: val.dept_id
        }
        //判断第一步的数据所有值不为空
        if (Array.from(new Set(Object.values(this.firstData))).length === 3) {
          this.btn1 = false
        }
      },
      //区选择后传值
      handlearea(areaId) {
        this.areaId = areaId
      },
      //省市区列表
      async getCityList() {
        let res = await this.$ajax.get('arealist', {
          type: 'pc'
        })
        this.provinceList = res.data.data.common.app

      },
      selectQustionType(id) {
        this.selected = id

        this.setpThreeForm.stype_id = id
      }
    },
    mounted() {

      this.getType()
      this.getCityList()
      this.getQustionType()
    },
    watch: {
      departmentVal(val) {

      },
      provinceId(id) {
        if (id == null || id == "") {

        } else {
          console.log(id)
          let res = this.provinceList.filter(item => {
            return item.id == id
          })
          this.cityList = res[0].city
          this.cityId = '',
            this.areaId = ''
        }

      },
      cityId(id) {
        console.log(this.cityList)
        let res = this.cityList.filter(item => {
          return item.id == id
        })
        this.areaId = ''
        if(res.length){
          this.areaList = res[0].county
        }else {
          this.areaList = []
        }

      },
      ['setpTwoForm.content'](val) {
        if (this.setpTwoForm.title.length > 0 && val != '') {
          this.btn2 = false
        } else {
          this.btn2 = true
        }
      },
      setpThreeForm: {
        handler(newValue, oldValue) {
          let setp3Done = Array.from(new Set(Object.values(this.setpThreeForm))).filter(function (n) {
            return n
          }).length
          setp3Done === 4 ? this.submit = false : this.submit = true
        },
        deep: true
      }

    }
  }
</script>

<style scoped lang="less">
  .select {
    background-color: #3D9EE1;
    color: #fff !important;
  }

  .dis {
    background-color: rgba(61, 158, 225, 1);
    color: #fff;
  }

  .concat-code .code-box {
    float: right;
  }

  .code-box button {
    background-color: #3D9EE1;
    font-size: 14px;
    color: #fff;
  }

  .tips {
    float: right;
    border: 1px solid rgba(223, 229, 235, 1);
    margin-top: 60px;
    height: 160px;
    box-sizing: border-box;
    padding: 15px;
    p {
      color: #C4C6CF;
    }

  }

  .ask-container {
    h3 {
      font-size: 24px;
      color: #2D3557;
      font-weight: bold;
      text-align: center;
      height: 104px;
      line-height: 104px;
    }
    .active-bar {
      width: 890px;
      margin: 0 auto;
      padding-left: 10px;
    }
    .ask-main {
      width: 890px;
      height: 490px;
      margin: 30px auto;
      padding: 0 40px;
      border: 1px solid rgba(223, 229, 235, 1);
      .concat {
        width: 400px;
        float: left;
      }
      .btns {
        display: flex;
        > div {
          width: 104px;
          height: 40px;
          color: #2D3557;
          border-radius: 3px;
          border: 1px solid rgba(223, 229, 235, 1);
          text-align: center;
          margin-right: 10px;
          cursor: pointer;
        }
      }
    }
    .large-btn-box {
      width: 972px;
      margin: 0 auto;
    }

    .succ-container{
      display: flex;
      justify-content: center;
      padding-top: 50px;
      .succ-container-box{
        width: 300px;
        height: 400px;
        text-align: center;
        h2{
          height: 64px;
          line-height: 64px;
          font-size: 24px;
        }
        .info{
          font-size: 16px;;
          color:#C1C4CE;
        }
        .sec{
          margin-top: 50px;
          font-size: 16px;
          span {
            color:#C1C4CE;
          }
          a{
            color: #000;
            font-weight:600;
          }
        }
        p{
          margin-top: 20px;
          a{
            color: #000;
          }
        }
        button{
          float: right;
          height: 64px;
          width: 240px;
          background-color: #3D9EE1;
          font-size: 20px;
          color:#fff;
          margin-top: 30px;
          margin-right: 30px;
        }
      }
    }
  }
</style>
