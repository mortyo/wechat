// components/custom_component/custom_component.js
let mybehavior = require('../behavior.js')

Component({
  //behaviors 是用于组件间代码共享的特性
  behaviors:[mybehavior],
  //relations定义和使用组件间关系
  relations:{

  },
  //observers数据监听器可以用于监听和响应任何属性和数据字段的变化
  observers:{
    'name,money,age':function(name,money,age){
      console.log(name,money,age)
    }
  },


  /**
   * 组件的属性列表
   */
  properties: {
    name:{
      type: String,
      value: 'nina',
      observer(newval,oldval){ 
        console.log('name value has change:'+oldval+'->'+newval)
      }
    },
    money:{
      type:Number,
      value:100,
      observer(newval,oldval){
        console.log('money value has change:' + oldval + '->' + newval)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    age:18,
  },


  /**
   * 组件的方法列表
   */
  methods: {
    set_data(){
      this.setData({
        name: 'niki',
        money:  this.properties.money+1,
        age: this.data.age+1
      })
      console.log('name:'+this.properties.name)
      console.log('money:'+this.properties.money)
      console.log('age:'+this.data.age)
    }
  },
  lifetimes:{  //组件生命周期函数
    created(){  //创造
      console.log('component created')
    },
    attached(){  //贴上
      console.log('component attached')
    },
    detached(){    //分离
      console.log('component detached')
    }
  },
})
