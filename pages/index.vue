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

/* Counter Animation */
onMounted(() => {
  // Counter Animation
  const observerOptions = {
    threshold: 0.5
  }

  const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'))
    const duration = 2000
    const increment = target / (duration / 16)
    let current = 0

    const updateCounter = () => {
      current += increment
      if (current < target) {
        element.textContent = Math.floor(current) + (element.textContent.includes('%') ? '' : '')
        requestAnimationFrame(updateCounter)
      } else {
        element.textContent = target + (element.nextSibling?.textContent?.includes('%') ? '' : '')
      }
    }
    updateCounter()
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target)
        counterObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  document.querySelectorAll('.stat-number[data-target]').forEach(counter => {
    counterObserver.observe(counter)
  })

  // Initialize AOS-like animations with Intersection Observer
  const fadeElements = document.querySelectorAll('[data-aos]')
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
  }, { threshold: 0.1 })

  fadeElements.forEach(el => {
    el.style.opacity = '0'
    el.style.transform = 'translateY(30px)'
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
    fadeObserver.observe(el)
  })
})
</script>

<template>
  <article class="about active" data-page="about">
    <!-- Hero Section with Animated Background -->
    <div class="hero-section">
      <div class="particle-background" />
      <div class="hero-content">
        <div class="hero-text-wrapper">
          <h1 class="hero-greeting">Hi, I'm</h1>
          <h2 class="hero-name">
            <span class="gradient-text typing-text">Prashant Kumar</span>
          </h2>
          <p class="hero-tagline">
            <span class="typewriter">Software Engineer | Cloud Architect | Competitive Programmer</span>
          </p>
          <div class="hero-cta">
            <a href="/resume" class="cta-button primary">
              <span>View Resume</span>
              <ion-icon name="arrow-forward-outline" />
            </a>
            <a href="/portfolio" class="cta-button secondary">
              <span>See Projects</span>
              <ion-icon name="code-slash-outline" />
            </a>
          </div>
        </div>
      </div>
      <div class="scroll-indicator">
        <span class="scroll-text">Scroll to explore</span>
        <div class="scroll-arrow">
          <ion-icon name="chevron-down-outline" />
        </div>
      </div>
    </div>

    <!-- Stats Section -->
    <section class="stats-section">
      <div class="stat-card" data-aos="fade-up" data-aos-delay="0">
        <div class="stat-icon">
          <ion-icon name="trophy-outline" />
        </div>
        <div class="stat-number" data-target="1883">0</div>
        <div class="stat-label">LeetCode Rating</div>
      </div>
      <div class="stat-card" data-aos="fade-up" data-aos-delay="100">
        <div class="stat-icon">
          <ion-icon name="code-outline" />
        </div>
        <div class="stat-number stat-text">1K+</div>
        <div class="stat-label">Problems Solved</div>
      </div>
      <div class="stat-card" data-aos="fade-up" data-aos-delay="200">
        <div class="stat-icon">
          <ion-icon name="briefcase-outline" />
        </div>
        <div class="stat-number stat-text">2+</div>
        <div class="stat-label">Years Experience</div>
      </div>
    </section>

    <header>
      <h2 class="h2 article-title" data-aos="fade-right">
        {{ $t('pageTitles.about') }}
      </h2>
    </header>

    <section class="about-text" data-aos="fade-up">
      <p class="reveal-text">
        I am <strong class="highlight">Prashant Kumar</strong>, a Software Engineer currently working at <strong class="highlight">Lucidity</strong>, specializing in cloud infrastructure optimization and multi-cloud solutions. I hold a dual degree with a major in B.Tech Information Technology from IIIT Gwalior. With expertise in Python, Java, JavaScript, TypeScript, Go, and C++, I build scalable, efficient solutions that solve complex technical challenges.
      </p>

      <p class="reveal-text">
        My experience spans cloud platforms (AWS, Azure, GCP), backend development with microservices, and full-stack web applications. At Lucidity, I've improved multi-cloud visibility by <strong class="highlight">65%</strong>, reduced audit errors by <strong class="highlight">60%</strong>, and enhanced Azure ASR detection accuracy to <strong class="highlight">99.8%</strong>. I'm also an active competitive programmer with a LeetCode rating of <strong class="highlight">1883 (Knight)</strong> and Codeforces Specialist rank, having solved <strong class="highlight">1k+ problems</strong> across platforms.
      </p>

      <p class="reveal-text">
        I'm passionate about building high-performance systems, optimizing database queries, and contributing to open-source projects. When not coding, I enjoy tackling algorithmic challenges and learning new technologies.
      </p>
    </section>

    <!-- service -->

    <section class="service">
      <h3 class="h3 service-title" data-aos="fade-up">
        What I'm doing
      </h3>

      <ul class="service-list">
        <ServiceItem v-for="(service, index) in services" :key="service.id" :service="service" :data-aos="'zoom-in'" :data-aos-delay="index * 100" />
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
      <h3 class="h3 tech-stack-title" data-aos="fade-up">
        Tech Stack
      </h3>

      <ul class="tech-stack-list has-scrollbar">
        <li class="tech-stack-item floating" data-aos="flip-left" data-aos-delay="0">
          <img src="/images/python.png" alt="Python" class="tech-stack-logo">
          <span class="tech-tooltip">Python</span>
        </li>
        <li class="tech-stack-item floating" data-aos="flip-left" data-aos-delay="50">
          <img src="/images/js.png" alt="JavaScript" class="tech-stack-logo">
          <span class="tech-tooltip">JavaScript</span>
        </li>
        <li class="tech-stack-item floating" data-aos="flip-left" data-aos-delay="100">
          <img src="/images/ts.png" alt="TypeScript" class="tech-stack-logo">
          <span class="tech-tooltip">TypeScript</span>
        </li>
        <li class="tech-stack-item floating" data-aos="flip-left" data-aos-delay="150">
          <img src="/images/golang.png" alt="Go" class="tech-stack-logo">
          <span class="tech-tooltip">Go</span>
        </li>
        <li class="tech-stack-item floating" data-aos="flip-left" data-aos-delay="200">
          <img src="/images/cpp.png" alt="C++" class="tech-stack-logo">
          <span class="tech-tooltip">C++</span>
        </li>
        <li class="tech-stack-item floating" data-aos="flip-left" data-aos-delay="250">
          <img src="/images/nodejs.png" alt="Node.js" class="tech-stack-logo">
          <span class="tech-tooltip">Node.js</span>
        </li>
        <li class="tech-stack-item floating" data-aos="flip-left" data-aos-delay="300">
          <img src="/images/django.png" alt="Django" class="tech-stack-logo">
          <span class="tech-tooltip">Django</span>
        </li>
        <li class="tech-stack-item floating" data-aos="flip-left" data-aos-delay="350">
          <img src="/images/docker.png" alt="Docker" class="tech-stack-logo">
          <span class="tech-tooltip">Docker</span>
        </li>
        <li class="tech-stack-item floating" data-aos="flip-left" data-aos-delay="400">
          <img src="/images/aws.png" alt="AWS" class="tech-stack-logo">
          <span class="tech-tooltip">AWS</span>
        </li>
        <li class="tech-stack-item floating" data-aos="flip-left" data-aos-delay="450">
          <img src="/images/git.png" alt="Git" class="tech-stack-logo">
          <span class="tech-tooltip">Git</span>
        </li>
        <li class="tech-stack-item floating" data-aos="flip-left" data-aos-delay="500">
          <img src="/images/linux.png" alt="Linux" class="tech-stack-logo">
          <span class="tech-tooltip">Linux</span>
        </li>
        <li class="tech-stack-item floating" data-aos="flip-left" data-aos-delay="550">
          <img src="/images/sql.png" alt="PostgreSQL/MySQL" class="tech-stack-logo">
          <span class="tech-tooltip">PostgreSQL/MySQL</span>
        </li>
        <li class="tech-stack-item floating" data-aos="flip-left" data-aos-delay="600">
          <img src="/images/mongodb.png" alt="MongoDB" class="tech-stack-logo">
          <span class="tech-tooltip">MongoDB</span>
        </li>
        <li class="tech-stack-item floating" data-aos="flip-left" data-aos-delay="650">
          <img src="/images/redis.png" alt="Redis" class="tech-stack-logo">
          <span class="tech-tooltip">Redis</span>
        </li>
      </ul>
      <p class="tech-stack-note" style="margin-top: 1rem; font-size: 0.875rem; color: #999;">
        Also experienced with: Kubernetes, Kafka, Azure, GCP, React, Next.js, Unit Testing
      </p>
    </section>
  </article>
