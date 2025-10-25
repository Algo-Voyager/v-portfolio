export default defineI18nConfig(() => ({
    legacy: false,
    fallbackLocale: 'en',
    messages: {
        en: {
            hello: "Hello",
            goodbye: "Good Bye",
            pageTitles: {
                about: "About",
                resume: "Resume",
                portfolio: "Portfolio",
                myProjects: "My Projects",
                blog: "Blog",
                contact: "Contact"
            }
        },
        tr: {
            hello: "Merhaba",
            goodbye: "Hoşçakal",
            pageTitles: {
                about: "Hakkımda",
                resume: "Özgeçmiş",
                portfolio: "Portfolyo",
                myProjects: "Projelerim",
                blog: "Blog",
                contact: "İletişim"
            }
        }
    }
}))