export default {
  template: `
    <div>
      <h1>{{message}}</h1>
      <button @click="btnClick">按钮</button>
      <h2>{{name}}</h2>
    </div>
  `,
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