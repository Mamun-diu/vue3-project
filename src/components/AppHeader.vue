<template>
  <nav class="w-full bg-gradient-to-r from-blue-800 to-blue-600 px-4 py-2">
      <router-link class="text-white mr-2" v-for="item in list" :key="item" :to="item.to ">{{ item.title }} </router-link>
      
  </nav>
</template>

<script>
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
    }
    
}
</script>

<style>

</style>