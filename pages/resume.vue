<script setup>
useHead({
  title: 'Resume',
})
</script>

<template>
  <article class="resume active" data-page="resume">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.resume') }}
      </h2>
    </header>

    <!-- Education Section -->
    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline" />
        </div>

        <h3 class="h3">
          Education
        </h3>
      </div>

      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Indian Institute of Information Technology, Gwalior
          </h4>

          <span>2020 — 2025</span>

          <p class="timeline-text">
            Dual Degree (B.Tech + Masters) majoring in Information Technology. Coursework included Computer Networks, Database Management Systems, Object-Oriented Programming, and Operating Systems.
          </p>
        </li>
      </ol>
    </section>

    <!-- Experience Section -->
    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="briefcase-outline" />
        </div>

        <h3 class="h3">
          Experience
        </h3>
      </div>

      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Software Developer Intern at Lucidity
          </h4>

          <span>March 2025 — Present</span>

          <ul class="timeline-text">
            <li><span style="color: #FFA500; display: inline-block; margin-right: 5px;">•</span> Built an Azure disk v1→v2 upgrade checker with CPL API, updated DB rules, and cut audit time by 60%.</li>
            <li><span style="color: #FFA500; display: inline-block; margin-right: 5px;">•</span> Enhanced Azure ASR detection accuracy to 99.8% by switching to Recovery Services and Compute APIs.</li>
            <li><span style="color: #FFA500; display: inline-block; margin-right: 5px;">•</span> Implemented multi-cloud discovery for EKS, AKS, Databricks, and ROSA across AWS, Azure, and GCP, added pagination and least-privilege IAM, improving visibility by 65% and AKS tracking to 99.9%.</li>
            <li><span style="color: #FFA500; display: inline-block; margin-right: 5px;">•</span> Reduced AWS audit "Unknown" errors by 40% across 6k+ VMs by fixing SSM, IAM, and API throttling; added spanned-volume detection (Windows Dynamic Disks, LVM) to block unsupported disks in prod.</li>
          </ul>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Software Engineer Intern at Secure Blink
          </h4>

          <span>April 2024 — July 2024</span>

          <ul class="timeline-text">
            <li><span style="color: #FFA500; display: inline-block; margin-right: 5px;">•</span> Designed a web application security scanning tool using Node.js, MySQL, and MongoDB, managing 12+ APIs.</li>
            <li><span style="color: #FFA500; display: inline-block; margin-right: 5px;">•</span> Integrated OWASP ZAP via Docker for authenticated and non-authenticated security scanning.</li>
            <li><span style="color: #FFA500; display: inline-block; margin-right: 5px;">•</span> Developed a Docker-in-Docker solution that cut setup time by 30% and boosted team productivity.</li>
          </ul>
        </li>
      </ol>
    </section>

    <!-- Download Resume Button -->
    <section class="download-resume">
      <a
        href="https://drive.google.com/file/d/1ltJ1Gowg2qIeynTflOhqXVpZ_DlT6SP-/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        class="download-button"
      >
        <ion-icon name="download-outline"></ion-icon>
        <span>Download Resume</span>
      </a>
    </section>
  </article>
</template>

<style scoped>
/* ========================================
   ENHANCED RESUME SECTION STYLES
   ======================================== */

/* Section Title Wrapper Enhancement */
:deep(.title-wrapper) {
  position: relative;
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
  padding: 20px;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.08), rgba(255, 140, 0, 0.04));
  border-radius: 16px;
  border: 1px solid rgba(255, 215, 0, 0.15);
  overflow: hidden;
  transition: all 0.3s ease;
}

:deep(.title-wrapper::before) {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.1), transparent);
  transition: left 0.6s ease;
}

:deep(.title-wrapper:hover::before) {
  left: 100%;
}

:deep(.title-wrapper:hover) {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 215, 0, 0.15);
}

/* Icon Box Enhancement */
:deep(.icon-box) {
  position: relative;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--vegas-gold), var(--orange-yellow-crayola));
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

