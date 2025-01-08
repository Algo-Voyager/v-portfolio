<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const formRef = ref(null)

// Access the environment variables:
const serviceId = import.meta.env.VITE_SERVICE_ID
const templateId = import.meta.env.VITE_TEMPLATE_ID
const publicKey = import.meta.env.VITE_PUBLIC_KEY

const handleSubmit = (event) => {
  event.preventDefault()

  // Use EmailJS to send the form
  emailjs.sendForm(serviceId, templateId, formRef.value, publicKey)
    .then((result) => {
      console.log('Success:', result.text)
      alert('Your message has been sent successfully!')
      formRef.value.reset()
    })
    .catch((error) => {
      console.error('Error:', error)
      alert('Oops! Something went wrong. Please try again.')
    })
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
          >

          <input
            type="email" 
            name="email" 
            class="form-input" 
            placeholder="Email address" 
            required
            data-form-input
          >
        </div>

        <textarea 
          name="message" 
          class="form-input" 
          placeholder="Your Message" 
          required 
          data-form-input
        />

        <button class="form-btn" type="submit" data-form-btn>
          <ion-icon name="paper-plane" />
          <span>Send Message</span>
        </button>
      </form>
    </section>
  </article>
</template>
