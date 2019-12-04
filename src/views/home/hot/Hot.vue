<template>
  <div class="hot">
    <!-- search -->
    <div class="hot-search">
      <div class="_logo">LOGO</div>
      <div class="_input">
        <input type="text" placeholder="搜索品名.牌号.厂商">
        <span class="iconfont icon-search"></span>
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="hot-swiper">
      <swiper :options="swiperOption">
        <swiper-slide>
          <img class="w-100 h-100" src="~assets/img/banner-01.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="w-100" src="~assets/img/banner-01.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="w-100" src="~assets/img/banner-01.png" alt="">
        </swiper-slide>
        <div class="swiper-pagination hot-swiper-dot" slot="pagination"></div>
      </swiper>
    </div>
    <!-- 三包保证 -->
    <div class="hot-promise"></div>
    <!-- 导航 -->
    <div class="hot-nav"></div>
    <!-- 产品列表 -->
    <div class="hot-product"></div>
  </div>
</template>
<script>
  export default {
    name: "Hot",
    data() {
      return {
        //轮播图
        swiperOption: {
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
          autoplay: {
            delay: 1500,
            disableOnInteraction: false
          },
          slidesPerView: 1,
          loopAdditionalSlides: 3,
          loop: true
        }
      };
    }
  };
</script>

<style lang="scss" scope>
  // 搜索
  .hot-search {
    position: fixed;
    width: 100%;
    height: 44rem / $rem;
    padding: 0 20rem / $rem;
    display: flex;
    align-items: center;
    background-color: rgba(255,255,255,0);
    z-index: 2;
    ._logo {
      margin-right: 12rem / $rem;
      color: $color-white;
      font-weight: bold;
      font-size: 20rem/$rem;
    }
    ._input {
      flex: 1;
      input {
        width: 100%;
        height: 32rem / $rem;
        padding: 0 30rem/$rem;
        border: none;
        background: rgba(247, 247, 249, .9);
        border-radius: 8rem/$rem;
        font-size:14px;
      }
    }
  }
  // 轮播图
  .swiper-pagination-bullet-active {
    background-color: #fff;
  }
  // 三包保证
  .hot-promise {
  }

  // 导航
  .hot-nav {
  }

  // 产品列表
  .hot-product {
  }
</style>