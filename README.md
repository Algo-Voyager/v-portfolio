# 🚀 Personal Portfolio Website

## ✨ Features

- 🌙 **Dark/Light Mode**: User-friendly theme switching.
- 🌍 **Internationalization (i18n)**: Supports multiple languages.
- 📱 **Responsive Design**: Optimized for all devices.
- ⚡ **Fast Performance**: Highly optimized for speed.
- 🎨 **Modern UI**: Clean and elegant user interface.
- 🛠️ **Modern Tech Stack**: Built using the latest web technologies.

---

## 🛠️ Tech Stack

- **Framework**: [Nuxt 3](https://nuxt.com/) - Vue.js framework
- **UI Library**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- **State Management**: [Pinia](https://pinia.vuejs.org/) - State management
- **Internationalization**: [Vue I18n](https://vue-i18n.intlify.dev/) - i18n support
- **Component Library**: [PrimeVue](https://primevue.org/) - UI components

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: >= 18.20.5
  - **Tip**: Before starting the project, ensure you're using Node.js version 18 or higher. You can switch to the required version using [nvm](https://github.com/nvm-sh/nvm) with the following command:
    ```bash
    nvm use 18
    ```
- **PNPM**: >= 9.15.3

### Installation

1. **Clone the repository:**
   
   ```bash
   git clone https://github.com/yourusername/v-portfolio.git
   cd v-portfolio
   ```

2. **Select Node.js version 18 or higher (if not already selected):**
   
   ```bash
   nvm use 18
   ```

3. **Install dependencies:**
   
   ```bash
   pnpm install
   ```

   > **Note:** If you need to install any additional packages, use the following command:
   >
   > ```bash
   > pnpm add <package-name>
   > ```

4. **Start the development server:**
   
   ```bash
   pnpm dev
   ```

5. **Build for production:**
   
   ```bash
   pnpm build
   ```

6. **Run the production server:**
   
   ```bash
   pnpm start
   ```

7. **Generate a static site:**
   
   ```bash
   pnpm generate
   ```

---

## 📁 Project Structure

```bash
v-portfolio/
├── assets/         # Static assets (CSS, images, etc.)
├── components/     # Vue components
├── composables/    # Reusable functions
├── i18n/           # Internationalization files
├── layouts/        # Application layouts
├── pages/          # Website pages
├── plugins/        # Vue plugins
├── public/         # Static public files
└── server/         # Server-side code
```

---

## 🛳️ Deployment

This project can be deployed on any static hosting platform. It includes a `netlify.toml` configuration file for deployment on [Netlify](https://www.netlify.com/).

### Netlify Deployment Steps:

1. Push your project to a GitHub repository.
2. Link the repository to Netlify.
3. Configure build settings:
   - **Build Command**: `pnpm generate`
   - **Publish Directory**: `dist/`
4. Deploy and share your live portfolio!

---

## 👨‍💻 Author

**Prashant Kumar**  
[📧 iampkumar02@gmail.com](mailto:iampkumar02@gmail.com)  
[🔗 LinkedIn](https://www.linkedin.com/in/iampkumar)  
[🐙 GitHub](https://github.com/Algo-Voyager)

---