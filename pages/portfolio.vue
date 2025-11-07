<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import Flicking from '@egjs/vue3-flicking'
import '@egjs/vue3-flicking/dist/flicking.css'
import dayjs from 'dayjs'
import 'dayjs/locale/tr' // Import Turkish locale if needed

useHead({
  title: 'Projects',
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

// Animation on mount
onMounted(() => {
  const observerOptions = {
    threshold: 0.1
  }

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.getAttribute('data-aos-delay') || 0
        setTimeout(() => {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }, delay)
        fadeObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  document.querySelectorAll('[data-aos]').forEach(el => {
    el.style.opacity = '0'
    el.style.transform = 'translateY(30px)'
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
    fadeObserver.observe(el)
  })
})
</script>

<template>
  <article class="portfolio active" data-page="portfolio">
    <header data-aos="fade-right">
      <h2 class="h2 article-title">
        <ion-icon name="code-working-outline" class="title-icon"></ion-icon>
        {{ $t('pageTitles.portfolio') }}
      </h2>
      <p class="article-subtitle">Explore my latest work and side projects</p>
    </header>

    <section class="projects">
      <div class="filter-wrapper" data-aos="fade-up" data-aos-delay="100">
        <ul class="filter-list">
          <li class="filter-item">
            <button :class="{ active: activeCategory === 0 }" @click="changeFilter(0)">
              <ion-icon name="apps-outline"></ion-icon>
              <span>All</span>
            </button>
          </li>

          <li v-for="category in categories" :key="category.id" class="filter-item" @click="changeFilter(category.id)">
            <button :class="{ active: activeCategory === category.id }">
              <ion-icon :name="category.id === 1 ? 'code-slash-outline' : 'desktop-outline'"></ion-icon>
              <span>{{ locale === 'en' ? category.title?.en : category.title?.tr }}</span>
            </button>
          </li>
        </ul>

        <div class="filter-select-box">
          <button :class="{ active: filterMenu }" class="filter-select" @click="filterMenu = !filterMenu">
            <div class="select-value">
              <ion-icon name="filter-outline"></ion-icon>
              {{ activeCategory !== 0 ? (locale === 'en' ? activeCategoryName?.en : activeCategoryName?.tr) : 'Select Category' }}
            </div>

            <div class="select-icon">
              <ion-icon name="chevron-down" />
            </div>
          </button>

          <ul class="select-list">
            <li class="select-item">
              <button @click="changeFilter(0)">
                <ion-icon name="apps-outline"></ion-icon>
                All
              </button>
            </li>

            <li v-for="category in categories" :key="category.id" class="select-item">
              <button @click="changeFilter(category.id)">
                <ion-icon :name="category.id === 1 ? 'code-slash-outline' : 'desktop-outline'"></ion-icon>
                {{ locale === 'en' ? category.title?.en : category.title?.tr }}
              </button>
            </li>
          </ul>
        </div>
      </div>

      <ul class="project-list">
        <li
          v-for="(project, index) in projectList"
          :key="project.id"
          :class="{ active: activeCategory === project.category.id || activeCategory === 0 }"
          class="project-item"
          data-aos="zoom-in"
          :data-aos-delay="index * 50"
        >
          <a class="cursor-pointer project-card" @click="showItem(project.id)">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline" />
              </div>

              <img class="project-image" :src="project.image" :alt="project.title" loading="lazy">

              <div class="project-overlay">
                <span class="view-text">View Details</span>
              </div>
            </figure>

            <div class="project-content">
              <div class="project-header">
                <h3 class="project-title">{{ project.title }}</h3>
                <ion-icon name="arrow-forward-outline" class="arrow-icon"></ion-icon>
              </div>
              <p class="project-category">
                <ion-icon :name="project.category.id === 1 ? 'code-slash-outline' : 'desktop-outline'"></ion-icon>
                {{ locale === 'en' ? project.category.title?.en : project.category.title?.tr }}
              </p>
            </div>
          </a>
        </li>
      </ul>

      <div class="modal-container" :class="{ active: activeModal }">
        <div v-show="activeModal" class="overlay" :class="{ active: activeOverlay }" />

        <section class="project-modal block">
          <button class="modal-close-btn" @click="closeItem">
            <ion-icon name="close-outline" />
          </button>

          <div class="modal-image-wrapper">
            <figure>
              <img :src="activeItem.image" class="modal-image" :alt="activeItem.title">
            </figure>
          </div>

          <div class="modal-content">
            <h4 class="modal-title">
              {{ activeItem.title }}
            </h4>

            <div class="modal-meta">
              <span class="meta-item">
                <ion-icon name="calendar-outline"></ion-icon>
                {{ formatDate(activeItem.created_at) }}
              </span>
              <span class="meta-divider">|</span>
              <span class="meta-item">
                <ion-icon :name="activeItem.category?.id === 1 ? 'code-slash-outline' : 'desktop-outline'"></ion-icon>
                {{ locale === 'en' ? activeItem.category?.title?.en : activeItem.category?.title?.tr }}
              </span>
              <span class="meta-divider">|</span>
              <NuxtLink :to="activeItem.github_link" target="_blank" rel="noopener" class="github-link">
                <ion-icon name="logo-github"></ion-icon>
                View on GitHub
              </NuxtLink>
            </div>

            <div class="modal-description" v-html="locale === 'en' ? activeItem.content?.en : activeItem.content?.tr" />
          </div>
        </section>
      </div>
    </section>
  </article>
</template>

<style scoped>
/* ========================================
   ENHANCED PROJECTS PAGE STYLES
   ======================================== */

/* Header Styles */
header {
  margin-bottom: 2.5rem;
}

.article-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  position: relative;
  padding-left: 1rem;
}

.article-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 80%;
  background: linear-gradient(180deg, var(--vegas-gold), var(--orange-yellow-crayola));
  border-radius: 2px;
}

