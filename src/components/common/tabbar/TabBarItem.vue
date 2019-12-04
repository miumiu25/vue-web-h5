<template>
  <div class="tabbar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :style="activeStyle">
      <slot  name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    },
    fontSize:{
      type:String,
      default:'12px'
    }
  },
  data(){
    return {
      // isActive:true
    }
    
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1 
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor,fontSize:this.fontSize}:{fontSize:this.fontSize}
    }
  },
  methods:{
    itemClick(){
      // this.$router.replace({path:this.path})
      this.$router.push(this.path)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.tabbar-item{
  flex:1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 49px;
  font-size: 10px;
}
.tabbar-item img{
  width: 24px;
  height: 24px;
  margin-bottom: 2px;
}


</style>