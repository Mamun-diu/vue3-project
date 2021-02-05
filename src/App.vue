<template>
  <AppHeader @open-login-modal="isLoginOpen=true"/>
  <div class="w-full">
    <router-view></router-view>
    <!-- <DcHeroes /> -->
    <!-- <Calender /> -->
  </div>
  <LoginModal v-if="isLoginOpen" @close-login="isLoginOpen=false" />
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import LoginModal from './components/LoginModal.vue'
import firebase from './utilities/firebase'
// import Calender from './components/Calender.vue'
export default {
  components:{
        AppHeader,
        LoginModal,
        // DcHeroes,
        // Calender,
    },
    data(){
        return{
            isLoginOpen: false,
            isLoggedIn:false,
            authUser:{},
        }
    },
    mounted(){
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.isLoggedIn = true;
          this.authUser = user;
          
        } else {
          this.isLoggedIn = false;
          this.authUser = {};
          
        }
      });
    },

}
</script>
  
<style>

</style>