</template>

<style scoped>
/* Hero Section */
.hero-section {
  position: relative;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: -15px -15px 40px -15px;
  padding: 60px 30px;
  overflow: hidden;
  border-radius: 20px;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f1419 100%);
}

.particle-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(circle at 20% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 140, 0, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 20%, rgba(255, 165, 0, 0.08) 0%, transparent 50%);
  animation: particleFloat 20s ease-in-out infinite;
}

@keyframes particleFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -30px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
}

.hero-greeting {
  font-size: 1.5rem;
  color: var(--light-gray);
  margin-bottom: 0.5rem;
  animation: fadeInDown 0.6s ease-out;
}

.hero-name {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  animation: fadeInUp 0.6s ease-out 0.2s both;
}

.gradient-text {
  background: linear-gradient(135deg, #ffd700 0%, #ff8c00 50%, #ffd700 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.hero-tagline {
  font-size: 1.2rem;
  color: var(--light-gray-70);
  margin-bottom: 2rem;
  min-height: 30px;
  animation: fadeIn 0.6s ease-out 0.4s both;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeInUp 0.6s ease-out 0.6s both;
}

.cta-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 12px 28px;
  border-radius: 50px;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.cta-button:hover::before {
  width: 300px;
  height: 300px;
}

.cta-button span,
.cta-button ion-icon {
  position: relative;
  z-index: 1;
}

.cta-button.primary {
  background: linear-gradient(135deg, #ffd700, #ff8c00);
  color: var(--smoky-black);
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
}

.cta-button.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
}

.cta-button.secondary {
  background: transparent;
  color: var(--vegas-gold);
  border: 2px solid var(--vegas-gold);
}

.cta-button.secondary:hover {
  background: var(--vegas-gold);
  color: var(--smoky-black);
  transform: translateY(-2px);
}

.scroll-indicator {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  animation: fadeIn 1s ease-out 1s both;
}

.scroll-text {
  font-size: 0.85rem;
  color: var(--light-gray-70);
  text-transform: uppercase;
  letter-spacing: 2px;
}

.scroll-arrow {
  animation: bounce 2s infinite;
}

.scroll-arrow ion-icon {
  font-size: 24px;
  color: var(--vegas-gold);
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Stats Section */
.stats-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 3rem 0;
  padding: 0;
}

.stat-card {
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.05), rgba(255, 140, 0, 0.05));
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.1), transparent);
  transition: left 0.5s ease;
}

