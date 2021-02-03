<template>
  <div class="calender w-3/12 mx-auto">
      <h1 class="text-2xl text-center my-2">Vue Calender</h1>
      <section class="flex justify-between">
          <h2 class="font-bold ml-2">{{ currentMonthName }} </h2>
          <h2 class="font-bold mr-5">{{ currentYear }} </h2>
      </section>
      <section class="flex ">
          <p class="p-2 w-12 h-8" v-for="day in days" :key="day">{{ day }} </p>
      </section>
      <section class="flex flex-wrap">
          <p style="width:14.28%" class="p-2  h-8 " v-for="num in  startDay() " :key="num"> </p>
          <p style="width:14.28%" class="p-2  h-8 " v-for="num in  daysInMonth(currentYear,(currentMonth+1)) " :key="num" :class="currentDateClass(num)?'text-yellow-600':''">{{ num }} </p>
      </section>
      <section class="flex justify-between my-4">
          <button class="ml-2 bg-green-500 py-1 px-4 rounded text-white" v-on:click="prev">Prev</button>
          <button class="mr-5 bg-green-500 py-1 px-4 rounded text-white active:border-none" v-on:click="next">Next</button>
      </section>
  </div>
</template>

<script>
export default {
    name:"Calender",
    data(){
        return{
            currentDate : new Date().getDate(),
            currentMonth : new Date().getMonth(),
            
            currentYear : new Date().getFullYear(),
            
            days:['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
        }
    },
    methods:{
        daysInMonth(year, month){
            return new Date(year,month,0).getDate();
            
        },
        startDay(){
            return new Date(this.currentYear,this.currentMonth ).getDay();
        },
        next(){
            if((this.currentMonth + 1)==12){
                this.currentMonth = 0;
                this.currentYear += 1;
            }else{
                this.currentMonth += 1;
            }
            
            
            console.log(this.currentMonth+1);
            
            
        },
        prev(){
            if((this.currentMonth + 1)==1){
                this.currentMonth = 11;
                this.currentYear -= 1;
            }else{
                this.currentMonth -= 1;
            }
            console.log(this.currentMonth+1);
        },
        currentDateClass(num){
            // console.log(new Date(this.currentYear,this.currentMonth,num).toDateString());
            // console.log(new Date().toDateString());
            
            
            return new Date(this.currentYear,this.currentMonth,num).toDateString() == new Date().toDateString();
        }


    },
    computed:{
        currentMonthName(){
            return new Date(this.currentYear,this.currentMonth).toLocaleString('default',{month:'long'})
        }
        
    }
}
</script>

<style>
    .calender{
        
    }
</style>