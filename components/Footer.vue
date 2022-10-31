<template>
    <div class="text-white text-center min-h-36 pb-2 m-auto bg-black">
        <div class="links h-20 grid grid-cols-4 pt-6 pb-3">
            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link to="/resources">Resources</nuxt-link>
            <nuxt-link to="/blog">Blog</nuxt-link>
            <nuxt-link to="/about">About Us</nuxt-link>
        </div>
        <div class="social-links mx-auto mt-4">
            <a href=""><i class="devicon-facebook-plain"></i></a>
            <a href=""><i class="devicon-twitter-original"></i></a>
            <a href=""><i class="devicon-github-original"></i></a>
            <a href=""><i class="devicon-linkedin-plain"></i></a>
        </div>
        <span class="text-sm">&copy; Copyright 2022 AI Saturdays Bauchi - All Rights Reserved</span>
        <div class="text-xs mt-4"><a href="https://www.freepik.com/free-vector/human-nervous-system_4239572.htm#query=artificial%20intelligence%20background%20dark&position=1&from_view=search&track=sph">Background image by rawpixel.com</a> on Freepik</div>
    </div>
</template>
<style scoped>
    a {
        @apply hover:bg-gray-700 py-3
    }
</style>