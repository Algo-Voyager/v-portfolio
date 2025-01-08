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

const handleSubmit = async () => {
  if (!formRef.value) {
    console.error('Form reference is null.')
    alert('Form is not available.')
    return
  }

  isLoading.value = true

  try {
    const result = await emailjs.sendForm(serviceId, templateId, formRef.value, publicKey)
    console.log('Success:', result.text)
    alert('Message sent successfully!')
    formRef.value.reset()
  } catch (error) {
    console.error('Error sending email:', error)
    alert('Oops! Something went wrong.')
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

        <button class="form-btn" type="submit" data-form-btn>
          <ion-icon name="paper-plane"></ion-icon>
          <span>Send Message</span>
        </button>
      </form>
    </section>
  </article>
</template>
