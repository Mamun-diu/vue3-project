<template>
  <div class="flex flex-wrap w-full">
      <h1 class="w-full text-center text-3xl my-4">Markdown App</h1>
      <section class="flex m-auto w-10/12 h-screen">
          <article class="w-1/2 border p-2">
            <textarea class="w-full h-full focus:outline-none" :value="text" @input="update"></textarea>
          </article>
          <article class="w-1/2  border bg-gray-100 p-2" v-html="markedText"> </article>
      </section>
      
  </div>
</template>

<script>
import marked from 'marked'
import debounce from '../utilities/mixins/debounce'
export default {
    name: 'Markdown',
    mixins:[debounce],
    data(){
        return{
            text:'# App \n **Bold**',
            
        }
    },
    computed:{
        markedText(){
            return marked(this.text);
        }
    },
    methods:{
        update(e){
            const task = ()=> (this.text = e.target.value)
            this.debounce(task,500);
        }, 
    }
}
</script>

<style>
    
</style>