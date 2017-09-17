<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item"><a>商品</a></div>
      <div class="tab-item"><a>评论</a></div>
      <div class="tab-item"><a>商家</a></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import header from "./components/header/header.vue";
  export default{
    components:{
      'v-header':header
    }
  };
</script>

<style>
  .tab{display: flex;width: 100%;height: 40px;border-bottom: 1px solid rgba(7,17,27,0.1);}
  .tab .tab-item{flex: 1;text-align: center;line-height: 28px;}
  .tab .tab-item a{display: block;font-size: 14px;color: rgb(77,85,93);}
  .tab .tab-item a:active{color: rgb(240, 20, 20);}
</style>
