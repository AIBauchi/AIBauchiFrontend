<template>
  <article class="hover:bg-gray-600 cursor-pointer bg-gray-800 shadow my-2 px-4 py-4 rounded">
      <h2 @click="$router.push('/blog/'+id)"  class="text-3xl mb-3 font-black text-yellow-500">{{data.title?data.title:data.Article.split("\n")[0]}}</h2>
      <div class="grid grid-cols-1 md:grid-cols-5">
          <div class="col-span-2">
              <img :src="$store.state.states.base_host + image_url" class="object-cover h-64 w-72" :alt="alt" srcset="">
          </div>
          <div class="col-span-3 pl-3 mt-2">
              <div class="grid grid-cols-2 mb-3 text-sm">
                <div class="py-3 text-yellow-400 grid grid-cols-4"><i class="large material-icons">person</i> <a href="/about" class="text-sm ml-2 mb-3 inline-block text-sm text-yellow-300 hover:text-yellow-100 underline break-all decoration-dashed">{{author}}</a></div>
                <div class="grid grid-cols-4 py-3"><i class="large material-icons">access_time</i> <time class="text-yellow-300 text-sm pb-5 ml-2 inline-block my-auto">{{$store.state.states.to_relative_days(data.publishedAt.split(".")[0])}}</time></div>
            </div>
            <div class="pb-4 break-all" v-html="$md.render(data.Summary?data.Summary:data.Article.slice(0, 120))+'...'">
            </div>
            <a class="font-black text-sm hover:underline" :href="'/blog/'+id">Read More</a>
          </div>
      </div>
  </article>
</template>

<script>
export default {
  name: 'BlogPost',
  props: [
      "data",
      "id",
  ],
  data() {
      return {
          image_url: this.$store.state.states.default_image,
          alt: this.data.title?this.data.title:this.data.Article.split("\n")[0],
          author: ""
      }
  },
  created() {
      let data = this.data.hero_image.data
      this.author = this.data.author.data?this.data.author.data.attributes.username:'Unknown'
      if (data){
          this.image_url = data.attributes.formats.thumbnail.url
          this.alt = data.attributes.formats.thumbnail.alternativeText
      }
  },
}
</script>
