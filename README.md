sensoww Portfolio

This is a simple, static portfolio website. Steps below explain how to make it publicly accessible using GitHub Pages, Netlify, or Vercel.

Quick local preview

PowerShell:

```powershell
cd 'C:\Users\User\AppData\Local\Programs\Microsoft VS Code\portfolio-site'
python -m http.server 8000
# open http://localhost:8000 in your browser
```

Git (create repo and publish to GitHub Pages)

1. Create a new repository on GitHub (e.g., `sensoww-portfolio`).
2. From the project folder run (PowerShell):

```powershell
cd 'C:\Users\User\AppData\Local\Programs\Microsoft VS Code\portfolio-site'
git init
git add .
git commit -m "Initial commit: sensoww portfolio"
git branch -M main
git remote add origin https://github.com/your-username/sensoww-portfolio.git
git push -u origin main
```

3. In the GitHub repository settings → Pages, set source to the `main` branch (root) and save. Your site will be published at `https://your-username.github.io/sensoww-portfolio/` shortly.

Netlify (drag-and-drop or connect repo)

- Drag-and-drop: Zip the folder and drag it onto Netlify Sites dashboard ("Sites" → "Add new site" → "Deploy manually").
- Git-based: Connect your GitHub repo in Netlify and set build settings (no build command needed for static site). Netlify will provide a public URL.

Vercel

- Using the Vercel dashboard, click "New Project" → import from GitHub → select the repo. Default settings work for a static site. Vercel will provide a public URL.

One-click ZIP for upload

If you want, I can create a ZIP file of the `portfolio-site` folder so you can upload it to a hosting dashboard. Tell me if you want that and where to place the archive.

Notes

- Replace `your-username` and `sensoww-portfolio` with your actual GitHub username and repo name.
- If you want, I can also create a GitHub Actions workflow for automated deployments.
