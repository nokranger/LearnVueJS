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
Vue.filter('uppercase', function (value) {
  return value.toUpperCase()
})

Vue.component('app-user', {
  data: function () {
    return {
      users: [
        {
          username: 'Max'
        },
        {
          username: 'Chris',
        },
        {
          username: 'Anna'
        }
      ]
    }
  },
  template : '<div><div class="user" v-for="(user) in users"><p>Username : {{user.username}}</p></div></div>'
})


new Vue({
  el: '#app',
  data: {
    title: 'Hello World!',

  },
  component : {
    'app-user' : {
      
    }
  }
})