.title-icon {
  font-size: 2rem;
  color: var(--vegas-gold);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.article-subtitle {
  color: var(--light-gray-70);
  font-size: 0.95rem;
  margin-top: 0.5rem;
  padding-left: 1rem;
}

/* Filter Wrapper */
.filter-wrapper {
  margin-bottom: 2.5rem;
}

/* Filter List */
.filter-list {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.filter-item button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.05), rgba(255, 140, 0, 0.03));
  border: 1px solid rgba(255, 215, 0, 0.15);
  color: var(--light-gray);
  font-weight: 500;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
  cursor: pointer;
}

.filter-item button ion-icon {
  font-size: 18px;
  transition: all 0.3s ease;
}

.filter-item button::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50px;
  background: linear-gradient(135deg, var(--vegas-gold), var(--orange-yellow-crayola));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.filter-item button span {
  position: relative;
  z-index: 1;
}

.filter-item button:hover::before,
.filter-item button.active::before {
  opacity: 1;
}

.filter-item button:hover,
.filter-item button.active {
  transform: translateY(-3px);
  border-color: var(--vegas-gold);
  box-shadow: 0 8px 20px rgba(255, 215, 0, 0.3);
  color: var(--eerie-black-1);
}

.filter-item button:hover ion-icon,
.filter-item button.active ion-icon {
  transform: rotate(10deg) scale(1.1);
  color: var(--eerie-black-1);
}

.filter-item button.active {
  color: var(--eerie-black-1);
}

/* Filter Select Box (Mobile) */
.filter-select-box {
  position: relative;
  display: none;
}

.filter-select {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.05), rgba(255, 140, 0, 0.03));
  border: 1px solid rgba(255, 215, 0, 0.15);
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.select-value {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--light-gray);
  font-weight: 500;
}

.filter-select:hover {
  border-color: var(--vegas-gold);
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.2);
}

.select-list {
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  right: 0;
  background: rgba(30, 30, 30, 0.98);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 14px;
  padding: 0.5rem;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 10;
}

.filter-select.active + .select-list {
  max-height: 300px;
  opacity: 1;
}

.select-item button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem 1rem;
  text-align: left;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.select-item button:hover {
  background: rgba(255, 215, 0, 0.1);
  color: var(--vegas-gold);
}

/* Project List */
.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  list-style: none;
  padding: 0;
}

.project-item {
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.3s ease;
}

.project-item.active {
  opacity: 1;
  transform: scale(1);
}

/* Project Card */
.project-card {
  display: block;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(45, 45, 45, 0.4), rgba(35, 35, 35, 0.3));
  border: 1px solid rgba(255, 215, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
}

.project-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.08), rgba(255, 140, 0, 0.05));
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
  pointer-events: none;
}

