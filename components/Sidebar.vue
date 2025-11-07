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

      <button class="info_more-btn" @click="toggleMenu">
        <span>Show Contacts</span>
        <ion-icon name="chevron-down" />
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

            <a href="https://github.com/Algo-Voyager" class="contact-link" target="_blank">Algo-Voyager</a>
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

            <a href="https://www.linkedin.com/in/iampkumar" class="contact-link" target="_blank">Prashant Kumar</a>
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

            <a href="https://leetcode.com/vukoga/" class="contact-link" target="_blank">vukoga</a>
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

            <a href="https://codeforces.com/profile/_algo_voyager" class="contact-link" target="_blank">_algo_voyager</a>
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

<style scoped>
/* Enhanced Sidebar Styles */
.sidebar {
  position: relative;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.sidebar::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--vegas-gold), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.sidebar:hover::after {
  opacity: 1;
}

.avatar-box {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.avatar-box::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 140, 0, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: inherit;
}

.avatar-box:hover::before {
  opacity: 1;
}

.avatar-box img {
  transition: all 0.3s ease;
}

.avatar-box:hover img {
  transform: scale(1.05);
}

.name {
  position: relative;
  transition: all 0.3s ease;
}

.name::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--vegas-gold), var(--orange-yellow-crayola));
  transition: width 0.3s ease;
}

.sidebar:hover .name::after {
  width: 80%;
}

.contact-item {
  transition: all 0.3s ease;
  padding: 8px;
  border-radius: 12px;
}

.contact-item:hover {
  background: rgba(255, 215, 0, 0.05);
  transform: translateX(5px);
}

.icon-box {
  transition: all 0.3s ease;
}

.contact-item:hover .icon-box {
  transform: scale(1.1) rotate(5deg);
  background: linear-gradient(135deg, var(--vegas-gold), var(--orange-yellow-crayola));
}

.contact-link {
  position: relative;
  transition: all 0.3s ease;
}

.contact-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--vegas-gold);
  transition: width 0.3s ease;
}

.contact-item:hover .contact-link::after {
  width: 100%;
}

.info_more-btn {
  transition: all 0.3s ease;
}

.info_more-btn:hover {
  transform: scale(1.05);
}

.info_more-btn ion-icon {
  transition: transform 0.3s ease;
}

.sidebar.active .info_more-btn ion-icon {
  transform: rotate(180deg);
}

/* Staggered Animation for Contact Items */
.sidebar.active .contact-item {
  animation: slideInLeft 0.4s ease-out backwards;
}

.sidebar.active .contact-item:nth-child(1) { animation-delay: 0.1s; }
.sidebar.active .contact-item:nth-child(2) { animation-delay: 0.2s; }
.sidebar.active .contact-item:nth-child(3) { animation-delay: 0.3s; }
.sidebar.active .contact-item:nth-child(4) { animation-delay: 0.4s; }
.sidebar.active .contact-item:nth-child(5) { animation-delay: 0.5s; }

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
