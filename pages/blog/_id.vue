<template>
<!-- background-image: linear-gradient(rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.1)),  -->
  <div class="min-h-screen text-white mt-24">
    <div class="hero flex text-center mx-1 md:mx-auto  w-full md:w-5/6 h-72 bg-fixed bg-center bg-cover" :style="`background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${$store.state.states.base_host + image_url})`">
        <div class="m-auto">
          <h2 class="align-middle text-6xl font-black text-yellow-400">{{article.title?article.title:article.Article.split("\n")[0]}}</h2>
        </div>
    </div>
    <div class="grid grid-cols-3 w-full md:mx-auto mb-5 flex bg-gray-800 px-1 md:w-5/6 md:px-6  md:mt-0 md:mx-7">
      <article class="col-span-3 md:col-span-2 md:mt-5 md:px-4 rounded lg:px-16">
        <div class="text-sm text-yellow-400 mb-2 md:mb-5 text-italics mt-1">
              <div><i class="large material-icons">access_time</i> <time class="text-yellow-300 ml-2 inline-block mb-2">{{$store.state.states.to_relative_days(article.publishedAt.split(".")[0])}}</time></div>
              <div class="mt-2"><i class="large material-icons">person</i><a href="/about" class=" ml-2 mb-2 inline-block text-yellow-300 hover:text-yellow-100 underline decoration-dashed">{{article.author.data?article.author.data.attributes.username:'Unknown'}}</a></div>
        </div>
        <section id="article-body" class="text-white -mt-1 md:py-8 pb-4 md:px-3 mb-10" v-html="$md.render(article.title?article.Article:article.Article)">
        </section>
      </article>
      <Featured />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticlePage',
  async asyncData({ $axios, store, route }) {
    const id = route.params.id
    let url = `${store.state.states.base_url}/${id}?populate=*`
    let article = await $axios.$get(url);
    console.log(article.data)
    article = article.data.attributes
    var image_url = store.state.states.default_image
    var alt = article.title
    let data = article.hero_image.data
    if (data){
        image_url = data.attributes.url
        alt = data.attributes.formats.thumbnail.alternativeText
    }
    return {
      article,
      image_url,
      alt
    }
  }
}
</script>
<style scoped>
</style>

<style>
  #article-body h1, #article-body h2, #article-body h3, #article-body h4 {
    @apply font-bold mt-3
  }

  #article-body h1 {
    @apply text-4xl
  }

  #article-body h2 {
    @apply text-3xl
  }

  #article-body h3 {
    @apply text-2xl
  }

  #article-body h4 {
    @apply text-xl text-base
  }

  #article-body h5 {
    @apply text-lg text-base
  }

  #article-body h6 {
    @apply text-base
  }

  #article-body pre {
    @apply my-5 bg-gray-700 rounded-sm p-4;
    width: 30em
  }

  @media only screen and (max-width: 768px){
    #article-body pre {
      @apply my-5 bg-gray-700 rounded-sm p-4;
      width: 20em
    }
  }

  #article-body ul {
    @apply list-disc pl-5 my-1
  }

  #article-body ol {
    @apply list-decimal pl-5 my-1
  }

  #article-body a {
    @apply text-yellow-500 hover:text-yellow-700
  }
</style>
