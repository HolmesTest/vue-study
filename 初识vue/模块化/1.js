var name = '张三';
var age = 20;
var flag = true;
function sum(a,b){
  return a+b;
}
if(flag){
  console.log(sum(10,20));
}

//导出方式1
export{
  flag,sum
}

//导出方式2
export let height = 100

//导出函数
export function test(num1,num2){
  console.log(num1*num2)
}

//导出类
export class person{
  run(){
    console.log("1.js的fun")
  }
}
//export default在一个js中只能存在一个，在使用是可以不使用大括号，名称可以由使用者随便取
// import addr from "./1.js" 此时就是导入了1.js中export default中定义的东西
const address ="北京市"
export default address