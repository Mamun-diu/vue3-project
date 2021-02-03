<template>
  <AppHeader />
  <div class="w-full">
    <!-- <DcHeroes /> -->
    <Calender />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
// import DcHeroes from './components/DcHeroes.vue'
import Calender from './components/Calender.vue'
export default {
  components:{
        AppHeader,
        // DcHeroes,
        Calender,
    },
}
</script>
  
<style>

</style>