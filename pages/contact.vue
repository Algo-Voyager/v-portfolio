<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRuntimeConfig } from '#app'
import emailjs from '@emailjs/browser'

// Get runtime config
const runtimeConfig = useRuntimeConfig()

// Define formRef with proper typing
const formRef = ref<HTMLFormElement | null>(null)

const serviceId = runtimeConfig.public.serviceId
const templateId = runtimeConfig.public.templateId
const publicKey = runtimeConfig.public.publicKey

const isLoading = ref(false)
const showSuccess = ref(false)
const showError = ref(false)

const handleSubmit = async () => {
  if (!formRef.value) {
    console.error('Form reference is null.')
    showError.value = true
    setTimeout(() => showError.value = false, 3000)
    return
  }

  isLoading.value = true
  showSuccess.value = false
  showError.value = false

  try {
    const result = await emailjs.sendForm(serviceId, templateId, formRef.value, publicKey)
    console.log('Success:', result.text)
    showSuccess.value = true
    formRef.value.reset()
    setTimeout(() => showSuccess.value = false, 5000)
  } catch (error) {
    console.error('Error sending email:', error)
    showError.value = true
    setTimeout(() => showError.value = false, 3000)
  } finally {
    isLoading.value = false
  }
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
  <article class="contact active" data-page="contact">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.contact') }}
      </h2>
    </header>

    <!-- Contact Info Cards -->
    <section class="contact-info" data-aos="fade-up">
      <div class="info-card">
        <div class="info-icon">
          <ion-icon name="mail-outline"></ion-icon>
        </div>
        <div class="info-content">
          <h4>Email</h4>
          <a href="mailto:iampkumar02@gmail.com">iampkumar02@gmail.com</a>
        </div>
      </div>

      <div class="info-card">
        <div class="info-icon">
          <ion-icon name="logo-github"></ion-icon>
        </div>
        <div class="info-content">
          <h4>GitHub</h4>
          <a href="https://github.com/Algo-Voyager" target="_blank">Algo-Voyager</a>
        </div>
      </div>

      <div class="info-card">
        <div class="info-icon">
          <ion-icon name="logo-linkedin"></ion-icon>
        </div>
        <div class="info-content">
          <h4>LinkedIn</h4>
          <a href="https://www.linkedin.com/in/iampkumar" target="_blank">Prashant Kumar</a>
        </div>
      </div>
    </section>

    <section class="contact-form" data-aos="fade-up" data-aos-delay="200">
      <h3 class="h3 form-title">
        <ion-icon name="chatbubbles-outline"></ion-icon>
        Send Me a Message
      </h3>

      <!-- Success Message -->
      <transition name="slide-fade">
        <div v-if="showSuccess" class="alert alert-success">
          <ion-icon name="checkmark-circle-outline"></ion-icon>
          <span>Message sent successfully! I'll get back to you soon.</span>
        </div>
      </transition>

      <!-- Error Message -->
      <transition name="slide-fade">
        <div v-if="showError" class="alert alert-error">
          <ion-icon name="alert-circle-outline"></ion-icon>
          <span>Oops! Something went wrong. Please try again.</span>
        </div>
      </transition>

      <form ref="formRef" @submit.prevent="handleSubmit" class="form" data-form>
        <div class="input-wrapper">
          <div class="form-group">
            <ion-icon name="person-outline" class="input-icon"></ion-icon>
            <input
              type="text"
              name="fullname"
              class="form-input"
              placeholder="Full name"
              required
              data-form-input
            />
          </div>

          <div class="form-group">
            <ion-icon name="mail-outline" class="input-icon"></ion-icon>
            <input
              type="email"
              name="email"
              class="form-input"
              placeholder="Email address"
              required
              data-form-input
            />
          </div>
        </div>

        <div class="form-group">
          <ion-icon name="chatbox-outline" class="input-icon"></ion-icon>
          <textarea
            name="message"
            class="form-input"
            placeholder="Your Message"
            required
            data-form-input
            rows="6"
          ></textarea>
        </div>

        <button class="form-btn" type="submit" :disabled="isLoading" data-form-btn>
          <span class="btn-content">
            <ion-icon v-if="!isLoading" name="paper-plane"></ion-icon>
            <div v-else class="spinner"></div>
            <span>{{ isLoading ? 'Sending...' : 'Send Message' }}</span>
          </span>
        </button>
      </form>
    </section>
  </article>
</template>

<style scoped>
/* ========================================
   ENHANCED CONTACT PAGE STYLES
   ======================================== */

/* Contact Info Cards */
.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.info-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.05), rgba(255, 140, 0, 0.03));
  border: 1px solid rgba(255, 215, 0, 0.15);
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
}

