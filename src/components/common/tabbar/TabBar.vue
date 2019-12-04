<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped  >
.tabbar{
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px 1px 0px 0px rgba(235,237,240,1);
}


</style>