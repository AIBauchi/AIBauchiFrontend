<template>
  <div class="min-h-screen text-white">
      <h1 class="text-4xl px-4 md:w-1/2 mt-24 mx-auto font-black text-yellow-600">About Us</h1>
      <section class="mt-12 text-section">
        <article>
          <p class="">
            AI Saturdays Bauchi is an exciting AI Community in 
            <a class="" href="https://www.google.com/maps/place/740102,+Bauchi/data=!4m2!3m1!1s0x1054d71144a4d5f9:0x565b6cd25e135fad?sa=X&ved=2ahUKEwjF7Z_UtIX7AhUPgP0HHcBBC60Q8gF6BAgIEAE">
               Bauchi State, Nigeria
            </a> with an aim of training students and AI enthusiasts from different places
            on how to use the intriguing technology of Artificial Intelligence under 
            the AI4Schools programme.
          </p>
          <p class="">
            The community is free to join and promises several trainings, workshops, seminars
            and Practical Projects to further improve the skills of students in the fast evolving
            world of Artificial Intelligence.
          </p>
        </article>
      </section>
      <section class="pt-8 text-section">
        <article>
          You can become a proud member of this community today by joining
          the whatsapp group via the link below:
          <a class="mt-2 font-black block" href="https://chat.whatsapp.com/dfggrtrto!INRIUNGUIR">
            AI Saturday Bauchi Whatsapp group
          </a>
        </article>
      </section>
      <section class="pt-16 text-section">
        <h2 class="text-3xl font-bold text-yellow-600 mb-3">Our Mission</h2>
        <article>
            AI Saturdays Bauchi aims to make AI knowledge accessible
            to everyone through our community driven study plans and projects.
        </article>
      </section>

      <section class="pt-16 mb-15 pb-10 text-section">
        <h2 class="text-3xl font-bold text-yellow-600 mb-3">Our Goals</h2>
        <ul class="list-disc">
            <li class="mb-3">To promote knowledge of AI in our community</li>
            <li class="">To encourage and promote innovation amongst members of our community</li>
        </ul>
      </section>

      <section class="pt-16 mb-15 pb-10 px-5">
        <h2 class="text-3xl font-bold text-yellow-600 mb-3 text-center">Our Team</h2>
        <div class="grid md:grid-cols-3 px-3 lg:px-36">
          <figure v-for="member in team" :key="member.id">
            <img :src="$store.state.states.base_host + member.attributes.Image.data.attributes.url" alt="" srcset="" class="w-full object-cover">
            <figcaption>
              <h4>{{member.attributes.Name}}</h4>
              <p class="role">{{member.attributes.Role}}</p>
              <div class="text-base text-white font-normal mt-3">
                {{member.attributes.Description}}
              </div>
              <a v-if="member.attributes.Email" :href="'mailto:'+member.attributes.Email">Email Address: {{member.attributes.Email}}</a>
              <div class="social-links mx-auto mt-4">
                <a v-if="member.attributes.Facebook_Username" :href="'https://www.facebook.com/'+member.attributes.Facebook_Username"><i class="devicon-facebook-plain"></i></a>
                <a v-if="member.attributes.Twitter_Username" :href="'https://www.twitter.com/'+member.attributes.Twitter_Username"><i class="devicon-twitter-original"></i></a>
                <a v-if="member.attributes.Github_Username" :href="'https://www.github.com/'+member.attributes.Github_Username"><i class="devicon-github-original"></i></a>
                <a v-if="member.attributes.LinkedIn_Username" :href="'https://www.linkedin.com/in/'+member.attributes.LinkedIn_Username"><i class="devicon-linkedin-plain"></i></a>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  async asyncData({ $axios, store }) {
    let url = `${store.state.states.base_teams_url}?sort=publishedAt%3Aasc&pagination[page]=1&pagination[pageSize]=10&populate=*`
    let team = await $axios.$get(url);
    team = team.data
    return {
      team,
    }
  }
}
</script>
<style scoped>
  body {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/index-bg.jpg");
  }
   p {
     @apply mt-4
   }

   figure {
     @apply mx-6 bg-gray-900 rounded mt-4 pb-2;
     min-height: 70vh;
   }
   figcaption {
     @apply px-3
   }
   figure img {
     height: 45vh;
   }

  figcaption h4 {
    @apply font-bold text-lg mt-3 text-yellow-500
  }

    section.text-section {
      @apply px-4 md:w-1/2 mx-auto
    }

   a {
     @apply text-yellow-500 hover:text-yellow-200 underline
   }

   .social-links a {
     @apply text-sm
   }

   .role {
     @apply text-sm inline-block font-bold text-yellow-200 mt-0 mb-0
   }
</style>
