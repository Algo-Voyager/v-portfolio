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
      <!-- Enhanced Avatar with Gradient Border and Glow -->
      <div class="avatar-wrapper">
        <div class="avatar-glow"></div>
        <figure class="avatar-box">
          <img src="/images/my_photo.png" alt="Prashant Kumar" width="80">
          <div class="avatar-ring"></div>
        </figure>
        <div class="status-badge">
          <span class="status-dot"></span>
          <span class="status-text">Available</span>
        </div>
      </div>

      <div class="info-content">
        <h1 class="name" title="Prashant Kumar">
          <span class="name-text">Prashant Kumar</span>
          <span class="name-gradient">Prashant Kumar</span>
        </h1>

        <p class="title text-center xl:block flex items-center justify-center gap-1">
          <span class="xl:after:content-['']">Software Engineer</span>
        </p>

        <!-- Quick Stats -->
        <div class="quick-stats">
          <div class="stat-item">
            <ion-icon name="code-slash"></ion-icon>
            <span>Full Stack</span>
          </div>
          <div class="stat-separator"></div>
          <div class="stat-item">
            <ion-icon name="trophy"></ion-icon>
            <span>Competitive</span>
          </div>
        </div>
      </div>

      <button class="info_more-btn" @click="toggleMenu">
        <span>Show Contacts</span>
        <ion-icon name="chevron-down" />
      </button>
    </div>

    <div class="sidebar-info_more">
      <div class="separator" />

      <ul class="contacts-list">
        <li class="contact-item" data-platform="email">
          <div class="icon-box">
            <div class="icon-bg"></div>
            <ion-icon name="mail-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Email
            </p>

            <a href="mailto:iampkumar02@gmail.com" class="contact-link">
              <span class="link-text">iampkumar02@gmail.com</span>
              <ion-icon name="arrow-forward-outline" class="arrow-icon" />
            </a>
          </div>
        </li>

        <li class="contact-item" data-platform="github">
          <div class="icon-box">
            <div class="icon-bg"></div>
            <ion-icon name="logo-github" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Github
            </p>

            <a href="https://github.com/Algo-Voyager" class="contact-link" target="_blank">
              <span class="link-text">Algo-Voyager</span>
              <ion-icon name="arrow-forward-outline" class="arrow-icon" />
            </a>
          </div>
        </li>

        <li class="contact-item" data-platform="linkedin">
          <div class="icon-box">
            <div class="icon-bg"></div>
            <ion-icon name="logo-linkedin" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Linkedin
            </p>

            <a href="https://www.linkedin.com/in/iampkumar" class="contact-link" target="_blank">
              <span class="link-text">Prashant Kumar</span>
              <ion-icon name="arrow-forward-outline" class="arrow-icon" />
            </a>
          </div>
        </li>

        <li class="contact-item" data-platform="leetcode">
          <div class="icon-box">
            <div class="icon-bg"></div>
            <ion-icon name="code-slash-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              LeetCode
            </p>

            <a href="https://leetcode.com/vukoga/" class="contact-link" target="_blank">
              <span class="link-text">vukoga</span>
              <ion-icon name="arrow-forward-outline" class="arrow-icon" />
            </a>
          </div>
        </li>

        <li class="contact-item" data-platform="codeforces">
          <div class="icon-box">
            <div class="icon-bg"></div>
            <ion-icon name="barbell-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Codeforces
            </p>

            <a href="https://codeforces.com/profile/_algo_voyager" class="contact-link" target="_blank">
              <span class="link-text">_algo_voyager</span>
              <ion-icon name="arrow-forward-outline" class="arrow-icon" />
            </a>
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
/* ========================================
   ENHANCED MODERN SIDEBAR STYLES
   ======================================== */

/* Sidebar Base */
.sidebar {
  position: relative;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
}

.sidebar::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 215, 0, 0.03),
    transparent
  );
  transition: left 0.5s ease;
}

.sidebar:hover::before {
  left: 100%;
}

.sidebar::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--vegas-gold), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.sidebar:hover::after {
  opacity: 1;
}

/* ========================================
   AVATAR SECTION
   ======================================== */

.avatar-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
}

/* Animated Glow Effect */
.avatar-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 215, 0, 0.3),
    rgba(255, 140, 0, 0.2),
    transparent 70%
  );
  animation: pulse 3s ease-in-out infinite;
  z-index: 0;
}

@keyframes pulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.6;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 0.8;
  }
}

