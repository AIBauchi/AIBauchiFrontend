<template>
  <div class="min-h-screen text-white mt-28 px-3">
    <div class="mx-auto md:w-2/5 bg-gray-600 px-8 py-4 rounded">
        <form @submit="register" class="mt-5">
            <fieldset>
                <legend class="text-3xl mb-5 font-bold text-yellow-600">Sign Up</legend>
                <p v-show="error" class="text-sm text-red-500">{{ errorMsg }}</p>
                <div class="my-4">
                    <h1 class="text-left font-bold mb-2 font-montserrat">Name</h1>
                    <input type="text" v-model="formdata.name" class="text-sm outline-none pb-2 w-full border-yellow-400 bg-transparent border-b hover:border-blue-700 focus:border-blue-700">
                </div>
                <div class="my-4">
                    <h1 class="text-left font-bold mb-2 font-montserrat">Email</h1>
                    <input type="email" v-model="formdata.email" class=" outline-none pb-2 w-full border-yellow-400 border-b bg-transparent hover:border-blue-700 focus:border-blue-700">
                </div>
                <div class="my-4">
                    <h1 class="text-left font-bold mb-2 font-montserrat">Password</h1>
                    <input type="password" v-model="formdata.password" class="text-sm outline-none pb-2 w-full border-yellow-400 bg-transparent border-b hover:border-blue-700 focus:border-blue-700">
                </div>
                <div class="my-4">
                    <h1 class="text-left font-bold mb-2 font-montserrat">Username</h1>
                    <input type="text" v-model="formdata.username" class="text-sm outline-none pb-2 w-full border-yellow-400 border-b hover:border-blue-700 focus:border-blue-700 bg-transparent">
                </div>
                
                <button type="submit" :disabled="formdata.name.length < 4 || formdata.password.length < 6 || formdata.username.length < 3" class="bg-yellow-600 hover:bg-yellow-500 py-3 px-4 mt-4 mb-3 text-black">
                    Sign Up
                </button>
                <p class="text-xs mb-4">Already have an account? <nuxt-link class="text-yellow-500" to="/login">Sign In</nuxt-link></p>
            </fieldset>
        </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUpPage',
  data(){
    return {
        formdata: {
            name: '',
            email: '',
            password: '',
            username: ''
        },
        error: false,
        errorMsg: 'An error occurred'
    }
  },
  watch: {
    formdata: {
         deep: true,
         handler(newdata){
            console.log("new", newdata)
            if (newdata.name.length < 4){
                this.error = true
                this.errorMsg = "Ensure name is atleast 4 characters long"
            } else if ( newdata.password.length < 6){
                this.error = true
                this.errorMsg = "Ensure password is atleast 6 characters long"

            } else if (newdata.username.length < 3){
                this.error = true
                this.errorMsg = "Ensure username is atleast 3 characters long"
            }
         }
        },
  },
  methods: {
        async register(e) {
            try {
                e.preventDefault()
                await this.$axios.post(`${this.$store.state.states.base_host}/api/auth/local/register`, this.formdata)
                let next = this.$route.query.next
                if (next && next[0] === "/"){
                    window.location.href = next
                    this.$router.push(`/login?next=${next}`)
                } else {
                    this.$router.push('/login')
                }
            } catch(e) {
                this.error = true
                this.email = ''
                this.errorMsg = "Signup Failed"
            } 
        },
    }
}
</script>
<style scoped>
    h1 {
        @apply text-yellow-400
    }
</style>
<style>
    input {
        @apply px-1
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        transition: background-color 9999s ease-in-out 0s;
    }
</style>
