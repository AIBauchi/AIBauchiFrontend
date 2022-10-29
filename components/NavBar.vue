<template>
  <header class="bg-opacity-0 h-12 fixed top-0 pt-7 py-4 w-screen">
    <nav class="grid text-white grid-cols-4 w-full md:pr-10">
        <div class="col-span-3 lg:col-span-1 grid grid-cols-4">
            <div class="rounded-full ml-2 w-12 h-12 bg-center bg-cover logo">
            </div>
            <div class="col-span-3 align-middle pt-3 font-bold text-yellow-500">
                AI Saturday Bauchi
            </div>
        </div>
        <div class="col-span-1 md:col-span-2 hidden md:inline-block">
        </div>
        <div class="lg-navbar hidden md:inline-block col-span-2 md:col-span-1 grid grid-cols-3 text-sm font-black">
            <nuxt-link to="/">Resources</nuxt-link>
            <nuxt-link to="/new">Blog</nuxt-link>
            <nuxt-link to="/show">About Us</nuxt-link>
        </div>
        <div v-if="$store.state.navbar.show_sm_navbar" @click.stop="" class="md:hidden absolute right-0 top-0 bg-gray-800 grid grid-rows-10 w-2/5 pl-3 h-screen" style="z-index: 200000">
            <i @click.stop="$store.commit('navbar/change_state', false)" class="material-icons">close</i>
            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link to="/new">New</nuxt-link>
            <nuxt-link to="/show">Show</nuxt-link>
        </div>
        <div v-if="!$store.state.navbar.show_sm_navbar" @click.stop="$store.commit('navbar/change_state', true)" class="md:hidden text-center mt-2"><i class="material-icons">dehaze</i></div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  data(){
      return {

      }
  }
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

    a.nuxt-link-active {
        font-weight: bold;
    }
    a.nuxt-link-exact-active {
        @apply border-white;
    }
</style>