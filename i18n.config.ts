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
                blog: "Blog",
                contact: "Contact"
            }
        }
    }
}))