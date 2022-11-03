<template>
  <div @click="$store.commit('states/change_state', false)">
       <NavBar />
       <main>
          <Nuxt />
       </main>
      <Footer />
  </div>
</template>
<script>
export default {
    created(){
      this.$axios.interceptors.request.use((config) => {
        // Do something before request is sent
        let token = localStorage.getItem("jwt");
        if (token){
          config.headers = { 
              'Authorization': `Bearer ${token}`,
            }
        }
        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });

      this.$axios.interceptors.response.use((response) => {
          return response
        }, async function (error) {
          return Promise.reject(error);
        });

    },
    watch: {
       $route(){
           this.$store.commit('states/change_state', false)
       }
    }
}
</script>
<style>
  a {
    @apply text-yellow-500
  }
</style>
