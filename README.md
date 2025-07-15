# 🍽️ Recipe Website - Indian & Western Dishes

A modern, responsive recipe website built using **ReactJS (Vite)**, **HTML**, and **CSS**. It features a collection of 24 detailed recipes categorized under Indian and Western cuisines for Breakfast, Lunch, and Dinner.

---

## 📁 Project Structure

```bash
recipe-website/
├── public/
│   └── images/              # Recipe images
├── src/
│   ├── assets/              # Optional icons/fonts
│   ├── components/          # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── SearchBar.jsx
│   │   ├── RecipeCard.jsx
│   │   └── styles/          # Component-level styles
│   │       ├── Navbar.css
│   │       ├── SearchBar.css
│   │       ├── RecipeCard.css
│   ├── data/
│   │   └── recipes.js       # Static recipe data
│   ├── pages/               # Route pages
│   │   ├── Home.jsx
│   │   ├── IndianBreakfast.jsx
│   │   ├── IndianLunch.jsx
│   │   ├── IndianDinner.jsx
│   │   ├── WesternBreakfast.jsx
│   │   ├── WesternLunch.jsx
│   │   ├── WesternDinner.jsx
│   │   ├── RecipeDetail.jsx
│   │   ├── Favorites.jsx
│   │   └── styles/          # Page-level styles
│   │       ├── Home.css
│   │       ├── food.css
│   │       ├── RecipeDetail.css
│   │       ├── Favorites.css
│   ├── App.jsx              # Main app with routes and logic
│   ├── main.jsx             # Vite entry point
│   └── App.css              # Global styles (dark mode, resets, etc.)
├── index.html               # Root HTML file
├── vite.config.js           # Vite configuration
└── README.md
```

## 💡 Features

- ✅ 24 curated recipes (12 Indian, 12 Western)
- ✅ Detailed ingredients, equipment, steps, and tips
- ✅ Fully responsive design
- ✅ Search functionality by name
- ✅ Hover-based navigation from categories to meals
- ✅ Recipe detail pages with in-depth info

  ## 🔧 Tech Stack

- ReactJS (with Vite)
- HTML & CSS 
- React Router DOM
- Vanilla CSS (modular per component/page)
