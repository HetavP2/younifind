This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Younifind

Younifind is a platform designed to help users discover, manage, and share opportunities. The project aims to streamline the process of finding internships, research positions, events, and other academic or extracurricular opportunities for students through the power of vector based semantic search.

## 💎 Features

- **Opportunity Management:** Add, update, delete, and view opportunities with rich details and images.
- **User Dashboard:** Personalized dashboard for users to track their applications and saved opportunities.
- **Admin Panel:** Tools for administrators to review, approve, and manage submitted opportunities.
- **Authentication:** Secure login and registration system with support for third-party providers.
- **Email Notifications:** Automated email system for opportunity status updates and approvals.
- **Search & Filtering:** Advanced search and filtering to help users find relevant opportunities quickly.
- **Image Uploads:** Upload and manage images for opportunities.
- **Privacy & Security:** Data encryption and privacy-focused features to protect user information.

## 🛠️ Technologies Used

### Framework & UI

- **Next.js** for server-side rendering and routing
- **TypeScript** for type safety
- **Tailwind CSS** for styling

### Backend & Database

- **Supabase** for authentication and database management

### APIs & Integrations

- **OpenAI API** for semantic search and AI-powered features
- **Resend API** for transactional and notification emails

## 🗂️ Folder Structure

- `actions/` — Server-side logic for handling opportunities, emails, and waitlists
- `app/` — Main application pages and layouts, including admin, private, and public routes
- `components/` — Reusable UI components and email templates
- `encryption/` — Utility functions for data encryption and decryption
- `hooks/` — Custom React hooks
- `providers/` — Context providers for global state
- `public/` — Static assets and images
