# 🚀 Personal Portfolio Website

A modern, responsive portfolio website showcasing my experience, projects, and skills as a Software Engineer.

## ✨ Features

- 🌙 **Dark/Light Mode**: User-friendly theme switching.
- 🌍 **Internationalization (i18n)**: Supports multiple languages (English/Turkish).
- 📱 **Responsive Design**: Optimized for all devices.
- ⚡ **Fast Performance**: Highly optimized for speed.
- 🎨 **Modern UI**: Clean and elegant user interface.
- 🛠️ **Modern Tech Stack**: Built using the latest web technologies.
- 💼 **Professional Sections**: About, Resume, Portfolio, and Contact pages.

---

## 🛠️ Tech Stack

- **Framework**: [Nuxt 3](https://nuxt.com/) - Vue.js framework
- **UI Library**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- **State Management**: [Pinia](https://pinia.vuejs.org/) - State management
- **Internationalization**: [Vue I18n](https://vue-i18n.intlify.dev/) - i18n support
- **Component Library**: [PrimeVue](https://primevue.org/) - UI components
- **Email Integration**: [EmailJS](https://www.emailjs.com/) - Contact form

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: >= 18.20.5
  - **Tip**: Before starting the project, ensure you're using Node.js version 18 or higher. You can switch to the required version using [nvm](https://github.com/nvm-sh/nvm) with the following command:
    ```bash
    nvm use 18
    ```
- **Package Manager**: npm (comes with Node.js) or PNPM >= 9.15.3

### Installation

1. **Clone the repository:**
   
   ```bash
   git clone https://github.com/Algo-Voyager/v-portfolio.git
   cd v-portfolio
   ```

2. **Select Node.js version 18 or higher (if not already selected):**
   
   ```bash
   nvm use 18
   ```

3. **Install dependencies:**

   **Option A: Using npm (recommended for first-time setup):**
   
   ```bash
   # Remove old node_modules and lock files if they exist
   rm -rf node_modules pnpm-lock.yaml package-lock.json
   
   # Install with legacy peer deps to avoid conflicts
   npm install --legacy-peer-deps
   ```

   **Option B: Using PNPM:**
   
   ```bash
   pnpm install
   ```

   > **Note:** If you encounter native binding errors with pnpm, use npm with `--legacy-peer-deps` flag as shown above.

4. **Start the development server:**
   
   **Using npm:**
   ```bash
   npm run dev
   ```
   
   **Using PNPM:**
   ```bash
   pnpm dev
   ```

   The development server will start at: **http://localhost:3000**

5. **Build for production:**
   
   **Using npm:**
   ```bash
   npm run build
   ```
   
   **Using PNPM:**
   ```bash
   pnpm build
   ```

6. **Preview production build:**
   
   **Using npm:**
   ```bash
   npm run preview
   ```
   
   **Using PNPM:**
   ```bash
   pnpm start
   ```

7. **Generate a static site:**
   
   **Using npm:**
   ```bash
   npm run generate
   ```
   
   **Using PNPM:**
   ```bash
   pnpm generate
   ```

---

## 🐛 Troubleshooting

### Installation Issues

If you encounter errors during installation:

1. **Clear all dependencies:**
   ```bash
   rm -rf node_modules pnpm-lock.yaml package-lock.json
   ```

2. **Reinstall with npm:**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start the dev server:**
   ```bash
   npm run dev
   ```

### Native Binding Errors

If you see `Cannot find native binding` errors, this is usually related to optional dependencies. The solution:
- Use npm instead of pnpm
- Add the `--legacy-peer-deps` flag during installation

---

## 📝 Development Notes

### Running in Development Mode

To run the website in development mode with hot reload:

```bash
# Using npm
npm run dev

# Using pnpm
pnpm dev
```

The site will be available at `http://localhost:3000` with:
- Hot Module Replacement (HMR)
- Automatic page reloads on file changes
- DevTools integration (press Shift + Alt + D)
- Tailwind CSS viewer at `http://localhost:3000/_tailwind/`

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

## 🔧 Environment Variables

To use the contact form feature, you need to set up EmailJS:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service and template
3. Create a `.env` file in the root directory with the following variables:

```env
SERVICE_ID=your_service_id_here
TEMPLATE_ID=your_template_id_here
PUBLIC_KEY=your_public_key_here
```

> **Note**: The `.env` file is already included in `.gitignore` to keep your credentials secure.

---

## 👨‍💻 Author

**Prashant Kumar**  
Software Engineer | Cloud Infrastructure Specialist  
[📧 iampkumar02@gmail.com](mailto:iampkumar02@gmail.com)  
[🔗 LinkedIn](https://www.linkedin.com/in/iampkumar)  
[🐙 GitHub](https://github.com/Algo-Voyager)  
[💻 LeetCode](https://leetcode.com/vukoga) (Knight - 1883)  
[🏆 Codeforces](https://codeforces.com/profile/_algo_voyager) (Specialist)

---

## 📄 License

This project is open source and available for personal and educational use.

---