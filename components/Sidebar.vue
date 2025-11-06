<script setup>
import { ref } from 'vue';

let isOpen = ref(false);

function toggleMenu() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <aside class="sidebar" :class="{ active: isOpen }">
    <div class="sidebar-info">
      <figure class="avatar-box" style="padding: 15px;">
        <img src="/images/my_photo.png" alt="Prashant Kumar" width="80">
      </figure>

      <div class="info-content">
        <h1 class="name" title="Prashant Kumar">
          Prashant Kumar
        </h1>

        <p class="title text-center xl:block flex items-center justify-center gap-1">
          <span class="xl:after:content-['']">Software Engineer</span>
        </p>
      </div>

      <button class="info_more-btn" @click="toggleMenu" :aria-expanded="isOpen" aria-label="Toggle contact information">
        <span>{{ isOpen ? 'Hide Contacts' : 'Show Contacts' }}</span>
        <ion-icon :name="isOpen ? 'chevron-up' : 'chevron-down'" />
      </button>
    </div>

    <div class="sidebar-info_more">
      <div class="separator" />

      <ul class="contacts-list">
        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="mail-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Email
            </p>

            <a href="mailto:iampkumar02@gmail.com" class="contact-link">iampkumar02@gmail.com</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-github" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Github
            </p>

            <a href="https://github.com/Algo-Voyager" class="contact-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (opens in new tab)">Algo-Voyager</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-linkedin" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Linkedin
            </p>

            <a href="https://www.linkedin.com/in/iampkumar" class="contact-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile (opens in new tab)">Prashant Kumar</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="code-slash-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              LeetCode
            </p>

            <a href="https://leetcode.com/vukoga/" class="contact-link" target="_blank" rel="noopener noreferrer" aria-label="LeetCode profile (opens in new tab)">vukoga</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="barbell-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Codeforces
            </p>

            <a href="https://codeforces.com/profile/_algo_voyager" class="contact-link" target="_blank" rel="noopener noreferrer" aria-label="Codeforces profile (opens in new tab)">_algo_voyager</a>
          </div>
        </li>

        <!-- <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="location-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Location
            </p>

            <address>India</address>
          </div>
        </li> -->
      </ul>

      <div class="separator" />

      <!-- <ul class="social-list">
        <li class="social-item">
          <a href="https://www.twitter.com/iampkumar02" class="social-link" target="_blank">
            <ion-icon name="logo-twitter" />
          </a>
        </li>

        <li class="social-item">
          <a href="https://www.instagram.com/__kumar_prashant_02" class="social-link" target="_blank">
            <ion-icon name="logo-instagram" />
          </a>
        </li>
        <LangSwitcher2 />
      </ul> -->
    </div>
  </aside>
</template>
