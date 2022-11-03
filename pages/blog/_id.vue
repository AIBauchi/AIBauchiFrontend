<template>
<!-- background-image: linear-gradient(rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.1)),  -->
  <div class="min-h-screen text-white mt-24">
    <div class="hero flex text-center mx-1 md:mx-auto  w-full md:w-5/6 h-72 bg-fixed bg-center bg-cover" :style="`background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${$store.state.states.base_host + image_url})`">
        <div class="m-auto">
          <h2 class="align-middle text-6xl font-black text-yellow-400">{{article.title?article.title:article.Article.split("\n")[0]}}</h2>
        </div>
    </div>
    <div class="flex flex-wrap w-full md:mx-auto mb-5 bg-gray-800 px-1 md:w-5/6 md:px-6  md:mt-0 md:mx-7">
      <article class="w-full md:w-2/3 md:mt-5 md:px-4 rounded lg:px-16">
        <div class="text-sm text-yellow-400 mb-2 md:mb-5 text-italics mt-1">
              <div><i class="large material-icons">access_time</i> <time class="text-yellow-300 ml-2 inline-block mb-2">{{$store.state.states.to_relative_days(article.publishedAt.split(".")[0])}}</time></div>
              <div class="mt-2"><i class="large material-icons">person</i><a href="/about" class=" ml-2 mb-2 inline-block text-yellow-300 hover:text-yellow-100 underline decoration-dashed">{{article.author.data?article.author.data.attributes.username:'Unknown'}}</a></div>
        </div>
        <section id="article-body" class="leading-loose text-white -mt-1 md:py-8 pb-4 md:px-3 mb-10" v-html="$md.render(article.title?article.Article:article.Article)">
        </section>
      </article>
      <Featured class="mt-3 w-full md:w-1/3 md:mt-0" />
    </div>
    <section v-if="signedIn" class="px-3 md:w-4/5 flex mx-auto mb-8">
      <div>
        <h1 class="text-left font-bold mb-2 font-montserrat">Comment</h1>
        <div v-if="error" class=" text-red-500 text-center px-4 py-2">
          {{error}}
        </div>
        <div v-if="replying" class="mb-3 rounded-lg bg-yellow-500 text-black text-center px-4 py-2">
            Replying Comment #{{replying.id}} by {{replying.name}}
            <i class="material-icons hover:text-white cursor-pointer" @click="replying=''">close</i>
        </div>
        <textarea placeholder="Type comment here..." v-model="comment" id="" class=" px-2 text-sm outline-none pb-2 w-full  bg-transparent border-yellow-400  border-b hover:border-blue-700 focus:border-blue-700" cols="50" rows="4"></textarea>
        <button @click="submitComment" type="submit" class="mt-2 bg-yellow-600 hover:bg-yellow-500 py-3 px-4 mt-4 mb-3 text-black">
            Submit
        </button>
      </div>
    </section>
    <p class="w-full text-center mb-8" v-else>
      <nuxt-link :to="'/login?next=/blog/'+$route.params.id">Login</nuxt-link> or <nuxt-link :to="'/signup?next=/blog/'+$route.params.id">Sign Up</nuxt-link>
      to comment
    </p>

    <section class="md:w-3/5 flex align-left mx-auto mb-8 bg-black">
      <Comments @replying="(data)=>replying=data" :id="$route.params.id" />
    </section>
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
  },
  computed: {
      signedIn(){
          return JSON.parse(localStorage.getItem("userData"))?true:false
      }
  },
  methods: {
    submitComment(){
      this.error = ""
      const id = this.$route.params.id
      let url = `${this.$store.state.states.base_comments_url+id}`
        this.$axios.$post(url, {content: this.comment, threadOf: this.replying.id}).then((data)=>{
          this.comments = data
          this.replying = ""
          this.$router.go()
        }).catch(()=>{
          this.error = "Error submitting comment"
        })
    }
  },
  data() {
    return {
      comment: "",
      replying: "",
      error: ""
    }
  },
  head(){
    const article = this.article
    const image_url = this.image_url
    const base_host = this.$store.state.states.base_host
    return {
      title: article.title,
      meta: [ 
        {
        hid: 'description',
        name: 'description',
        content: article.Summary
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://aibauchi.com.ng" + this.$route.path,
      },
      {
        hid: "og:title",
        property: "og:title",
        content: article.title,
      },
      {
        hid: "og:description",
        property: "og:description",
        content: article.Summary,
      },
      {
        hid: "og:image",
        property: "og:image",
        content: base_host + image_url,
      },
      { name: "twitter:site", content: "@aibauchi" },
      { name: "twitter:card", content: "AI Saturday Bauchi" },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://aibauchi.com.ng" + this.$route.path,
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: article.title,
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: article.Summary,
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: base_host + image_url,
      },

        ],
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
