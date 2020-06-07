//使用commonjs的规范
const {add,mul} = require('./mathUtil.js')
console.log(add(3,5))
console.log(mul(3,5))
//使用es6的规范
import {name,age,sex} from './info'
console.log(name)
console.log(age)
console.log(sex)

import Vue from 'vue'

const app = new Vue({
  el: '#app',
  //template中的元素会替换掉html中的元素
  template: `
    <div>
      <h1>{{message}}</h1>
      <button @click="btnClick">按钮</button>
      <h2>{{name}}</h2>
    </div>
  `,
  data: {
    message: 'hello vue!!!',
    name: '张三'
  },
  methods: {
    btnClick(){
      console.log("btn click")
    }
  }
})