.info-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.1), transparent);
  transition: left 0.6s ease;
}

.info-card:hover::before {
  left: 100%;
}

.info-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 215, 0, 0.3);
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.2);
}

.info-icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--vegas-gold), var(--orange-yellow-crayola));
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
  transition: all 0.4s ease;
}

.info-card:hover .info-icon {
  transform: rotate(-10deg) scale(1.1);
}

.info-icon ion-icon {
  font-size: 24px;
  color: var(--eerie-black-1);
}

.info-content h4 {
  font-size: 0.875rem;
  color: var(--light-gray-70);
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.info-content a {
  color: var(--white-1);
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
}

.info-content a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--vegas-gold), var(--orange-yellow-crayola));
  transition: width 0.3s ease;
}

.info-card:hover .info-content a::after {
  width: 100%;
}

.info-card:hover .info-content a {
  color: var(--vegas-gold);
}

/* Form Section */
.contact-form {
  position: relative;
}

.form-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.08), rgba(255, 140, 0, 0.04));
  border-radius: 16px;
  border: 1px solid rgba(255, 215, 0, 0.15);
}

.form-title ion-icon {
  font-size: 28px;
  color: var(--vegas-gold);
}

/* Alert Messages */
.alert {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  animation: slideInDown 0.4s ease-out;
}

.alert ion-icon {
  font-size: 24px;
}

.alert-success {
  background: linear-gradient(135deg, rgba(46, 213, 115, 0.15), rgba(46, 213, 115, 0.05));
  border: 1px solid rgba(46, 213, 115, 0.3);
  color: #2ed573;
}

.alert-error {
  background: linear-gradient(135deg, rgba(255, 71, 87, 0.15), rgba(255, 71, 87, 0.05));
  border: 1px solid rgba(255, 71, 87, 0.3);
  color: #ff4757;
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Transition for alerts */
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.4s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Form Styling */
.form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.input-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.form-group {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 1.25rem;
  font-size: 20px;
  color: var(--vegas-gold);
  z-index: 1;
  transition: all 0.3s ease;
  pointer-events: none;
}

.form-input {
  width: 100%;
  padding: 1rem 1rem 1rem 3.25rem;
  background: rgba(45, 45, 45, 0.4);
  border: 2px solid rgba(255, 215, 0, 0.1);
  border-radius: 14px;
  color: var(--white-1);
  font-size: 0.95rem;
  transition: all 0.3s ease;
  outline: none;
  font-family: inherit;
}

.form-input::placeholder {
  color: var(--light-gray-70);
  transition: all 0.3s ease;
}

.form-input:focus {
  border-color: var(--vegas-gold);
  background: rgba(45, 45, 45, 0.6);
  box-shadow: 0 0 0 4px rgba(255, 215, 0, 0.1);
}

.form-input:focus + .input-icon,
.form-input:focus ~ .input-icon {
  color: var(--orange-yellow-crayola);
  transform: scale(1.1);
}

textarea.form-input {
  resize: vertical;
  min-height: 150px;
  line-height: 1.6;
}

/* Submit Button */
.form-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, var(--vegas-gold), var(--orange-yellow-crayola));
  color: var(--eerie-black-1);
  font-weight: 700;
  font-size: 1rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.3);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
  margin-top: 1rem;
}

.form-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--orange-yellow-crayola), var(--vegas-gold));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.form-btn:hover::before {
  opacity: 1;
}

.form-btn::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease;
}

.form-btn:hover::after {
  width: 400px;
  height: 400px;
}

.btn-content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-content ion-icon {
  font-size: 20px;
  transition: all 0.4s ease;
}

.form-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(255, 215, 0, 0.4);
}

.form-btn:hover .btn-content ion-icon {
  transform: translateX(5px);
}

.form-btn:active {
  transform: translateY(-1px);
}

.form-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.form-btn:disabled:hover {
  transform: none;
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.3);
}

/* Loading Spinner */
.spinner {
  width: 20px;
  height: 20px;
  border: 3px solid rgba(0, 0, 0, 0.3);
  border-top-color: var(--eerie-black-1);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-info {
    grid-template-columns: 1fr;
  }

  .input-wrapper {
    grid-template-columns: 1fr;
  }

  .info-card {
    padding: 1.25rem;
  }

  .form-input {
    padding: 0.875rem 0.875rem 0.875rem 3rem;
  }
}

@media (max-width: 480px) {
  .form-title {
    padding: 0.875rem 1.25rem;
    font-size: 1.25rem;
  }

  .info-icon {
    width: 45px;
    height: 45px;
  }

  .info-icon ion-icon {
    font-size: 22px;
  }

  .form-btn {
    padding: 0.875rem 2rem;
  }
}
</style>
