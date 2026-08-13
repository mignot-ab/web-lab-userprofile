# Web2 Lab - Personal Profile Page

A modern, responsive, prop-driven React profile card web application built with **Vite**, **React 19**, and **Tailwind CSS v4**.

---

## 👤 Student Information

> [!NOTE]
> Please update the details below with your specific student information if needed.

- **Full Name:** [Your Full Name]
- **Email:** [Your Email Address]
- **Section:** [Your Section / Class]
- **Student ID:** [Your Student ID]

---

## 📖 Project Description

This project is a clean, interactive personal profile application designed for Web2 Lab. It showcases a developer profile card featuring personal bio, dynamic skill badges, social media links, and a footer section. The application is built using reusable React components with prop validation/passing and styled with Tailwind CSS and Lucide icons.

### Key Features
- 📱 **Responsive Design:** Fully optimized for mobile, tablet, and desktop viewports using Tailwind CSS v4.
- 🧩 **Prop-Driven Modular Components:** Built with reusable components including `ProfileCard`, `Skills`, `SocialLinks`, and `Footer`.
- 🎨 **Modern Aesthetics:** Features sleek dark/light mode friendly color schemes, avatar integration, and hover effects.
- ⚡ **Fast & Lightweight:** Powered by Vite for instant Hot Module Replacement (HMR) and fast build times.
- 🛡️ **Code Quality:** Configured with Oxlint for fast code linting.

---

## 🛠️ Tech Stack & Dependencies

- **Frontend Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 8](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icon Library:** [Lucide React](https://lucide.dev/)
- **Linter:** [Oxlint](https://oxc.rs/)

---

## 📁 Project Structure

```text
Web2 lab/
├── public/               # Static assets (avatar image, icons)
├── src/
│   ├── assets/           # Media & static files
│   ├── components/       # Reusable UI components
│   │   ├── Footer.jsx        # Footer component with copyright info
│   │   ├── ProfileCard.jsx   # Main card wrapper component
│   │   ├── Skills.jsx        # Skill badge list component
│   │   └── SocialLinks.jsx   # Interactive social media buttons
│   ├── App.jsx           # Root application component & profile data
│   ├── App.css           # Custom styles
│   ├── index.css         # Tailwind directives & global styles
│   └── main.jsx          # App entry point
├── package.json          # Project dependencies & scripts
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation
```

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine:

### 1. Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### 2. Installation
Clone the repository and install project dependencies:
```bash
# Clone your repository
git clone <your-repository-url>

# Navigate into the project folder
cd "Web2 lab"

# Install dependencies
npm install
```

### 3. Running the Development Server
Start the Vite local development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production
To generate a production-ready build in the `dist` directory:
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

### 6. Run Linter
```bash
npm run lint
```

---

## 🌐 Repository Visibility & Submission

To ensure your submission meets course requirements:
1. Go to your repository settings on **GitHub**.
2. Under **General** > **Danger Zone**, ensure the repository visibility is set to **Public**.
3. Push your latest code changes including this `README.md` file:
   ```bash
   git add README.md
   git commit -m "Update README with student information and project details"
   git push origin main
   ```
