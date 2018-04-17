<template>
    <!-- 页面底部 -->
    <div id="footer" class="footer">
        <p class="copyright">©2015 上海创冰信息科技有限公司  , All Rights Reserved  (沪ICP备14033075号-1)</p>
    </div>
</template>

<script>
import '../assets/css/base.css'
export default {
    name: 'common-footer',
    data () {
        return {
            
        }
    }
}
</script>

<style lang="less" scoped>
/*公共页面页脚*/
.footer {
    height: 55px;
    background-color: #4B5266;
    .copyright {
        line-height: 55px;
        font-size:12px;
        color:#fff;
        text-align: center;
    }
}
</style>
