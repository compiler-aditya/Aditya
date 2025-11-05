# Aditya Dev Singh - Portfolio Website

A modern, responsive personal portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features smooth animations, dark/light mode toggle, and an elegant design showcasing my skills, projects, and experience.

![Portfolio Preview](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)

## Features

- **Modern Design**: Clean, minimalist interface with gradient accents and smooth animations
- **Dark/Light Mode**: Seamless theme switching with persistent user preference
- **Fully Responsive**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Interactive Animations**: Powered by Framer Motion for engaging user experience
- **SEO Optimized**: Comprehensive meta tags and semantic HTML for better search visibility
- **Fast Performance**: Built with Next.js 15 for optimal loading speeds
- **Type-Safe**: Fully typed with TypeScript for better code quality

## Sections

1. **Hero Section**: Eye-catching introduction with animated background and CTA buttons
2. **About**: Professional summary with animated elements
3. **Experience**: Timeline view of work experience with detailed achievements
4. **Projects**: Interactive project cards with tech stack badges
5. **Skills**: Categorized technical skills with icons
6. **Education**: Academic background and coursework
7. **Contact**: Multiple contact methods with social links
8. **Footer**: Quick navigation and copyright information

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment**: Vercel / GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AbhiS6699/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## Building for Production

### Build the project

```bash
npm run build
# or
yarn build
```

### Test the production build locally

```bash
npm run start
# or
yarn start
```

## Deployment

### Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications:

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** to complete deployment

**Or use the Vercel Dashboard:**

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js and deploy

### Deploy to GitHub Pages

1. **Update `next.config.js`** (if deploying to a subdirectory):
   ```javascript
   const nextConfig = {
     output: 'export',
     basePath: '/your-repo-name', // Only if not using custom domain
     images: {
       unoptimized: true,
     },
   }
   ```

2. **Build and export**
   ```bash
   npm run build
   ```

3. **Create a GitHub Actions workflow**

   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3

         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'

         - name: Install dependencies
           run: npm ci

         - name: Build
           run: npm run build

         - name: Deploy to GitHub Pages
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select "gh-pages" branch as source
   - Save and wait for deployment

## Customization

### Update Personal Information

Edit the following files to customize with your information:

- `components/Hero.tsx` - Name, title, tagline
- `components/About.tsx` - About section content
- `components/Experience.tsx` - Work experience
- `components/Projects.tsx` - Projects showcase
- `components/Skills.tsx` - Technical skills
- `components/Education.tsx` - Educational background
- `components/Contact.tsx` - Contact information
- `app/layout.tsx` - SEO metadata

### Change Color Scheme

Edit `tailwind.config.ts` to modify:
- Primary colors
- Neon accent colors
- Gradient combinations
- Custom animations

### Modify Theme

Edit `app/globals.css` for:
- Global styles
- CSS variables
- Custom animations
- Scrollbar styling

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   ├── globals.css         # Global styles
│   └── favicon.ico         # Site favicon
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Experience.tsx      # Experience timeline
│   ├── Projects.tsx        # Projects showcase
│   ├── Skills.tsx          # Skills grid
│   ├── Education.tsx       # Education section
│   ├── Contact.tsx         # Contact section
│   ├── Footer.tsx          # Footer component
│   └── ThemeToggle.tsx     # Dark/light mode toggle
├── lib/
│   └── ThemeContext.tsx    # Theme management context
├── public/
│   ├── Aditya_Resume.pdf   # Resume file
│   └── .nojekyll           # GitHub Pages config
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## Performance Optimization

- **Static Site Generation**: All pages are pre-rendered at build time
- **Image Optimization**: Configured for static export
- **Code Splitting**: Automatic code splitting by Next.js
- **Lazy Loading**: Components load as needed
- **Minification**: Production builds are fully minified

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Suggestions for Enhancement

### Dynamic Features

1. **Blog Section**
   - Add a blog using MDX for technical articles
   - Implement tags and categories
   - Add search functionality

2. **Project Filters**
   - Add filtering by technology
   - Add sorting options (date, popularity)
   - Implement search functionality

3. **Analytics**
   - Add Google Analytics or Plausible
   - Track user interactions
   - Monitor performance metrics

4. **Contact Form**
   - Implement a working contact form with email service (e.g., EmailJS, SendGrid)
   - Add form validation
   - Include reCAPTCHA for spam protection

5. **Content Management**
   - Integrate a headless CMS (Contentful, Sanity)
   - Make content editable without code changes
   - Add preview functionality

6. **Additional Sections**
   - Testimonials from colleagues/clients
   - Certifications and achievements
   - Open source contributions graph
   - Speaking engagements or workshops

### Technical Improvements

1. **Testing**
   - Add unit tests with Jest
   - Add E2E tests with Playwright
   - Set up CI/CD pipeline

2. **Accessibility**
   - Add keyboard navigation improvements
   - Enhance screen reader support
   - Implement skip-to-content links

3. **Internationalization**
   - Add multi-language support
   - Implement language switcher

4. **Progressive Web App**
   - Add service worker
   - Make it installable
   - Add offline support

## Contributing

Suggestions and improvements are welcome! Feel free to:
- Open an issue for bugs or feature requests
- Submit a pull request for improvements
- Share feedback or suggestions

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Aditya Dev Singh**

- Email: [adityaisktcs@gmail.com](mailto:adityaisktcs@gmail.com)
- LinkedIn: [linkedin.com/in/singh-aaditya](https://linkedin.com/in/singh-aaditya)
- GitHub: [github.com/AbhiS6699](https://github.com/AbhiS6699)
- Phone: +91 7509492063

---

Built with 💜 using Next.js and Tailwind CSS
