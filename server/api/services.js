import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'Backend Development',
      description: {
        en: 'At Lucidity, I work on multi-cloud infrastructure optimization, building tools for Azure disk upgrades, ASR detection, and cloud discovery across AWS, Azure, and GCP. I specialize in Python, Java, and JavaScript for building scalable backend systems with microservices architecture.',
        tr: 'Lucidity\'de çok bulut altyapı optimizasyonu üzerinde çalışıyorum, Azure disk yükseltmeleri, ASR algılama ve AWS, Azure ve GCP\'de bulut keşfi için araçlar oluşturuyorum. Mikroservis mimarisi ile ölçeklenebilir backend sistemleri oluşturmak için Python, Java ve JavaScript konusunda uzmanım.',
      },
      icon: 'server-outline',
      image: null,
    },
    {
      id: 2,
      title: 'Full-Stack Web Development',
      description: {
        en: 'Built <a href="https://sscgurutalks.com" target="_blank" rel="noopener noreferrer" style="color: #ffdb70; text-decoration: underline;">SSC Guru Talks</a> - a bilingual exam platform serving 196K+ requests/week with 4K users. Achieved 93% TTFB reduction through 3-layer caching, database optimization with 15+ indexes, and advanced performance tuning using Next.js and PostgreSQL.',
        tr: '<a href="https://sscgurutalks.com" target="_blank" rel="noopener noreferrer" style="color: #ffdb70; text-decoration: underline;">SSC Guru Talks</a> - haftada 196K+ istek ve 4K kullanıcıya hizmet veren iki dilli bir sınav platformu oluşturdum. 3 katmanlı önbellekleme, 15+ indeks ile veritabanı optimizasyonu ve Next.js ve PostgreSQL kullanarak gelişmiş performans ayarlaması ile %93 TTFB azalması sağladım.',
      },
      icon: 'code-slash-outline',
      image: null,
    },
  ]
})
