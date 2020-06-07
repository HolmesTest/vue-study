//使用commonjs的规范
const {add,mul} = require('./js/mathUtil.js')
console.log(add(3,5))
console.log(mul(3,5))
//使用es6的规范
import {name,age,sex} from './js/info'
console.log(name)
console.log(age)
console.log(sex)

//依赖css文件
//require('./css/normal.css')
import * as css from './css/normal.css'