.project-card:hover::before {
  opacity: 1;
}

.project-card:hover {
  transform: translateY(-12px);
  border-color: rgba(255, 215, 0, 0.3);
  box-shadow: 0 20px 50px rgba(255, 215, 0, 0.25);
}

/* Project Image */
.project-img {
  position: relative;
  overflow: hidden;
  height: 220px;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease;
}

.project-card:hover .project-image {
  transform: scale(1.1);
}

.project-item-icon-box {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 3;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.4s ease;
}

.project-card:hover .project-item-icon-box {
  opacity: 1;
  transform: scale(1);
}

.project-item-icon-box ion-icon {
  font-size: 24px;
  color: var(--vegas-gold);
}

/* Project Overlay */
.project-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.9) 100%);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 2;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.view-text {
  color: var(--vegas-gold);
  font-weight: 600;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Project Content */
.project-content {
  padding: 1.5rem;
  position: relative;
  z-index: 2;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--white-1);
  transition: all 0.3s ease;
}

.arrow-icon {
  font-size: 20px;
  color: var(--vegas-gold);
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.4s ease;
}

.project-card:hover .arrow-icon {
  opacity: 1;
  transform: translateX(0);
}

.project-card:hover .project-title {
  color: var(--vegas-gold);
}

.project-category {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--light-gray-70);
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.project-category ion-icon {
  font-size: 16px;
}

.project-card:hover .project-category {
  color: var(--light-gray);
}

/* Modal Styles */
.project-modal {
  position: relative;
  max-width: 900px;
  margin: 2rem auto;
  background: linear-gradient(135deg, rgba(30, 30, 30, 0.98), rgba(20, 20, 20, 0.98));
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
}

.modal-close-btn {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 215, 0, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(255, 215, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
}

.modal-close-btn ion-icon {
  font-size: 24px;
  color: var(--light-gray);
  transition: all 0.3s ease;
}

.modal-close-btn:hover {
  background: var(--vegas-gold);
  border-color: var(--vegas-gold);
  transform: rotate(90deg);
}

.modal-close-btn:hover ion-icon {
  color: var(--eerie-black-1);
}

.modal-image-wrapper {
  margin-bottom: 2rem;
  border-radius: 16px;
  overflow: hidden;
}

.modal-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 16px;
}

.modal-content {
  padding: 0 1rem;
}

.modal-title {
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ffd700, #ff8c00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
}

.modal-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 215, 0, 0.1);
  margin-bottom: 1.5rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--light-gray-70);
  font-size: 0.9rem;
}

.meta-item ion-icon {
  font-size: 18px;
  color: var(--vegas-gold);
}

.meta-divider {
  color: rgba(255, 215, 0, 0.3);
}

.github-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--vegas-gold);
  font-weight: 500;
  transition: all 0.3s ease;
}

.github-link:hover {
  color: var(--orange-yellow-crayola);
  transform: translateX(3px);
}

.github-link ion-icon {
  font-size: 18px;
}

.modal-description {
  color: var(--light-gray);
  line-height: 1.8;
  font-size: 1rem;
}

.modal-description :deep(p) {
  margin-bottom: 1rem;
}

.modal-description :deep(ul) {
  list-style: none;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}

.modal-description :deep(li) {
  position: relative;
  margin-bottom: 0.5rem;
}

.modal-description :deep(li)::before {
  content: '→';
  position: absolute;
  left: -1.5rem;
  color: var(--vegas-gold);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .project-list {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .filter-list {
    display: none;
  }

  .filter-select-box {
    display: block;
  }

  .project-list {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.25rem;
  }

  .project-card:hover {
    transform: translateY(-8px);
  }

  .project-modal {
    margin: 1rem;
    padding: 1.5rem;
  }

  .modal-title {
    font-size: 1.5rem;
  }

  .modal-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .meta-divider {
    display: none;
  }
}

@media (max-width: 480px) {
  .article-title {
    font-size: 1.5rem;
  }

  .title-icon {
    font-size: 1.5rem;
  }

  .project-list {
    grid-template-columns: 1fr;
  }

  .project-img {
    height: 200px;
  }

  .modal-close-btn {
    top: 1rem;
    right: 1rem;
    width: 40px;
    height: 40px;
  }
}
</style>
