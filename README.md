# ATA Ranks

## About This Project

**ATA Ranks** is a mobile-first, user-friendly website for martial arts students and instructors, specifically designed for the American Taekwondo Association (ATA) curriculum. The site serves as a comprehensive catalog and training reference for all ranks, forms, techniques, and requirements by belt level. It is intended to help students track their progress, review curriculum, and prepare for testing, while also providing instructors with a clear and organized resource.

### Features
- **Rank Catalog:** Browse all ATA ranks from White Belt through Black Belt, with detailed requirements for each.
- **Form Details:** Step-by-step breakdowns, new techniques, and form pattern images for each belt.
- **Live Search:** Instantly filter ranks by name.
- **Responsive Design:** Mobile-first layout with easy navigation and clear visuals.
- **SVG Belt Icons:** Visual belt indicators for each rank.
- **Breadcrumbs:** Easy navigation and context for each page.
- **Centralized Data:** All rank and form information is managed in a single JSON file for easy updates.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation
1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd ataRanks
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```

### Running the Site Locally
Start the development server:
```sh
npm run dev
```
- The site will be available at [http://localhost:4321](http://localhost:4321) by default.

### Building for Production
To build the site for production:
```sh
npm run build
```
- The static site will be output to the `dist/` directory.

To preview the production build locally:
```sh
npm run preview
```

## Project Structure

```
/
├── public/
│   ├── images/           # Logo and form pattern images
│   └── svg/              # SVG belt icons
├── src/
│   ├── assets/
│   ├── components/       # UI components (Header, Footer, RankCard, etc.)
│   ├── layouts/          # Main and rank-specific layouts
│   ├── pages/            # Astro pages (index, ranks, about, etc.)
│   ├── styles/           # Global CSS (Tailwind)
│   └── data/ranks.json   # Centralized rank/form data
├── package.json
├── tailwind.config.js
└── README.md
```

## Customization & Data
- **Rank and form data:** Edit `src/data/ranks.json` to update requirements, add new ranks, or change form details.
- **Images:** Place new form pattern images in `public/images/formPatterns/` and update the `formPatternImage` field in `ranks.json`.
- **SVG Belt Icons:** Add or update SVGs in `public/svg/` for custom belt visuals.

## Tech Stack
- [Astro](https://astro.build/) (static site generator)
- [Tailwind CSS](https://tailwindcss.com/) (utility-first CSS)
- [Alpine.js](https://alpinejs.dev/) (lightweight JS for interactivity)

## License
This project is for educational and reference use. Curriculum content is © American Taekwondo Association.

---

For questions or contributions, please open an issue or pull request.
