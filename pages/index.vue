<script setup>
import { useI18n } from 'vue-i18n'

useHead({
  title: 'About Me',
})

onMounted(() => {
  useLocaleStore()
})

const { locale } = useI18n({ useScope: 'global' })

/* Testimonials */
const { data: testimonials } = await useFetch('/api/testimonials')

const testimonialItem = ref({})
const activeModal = ref(false)
const activeOverlay = ref(false)

function showTestimonial(id) {
  testimonialItem.value = testimonials.value.find(item => item.id === id)
  activeModal.value = true
  activeOverlay.value = true
}

function closeTestimonaial() {
  testimonialItem.value = {}
  activeModal.value = false
  activeOverlay.value = false
}
/* Testimonials */

/* Services */
const { data: services } = await useFetch('/api/services')
</script>

<template>
  <article class="about active" data-page="about">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.about') }}
      </h2>
    </header>

    <section class="about-text">
      <p>
        I am Prashant Kumar, a Software Engineer currently working at Lucidity, specializing in cloud infrastructure optimization and multi-cloud solutions. I hold a dual degree with a major in B.Tech Information Technology from IIIT Gwalior. With expertise in Python, Java, JavaScript, TypeScript, Go, and C++, I build scalable, efficient solutions that solve complex technical challenges.
      </p>

      <p>
        My experience spans cloud platforms (AWS, Azure, GCP), backend development with microservices, and full-stack web applications. At Lucidity, I've improved multi-cloud visibility by 40%, reduced audit errors by 60%, and achieved 100% accuracy in Azure ASR detection. I'm also an active competitive programmer with a LeetCode rating of 1883 (Knight) and Codeforces Specialist rank, having solved 700+ problems across platforms.
      </p>

      <p>
        I'm passionate about building high-performance systems, optimizing database queries, and contributing to open-source projects. When not coding, I enjoy tackling algorithmic challenges and learning new technologies.
      </p>
    </section>

    <!-- service -->

    <section class="service">
      <h3 class="h3 service-title">
        What I'm doing
      </h3>

      <ul class="service-list">
        <ServiceItem v-for="service in services" :key="service.id" :service="service" />
      </ul>
    </section>


    <!-- testimonials modal -->

    <div class="modal-container" :class="{ active: activeModal }">
      <div v-show="activeModal" class="overlay" :class="{ active: activeOverlay }" />

      <section class="testimonials-modal">
        <button class="modal-close-btn" @click="closeTestimonaial">
          <ion-icon name="close-outline" />
        </button>

        <div class="flex gap-5 mb-5 justify-start items-center">
          <div class="modal-avatar-box">
            <img :src="testimonialItem.image" alt="Testimonial author" width="80">
          </div>

          <div class="modal-content">
            <h4 class="h3 modal-title">
              {{ testimonialItem.title }}
            </h4>
            <time datetime="2021-06-14">14 June, 2021</time>
          </div>
        </div>

        <div class="flex gap-5 items-start">
          <img class="my-auto hidden md:block" src="/images/icon-quote.svg" alt="quote icon">
          <p class="text-justify text-gray-400 text-sm md:text-md" v-html="locale === 'en' ? testimonialItem.content?.en : testimonialItem.content?.tr" />
        </div>
        <div class="mt-2 flex justify-end text-sm text-gray-600 italic">
          Company Co.
        </div>
      </section>
    </div>

    <!-- tech stack -->

    <section class="tech-stack">
      <h3 class="h3 tech-stack-title">
        Tech Stack
      </h3>

      <ul class="tech-stack-list has-scrollbar">
        <li class="tech-stack-item">
          <img src="/images/python.png" alt="Python" class="tech-stack-logo">
        </li>
        <li class="tech-stack-item">
          <img src="/images/js.png" alt="JavaScript" class="tech-stack-logo">
        </li>
        <li class="tech-stack-item">
          <img src="/images/ts.png" alt="TypeScript" class="tech-stack-logo">
        </li>
        <li class="tech-stack-item">
          <img src="/images/golang.png" alt="Go" class="tech-stack-logo">
        </li>
        <li class="tech-stack-item">
          <img src="/images/cpp.png" alt="C++" class="tech-stack-logo">
        </li>
        <li class="tech-stack-item">
          <img src="/images/nodejs.png" alt="Node.js" class="tech-stack-logo">
        </li>
        <li class="tech-stack-item">
          <img src="/images/django.png" alt="Django" class="tech-stack-logo">
        </li>
        <li class="tech-stack-item">
          <img src="/images/docker.png" alt="Docker" class="tech-stack-logo">
        </li>
        <li class="tech-stack-item">
          <img src="/images/aws.png" alt="AWS" class="tech-stack-logo">
        </li>
        <li class="tech-stack-item">
          <img src="/images/git.png" alt="Git" class="tech-stack-logo">
        </li>
        <li class="tech-stack-item">
          <img src="/images/linux.png" alt="Linux" class="tech-stack-logo">
        </li>
        <li class="tech-stack-item">
          <img src="/images/sql.png" alt="PostgreSQL/MySQL" class="tech-stack-logo">
        </li>
        <li class="tech-stack-item">
          <img src="/images/mongodb.png" alt="MongoDB" class="tech-stack-logo">
        </li>
        <li class="tech-stack-item">
          <img src="/images/redis.png" alt="Redis" class="tech-stack-logo">
        </li>
      </ul>
      <p class="tech-stack-note" style="margin-top: 1rem; font-size: 0.875rem; color: #999;">
        Also experienced with: Kubernetes, Kafka, Azure, GCP, React, Next.js, Unit Testing
      </p>
    </section>
  </article>
</template>

<style scoped>
.tech-stack {
  margin-top: 2rem;
}

.tech-stack-title {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
}

.tech-stack-list {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 1rem 0;
}

.tech-stack-item {
  flex: 0 0 auto;
}

.tech-stack-logo {
  width: 50px;
  height: 50px;
  object-fit: contain;
}
</style>
