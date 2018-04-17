<template>
    <ul class="clearfix">
        <li class="f-l tab-selected" v-for="item in tabList">{{item.leagueName}}</li>
    </ul>
</template>
<script>
export default {
    props:[
        'tabList'
    ]
}
</script>
<style scoped lang="less">
    ul {
        >li {
            width: 117px;
            line-height: 32px;
            border-top:4px solid transparent;
            border-bottom:4px solid transparent;
            font-size: 14px;
            text-align: center;
            cursor: pointer;
            font-weight: 600;
        }
    }
</style>