:deep(.icon-box::before) {
  content: '';
  position: absolute;
  inset: -2px;
  background: linear-gradient(135deg, var(--vegas-gold), var(--orange-yellow-crayola), var(--vegas-gold));
  border-radius: 14px;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

:deep(.title-wrapper:hover .icon-box::before) {
  opacity: 1;
  animation: pulse-border 2s ease-in-out infinite;
}

@keyframes pulse-border {
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
}

:deep(.icon-box ion-icon) {
  font-size: 28px;
  color: var(--eerie-black-1);
  transition: all 0.4s ease;
}

:deep(.title-wrapper:hover .icon-box) {
  transform: rotate(5deg) scale(1.1);
}

:deep(.title-wrapper:hover .icon-box ion-icon) {
  transform: rotate(-5deg);
}

/* Section Title */
:deep(.h3) {
  position: relative;
  margin: 0;
  background: linear-gradient(135deg, var(--white-1), var(--light-gray-70));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease;
}

:deep(.title-wrapper:hover .h3) {
  background: linear-gradient(135deg, var(--vegas-gold), var(--orange-yellow-crayola));
  -webkit-background-clip: text;
  background-clip: text;
}

/* Timeline List Enhancement */
:deep(.timeline-list) {
  position: relative;
  padding-left: 45px;
}

:deep(.timeline-list::before) {
  content: '';
  position: absolute;
  left: 7px;
  top: 10px;
  bottom: 10px;
  width: 2px;
  background: linear-gradient(to bottom,
    var(--vegas-gold) 0%,
    var(--orange-yellow-crayola) 50%,
    var(--vegas-gold) 100%);
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
}

/* Timeline Item Enhancement */
:deep(.timeline-item) {
  position: relative;
  margin-bottom: 30px;
  padding: 20px;
  background: linear-gradient(135deg, rgba(45, 45, 45, 0.4), rgba(35, 35, 35, 0.3));
  border-radius: 16px;
  border: 1px solid rgba(255, 215, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
}

:deep(.timeline-item::before) {
  content: '';
  position: absolute;
  left: -45px;
  top: 24px;
  width: 16px;
  height: 16px;
  background: linear-gradient(135deg, var(--vegas-gold), var(--orange-yellow-crayola));
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(255, 215, 0, 0.2), 0 0 15px rgba(255, 215, 0, 0.4);
  z-index: 2;
  transition: all 0.3s ease;
}

:deep(.timeline-item:hover::before) {
  transform: scale(1.3);
  box-shadow: 0 0 0 6px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.6);
}

:deep(.timeline-item::after) {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.05), rgba(255, 140, 0, 0.02));
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: inherit;
}

:deep(.timeline-item:hover::after) {
  opacity: 1;
}

:deep(.timeline-item:hover) {
  transform: translateX(8px);
  border-color: rgba(255, 215, 0, 0.3);
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.15);
}

/* Timeline Item Title */
:deep(.timeline-item-title) {
  color: var(--white-1);
  margin-bottom: 10px;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
}

:deep(.timeline-item-title a) {
  position: relative;
  transition: all 0.3s ease;
}

:deep(.timeline-item-title a::after) {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--vegas-gold), var(--orange-yellow-crayola));
  transition: width 0.3s ease;
}

:deep(.timeline-item:hover .timeline-item-title a::after) {
  width: 100%;
}

:deep(.timeline-item:hover .timeline-item-title) {
  color: var(--vegas-gold);
}

/* Timeline Date Span */
:deep(.timeline-item > span) {
  display: inline-block;
  padding: 4px 12px;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(255, 140, 0, 0.1));
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  color: var(--vegas-gold);
  margin-bottom: 15px;
  transition: all 0.3s ease;
}

:deep(.timeline-item:hover > span) {
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.25), rgba(255, 140, 0, 0.15));
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(255, 215, 0, 0.2);
}

/* Timeline Text / Bullet Lists */
:deep(.timeline-text) {
  margin: 0;
  padding-left: 0;
  list-style: none;
}

:deep(.timeline-text li) {
  position: relative;
  padding-left: 0;
  margin-bottom: 12px;
  line-height: 1.8;
  transition: all 0.3s ease;
}

:deep(.timeline-text li:hover) {
  transform: translateX(5px);
  color: var(--light-gray-70);
}

:deep(.timeline-text li span) {
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  margin-right: 10px;
  background: linear-gradient(135deg, var(--vegas-gold), var(--orange-yellow-crayola));
  border-radius: 50%;
  font-size: 12px;
  transition: all 0.3s ease;
  vertical-align: middle;
}

:deep(.timeline-text li:hover span) {
  transform: rotate(90deg) scale(1.2);
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
}

/* Download Resume Button */
.download-resume {
  text-align: center;
  margin-top: 50px;
  animation: fadeInUp 0.6s ease-out 0.3s backwards;
}

.download-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 40px;
  background: linear-gradient(135deg, var(--vegas-gold), var(--orange-yellow-crayola));
  color: var(--eerie-black-1);
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;
  border-radius: 50px;
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.3);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
}

.download-button::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--orange-yellow-crayola), var(--vegas-gold));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.download-button:hover::before {
  opacity: 1;
}

.download-button::after {
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

.download-button:hover::after {
  width: 300px;
  height: 300px;
}

.download-button ion-icon,
.download-button span {
  position: relative;
  z-index: 1;
}

.download-button ion-icon {
  font-size: 24px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.download-button:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 15px 35px rgba(255, 215, 0, 0.4);
}

.download-button:hover ion-icon {
  transform: translateY(3px);
  animation: bounce 0.6s ease infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(5px);
  }
}

.download-button:active {
  transform: translateY(-2px) scale(1.02);
}

/* Fade In Animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Staggered animations for timeline items */
:deep(.timeline-item) {
  animation: fadeInLeft 0.6s ease-out backwards;
}

:deep(.timeline-item:nth-child(1)) { animation-delay: 0.1s; }
:deep(.timeline-item:nth-child(2)) { animation-delay: 0.2s; }
:deep(.timeline-item:nth-child(3)) { animation-delay: 0.3s; }
:deep(.timeline-item:nth-child(4)) { animation-delay: 0.4s; }

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Section animations */
:deep(.timeline) {
  animation: fadeIn 0.8s ease-out backwards;
}

:deep(.timeline:nth-of-type(1)) { animation-delay: 0.1s; }
:deep(.timeline:nth-of-type(2)) { animation-delay: 0.2s; }

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
