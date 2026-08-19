# Sagnik Majumder - Personal Portfolio Website

Modern, responsive personal developer portfolio website built with **React.js**, **Tailwind CSS**, and **JavaScript**.

## 🚀 Live Info & Links
- **Name**: Sagnik Majumder
- **Role**: Frontend Developer / Student Developer
- **College**: Swami Vivekanand Institute of Engineering and Technology, Patiala, Punjab
- **Email**: [sagnik.majumder2505@gmail.com](mailto:sagnik.majumder2505@gmail.com)
- **GitHub**: [https://github.com/Saaagniiik](https://github.com/Saaagniiik)
- **LinkedIn**: [https://www.linkedin.com/in/sagnik-majumder-983297428/](https://www.linkedin.com/in/sagnik-majumder-983297428/)
- **Resume**: [Google Drive Link](https://drive.google.com/file/d/1VTy7k7x1fu1hmF7eERZ56zUKZqOXzTyk/view?usp=sharing)

---

## 🛠️ Tech Stack
- **Frontend**: React 18+ (Hooks, Component Architecture)
- **Styling**: Tailwind CSS (Dark theme, Glassmorphism, Responsive Grid)
- **Tooling**: Vite (Lightning fast dev and build)
- **Icons**: SVG Component Library + Lucide React

---

## 📁 Project Structure

```
Portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky nav with scroll observer & mobile menu
│   │   ├── Hero.jsx            # Dynamic headline, role switcher, CTA buttons
│   │   ├── About.jsx           # Bio, SVIET education, 3 core pillars
│   │   ├── Skills.jsx          # Filterable categorized skills (Languages, Frontend, Tools)
│   │   ├── Projects.jsx        # Project cards with tags & live/code links
│   │   ├── Education.jsx       # Academic timeline card
│   │   ├── Contact.jsx         # 1-click email copy, social links, frontend contact form
│   │   ├── Footer.jsx          # Quick nav, copyright, back-to-top button
│   │   ├── Toast.jsx           # Clean notification toasts
│   │   └── Icons.jsx           # High-performance SVG icons
│   ├── data/
│   │   └── portfolio.js        # Centralized data store (Edit your data here!)
│   ├── App.jsx                 # Main layout shell
│   ├── main.jsx                # React root mount
│   └── index.css               # Tailwind directives & custom utilities
├── index.html                  # HTML entry point with SEO meta tags
├── package.json                # Project dependencies and scripts
├── tailwind.config.js          # Tailwind theme configuration
├── postcss.config.js           # PostCSS configuration
└── vite.config.js              # Vite configuration
```

---

## ⚡ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
The portfolio will start at `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` folder.

---

## ✏️ How to Customize Your Details
All information is cleanly decoupled from the UI. To update your bio, skills, resume link, or add new projects, simply open:
👉 `src/data/portfolio.js`

Edit the JavaScript objects and the website will automatically update!
