<template>

    <section @click="close" class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50">

    </section>
    <div class=" absolute inset-0">
        <div class="flex h-full">

            <div class="z-30 m-auto bg-white p-2 rounded shadow w-1/3">
                <div class="p-1 border rounded shadow-md">
                    <h1 class="text-2xl text-center border-b p-2">Login</h1>
                    <form @submit.prevent="submit" class="p-2 my-2">
                        <div class="my-3">
                            <label for="">Email or Username</label>
                            <input v-model="form.email" class="rounded border shadow p-2 w-full focus:outline-white" placeholder="Enter your email or username">
                        </div>
                        <div class="my-3">
                            <label for="">Password</label>
                            <input v-model="form.pass" class="rounded border shadow p-2 w-full focus:outline-white" type="password" placeholder="Enter your password ">
                        </div>
                        <div class="mt-3 flex w-full">
                            <button 
                            class="px-3 py-1 w-full rounded text-white shadow bg-gradient-to-l from-green-400 to-green-600 ml-auto hover:to-green-800 hover:from-green-600  focus:outline-none" 
                            type="submit"
                            >
                            <span v-if="!isLoading">Login</span>
                            <span v-else>&#x231b;</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import firebase from '../utilities/firebase.js'
    export default {
        data(){
            return{
                form:{
                    email:'admin@microdeveloperbd.com',
                    pass:'password',
                    
                },
                isLoading : false,
            }
        },
        methods:{
            submit(){
                //submit the form
                this.isLoading = true;
                firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.pass)
                .then(() => {
                    // Signed in
                    // var user = userCredential.user;
                    // console.log(userCredential);
                    this.isLoading = false;
                    this.form.email = '';
                    this.form.pass = '';
                    this.close();
                    // ...
                })
                .catch((error) => {
                    // var errorCode = error.code;
                    // var errorMessage = error.message;
                    console.log(error);
                    this.isLoading = false;
                    
                });
                
            },
            close(){
                this.$emit('close-login')
            }
        }
    }
</script>

<style>

</style>