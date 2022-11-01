<template>
  <div class="min-h-screen text-white mt-28 px-3">
    <div class="mx-auto md:w-2/5 bg-gray-600 px-8 py-4 rounded">
        <p v-show="error" class="text-sm text-red-500">{{ errorMsg }}</p>
        <form @submit="login" class="mt-5">
            <fieldset>
                <legend class="text-3xl mb-8 font-bold text-yellow-600">Log In</legend>
                <div class="my-4">
                    <h1 class="text-left font-bold mb-2 font-montserrat">Email</h1>
                    <input type="email" v-model="email" class="text-sm outline-none pb-2 w-full  bg-transparent border-yellow-400  border-b hover:border-blue-700 focus:border-blue-700">
                </div>
                <div class="my-4">
                    <h1 class="text-left font-bold mb-2 font-montserrat">Password</h1>
                    <input type="password" v-model="password" class="text-sm bg-transparent outline-none pb-2 w-full border-yellow-400  border-b hover:border-blue-700 focus:border-blue-700">
                </div>
                <button type="submit" class="mt-2 bg-yellow-600 hover:bg-yellow-500 py-3 px-4 mt-4 mb-3 text-black">
                    Sign Up
                </button>
                <p class="text-xs mb-4">Don't have an account? <nuxt-link class="text-yellow-500" to="/signup">Log in</nuxt-link></p>
            </fieldset>
        </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data(){
    return {
        email: '',in
        password: '',
        error: false,
        errorMsg: 'An error occurred'
    }
  },
  methods: {
        async login(e) {
            try {
                e.preventDefault()
                const res = await this.$axios.post(`${this.$store.state.states.base_host}/api/auth/local/`, {
                    password: this.password,
                    identifier: this.email,
                    })
                const { jwt, user } = res.data
                window.localStorage.setItem('jwt', jwt)
                window.localStorage.setItem('userData', JSON.stringify(user))
                let next = this.$route.query.next
                if (next && next[0] === "/"){
                    window.location.href = next
                } else {
                    window.location.href = '/'
                }
            } catch(e) {
                this.error = true
                this.email = ''
            } 
        }
    }
}
</script>
<style scoped>
    h1 {
        @apply text-yellow-400
    }
</style>
