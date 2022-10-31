<template lang="">
    <article class="cursor-pointer mb-3 pt-5 hover:bg-yellow-200 hover:bg-opacity-40 px-2 pb-2 rounded-sm cursor-pointer">
        <h3 class="text-left pl-3 text-yellow-600 font-bold">{{name}}</h3>
        <div class="pb-1 mt-2 break-all text-left pl-6 text-sm">
            {{content}}
        </div>
        <div class="grid grid-cols-4 text-sm mt-3">
            <div class="grid grid-cols-4 md:grid-cols-7"><i class="text-sm material-icons">access_time</i> <time class="text-yellow-300 text-sm inline-block my-auto">{{$store.state.states.to_relative_days(updated.split(".")[0])}}</time></div>
            <div class="text-yellow-500 hover:text-yellow-300" v-if="is_auth" @click="$emit('wanna-reply')"> reply </div>
            <div class="text-yellow-500 hover:text-yellow-300" v-if="is_auth.id === id" @click="$emit('delete')"> delete </div>
        </div>
    </article>
</template>
<script>
export default {
    props: [
        "content",
        "updated",
        "name",
        "is_auth",
        "id"
    ]
}
</script>
<style lang="">
    
</style>