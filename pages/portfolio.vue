<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Flicking from '@egjs/vue3-flicking'
import '@egjs/vue3-flicking/dist/flicking.css'
import dayjs from 'dayjs'
import 'dayjs/locale/tr' // Import Turkish locale if needed

useHead({
  title: 'Portfolio',
})

const { locale } = useI18n({ useScope: 'global' })
const { data: projects } = await useFetch('/api/projects')
const { data: categories } = await useFetch('/api/categories')

const projectList = [...projects.value]
const activeCategory = ref(0)
const filterMenu = ref(false)
const activeCategoryName = ref('')

function changeFilter(id) {
  activeCategory.value = id
  if (id !== 0)
    activeCategoryName.value = categories.value.find(item => item.id === id).title

  filterMenu.value = !filterMenu.value
}

const activeItem = ref({})
const activeModal = ref(false)
const activeOverlay = ref(false)

function showItem(id) {
  activeItem.value = projects.value.find(item => item.id === id)
  activeModal.value = true
  activeOverlay.value = true
}

function closeItem() {
  activeItem.value = {}
  activeModal.value = false
  activeOverlay.value = false
}

function formatDate(dateStr) {
  // Parse the date string
  const parsedDate = dayjs(dateStr);

  // Format the date as "DD MMM YYYY"
  return parsedDate.format('DD MMM, YYYY');
}


</script>

<template>
  <article class="portfolio active" data-page="portfolio">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.portfolio') }}
      </h2>
    </header>

    <section class="projects">
      <ul class="filter-list">
        <li class="filter-item">
          <button :class="{ active: activeCategory === 0 }" @click="changeFilter(0)">
            All
          </button>
        </li>

        <li v-for="category in categories" :key="category.id" class="filter-item" @click="changeFilter(category.id)">
          <button :class="{ active: activeCategory === category.id }">
            {{ locale === 'en' ? category.title?.en : category.title?.tr }}
          </button>
        </li>
      </ul>

      <div class="filter-select-box">
        <button :class="{ active: filterMenu }" class="filter-select" @click="filterMenu = !filterMenu">
          <div class="select-value">
            {{ activeCategory !== 0 ? (locale === 'en' ? activeCategoryName?.en : activeCategoryName?.tr) : 'Select Category' }}
          </div>

          <div class="select-icon">
            <ion-icon name="chevron-down" />
          </div>
        </button>

        <ul class="select-list">
          <li class="select-item">
            <button @click="changeFilter(0)">
              All
            </button>
          </li>

          <li v-for="category in categories" :key="category.id" class="select-item">
            <button @click="changeFilter(category.id)">
              {{ locale === 'en' ? category.title?.en : category.title?.tr }}
            </button>
          </li>
        </ul>
      </div>

      <ul class="project-list">
        <li 
          v-for="project in projectList" 
          :key="project.id" 
          :class="{ active: activeCategory === project.category.id || activeCategory === 0 }" 
          class="project-item"
        >
          <a class="cursor-pointer" @click="showItem(project.id)">

            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline" />
              </div>

              <img class="project-image" :src="project.image" :alt="project.title" loading="lazy">

            </figure>

            <h3 class="project-title">{{ project.title }}</h3>

            <p class="project-category">{{ locale === 'en' ? project.category.title?.en : project.category.title?.tr }}</p>

          </a>
        </li>
      </ul>

      <div class="modal-container" :class="{ active: activeModal }">
        <div v-show="activeModal" class="overlay" :class="{ active: activeOverlay }" />

        <section class="testimonials-modal block">
          <button class="modal-close-btn" @click="closeItem">
            <ion-icon name="close-outline" />
          </button>

          <div>
            <figure>
              <img :src="activeItem.image" class="rounded-lg" :alt="activeItem.title">
            </figure>
          </div>

          <div class="modal-content space-y-3 mt-4">
            <h4 class="h3 modal-title">
              {{ activeItem.title }}
            </h4>

            <small class="flex items-center justify-start gap-2 text-gray-500">
              <span>{{ formatDate(activeItem.created_at) }}</span> | 
              <span>{{ locale === 'en' ? activeItem.category?.title?.en : activeItem.category?.title?.tr }}</span> | 
              <NuxtLink :to="activeItem.github_link" target="_blank" rel="noopener">
                View Project
              </NuxtLink>

            </small>

            <p class="text-justify" v-html="locale === 'en' ? activeItem.content?.en : activeItem.content?.tr" />
          </div>
        </section>
      </div>
    </section>
  </article>
</template>

<style>
.project-img img {
  width: 100%; /* Ensures the image takes up the full width of its container */
  height: 200px; /* Set a fixed height or adjust as per your design */
  object-fit: cover; /* Ensures the image scales properly without distortion */
  border-radius: 8px; /* Optional: Adds rounded corners */
  display: block; /* Prevents inline spacing issues */
}
</style>
