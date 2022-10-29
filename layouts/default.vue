<template>
  <div @click="$store.commit('navbar/change_state', false)">
       <NavBar />
      <Nuxt />
  </div>
</template>