/* Avatar Box */
.avatar-box {
  position: relative;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  overflow: visible;
  padding: 0 !important;
  margin: 0;
  z-index: 2;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.avatar-box::before {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  padding: 4px;
  background: linear-gradient(
    135deg,
    var(--vegas-gold),
    var(--orange-yellow-crayola),
    #ff6b6b,
    var(--vegas-gold)
  );
  background-size: 300% 300%;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: gradientRotate 4s linear infinite;
  z-index: -1;
}

@keyframes gradientRotate {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.avatar-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  transition: all 0.4s ease;
  position: relative;
  z-index: 1;
}

.avatar-box:hover img {
  transform: scale(1.05);
  filter: brightness(1.1);
}

/* Rotating Ring */
.avatar-ring {
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  border: 2px dashed var(--vegas-gold);
  opacity: 0;
  transition: all 0.4s ease;
  animation: rotate 20s linear infinite;
}

.avatar-box:hover .avatar-ring {
  opacity: 0.5;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Status Badge */
.status-badge {
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(135deg, rgba(46, 213, 115, 0.15), rgba(46, 213, 115, 0.05));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(46, 213, 115, 0.3);
  border-radius: 20px;
  padding: 4px 12px;
  z-index: 3;
  animation: fadeInUp 0.6s ease-out 0.3s backwards;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #2ed573;
  box-shadow: 0 0 10px rgba(46, 213, 115, 0.5);
  animation: blink 2s ease-in-out infinite;
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}

.status-text {
  font-size: 11px;
  font-weight: 600;
  color: #2ed573;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* ========================================
   NAME & TITLE SECTION
   ======================================== */

.info-content {
  text-align: center;
  margin-bottom: 15px;
}

.name {
  position: relative;
  display: inline-block;
  margin-bottom: 10px;
}

.name-text {
  position: relative;
  z-index: 1;
}

.name-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    135deg,
    var(--vegas-gold),
    var(--orange-yellow-crayola),
    var(--vegas-gold)
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0;
  transition: opacity 0.3s ease;
  animation: gradientShift 3s ease infinite;
}

.sidebar:hover .name-gradient {
  opacity: 1;
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.name::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--vegas-gold), var(--orange-yellow-crayola));
  border-radius: 2px;
  transition: width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.sidebar:hover .name::after {
  width: 100%;
}

/* Quick Stats */
.quick-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 12px;
  padding: 8px 16px;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.05), rgba(255, 140, 0, 0.03));
  border-radius: 20px;
  border: 1px solid rgba(255, 215, 0, 0.1);
  animation: fadeInUp 0.6s ease-out 0.4s backwards;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  color: var(--light-gray);
  transition: all 0.3s ease;
}

.stat-item ion-icon {
  font-size: 16px;
  color: var(--vegas-gold);
}

.stat-item:hover {
  transform: translateY(-2px);
  color: var(--vegas-gold);
}

.stat-separator {
  width: 1px;
  height: 16px;
  background: linear-gradient(to bottom, transparent, var(--vegas-gold), transparent);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ========================================
   CONTACT ITEMS
   ======================================== */

.contact-item {
  position: relative;
  padding: 12px;
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  overflow: hidden;
}

.contact-item::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.05), rgba(255, 140, 0, 0.03));
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: inherit;
}

.contact-item:hover::before {
  opacity: 1;
}

.contact-item::after {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 0;
  background: linear-gradient(to bottom, var(--vegas-gold), var(--orange-yellow-crayola));
  border-radius: 0 2px 2px 0;
  transition: height 0.3s ease;
}

.contact-item:hover::after {
  height: 60%;
}

.contact-item:hover {
  transform: translateX(8px);
  background: rgba(255, 215, 0, 0.03);
}

/* Icon Box */
.icon-box {
  position: relative;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.icon-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 140, 0, 0.05));
  opacity: 1;
  transition: all 0.4s ease;
}

.contact-item:hover .icon-bg {
  background: linear-gradient(135deg, var(--vegas-gold), var(--orange-yellow-crayola));
  opacity: 1;
}

.icon-box ion-icon {
  position: relative;
  font-size: 24px;
  color: var(--vegas-gold);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 1;
}

.contact-item:hover .icon-box {
  transform: scale(1.1) rotate(-5deg);
}

.contact-item:hover .icon-box ion-icon {
  color: var(--eerie-black-1);
  transform: scale(1.1);
}

/* Platform-Specific Colors */
.contact-item[data-platform="github"]:hover .icon-bg {
  background: linear-gradient(135deg, #6e5494, #8b67c4);
}

.contact-item[data-platform="linkedin"]:hover .icon-bg {
  background: linear-gradient(135deg, #0077b5, #00a0dc);
}

.contact-item[data-platform="leetcode"]:hover .icon-bg {
  background: linear-gradient(135deg, #ffa116, #ffb700);
}

.contact-item[data-platform="email"]:hover .icon-bg {
  background: linear-gradient(135deg, #ea4335, #ff6b6b);
}

.contact-item[data-platform="codeforces"]:hover .icon-bg {
  background: linear-gradient(135deg, #1f8dd6, #00bfff);
}

/* Contact Link */
.contact-link {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  transition: all 0.3s ease;
}

.link-text {
  transition: all 0.3s ease;
}

.arrow-icon {
  font-size: 18px;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.contact-item:hover .arrow-icon {
  opacity: 1;
  transform: translateX(0);
}

.contact-item:hover .link-text {
  color: var(--vegas-gold);
}

/* Button */
.info_more-btn {
  position: relative;
  transition: all 0.3s ease;
  overflow: hidden;
}

.info_more-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 140, 0, 0.05));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.info_more-btn:hover::before {
  opacity: 1;
}

.info_more-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 215, 0, 0.2);
}

.info_more-btn ion-icon {
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.sidebar.active .info_more-btn ion-icon {
  transform: rotate(180deg);
}

/* Staggered Animation for Contact Items */
.sidebar.active .contact-item {
  animation: slideInLeft 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) backwards;
}

.sidebar.active .contact-item:nth-child(1) { animation-delay: 0.1s; }
.sidebar.active .contact-item:nth-child(2) { animation-delay: 0.15s; }
.sidebar.active .contact-item:nth-child(3) { animation-delay: 0.2s; }
.sidebar.active .contact-item:nth-child(4) { animation-delay: 0.25s; }
.sidebar.active .contact-item:nth-child(5) { animation-delay: 0.3s; }

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Separator Enhancement */
.separator {
  position: relative;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 215, 0, 0.2),
    transparent
  );
  margin: 16px 0;
}
</style>
