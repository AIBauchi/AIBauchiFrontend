<template>
  <div class="min-h-screen text-white mt-32 px-3 w-full">
    <h1 class="text-5xl font-black text-yellow-500 text-center">
      The AI Saturday Bauchi Blog
    </h1>
    <div class="grid grid-cols-5 mt-9">
      <section class="col-span-5 md:col-span-3 md:pr-2">
        <BlogPost @click="$router.push(`/blog/${post.id}`)" v-for="post in posts" :key="post.id" :id="post.id" :data="post.attributes" />
        <div v-if="page>-1" class="mx-auto"><button :disabled="page==-1" @click="loadMore" class="text-xl font-bold px-4 py-3 mx-auto block my-5 text-black bg-yellow-600">Load More</button></div>
      </section>
      <Featured :extraclass="'bg-gray-800 rounded'" class="col-span-5 md:col-span-2 mt-3 px-5" />
    </div>
  </div>
</template>

<script>
import BlogPost from '../../components/BlogPost.vue'
export default {
  components: { BlogPost },
  name: 'BlogIndexPage',
  methods: {
    async loadMore(){
      this.page += 1
      let url = `${this.$store.state.states.base_url}?sort=publishedAt%3Adesc&pagination[page]=${this.page}&pagination[pageSize]=4&populate=*`
      let posts = await this.$axios.$get(url);
      posts = posts.data
      if (!posts.length){
        this.page = -1
      }
      for (let post of posts){
        this.posts.push(post)
      }
    }
  },
  data(){
    return {
      page: 1
    }
  },
  async asyncData({ $axios, store }) {
    let page = 1
    let url = `${store.state.states.base_url}?sort=publishedAt%3Adesc&pagination[page]=${page}&pagination[pageSize]=4&populate=%2A`
    let posts = await $axios.$get(url);
    posts = posts.data
    return {
      posts,
    }
  }
}
</script>

<style scoped>
    
</style>
