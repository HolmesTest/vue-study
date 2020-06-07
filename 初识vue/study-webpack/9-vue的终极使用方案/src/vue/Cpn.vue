<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{message}}</p>
  </div>
</template>

<script>
  export default{
    name : 'Cpn',
    data(){
    return{
      title: 'cpn组件标题',
      message: '张三'
      }
    }
  }
</script>
<style scoped>
</style>