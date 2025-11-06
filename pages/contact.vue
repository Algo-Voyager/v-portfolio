<script setup lang="ts">
import { ref } from 'vue'
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

const successMessage = ref('')
const errorMessage = ref('')

const handleSubmit = async () => {
  if (!formRef.value) {
    errorMessage.value = 'Form is not available. Please try again.'
    return
  }

  isLoading.value = true
  successMessage.value = ''
  errorMessage.value = ''

  try {
    await emailjs.sendForm(serviceId, templateId, formRef.value, publicKey)
    successMessage.value = 'Message sent successfully! I will get back to you soon.'
    formRef.value.reset()
  } catch (error) {
    errorMessage.value = 'Oops! Something went wrong. Please try again or contact me directly via email.'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <article class="contact active" data-page="contact">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.contact') }}
      </h2>
    </header>

    <section class="contact-form">
      <h3 class="h3 form-title">Contact Form</h3>

      <div v-if="successMessage" class="mb-4 p-4 bg-green-500 bg-opacity-20 border border-green-500 rounded text-green-400">
        {{ successMessage }}
      </div>

      <div v-if="errorMessage" class="mb-4 p-4 bg-red-500 bg-opacity-20 border border-red-500 rounded text-red-400">
        {{ errorMessage }}
      </div>

      <form ref="formRef" @submit.prevent="handleSubmit" class="form" data-form>
        <div class="input-wrapper">
          <input 
            type="text" 
            name="fullname" 
            class="form-input" 
            placeholder="Full name" 
            required 
            data-form-input
          />

          <input
            type="email" 
            name="email" 
            class="form-input" 
            placeholder="Email address" 
            required
            data-form-input
          />
        </div>

        <textarea 
          name="message" 
          class="form-input" 
          placeholder="Your Message" 
          required 
          data-form-input
        ></textarea>

        <button class="form-btn" type="submit" :disabled="isLoading" data-form-btn>
          <ion-icon v-if="!isLoading" name="paper-plane"></ion-icon>
          <ion-icon v-else name="hourglass-outline" class="animate-pulse"></ion-icon>
          <span>{{ isLoading ? 'Sending...' : 'Send Message' }}</span>
        </button>
      </form>
    </section>
  </article>
</template>
