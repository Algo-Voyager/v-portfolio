import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'Problem Solving',
      description: {
        en: 'I solve complex problems and develop high-performance, scalable server-side applications.',
        tr: 'Karmaşık problemleri analiz ederek yönetilebilir parçalara ayırıyor ve verimli, yenilikçi çözümler sunuyorum.',
      },
      icon: 'logo-laravel',
      image: null,
    },
    {
      id: 2,
      title: 'Golang',
      description: {
        en: 'I utilize Golang, a powerful and efficient programming language, to build scalable and robust backend systems and services.',
        tr: 'Güçlü ve verimli bir programlama dili olan Golang ile ölçeklenebilir ve sağlam backend sistemleri ve hizmetleri oluşturuyorum.',
      },
      icon: 'logo-vue',
      image: null,
    },
  ]
})
