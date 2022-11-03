<template>
  <header :class="navbar" class="fixed top-0 pt-3 md:pt-5 py-4 w-screen animate__animated animate__fadeIn" style="z-index: 4000">
    <nav class="grid text-white grid-cols-4 w-full md:pr-10">
        <div class="col-span-3 md:col-span-1 grid grid-cols-4">
                <div class="rounded-full ml-2 w-12 h-12 bg-center bg-cover logo">
                </div>
                <div class="pl-2 col-span-3 text-left text-lg pt-3 font-black text-yellow-500">
                    <nuxt-link to="/">
                        AI Saturdays Bauchi
                    </nuxt-link>
                </div>
        </div>
        <div class="md:col-span-1 hidden md:inline-block">
        </div>
        <div class="lg-navbar pt-4 hidden md:inline-block col-span-2 grid grid-cols-4 text-sm font-black">
            <nuxt-link to="/resources">Resources</nuxt-link>
            <nuxt-link to="/blog">Blog</nuxt-link>
            <nuxt-link to="/about">About Us</nuxt-link>
            <a @click="logout" v-if="signedIn">Logout</a>
            <nuxt-link to="/login" v-else>Login</nuxt-link>
        </div>
        <div v-if="$store.state.states.show_sm_navbar" @click.stop="" class="md:hidden absolute right-0 top-0 bg-black grid text-yellow-600 text-lg grid-rows-4 w-1/2 h-screen" style="z-index: 20000000">
            <div class="grid grid-rows-4"><i @click.stop="$store.commit('states/change_state', false)" class="material-icons mt-3 ml-2 text-3xl text-gray-300">close</i></div>
            <div class="grid grid-rows-5 sm-nav">
                <nuxt-link @click="$store.commit('states/change_state', false)" to="/resources">Resources</nuxt-link>
                <nuxt-link @click="$store.commit('states/change_state', false)" to="/blog">Blog</nuxt-link>
                <nuxt-link @click="$store.commit('states/change_state', false)" to="/about">About Us</nuxt-link>
                <a @click="logout" v-if="signedIn">Log out</a>
                <nuxt-link @click="$store.commit('states/change_state', false)" to="/login" v-else>Log in</nuxt-link>
            </div>
        </div>
        <div v-if="!$store.state.states.show_sm_navbar" @click.stop="$store.commit('states/change_state', true)" class="md:hidden text-center mt-2"><i class="material-icons text-yellow-200">dehaze</i></div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  created(){
      window.addEventListener('scroll', () => {
          if (window.scrollY > 0 && this.navbar === "bg-transparent"){
              this.navbar = "bg-gray-900 bg-opacity-50 shadow-sm"
          } else if(window.scrollY === 0 && this.navbar === "bg-gray-900 bg-opacity-50 shadow-sm") {
              this.navbar = "bg-transparent"
          }
      });
  },
  data(){
      return {
          navbar: "bg-transparent",
      }
  },
  methods: {
      logout() {
                window.localStorage.removeItem('jwt')
                window.localStorage.removeItem('userData')
                window.location.href = '/login'
            }
  },
  computed: {
      signedIn(){
          return JSON.parse(localStorage.getItem("userData"))?true:false
      }
  },
}
</script>

<style scoped>
    .logo {
        background-image: url("/logo.png")
    }

    .lg-navbar > a{
        @apply text-center h-7 text-white border-b border-yellow-500 pb-1;
        @apply mx-2 hover:border-yellow-100 hover:text-gray-200;

    }

    .sm-nav > a {
        @apply text-center
    }

    a.nuxt-link-active {
        font-weight: bolder;
    }
    a.nuxt-link-exact-active {
        @apply border-white;
    }
    .animate__animated.animate__fadeIn {
        --animate-duration: 3s;
    }
</style>
