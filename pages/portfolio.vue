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

<style scoped>
.project-img img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  display: block;
}

/* Enhanced Portfolio Styles */
.portfolio.active {
  animation: slideInUp 0.5s ease-out;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.article-title {
  position: relative;
  display: inline-block;
}

.article-title::before {
  content: '';
  position: absolute;
  top: 50%;
  left: -20px;
  width: 4px;
  height: 70%;
  background: linear-gradient(180deg, var(--vegas-gold), var(--orange-yellow-crayola));
  transform: translateY(-50%);
  border-radius: 2px;
}

.filter-item button {
  position: relative;
  padding: 8px 20px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.filter-item button::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 140, 0, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.filter-item button:hover::before,
.filter-item button.active::before {
  opacity: 1;
}

.filter-item button:hover,
.filter-item button.active {
  transform: translateY(-2px);
}

/* Project Card Enhancements */
.project-item {
  transition: all 0.3s ease;
}

.project-item.active {
  animation: scaleIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes scaleIn {
  0% {
    opacity: 0;
    transform: scale(0.8) rotateY(20deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotateY(0);
  }
}

.project-item > a {
  display: block;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background: var(--border-gradient-onyx);
  transition: all 0.3s ease;
}

.project-item > a::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.05), rgba(255, 140, 0, 0.05));
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
  pointer-events: none;
}

.project-item > a:hover::before {
  opacity: 1;
}

.project-item > a:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(255, 215, 0, 0.2);
}

.project-img {
  position: relative;
  overflow: hidden;
}

.project-img::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.7) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-item > a:hover .project-img::after {
  opacity: 1;
}

.project-item-icon-box {
  z-index: 2;
}

.project-title,
.project-category {
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
}

.project-item > a:hover .project-title {
  color: var(--vegas-gold);
  transform: translateX(5px);
}

.project-item > a:hover .project-category {
  transform: translateX(5px);
}

/* Modal Enhancements */
.testimonials-modal {
  backdrop-filter: blur(10px);
  background: rgba(30, 30, 30, 0.95);
  border: 1px solid rgba(255, 215, 0, 0.2);
}

.modal-close-btn {
  transition: all 0.3s ease;
}

.modal-close-btn:hover {
  transform: rotate(90deg);
  background: var(--vegas-gold);
  color: var(--smoky-black);
}

.modal-title {
  background: linear-gradient(135deg, #ffd700, #ff8c00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Responsive Enhancements */
@media (max-width: 768px) {
  .project-item > a:hover {
    transform: translateY(-5px);
  }
}
</style>
