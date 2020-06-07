<template>
  <div>
    <h1 class="title">{{message}}</h1>
    <button @click="btnClick">按钮</button>
    <h2>{{name}}</h2>
    <Cpn></Cpn>
  </div>
</template>

<script>
  import Cpn from './Cpn.vue'
  export default{
    name : 'App',
    components: {
      Cpn
    },
    data(){
      return{
        message: 'hello vue!!!',
        name: '张三'
    }
  },
  methods: {
    btnClick(){
      console.log("btn click")
    }
  }
  }
</script>
<style scoped>
</style>