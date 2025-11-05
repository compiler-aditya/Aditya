# Deployment Guide

This guide covers multiple deployment options for your Next.js portfolio website.

## Table of Contents

1. [Vercel Deployment (Recommended)](#vercel-deployment)
2. [GitHub Pages Deployment](#github-pages-deployment)
3. [Netlify Deployment](#netlify-deployment)
4. [Custom Server Deployment](#custom-server-deployment)

---

## Vercel Deployment (Recommended)

Vercel is the company behind Next.js and provides the best integration and performance.

### Method 1: Vercel Dashboard (Easiest)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git push origin main
   ```

2. **Go to [vercel.com](https://vercel.com)** and sign in with GitHub

3. **Click "New Project"**

4. **Import your repository**
   - Select your portfolio repository
   - Vercel will auto-detect Next.js settings

5. **Configure (optional)**
   - Project Name: `aditya-portfolio`
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

6. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build
   - Your site will be live at `https://your-project.vercel.app`

7. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

### Method 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd portfolio
   vercel
   ```

4. **Follow prompts**
   - Set up and deploy? Yes
   - Which scope? (select your account)
   - Link to existing project? No
   - Project name? aditya-portfolio
   - In which directory is your code located? ./

5. **Production deployment**
   ```bash
   vercel --prod
   ```

### Environment Variables (if needed)

Add in Vercel Dashboard → Settings → Environment Variables

---

## GitHub Pages Deployment

### Prerequisites

- Repository must be public (or GitHub Pro for private repos)
- Enable GitHub Pages in repository settings

### Step 1: Update Configuration

The `next.config.js` is already configured for static export. If you're using a repository name (not custom domain), update:

```javascript
// next.config.js
const nextConfig = {
  output: 'export',
  basePath: '/repository-name',  // Add this if not using custom domain
  images: {
    unoptimized: true,
  },
}
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: **GitHub Actions**

### Step 3: Deploy

The GitHub Actions workflow is already set up in `.github/workflows/deploy.yml`

1. **Push your code**
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

2. **Check Actions tab**
   - Go to repository → Actions
   - Watch the deployment progress
   - Build takes ~3-5 minutes

3. **Access your site**
   - Default URL: `https://username.github.io/repository-name/`
   - Or your custom domain if configured

### Step 4: Custom Domain (Optional)

1. **Add CNAME file**
   ```bash
   echo "yourdomain.com" > portfolio/public/CNAME
   ```

2. **Configure DNS** (at your domain registrar)

   Add these DNS records:
   ```
   Type  Name  Value
   A     @     185.199.108.153
   A     @     185.199.109.153
   A     @     185.199.110.153
   A     @     185.199.111.153

   CNAME www   username.github.io
   ```

3. **Enable in GitHub**
   - Settings → Pages
   - Custom domain: yourdomain.com
   - Save and wait for DNS propagation (up to 24 hours)
   - Enable "Enforce HTTPS"

### Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Build the site
npm run build

# The static files are in the 'out' directory
# Push the 'out' directory to gh-pages branch

npx gh-pages -d out
```

---

## Netlify Deployment

### Method 1: Netlify Dashboard

1. **Push code to GitHub**

2. **Go to [netlify.com](https://netlify.com)** and sign in

3. **Click "Add new site" → Import an existing project**

4. **Connect to Git provider** (GitHub)

5. **Select your repository**

6. **Configure build settings**
   - Build command: `npm run build`
   - Publish directory: `out`
   - Add environment variable: `NODE_VERSION = 18`

7. **Deploy site**
   - Click "Deploy"
   - Site will be live at random URL
   - Change to custom subdomain in Site settings

### Method 2: Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login**
   ```bash
   netlify login
   ```

3. **Initialize and deploy**
   ```bash
   cd portfolio
   netlify init
   netlify deploy --prod
   ```

### netlify.toml Configuration

Create `netlify.toml` in project root:

```toml
[build]
  command = "npm run build"
  publish = "out"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## Custom Server Deployment

For deploying to your own server (VPS, DigitalOcean, AWS EC2, etc.)

### Prerequisites

- Node.js 18+ installed on server
- Nginx or Apache (optional, for reverse proxy)
- PM2 for process management

### Step 1: Build the Application

```bash
npm run build
```

### Step 2: Transfer Files to Server

```bash
# Using SCP
scp -r portfolio user@your-server-ip:/var/www/

# Or use Git
ssh user@your-server-ip
cd /var/www/
git clone your-repository
cd portfolio
npm install
npm run build
```

### Step 3: Serve with PM2

```bash
# Install PM2
npm install -g pm2

# Start the application
pm2 start npm --name "portfolio" -- start

# Make PM2 start on system boot
pm2 startup
pm2 save
```

### Step 4: Configure Nginx (Optional)

```nginx
# /etc/nginx/sites-available/portfolio
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Step 5: SSL with Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

---

## Docker Deployment

### Dockerfile

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Build and Run

```bash
# Build image
docker build -t aditya-portfolio .

# Run container
docker run -d -p 80:80 aditya-portfolio
```

---

## Troubleshooting

### Common Issues

1. **Build fails with "Module not found"**
   - Delete `node_modules` and `package-lock.json`
   - Run `npm install` again
   - Ensure all dependencies are in `package.json`

2. **Images not loading on GitHub Pages**
   - Ensure `next.config.js` has `images: { unoptimized: true }`
   - Check `basePath` is set correctly

3. **404 on routes**
   - Ensure `output: 'export'` in `next.config.js`
   - Static export doesn't support dynamic routes

4. **Styles not loading**
   - Clear browser cache
   - Check network tab for 404 errors
   - Verify `basePath` configuration

5. **GitHub Actions fails**
   - Check Actions tab for error logs
   - Ensure GitHub Pages is enabled
   - Verify workflow has correct permissions

### Getting Help

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Support](https://vercel.com/support)
- [GitHub Pages Docs](https://docs.github.com/pages)
- [Netlify Docs](https://docs.netlify.com)

---

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All sections are visible
- [ ] Links work (GitHub, LinkedIn, Email)
- [ ] Resume PDF downloads
- [ ] Dark/light mode toggle works
- [ ] Mobile responsive
- [ ] Images load properly
- [ ] Animations work smoothly
- [ ] SEO meta tags present
- [ ] Custom domain configured (if applicable)
- [ ] HTTPS enabled
- [ ] Analytics set up (optional)

---

## Monitoring & Analytics

### Add Google Analytics

1. Create GA4 property
2. Add tracking code to `app/layout.tsx`:

```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

### Vercel Analytics

Already integrated if deployed on Vercel. Enable in project settings.

---

**Need help?** Contact: adityaisktcs@gmail.com
