module.exports = Behavior({
  properties:{
    p_name:{
      type: String,
      value: 'koo'
    },
    p_age:{
      type: Number,
      value: 100 
    }
  },
  data:{},
  methods:{
    click(){
      console.log('I am behavior methods click')
      console.log('p_name:'+this.properties.p_name)
      console.log('p_age:'+this.properties.p_age)
    }
  }
})