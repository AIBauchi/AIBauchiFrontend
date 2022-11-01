<template>
    <section class="text-white px-2 text-center min-h-36 pb-2 m-auto">
      <div @click="show_modal=false" class="modal bg-yellow-900 bg-opacity-20 w-screen h-screen" v-if="show_modal">
        <div @click.stop="" class="w-full md:w-2/5 h-3/4 md:h-4/5 pt-20 bg-gray-700 text-yellow-500">
          <h1 class="text-2xl font-bold">Are you sure you want to delete this comment?</h1>
          <div class="w-full text-center text-red-500 mt-4">{{error}}</div>
          <div class="mt-12">
            <button @click="finalDelete" class="hover:bg-red-300 bg-red-600 px-4 py-2 text-center rounded">Yes, I'm sure</button>
            <button @click="show_modal=false" class="hover:bg-gray-500 bg-gray-900 px-4 py-2 text-center rounded">I've Changed My Mind</button>
          </div>
        </div>
      </div>
        <h2 class="font-black text-xl my-4">Comments</h2>
        <p class="text-center text-lg text-yellow-500" v-if="!comments.length">No comments</p>
        <div class="float-left border-l-2 border-yellow-500 ml-2" v-for="comment in comments" :key="comment.id">
          <Comment @delete="deleteComm(comment.id, comment.author.id)" :id="comment.author.id" @wanna-reply="makeComment(comment.id, comment.author.name)" class="bg-gray-800 ml-2 md:w-4/5" :content="comment.content" :name="comment.author.name" :is_auth="signedIn" :updated="comment.updatedAt"/>
          <div class="pl-16 ml-8 border-l-2 border-yellow-500">
            <Comment :id="child.author.id" @delete="deleteComm(child.id, child.author.id)" @wanna-reply="makeComment(comment.id, comment.author.name)" :key="child.id" v-for="child in comment.children" class="bg-gray-800 ml-2 md:w-4/5" :content="child.content" :name="child.author.name" :is_auth="signedIn" :updated="child.updatedAt"/>
          </div>
        </div>
    </section>
</template>

<script>
  export default {
    name: 'Comments',
    props: [
      "id"
    ],
    mounted() {
      this.loadComments(this.page)
    },
    methods: {
      loadComments() {
        let url = `${this.$store.state.states.base_comments_url+this.id}`
        this.$axios.$get(url).then((data)=>{
          this.comments = data
        })
      },
      makeComment(id, name){
        if (id){
          document.querySelector("textarea").scrollIntoView({
            behavior: 'auto',
            block: 'center',
            inline: 'center'
        })
        this.$emit('replying', {id, name})
        }
      },
      deleteComm(id, authorId){
        this.error = ""
        this.delete_target = {id, authorId}
        this.show_modal = true
      },
      finalDelete(){
        let {id, authorId} = this.delete_target
        let url = `${this.$store.state.states.base_comments_url+this.id}/comment/${id}?authorId=${authorId}`
        this.$axios.$delete(url).then((data)=>{
          this.comments = data
          this.show_modal = false
          this.$router.go()
        }).catch(()=>{
          this.error = "Could not delete"
        })
      }
    },
    computed: {
        signedIn(){
            let data = JSON.parse(localStorage.getItem("userData"))
            return data?data:false
        }
    },
    data() {
      return {
        comments: [],
        page: 1,
        show_modal: false,
        delete_target: null,
        id: this.$route.params.id,
        error: ""
      }
    },
  }
</script>

<style scoped>
    a {
        @apply hover:bg-gray-700 py-3
    }

    .modal {
      z-index: 55555 !important;
      @apply w-screen h-screen bg-opacity-5;
      @apply bg-gray-600 fixed top-0 z-50	left-0 px-2;
      @apply flex justify-center items-center;
    }
</style>