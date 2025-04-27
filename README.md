# To create and deploy a Vite + React app from scratch to GitHub Pages, follow these steps:
Install the Vite build environment:
    npm create vite@latest Scratch-Vite-React -- --template react
    cd Scratch-Vite-React
    npm i

Ref for tailwind CSS setup: https://www.youtube.com/watch?v=RjzTBfX79Cc 

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

peaceiris/actions-gh-pages:
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main  # Change this to your default branch if not `main`

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      # Checkout the repository
      - name: Checkout repository
        uses: actions/checkout@v2

      # Set up Node.js
      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16' # Specify your Node.js version here

      # Install dependencies
      - name: Install dependencies
        run: npm install

      # Build the project
      - name: Build
        run: npm run build

      # Deploy to GitHub Pages
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist

Using JamesIves/github-pages-deploy-action:
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main  # Change this to your default branch if not `main`

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      # Checkout the repository
      - name: Checkout repository
        uses: actions/checkout@v2

      # Set up Node.js
      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16' # Specify your Node.js version here

      # Install dependencies
      - name: Install dependencies
        run: npm install

      # Build the project
      - name: Build
        run: npm run build

      # Deploy to GitHub Pages
      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          branch: gh-pages  # Branch where GitHub Pages will be published
          folder: dist      # Folder to deploy (output of Vite build)
          token: ${{ secrets.GITHUB_TOKEN }}  # GitHub Token for authentication
