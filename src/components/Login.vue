<template>
  <div id="login">

    <div class="bg-main">
      <div class="main">
          <div class="bx">
              <div class="wrapper clearfix">
                    <div class="login-system">
                        <p class="hello">你好，</p>
                        <p class="welcome">欢迎登录<span>创冰足球大师系统</span></p>
                        <form action="http://127.0.0.1:8080/sdap/login.html" method="post">
                            <fieldset>
                                <label class="">
                                    <!-- <div class="fl icon_user"></div> -->
                                    <input type="text" class="user-info"  name="name" required="required" placeholder="帐号"/></label>
                                    <!-- <div class="help-block" ></div> -->
                                <label  class="">
                                    <!-- <div class="fl icon_password"></div> -->
                                    <input type="password" class="user-info" name="pwd" required="required" placeholder="密码"/>
                                </label>
                                <label class="">
                                    <input class="user-info" type="text" name="code" required="required" placeholder="验证码" style="width:50%;"/>
                                    <input class="hide" type="password" id="inputPassword2"/>
                                    <div class="code-wrapper" style="width:35%;"><img alt="refresh code" title="refresh code" id="img_code" src="http://127.0.0.1:8080/sdap/validation.images"  width="100" height="33"></div>
                                </label>
                                <!-- <div class="help-block"></div>
                                <div class="clear"></div> -->
                                <button type="submit" class="btn submit">登录</button>
                                <!-- <input type="button" class="submit" value="登录">
                                -->
                            </fieldset>
                        </form>
                        <c:if test="${user.errmsg !=null }">
                            <!-- <div class="error">[${user.errcode }] ${user.errmsg }</div> -->
                            <p class="error-tips">[${user.errcode }] ${user.errmsg }</p>
                        </c:if>
                        <!-- <p class="user-info account">                      
                            <input type="text" placeholder="帐号" id="account">  
                        </p>
                        <p class="user-info password">
                            <input type="password" placeholder="密码" id="password">
                        </p>
                        <input type="button" class="submit" value="进入">
                        <p class="error-tips">*密码输入错误，请重新输入</p> -->
                    </div>
                    
                    <div class="img-wrapper">
                        <!-- <img class="bgc-img" src="../assets/images/login-right.png" width="470" alt=""> -->
                        <img class="mp1" src="../assets/images/move_p (1).png" alt="">
                        <img class="mp2" src="../assets/images/move_p (2).png" alt="">
                        <img class="mp3" src="../assets/images/move_p (3).png" alt="">
                        <img class="mp4" src="../assets/images/move_p (4).png" alt="">
                        <img class="mp5" src="../assets/images/move_p (5).png" alt="">
                    </div>
              </div>
          </div>
      </div>

      <div class="footer" style="background-color: rgba(0, 0, 0,0);">
          <p class="copyright">©2015 上海创冰信息科技有限公司  , All Rights Reserved  (沪ICP备14033075号-1)</p>
      </div>
    </div>

    <!-- 球队选择模态框 -->
    <div class="choose-team-modal hide">
        <div class="team-modal">
            <!-- <i class="close-modal"></i> -->
            <div class="choose-league f-l">
                <div class="box-header">选择赛事</div>
                <div class="choose-box">
                    <ul class="league-list">
                        <li class="select">中超联赛</li>
                        <li>中超联赛</li>
                        <li>中超联赛</li>
                        <li>中超联赛</li>
                        <li>中超联赛</li>
                        <li>中超联赛</li>
                        <li>中超联赛</li>
                        <li>中超联赛</li>
                        <li>中超联赛</li>
                        <li>中超联赛</li>
                        <li>中超联赛</li>
                        <li>中超联赛</li>
                        <li>中超联赛</li>
                        <li>中超联赛</li>
                        <li>中超联赛</li>
                        <li>中超联赛</li>
                        <li>中超联赛</li>
                        <li>中超联赛</li>
                    </ul>
                </div>
            </div>
            <div class="choose-team f-r">
                <div class="box-header">选择球队</div>
                <div class="choose-box">
                    <ul class="team-list">
                            <li class="select">广州恒大淘宝</li>
                            <li>广州恒大淘宝</li>
                            <li>广州恒大淘宝</li>
                            <li>广州恒大淘宝</li>
                            <li>广州恒大淘宝</li>
                            <li>广州恒大淘宝</li>
                            <li>广州恒大淘宝</li>
                            <li>广州恒大淘宝</li>
                            <li>广州恒大淘宝</li>
                            <li>广州恒大淘宝</li>
                            <li>广州恒大淘宝</li>
                            <li>广州恒大淘宝</li>
                            <li>广州恒大淘宝</li>
                            <li>广州恒大淘宝</li>
                            <li>广州恒大淘宝</li>
                            <li>广州恒大淘宝</li>
                            <li>广州恒大淘宝</li>
                            <li>广州恒大淘宝</li>
                            <li>广州恒大淘宝</li>
                    </ul>
                </div>
            </div>
            <div class="arrow"></div>
            <button class="choose-btn disable">下一步</button>
        </div>
    </div>

  </div>
