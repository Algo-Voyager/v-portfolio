<script setup>
import { useI18n } from 'vue-i18n'
const { locale } = useI18n({ useScope: 'global' })

useHead({
  htmlAttrs: {
    lang: locale,
  },
  titleTemplate: (pageTitle) => {
    return pageTitle ? `${pageTitle} - Prashant Kumar` : 'Prashant Kumar - Software Engineer'
  },
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'description',
      content: 'Prashant Kumar - Software Engineer at Lucidity specializing in cloud infrastructure, multi-cloud solutions, and full-stack development. Expert in Python, Java, JavaScript, TypeScript, Go, and C++.',
    },
    {
      name: 'keywords',
      content: 'Prashant Kumar, Software Engineer, Cloud Infrastructure, AWS, Azure, GCP, Python, Java, JavaScript, TypeScript, Go, Full-Stack Developer, Lucidity',
    },
    {
      name: 'author',
      content: 'Prashant Kumar',
    },
    {
      property: 'og:title',
      content: 'Prashant Kumar - Software Engineer',
    },
    {
      property: 'og:description',
      content: 'Software Engineer at Lucidity specializing in cloud infrastructure optimization and multi-cloud solutions.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'Prashant Kumar - Software Engineer',
    },
    {
      name: 'twitter:description',
      content: 'Software Engineer at Lucidity specializing in cloud infrastructure optimization and multi-cloud solutions.',
    },
  ],
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/nuxt.png',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: 'anonymous',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap',
      crossorigin: 'anonymous',
    },
  ],
  script: [
    {
      src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js',
      body: false,
      type: 'module',
    },
    {
      src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js',
      body: false,
      nomodule: true,
    },
  ],
})
</script>

<template>
  <main class="relative">
    <Sidebar />
    <div class="main-content">
      <Navbar />
      <slot />
    </div>
    <CookieBar />
  </main>
</template>
