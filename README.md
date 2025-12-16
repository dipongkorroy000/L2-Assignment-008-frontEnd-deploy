# 🎨 Local Guide Client

A **Next.js + React** frontend application built with modern UI libraries and developer tooling.  
This project demonstrates clean architecture, reusable components, and professional UI/UX practices using **Radix UI**, **TailwindCSS**, and **TypeScript**.

---

## 🚀 Features

- **Next.js 16** – Fast, production-ready React framework
- **TypeScript** – Strongly typed development for reliability
- **TailwindCSS v4** – Utility-first styling with modern animations
- **Radix UI** – Accessible, headless UI components
- **React Hook Form + Zod** – Form handling with schema validation
- **Framer Motion** – Smooth animations and transitions
- **Lucide Icons** – Modern, customizable icon set
- **SweetAlert2 & Sonner** – Elegant alerts and toast notifications
- **JWT Support** – Authentication-ready with `jsonwebtoken`
- **Date-fns** – Lightweight date utilities

---

## 📦 Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **UI:** Radix UI, TailwindCSS, Framer Motion
- **Forms & Validation:** React Hook Form, Zod
- **State & Utilities:** clsx, class-variance-authority, tailwind-merge
- **Notifications:** SweetAlert2, Sonner
- **Icons:** Lucide React
- **Date Handling:** date-fns

---

## 📂 Project Structure


---

## ⚙️ Scripts

| Command        | Description                          |
|----------------|--------------------------------------|
| `pnpm dev`     | Run development server               |
| `pnpm build`   | Build production-ready app           |
| `pnpm start`   | Start production server              |
| `pnpm lint`    | Run ESLint for code quality checks   |

---

## 🔑 Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_API_URL="http://localhost:5000/api"
NEXT_PUBLIC_JWT_SECRET="your_jwt_secret"
