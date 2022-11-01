<template>
  <div class="h-screen text-white mt-24 md:w-3/5">
    <section>
      <h1>Resources</h1>
      <article v-for="res in resources" :key="res.id">
        <h2>{{res.attributes.Title}}</h2>
        <div>
          {{res.attributes.Body}}
          <div class="links">
            <a v-if="res.attributes.File.data" :href="$store.state.states.base_host + res.attributes.File.data.attributes.url">Download Link for {{res.attributes.File.data.attributes.name}}</a>
            <a v-if="res.attributes.Link" :href="res.attributes.Link">Link</a>
          </div>
        </div>
      </article>
    </section>

    <section class="mb-5">
      <h1>External Resources</h1>
      <article v-for="res in exts" :key="res.id">
        <h2>{{res.attributes.Text}}</h2>
        <div>
          <div class="links">
            <a v-if="res.attributes.Link" :href="res.attributes.Link">Link</a>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ResourcesPage',
  async asyncData({ $axios, store }) {
    let url = `${store.state.states.base_res_url}?sort=publishedAt%3Adesc&pagination[page]=1&pagination[pageSize]=30&populate=*`
    let resources = await $axios.$get(url)
    resources = resources.data
    console.log("RESORCE", resources)

    url = `${store.state.states.base_ext_url}?sort=publishedAt%3Adesc&pagination[page]=1&pagination[pageSize]=30&populate=*`
    let exts = await $axios.$get(url)
    exts = exts.data
    return {
      resources,
      exts
    }
  }
}
</script>
<style scoped>
  h1 {
    @apply text-3xl font-bold mb-4
  }
  
  h2 {
    @apply text-yellow-500 font-bold text-lg
  }

  section {
    @apply mb-24 px-8
  }

  a {
    @apply text-yellow-200 text-sm hover:text-yellow-600
  }

  article p {
    @apply mt-2
  }

  article {
    @apply py-2 bg-gray-700 px-2 rounded mt-4
  }

  .links a {
    @apply block mt-1
  }
</style>
