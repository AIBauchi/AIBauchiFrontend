<template>
    <aside>
        <h2 class="font-black text-lg my-4">Featured</h2>
        <article :class="extraclass" @click="$router.push(`/blog/${feat.attributes.article.data.id}`)" class="mb-3 hover:bg-yellow-200 hover:bg-opacity-40 px-2 py-2 rounded-sm cursor-pointer" v-for="feat in features" :key="feat.id">
            <h3 class="text-yellow-600 font-bold">{{feat.attributes.article.data.attributes.title}}</h3>
            <div class="pb-4 break-all text-sm" v-html="$md.render(feat.attributes.article.data.attributes.Summary?feat.attributes.article.data.attributes.Summary:feat.attributes.article.data.attributes.Article.slice(0, 60))+'...'">
            </div>
        </article>
    </aside>
</template>
<script>
export default {
    name: 'Featured',
    props:[
        "extraclass"
    ],
    data() {
        return {
            features: []
        }
    },
    mounted() {
            const id = this.$route.params.id
            let url = `${this.$store.state.states.base_feat_url}?populate=*`
            this.$axios.$get(url)
            .then((features)=>{
                features = features.data
                console.log("RRRR", features)
                this.features = features
            })
    },
}
</script>
<style scoped>
    
</style>