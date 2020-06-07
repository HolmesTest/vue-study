const app = new Vue({
  el: '#app',
  data: {
    bookArrys: [
      {
        name: '算法导论',
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        name: 'java编程思想',
        date: '2002-2',
        price: 96.00,
        count: 1
      },
      {
        name: '代码大全',
        date: '2006-3',
        price: 128.00,
        count: 1
      },
      {
        name: '编程珠玑',
        date: '2008-10',
        price: 39.00,
        count: 1
      }
    ]
  },
  filters: { //过滤器
    show(price){
      return '￥'+price.toFixed(2);
    }
  },
  methods: {
    decrement(index){
      this.bookArrys[index].count--;
    },
    increment(index){
      this.bookArrys[index].count++;
    },
    remove(index){
      this.bookArrys.splice(index,1);
    }
  },
  computed: {
    totalPrice(){
      let sum = 0;
      for(let book of this.bookArrys){
        console.log(book.name+'---'+book.count+'--'+book.price)
        sum+= book.count * book.price;
      }
      return sum;
      //return this.bookArrys.reduce(((preVal,book) => preVal+book.count * book.price),0)
    }
  }
})