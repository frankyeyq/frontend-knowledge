<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import 'highlight.js/styles/github.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-menu-item-group{
  .el-menu-item{
    padding-left: 0 !important;
    a{
      text-decoration: none;
      color: black;
      font-size: 16px;
      display: block;
      padding-left: 30px;
    }
    &.is-active{
      a{
        color: #409EFF;
      }
    }
    
  }
}
:not(pre)>code {
    background-color: #bbb;
    background-color: rgba(220,220,220,.5);
    border-radius: 2px;
    box-decoration-break: clone;
    font-family: consolas,"Liberation Mono",courier,monospace;
    padding: 0 2px;
    word-wrap: break-word;
}
</style>
