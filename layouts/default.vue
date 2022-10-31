<template>
  <div @click="$store.commit('states/change_state', false)">
       <NavBar />
       <main>
          <Nuxt />
       </main>
      <Footer />
  </div>
</template>
<style>
  a {
    @apply text-yellow-500
  }
</style>