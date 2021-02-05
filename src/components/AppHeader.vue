<template>
  <nav class="w-full bg-gradient-to-r from-blue-800 to-blue-600 px-4 py-2">
      <router-link class="text-white mr-2" v-for="item in list" :key="item" :to="item.to ">{{ item.title }} </router-link>
      <button class="text-white mr-2 focus:outline-none" @click="$emit('open-login-modal')">Login</button>
      <button class="text-white mr-2 focus:outline-none" @click="logout">Logout</button>
  </nav>
</template>

<script>
import firebase from '../utilities/firebase'
export default {
    name:'AppHeader',
    data(){
      return{
        list:[
          {title:'Dc Heroes',to:'/dc-heroes'},
          {title:'Calender',to:'/calender'},
          {title:'Markdown',to:'/mark-down'},
          {title:'Slider',to:'/slider'},
        ]

      }
    },
    methods:{
      logout(){
        firebase.auth().signOut();
        // .then((res) => {
        //   // Sign-out successful.
        // }).catch((error) => {
        //   // An error happened.
        // });
      }
    }
    
}
</script>

<style>

</style>