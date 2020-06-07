//使用commonjs的规范
const {add,mul} = require('./mathUtil.js')
console.log(add(3,5))
console.log(mul(3,5))
//使用es6的规范
import {name,age,sex} from './info'
console.log(name)
console.log(age)
console.log(sex)