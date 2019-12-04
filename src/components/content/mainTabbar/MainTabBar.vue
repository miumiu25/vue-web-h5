<template>
  <div class="main-tab-bar">
    <tab-bar>
      <tab-bar-item path="hot" activeColor="#1F7EFF" fontSize="10px">
        <img slot="item-icon" src="~assets/img/tab-jx.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tab-jx-active.png" alt="">
        <div slot="item-text">精选</div>
      </tab-bar-item>
      <tab-bar-item path="spot" activeColor="#1F7EFF" fontSize="10px">
        <img slot="item-icon" src="~assets/img/tab-xh.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tab-xh-active.png" alt="">
        <div slot="item-text">现货</div>
      </tab-bar-item>
      <tab-bar-item path="modifier" activeColor="#1F7EFF" fontSize="10px">
        <img slot="item-icon" src="~assets/img/tab-gx.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tab-gx-active.png" alt="">
        <div slot="item-text">改性</div>
      </tab-bar-item>
      <tab-bar-item path="profile" activeColor="#1F7EFF" fontSize="10px">
        <img slot="item-icon" src="~assets/img/tab-wd.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tab-wd-active.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";

  export default {
    name: "MainTabBar",
    data() {
      return {};
    },
    components: {
      TabBar,
      TabBarItem
    }
  };
</script>
<style scoped>

</style>
