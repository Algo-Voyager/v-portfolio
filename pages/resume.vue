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

          <ul class="timeline-text">
            <li><span style="color: #FFA500; display: inline-block; margin-right: 5px;">•</span> Developed a web application security scanning tool using Node.js, MySQL, and MongoDB.</li>
            <li><span style="color: #FFA500; display: inline-block; margin-right: 5px;">•</span> Integrated OWASP ZAP via Docker for security scanning of authenticated and non-authenticated environments.</li>
            <li><span style="color: #FFA500; display: inline-block; margin-right: 5px;">•</span> Designed a scheduling system for recurring and one-time security scans, improving efficiency by 30%.</li>
            <li><span style="color: #FFA500; display: inline-block; margin-right: 5px;">•</span> Created Docker-in-Docker solutions for seamless integration and environment setup, reducing setup time significantly.</li>
            <li><span style="color: #FFA500; display: inline-block; margin-right: 5px;">•</span> Contributed to team productivity enhancements by improving developer onboarding processes.</li>
          </ul>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Python Developer Intern at INeuron.ai
          </h4>

          <span>February 2024 — March 2024</span>

          <ul class="timeline-text">
            <li><span style="color: #FFA500; display: inline-block; margin-right: 5px;">•</span> Led a project focused on real-time communication through video conferencing and chat platforms.</li>
            <li><span style="color: #FFA500; display: inline-block; margin-right: 5px;">•</span> Reduced latency by 20% using WebRTC for peer-to-peer video calls, enabling smoother user interactions.</li>
            <li><span style="color: #FFA500; display: inline-block; margin-right: 5px;">•</span> Optimized server load by 30% by implementing efficient WebRTC signaling and connection handling mechanisms.</li>
            <li><span style="color: #FFA500; display: inline-block; margin-right: 5px;">•</span> Developed a robust architecture supporting scalable and reliable video communication for users.</li>
            <li><span style="color: #FFA500; display: inline-block; margin-right: 5px;">•</span> Utilized Agile methodologies to manage tasks, ensuring timely delivery of project milestones.</li>
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