</template>

<script>
export default {
  name:'login',
  data(){
      return {

      }
  }
}
</script>

<style lang="less" scoped>
#login {
    background: url("../assets/images/background-image.png") repeat;
    .main {
        .bx {
            .wrapper {
                width:1046px;
                height: 630px;
                position: absolute;
                top:50%;
                margin-top:-315px;
                left:50%;
                margin-left:-500px;
             
                .login-system {
                    height: 465px;
                    width: 576px;
                    position: absolute;
                    left:0;
                    top:50%;
                    margin-top:-232px;
                    background-color:#fff;
                    box-shadow: 2px 7px 34px #4b5266;
                    padding-left:41px;
                    .hello {
                        font-size: 38px;
                        font-weight: 550;
                        line-height: 38px;
                        margin-top:66px;
                    }
                    .welcome {
                        font-size: 18px;
                        font-weight: 550;
                        line-height: 18px;
                        margin:14px 0 30px 0;
                        >span {
                            color:#41afe8;
                        }
                    }
                    form {
                        label {
                            display: block;
                            height: 36px;
                            margin-top:14px;
                        }
                        .user-info {
                            float:left;
                            width: 470px;
                            height: 36px;
                            line-height: 36px;
                            font-size: 12px;
                            border-bottom: 1px solid #c9c9c9;
                            color:#c9c9c9;
                            input {
                                width: 100%;
                            }
                        }
                        .submit {
                            width: 135px;
                            height: 40px;
                            border-radius: 20px;
                            margin-top: 37px;
                            font-size: 17px;
                            color:#fff;
                            background-color: #e3e3e3;
                            cursor: pointer;
                        }
                        .code-wrapper {
                            display: inline-block;
                            height: 36px;
                            line-height: 36px;
                            font-size: 12px;
           
                            text-align: center;
                            // border-bottom: 1px solid #c9c9c9;
                        }
                    }
                    
                    .error-tips {
                        color:red;
                        font-size: 12px;
                        position: absolute;
                        left: 41px;
                        bottom:20px;
                    }
                }
                
                .img-wrapper {
                    width: 470px;
                    height: 628px;
                    font-size: 0;
                    float: right;
                    box-shadow: 2px 7px 34px #4b5266;
                    position: relative;
                    background: url("../assets/images/login-right1.png");
                    background-size: 470px 628px;
                    >img {
                        position: absolute;
                        
                    }
                    .mp1 {
                        width: 28px;
                        height: 28px;
                        left: 391px;
                        top: 154px;
                        z-index: 10;
                        animation: move1 4s linear infinite;
                    }
                    .mp2 {
                        width: 156px;
                        height: 115px;
                        left: 10px;
                        top: 232px;
                        z-index: 10;
                        animation: move2 6s linear infinite;
                    }
                    .mp3 {
                        width: 236px;
                        height: 234px;
                        left: 127px;
                        top: 182px;
                        z-index: 10;
                        animation: move3 4s linear infinite;
                    }
                    .mp4 {
                        width: 82px;
                        height: 76px;
                        left: 377px;
                        top: 223px;
                        z-index: 10;
                        animation: move4 5s ease infinite;
                    }
                    .mp5 {
                        width: 13px;
                        height: 12.5px;
                        left: 356px;
                        top: 236px;
                        z-index: 10;
                        animation: move5 10s ease infinite;
                    }

                }      
            }
        }
    }

    /*页面页脚*/
    .footer {

        position: fixed;
        left:50%;
        bottom:0;
        margin-left:-221px;
        .copyright {
            line-height: 55px;
            font-size:12px;
            color:#64697a;
            text-align: center;
        }
    }

}

@keyframes move1 {
    0% {
        top:154px;
 
        
    }
    50% {
        top:140px;
   
        
    }
    100% {
        top:154px;
       
        
    }
}
@keyframes move2 {
    0% {
        top:232px;
    }
    50% {
        top:244px;
    }
    100% {
        top:232px;
    }
}

@keyframes move3 {
    0% {
        top:182px;
    }
    50% {
        top:200px;
    }
    100% {
        top:182px;
    }
}
@keyframes move4 {
    0% {
        
        top: 223px;
    }
    50% {
  
        top: 210px;
        
    }
    100% {
        
        top: 223px;
    }
}
@keyframes move5 {
    0% {
        width: 1px;
        height: 1px;
        left: 356px;
        top: 236px;
    }
    50% {
        width: 10px;
        height: 9.5px;
        left: 360px;
        top: 210px;
    }
    100% {
        width: 1px;
        height: 1px;
        left: 356px;
        top: 236px;
    }
}

</style>

