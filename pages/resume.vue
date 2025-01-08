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

          <span>2020 — 2025 (Expected)</span>

          <p class="timeline-text">
            Pursuing a dual degree program (B.Tech in Information Technology + Masters). Completed coursework in Computer Networks, Database Management Systems, OOPS, and Operating Systems.
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
            Software Engineer Intern at Secure Blink
          </h4>

          <span>April 2024 — July 2024</span>

          <p class="timeline-text">
            Developed a web application security scanning tool using Node.js, MySQL, and MongoDB. Integrated OWASP ZAP via Docker and implemented a scheduling system for recurring and one-time scans.
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Python Developer Intern at INeuron.ai
          </h4>

          <span>February 2024 — March 2024</span>

          <p class="timeline-text">
            Led a project on real-time communication through video conferencing and chat. Reduced latency by 20% using WebRTC for P2P video calls and decreased server load by 30%.
          </p>
        </li>
      </ol>
    </section>

    <!-- Skills Section -->
    <section class="skill">
      <h3 class="h3 skills-title">
        My Skills
      </h3>

      <ul class="skills-list content-card">
        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              C++
            </h5>
            <data value="90">90%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 90%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Python
            </h5>
            <data value="85">85%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 85%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              JavaScript
            </h5>
            <data value="75">75%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 75%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Docker
            </h5>
            <data value="80">80%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 80%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              AWS
            </h5>
            <data value="70">70%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 70%;" />
          </div>
        </li>
      </ul>
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
        Download Resume
      </a>
    </section>
  </article>
</template>

<style scoped>
/* Styles for the Download Resume Button */
.download-resume {
  text-align: center; /* Center the button */
  margin-top: 2rem; /* Add some spacing above the button */
}

.download-button {
  display: inline-flex;
  align-items: center;
  background-color: #007BFF; /* Primary color */
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.download-button ion-icon {
  margin-right: 0.5rem; /* Space between icon and text */
  font-size: 1.2rem;
}

.download-button:hover {
  background-color: #0056b3; /* Darker shade on hover */
  transform: translateY(-2px); /* Slight lift on hover */
}

.download-button:active {
  transform: translateY(0); /* Remove lift on click */
}
</style>
