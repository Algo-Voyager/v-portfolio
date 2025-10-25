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
            <li><span style="color: #FFA500; display: inline-block; margin-right: 5px;">•</span> Made Azure ASR detection 100% accurate by switching to Recovery Services and Compute APIs.</li>
            <li><span style="color: #FFA500; display: inline-block; margin-right: 5px;">•</span> Implemented multi-cloud discovery for EKS, AKS, Databricks, and ROSA across AWS, Azure, and GCP, added pagination and least-privilege IAM, improving visibility by 40% and AKS tracking to 99.9%.</li>
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

    <!-- Coding Platforms Section -->
    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="code-slash-outline" />
        </div>

        <h3 class="h3">
          Coding Platforms
        </h3>
      </div>

      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            <a href="https://leetcode.com/vukoga" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;">
              LeetCode - vukoga
            </a>
          </h4>

          <p class="timeline-text">
            Achieved a maximum rating of 1883 (Knight), solving over 300 problems.
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            <a href="https://codeforces.com/profile/_algo_voyager" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;">
              Codeforces - _algo_voyager
            </a>
          </h4>

          <p class="timeline-text">
            Attained Specialist rank with a peak rating of 1448.
          </p>
        </li>
      </ol>
    </section>

    <!-- Achievements Section -->
    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="trophy-outline" />
        </div>

        <h3 class="h3">
          Achievements
        </h3>
      </div>

      <ol class="timeline-list">
        <li class="timeline-item">
          <p class="timeline-text">
            <span style="color: #FFA500; display: inline-block; margin-right: 5px;">•</span> Secured 380th position in the Codeforces Round 995
          </p>
        </li>

        <li class="timeline-item">
          <p class="timeline-text">
            <span style="color: #FFA500; display: inline-block; margin-right: 5px;">•</span> Attained 154th rank in the LeetCode Weekly Contest 431
          </p>
        </li>

        <li class="timeline-item">
          <p class="timeline-text">
            <span style="color: #FFA500; display: inline-block; margin-right: 5px;">•</span> Solved 700+ competitive programming problems across various platforms
          </p>
        </li>

        <li class="timeline-item">
          <p class="timeline-text">
            <span style="color: #FFA500; display: inline-block; margin-right: 5px;">•</span> Contributed to open-source repositories, including GNOME Settings and Dino XMPP Client
          </p>
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
