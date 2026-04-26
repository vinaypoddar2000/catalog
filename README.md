# 🛍️ Catalog

A responsive and dynamic **Multi-Category Product Catalog** built with React.
Browse products across Cars, Bikes, Phones, and Computers — with live search, category filtering, and detailed spec pages.
This project is beginner-friendly, cleanly structured, and perfect for learning dynamic rendering, component design, and responsive layouts in React.

---

## Website Link
- https://catalog-wulv.onrender.com

---

## ✨ Features

### 🗂️ Category Overview

* Products are grouped and displayed by category on the home screen.
* Each category has its own section with a label, icon, description, and item count.
* Distinct accent colors per category make it easy to distinguish at a glance.

### 🔍 Search & Filter

* Live search bar filters products by name in real time.
* Category filter pills let users narrow down to Cars, Bikes, Phones, or Computers.
* Search and category filters work together simultaneously.

### 🃏 Product Cards

* Each card displays the product image, name, and a preview of up to 2 specs.
* Skeleton loaders appear while images are loading.
* Graceful fallback shown if an image fails to load.
* Hover effects with a category-colored glow and zoom animation.

### 📄 Item Detail Page

* Clicking a card navigates to a dedicated detail page.
* Displays the full product image, name, category badge, and all specifications.
* Specs are rendered **dynamically** by iterating the `itemprops` array — no hardcoded field names.
* Animated spec rows with staggered entry effects.
* Sticky image panel on desktop, stacked layout on mobile.

### 📱 Fully Responsive

* Fluid grid layout adapts across mobile, tablet, and desktop.
* Sticky header with blur backdrop on all screen sizes.
* Breadcrumb navigation on desktop, condensed layout on mobile.

---

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vinaypoddar2000/catalog.git
cd catalog-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

---

## 🛠️ Technologies Used

- **React 18**: UI framework
- **Plain CSS + CSS Custom Properties**: Styling and theming
- **Google Fonts (Syne + DM Sans)**: Typography
- **JavaScript ES6+**: Core logic and dynamic rendering

---

## 🙌 Author

Feel free to contribute or suggest improvements!