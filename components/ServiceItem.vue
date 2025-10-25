<script setup>
import { useI18n } from 'vue-i18n'

const props = defineProps({
  service: Object,
})

onMounted(() => {
  useLocaleStore()
})

const { locale } = useI18n({ useScope: 'global' })
</script>

<template>
  <li class="service-item">
    <div class="service-icon-box">
      <img v-if="service.image !== null" :src="service.image" alt="service icon" class="w-40">
      <ion-icon v-else-if="service.icon" :name="service.icon" class="text-[#ffdb70]" style="font-size: 40px;" />
    </div>

    <div class="service-content-box">
      <h4 class="h4 service-item-title">
        {{ service.title }}
      </h4>

      <p class="service-item-text" v-html="locale === 'en' ? service.description?.en : service.description?.tr">
      </p>
    </div>
  </li>
</template>
