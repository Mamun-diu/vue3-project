<template>
  <div class="w-full flex">
    <div class="m-auto">
      <h1 class="text-3xl text-center mb-5">Dc Heros {{ heroesCount }} </h1>

      <ul>
        <li class="flex justify-between" v-for="(hero, index) in dcHeroes" :key="hero.name">
          <div>{{hero.name}}  </div>
          <button @click="remove(index)">x</button>
        </li>
        
      </ul>
      <form class="mt-10" @submit.prevent="addHero">
        <input class="border rounded p-2 outline-white" v-model='newHero' placeholder="Type hero name here">
        <button class="border rounded bg-gradient-to-r from-red-500 to-pink-500 p-2 text-white outline-none" type="submit" >Add Hero</button>
      </form>
    
    </div>
  </div>
</template>

<script>
export default {
    name : 'DcHeroes',

    
  computed:{
    heroesCount(){
      return this.dcHeroes.length;
    },
  },
  data(){
    return {
      newHero:'',
      dcHeroes : [
        {name:'SuperGirl'},
        {name:'Flash'},
        {name:'Batman'},
        {name:'Arrow'},
        {name:'SuperMan'}
      ],
      
    }
  },
  methods:{
    addHero(){
      if(this.newHero !== ''){
        this.dcHeroes.unshift({name: this.newHero}); 
        this.newHero='';
      }
    },
    remove(index){
       this.dcHeroes = this.dcHeroes.filter((hero,i) => i !=index);
    },
  }
}
</script>

<style>

</style>