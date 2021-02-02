<template>
  <div>
    <h1>Dc Heros {{ heroesCount }} </h1>

    <ul>
      <li v-for="(hero, index) in dcHeroes" :key="hero.name">
        <div>{{hero.name}} <button @click="remove(index)">x</button> </div>
        <input type="text">
      </li>
      
    </ul>
    <form @submit.prevent="addHero">
      <input v-model='newHero' placeholder="Type hero name here">
      <button type="submit" >Add Hero</button>
    </form>
    
  </div>
</template>

<script>
export default {
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