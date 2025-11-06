# Vercel Deployment Instructions

This guide explains how to deploy your portfolio to Vercel when it's located in a subdirectory.

## Method 1: Deploy the portfolio subdirectory directly (Recommended)

### Option A: Using Vercel Dashboard

1. **Push your code to GitHub**
   ```bash
   git push origin main
   ```

2. **Go to [vercel.com](https://vercel.com)** and sign in

3. **Import your GitHub repository**
   - Click "Add New..." → "Project"
   - Select your repository

4. **Configure Project Settings**

   **IMPORTANT: Configure these settings correctly:**

   - **Root Directory**: `portfolio` (NOT `./portfolio`)
     - Click "Edit" next to Root Directory
     - Enter: `portfolio`
     - This tells Vercel your project is in a subdirectory

   - **Framework Preset**: Next.js (should auto-detect)

   - **Build Command**: `npm run build` (default is fine)

   - **Output Directory**: Leave blank or `.next` (default)

   - **Install Command**: `npm install` (default is fine)

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site will be live!

### Option B: Using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Navigate to the portfolio directory**
   ```bash
   cd portfolio
   ```

3. **Login to Vercel**
   ```bash
   vercel login
   ```

4. **Deploy**
   ```bash
   vercel
   ```

   Follow the prompts:
   - Set up and deploy? **Yes**
   - Which scope? (select your account)
   - Link to existing project? **No**
   - Project name? **aditya-portfolio** (or your preferred name)
   - In which directory is your code located? **./** (since you're already in portfolio/)

5. **Deploy to production**
   ```bash
   vercel --prod
   ```

## Method 2: Deploy from root directory

If you want to deploy from the root of your repository:

1. **Update Root vercel.json**

   The `vercel.json` file in the root directory is configured with:
   ```json
   {
     "buildCommand": "cd portfolio && npm install && npm run build",
     "outputDirectory": "portfolio/out",
     "installCommand": "cd portfolio && npm install"
   }
   ```

2. **Deploy using Vercel Dashboard**
   - Import repository
   - Leave Root Directory as **blank** or **/**
   - Vercel will use the root vercel.json configuration

## Troubleshooting

### Error: "Root Directory must be a relative path"

**Problem**: Seeing error about Root Directory configuration

**Solution**:
- In Vercel Dashboard → Project Settings → General
- Under "Root Directory", enter exactly: `portfolio`
- Do NOT use `./portfolio` or `/portfolio`
- Click Save

### Error: "Command not found: npm"

**Problem**: Build fails with npm command not found

**Solution**:
- Ensure you're using Node.js 18.x or higher
- In Project Settings → General → Node.js Version
- Select: 18.x or 20.x

### Error: "Cannot find module"

**Problem**: Build fails with missing modules

**Solution**:
1. Delete `node_modules` and `package-lock.json` locally
2. Run `npm install` again
3. Commit the new `package-lock.json`
4. Push to GitHub
5. Redeploy on Vercel

### Build succeeds but site shows 404

**Problem**: Site deploys but pages show 404

**Solution**:
- Check that Output Directory is set to `out` or blank
- Ensure `next.config.js` has `output: 'export'`
- The `out` directory should be created during build

## Environment Variables

If you need to add environment variables:

1. Go to Project Settings → Environment Variables
2. Add your variables:
   - Name: `NEXT_PUBLIC_API_URL` (example)
   - Value: Your value
   - Environment: Production, Preview, Development

## Custom Domain

To add a custom domain:

1. Go to Project Settings → Domains
2. Click "Add Domain"
3. Enter your domain: `yourdomain.com`
4. Follow DNS configuration instructions
5. Add these DNS records at your registrar:

   **For root domain (yourdomain.com):**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

6. Wait for DNS propagation (up to 48 hours, usually faster)

## Automatic Deployments

Vercel automatically deploys:
- **Production**: Pushes to main/master branch
- **Preview**: Pushes to other branches or pull requests

To disable automatic deployments:
- Go to Project Settings → Git
- Configure deployment settings

## Build Optimization

Your Next.js build should show:
```
Route (app)              Size     First Load JS
┌ ○ /                    60.6 kB  163 kB
└ ○ /_not-found          995 B    103 kB
```

This indicates static optimization is working correctly.

## Performance

Vercel provides:
- Global CDN
- Automatic HTTPS
- Edge caching
- Image optimization
- Analytics (optional)

Enable Vercel Analytics:
1. Go to your project dashboard
2. Click "Analytics"
3. Click "Enable"

## Monitoring

Check your deployments:
1. Go to vercel.com
2. Select your project
3. View Deployments tab
4. Click any deployment to see build logs

## Support

If you encounter issues:
- Check [Vercel Documentation](https://vercel.com/docs)
- Check build logs in deployment details
- Contact Vercel support
- Email: adityaisktcs@gmail.com

---

## Quick Reference

| Setting | Value |
|---------|-------|
| Root Directory | `portfolio` |
| Framework | Next.js |
| Build Command | `npm run build` |
| Output Directory | `out` |
| Install Command | `npm install` |
| Node Version | 18.x or 20.x |

---

**Your site will be available at:** `https://your-project.vercel.app`