.stat-card:hover::before {
  left: 100%;
}

.stat-card:hover {
  transform: translateY(-5px);
  border-color: var(--vegas-gold);
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.2);
}

.stat-icon {
  font-size: 2.5rem;
  color: var(--vegas-gold);
  margin-bottom: 1rem;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--white-2);
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #ffd700, #ff8c00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--light-gray-70);
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Enhanced About Text */
.about-text .reveal-text {
  position: relative;
  line-height: 1.8;
}

.about-text .highlight {
  color: var(--vegas-gold);
  position: relative;
  font-weight: 600;
}

.about-text .highlight::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--vegas-gold), transparent);
  transition: width 0.3s ease;
}

.about-text .reveal-text:hover .highlight::after {
  width: 100%;
}

/* Tech Stack Enhancements */
.tech-stack {
  margin-top: 3rem;
}

.tech-stack-title {
  margin-bottom: 2rem;
  font-size: 1.8rem;
  font-weight: bold;
}

.tech-stack-list {
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  padding: 2rem 0;
}

.tech-stack-item {
  flex: 0 0 auto;
  position: relative;
  transition: transform 0.3s ease;
}

.tech-stack-item.floating {
  animation: float 3s ease-in-out infinite;
}

.tech-stack-item:nth-child(odd) {
  animation-delay: 0.5s;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.tech-stack-logo {
  width: 60px;
  height: 60px;
  object-fit: contain;
  filter: grayscale(0.3);
  transition: all 0.3s ease;
}

.tech-stack-item:hover .tech-stack-logo {
  filter: grayscale(0);
  transform: scale(1.2) rotate(5deg);
}

.tech-tooltip {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 215, 0, 0.9);
  color: var(--smoky-black);
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
}

.tech-stack-item:hover .tech-tooltip {
  opacity: 1;
  bottom: -35px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-name {
    font-size: 2rem;
  }

  .hero-tagline {
    font-size: 1rem;
  }

  .stats-section {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .stat-card {
    padding: 1.5rem 1rem;
  }

  .stat-number {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 40px 20px;
    min-height: 400px;
  }

  .hero-name {
    font-size: 1.75rem;
  }

  .hero-cta {
    flex-direction: column;
  }

  .cta-button {
    width: 100%;
    justify-content: center;
  }

  .stats-section {
    grid-template-columns: 1fr;
  }
}
</style>
