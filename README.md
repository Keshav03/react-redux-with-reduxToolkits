# 🌿 Paradise Nursery

A React + Redux shopping application for browsing and purchasing beautiful houseplants — built as a front-end capstone project.

![Paradise Nursery](https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80)

---

## 🚀 Live Demo

👉 [https://your-username.github.io/paradise-nursery](https://your-username.github.io/paradise-nursery)

---

## 📋 Features

- **Landing Page** — Full-screen hero with background image, company description, and a "Get Started" button
- **Product Listing Page** — 18 houseplants across 3 categories, each with thumbnail, name, price, and Add to Cart button that disables once added
- **Shopping Cart Page** — Full cart management with increase/decrease quantity, delete items, total cost, and checkout
- **Sticky Header** — Navbar with dynamic cart counter on all pages
- **Redux State Management** — Global cart state shared across all components

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI components and rendering |
| Redux Toolkit | Global state management |
| React-Redux | Connecting React to Redux store |
| Vite | Build tool and dev server |
| CSS3 | Styling with CSS variables |

---

## 📁 Project Structure

```
paradise-nursery/
├── index.html                  # Vite entry point
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite config (base path for GitHub Pages)
└── src/
    ├── main.jsx                # ReactDOM.createRoot + Redux Provider
    ├── App.jsx                 # Root component + page routing
    ├── App.css                 # All global styles (incl. landing bg image)
    ├── data/
    │   └── plants.js           # 18 plants array + categories
    ├── store/
    │   ├── store.js            # configureStore — creates the Redux store
    │   └── CartSlice.js        # Cart reducer + auto-generated action creators
    ├── components/
    │   ├── Header.jsx          # Sticky navbar with live cart count badge
    │   └── AboutUs.jsx         # Company description component
    └── pages/
        ├── LandingPage.jsx     # Hero page with Get Started button
        ├── ProductList.jsx     # Plant grid organised by category
        └── CartPage.jsx        # Cart with quantity controls and totals
```

---

## ⚡ Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/your-username/paradise-nursery.git
cd paradise-nursery

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start local development server |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run deploy` | Build and deploy to GitHub Pages |

---

## 🛒 Redux Architecture

The cart state is managed entirely with Redux Toolkit.

### Store shape

```js
{
  cart: {
    items: [
      { id: 1, name: "Monstera Deliciosa", price: 34.99, quantity: 2 }
    ]
  }
}
```

### Actions

| Action | Payload | Description |
|---|---|---|
| `addToCart` | plant object | Adds plant or increments qty if already in cart |
| `increaseQty` | plant id | Increments quantity by 1 |
| `decreaseQty` | plant id | Decrements quantity, removes if hits 0 |
| `removeFromCart` | plant id | Removes item regardless of quantity |

### How it works

```js
// 1. Get dispatch in any component
const dispatch = useDispatch()

// 2. Send an action
dispatch(addToCart(plant))

// 3. Read state anywhere
const items = useSelector(state => state.cart.items)
```

---

## 🌱 Plant Categories

| Category | Plants |
|---|---|
| Tropical Beauties | Monstera Deliciosa, Bird of Paradise, Philodendron Pink, Calathea Orbifolia, Alocasia Zebrina, Anthurium Clarinervium |
| Succulents & Cacti | Echeveria Elegans, Haworthia Zebra, Barrel Cactus, Aloe Vera, Jade Plant, String of Pearls |
| Air-Purifying Plants | Peace Lily, Snake Plant, Spider Plant, Pothos Golden, Chinese Evergreen, Boston Fern |

---

## 🚢 Deployment

This app is deployed via GitHub Pages using the `gh-pages` package.

```bash
# Deploy to GitHub Pages
npm run deploy
```

Make sure `vite.config.js` has the correct `base` path:

```js
export default defineConfig({
  plugins: [react()],
  base: '/paradise-nursery/',   // must match your GitHub repo name
})
```

---

## 📝 Environment

No environment variables required. All data is static and self-contained.

---

## 🎓 Course Requirements Checklist

- [x] Landing page with background image, company name, paragraph, and Get Started button
- [x] 6+ unique houseplants per category with thumbnail, name, and price
- [x] Plants grouped into 3+ categories
- [x] Add to Cart button disables after clicking
- [x] Cart icon updates dynamically
- [x] Header/navbar on both Product Listing and Cart pages
- [x] Navbar links to all three pages
- [x] Cart page shows total plants and total cost
- [x] Increase and decrease quantity buttons
- [x] Delete button per cart item
- [x] Checkout button with "Coming Soon" message
- [x] Continue Shopping button linking back to product page
- [x] Redux slice with all required actions
- [x] Deployed to GitHub Pages

---

## 👤 Author

**Keshav Bokhoree**

---

## 📄 License

This project was created for educational purposes as part of a web development course.
