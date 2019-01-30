<template>
  <div class="container-agreement"  >
    <div class="container-agreement-box">
      <h3>
       问政声明
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
        <div class="askBox login-btn">
          <el-button @click="toAsk">通过并继续</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return {
            showAgreement:false
          }
      },
      methods:{
        toAsk(){
          this.$router.replace('ask')
        }
      },
      mounted(){
        window.localStorage.setItem('showAgreement',1)
      }
    }
</script>

<style scoped lang="less">
  @import url('../../../common/css/scratch_1');
  .container-agreement{
    width: 1200px;
    background-color: #fff;
    border: 1px solid @boderColor;
    display: flex;
    justify-content: center;
    position: relative;

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
        .askBox {
          margin: 40px auto;
          width: 500px;
        }
     }
    }
  }
</style>
