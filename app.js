// new Vue({
// 	el : '#app',
//   data : {
//     show : true,
//     persons : [
//         {
//             name : 'Nokranger',
//             age : 22
//         },
//         {
//             name : 'Anusorn',
//             age : 23,
//         },
//         {
//             name : 'Thavornpon',
//             age : 24
//         }
//     ]
//   },
//   computed: {
//     theTitle : function(){
//       return this.theTitle.toUpperCase();
//     }
//   },
// })
Vue.filter('uppercase',function(value){
  return value.toUpperCase()
})
new Vue({
	el : '#app',
  data : {
    title : 'Hello World!',
    message : 'something'
  },
  computed : {
    theTitle : function(){
      return this.title.toUpperCase();
    }
  },
  filters : {
    lowercase : function(value){
      return value.toLowerCase()
    }
  }
})