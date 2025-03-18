# 🛍️ Product-Vista

**Product-Vista** is a modern and performance-optimized product comparison web application built using React and Redux Toolkit. It allows users to explore products and compare multiple items side-by-side for better decision-making. The project follows **MVC Architecture**, uses **Custom Hooks**, **Code Splitting**, **Lazy Loading**, and **Caching with Redux Toolkit (GSM - Global State Management)** to ensure a scalable, maintainable, and high-performance application.

---

## 🚀 Features

- 🔍 **Product Listing** – View all available products fetched from DummyJSON API.
- ➕ **Add to Compare** – Add up to 4 products for detailed comparison.
- ❌ **Remove from Compare** – Easily remove a product from the compare list.
- 🔄 **Compare Products Modal** – Add or remove products using a smooth modal interface.
- 🧠 **Persistent Comparison** – Compare product list stored in localStorage.
- 🌐 **Global State Management (GSM)** – Redux Toolkit used for state management.
- ⚡ **Lazy Loading & Code Splitting** – Optimized performance for better user experience.
- 🛠️ **Reusable & Scalable Architecture** – Based on industry-standard MVC pattern.
- 💾 **Local Caching** – Prevents unnecessary API calls and improves performance.
- 🧩 **Custom Hooks** – For code reusability and separation of concerns.
- 💎 **Responsive & Beautiful UI** – Powered by Tailwind CSS and Ant Design.

---

## 🧱 Tech Stack

| Technology        | Usage                                  |
|------------------ |----------------------------------------|
| **React**         | Component-based UI framework           |
| **Redux Toolkit** | GSM for predictable state management   |
| **Ant Design**    | Component library for UI/UX            |
| **Tailwind CSS**  | Utility-first CSS for styling          |

---

## 🧠 How It Works

- All products are fetched and cached locally using `Redux Toolkit` and `Custom Hook`.
- Users can add or remove products from the compare list (max limit: 4).
- Compare list persists via `localStorage`.
- Product Add/Remove handled with dynamic buttons & visual feedback.
- Modal UI offers a seamless way to manage compare list.
- Disabled Compare buttons have subtle visual indication for UX clarity.

---

## ⚙️ Setup Instructions

1. **Clone & Run the Repository in Local System**
git clone https://github.com/Siddesh1210/Product-Vista.git
cd Product-Vista
npm install
npm run dev

