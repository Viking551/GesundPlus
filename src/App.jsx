<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GesundPlus - Alle Projektdateien</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body {
            font-family: 'Inter', sans-serif;
        }
        details > summary {
            cursor: pointer;
            font-weight: 600;
        }
        pre {
            white-space: pre-wrap;
            word-wrap: break-word;
        }
    </style>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body class="bg-gray-100 text-gray-800 p-4 sm:p-8">

    <div class="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
        <h1 class="text-3xl font-bold text-blue-600 mb-4">GesundPlus Projektdateien</h1>
        <p class="mb-6 text-gray-600">Hier finden Sie den gesamten Code für Ihre Webseite. Erstellen Sie die unten aufgeführten Ordner und Dateien auf Ihrem Computer und kopieren Sie den jeweiligen Inhalt hinein.</p>

        <!-- Anleitung -->
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-8">
            <h2 class="font-bold text-blue-800">Anleitung:</h2>
            <ol class="list-decimal list-inside mt-2 text-blue-700">
                <li>Erstellen Sie einen leeren Ordner namens <strong>gesundplus-webseite</strong>.</li>
                <li>Erstellen Sie alle unten aufgelisteten Dateien direkt in diesem Ordner.</li>
                <li>Erstellen Sie einen Unterordner namens <strong>src</strong>.</li>
                <li>Erstellen Sie die drei `src`-Dateien in diesem Unterordner.</li>
                <li>Erstellen Sie einen Unterordner namens <strong>.github</strong> und darin einen weiteren namens <strong>workflows</strong>.</li>
                <li>Erstellen Sie die `deploy.yml`-Datei im `workflows`-Ordner.</li>
            </ol>
        </div>

        <!-- Dateien im Hauptverzeichnis -->
        <h2 class="text-2xl font-bold mb-4 border-b pb-2">Hauptverzeichnis</h2>

        <details class="mb-4 bg-gray-50 p-4 rounded-lg">
            <summary class="text-lg">package.json</summary>
            <pre class="bg-gray-200 text-gray-800 p-4 rounded-md mt-2 overflow-auto"><code>
{
  "name": "gesundplus-webseite",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.3",
    "vite": "^5.2.0"
  },
  "homepage": "https://viking551.github.io/GesundPlus/"
}
            </code></pre>
        </details>

        <details class="mb-4 bg-gray-50 p-4 rounded-lg">
            <summary class="text-lg">vite.config.js</summary>
            <pre class="bg-gray-200 text-gray-800 p-4 rounded-md mt-2 overflow-auto"><code>
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/DEIN-REPOSITORY-NAME/'
})
            </code></pre>
        </details>
        
        <details class="mb-4 bg-gray-50 p-4 rounded-lg">
            <summary class="text-lg">tailwind.config.js</summary>
            <pre class="bg-gray-200 text-gray-800 p-4 rounded-md mt-2 overflow-auto"><code>
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
            </code></pre>
        </details>

        <details class="mb-4 bg-gray-50 p-4 rounded-lg">
            <summary class="text-lg">postcss.config.js</summary>
            <pre class="bg-gray-200 text-gray-800 p-4 rounded-md mt-2 overflow-auto"><code>
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
            </code></pre>
        </details>

        <details class="mb-4 bg-gray-50 p-4 rounded-lg">
            <summary class="text-lg">index.html</summary>
            <pre class="bg-gray-200 text-gray-800 p-4 rounded-md mt-2 overflow-auto"><code>
&lt;!doctype html&gt;
&lt;html lang="de"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8" /&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
    &lt;title&gt;GesundPlus - Deine Gesundheits-Revolution&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div id="root"&gt;&lt;/div&gt;
    &lt;script type="module" src="/src/main.jsx"&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
            </code></pre>
        </details>

        <details class="mb-4 bg-gray-50 p-4 rounded-lg">
            <summary class="text-lg">.gitignore</summary>
            <pre class="bg-gray-200 text-gray-800 p-4 rounded-md mt-2 overflow-auto"><code>
/node_modules
/dist
npm-debug.log*
yarn-debug.log*
yarn-error.log*
            </code></pre>
        </details>

        <!-- Ordner: .github/workflows -->
        <h2 class="text-2xl font-bold mb-4 mt-8 border-b pb-2">Ordner: .github/workflows</h2>
        <details class="mb-4 bg-gray-50 p-4 rounded-lg">
            <summary class="text-lg">deploy.yml</summary>
            <pre class="bg-gray-200 text-gray-800 p-4 rounded-md mt-2 overflow-auto"><code>
name: Deploy to GitHub Pages
on:
  push:
    branches:
      - main
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout your repository
        uses: actions/checkout@v4
      - name: Install Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      - name: Install dependencies
        run: npm install
      - name: Build the React app
        run: npm run build
      - name: Upload the build artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
            </code></pre>
        </details>

        <!-- Ordner: src -->
        <h2 class="text-2xl font-bold mb-4 mt-8 border-b pb-2">Ordner: src</h2>

        <details class="mb-4 bg-gray-50 p-4 rounded-lg">
            <summary class="text-lg">src/main.jsx</summary>
            <pre class="bg-gray-200 text-gray-800 p-4 rounded-md mt-2 overflow-auto"><code>
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  &lt;React.StrictMode&gt;
    &lt;App /&gt;
  &lt;/React.StrictMode&gt;,
)
            </code></pre>
        </details>

        <details class="mb-4 bg-gray-50 p-4 rounded-lg">
            <summary class="text-lg">src/index.css</summary>
            <pre class="bg-gray-200 text-gray-800 p-4 rounded-md mt-2 overflow-auto"><code>
@tailwind base;
@tailwind components;
@tailwind utilities;
            </code></pre>
        </details>

        <details class="mb-4 bg-gray-50 p-4 rounded-lg">
            <summary class="text-lg">src/App.jsx</summary>
            <pre class="bg-gray-200 text-gray-800 p-4 rounded-md mt-2 overflow-auto"><code>
// Den kompletten React-Code aus dem vorherigen Canvas-Dokument hier einfügen.
// (ID: gesundplus-react-app)
            </code></pre>
        </details>

    </div>
</body>
</html>
