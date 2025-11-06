<script setup>

</script>

<template>
  <nav class="navbar" role="navigation" aria-label="Main navigation">
    <ul class="navbar-list">
      <li class="navbar-item">
        <NuxtLink to="/" class="navbar-link" aria-label="About page">
          {{ $t('pageTitles.about') }}
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <NuxtLink to="/resume" class="navbar-link" aria-label="Resume page">
          {{ $t('pageTitles.resume') }}
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <NuxtLink to="/portfolio" class="navbar-link" aria-label="Portfolio page">
          {{ $t('pageTitles.portfolio') }}
        </NuxtLink>
      </li>

      <!-- <li class="navbar-item">
        <NuxtLink to="/blog" class="navbar-link">
          {{ $t('pageTitles.blog') }}
        </NuxtLink>
      </li> -->

      <li class="navbar-item">
        <NuxtLink to="/contact" class="navbar-link" aria-label="Contact page">
          {{ $t('pageTitles.contact') }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
a.router-link-active {
  font-weight: bold;
}
a.router-link-exact-active {
  color: var(--vegas-gold);
}
</style>
