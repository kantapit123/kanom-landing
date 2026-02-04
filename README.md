# ขนมครูกุ้ง - Kanom Kru Kung Landing Page

A production-ready landing page for **Kanom Kru Kung** (ขนมครูกุ้ง), a Thai dessert shop specializing in meeting break snack sets.

Built with **Astro** + **Tailwind CSS** for fast, static site generation.

## Tech Stack

- **Framework**: [Astro 4.x](https://astro.build/) (static output)
- **Styling**: [Tailwind CSS 3.x](https://tailwindcss.com/) (via @astrojs/tailwind)
- **Package Manager**: Yarn
- **Deployment**: Cloudflare Pages

## Prerequisites

- Node.js 18.17+ (Node 22 recommended, see `.nvmrc`)
- Yarn

## Local Development

```bash
# Install dependencies
yarn install

# Start dev server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview
```

The dev server runs at `http://localhost:4321` by default.

## Project Structure

```
kanom-landing/
├── public/
│   ├── favicon.svg          # Site favicon
│   ├── og-image.png          # Open Graph image (replace with actual image)
│   ├── apple-touch-icon.png  # Apple touch icon (replace with actual image)
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Contact.astro
│   │   ├── FAQ.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Navbar.astro
│   │   ├── PackageCard.astro
│   │   ├── ProductCard.astro
│   │   ├── SectionTitle.astro
│   │   ├── SEO.astro
│   │   ├── Testimonials.astro
│   │   └── WhyUs.astro
│   ├── data/
│   │   ├── faq.ts            # FAQ data
│   │   ├── packages.ts       # Meeting break packages
│   │   ├── products.ts       # Product catalog
│   │   └── testimonials.ts   # Customer testimonials
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro       # Main landing page
│   └── styles/
│       └── global.css        # Global styles + Tailwind theme
├── .nvmrc                    # Node version (22)
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

## Customization

### Changing Contact Information

Edit the contact details in:
- `src/components/Contact.astro` - Main contact section
- `src/components/Footer.astro` - Footer contact info
- `src/components/Navbar.astro` - Navigation links
- `src/components/PackageCard.astro` - Line link in package CTAs
- `src/components/FAQ.astro` - Line link

Replace placeholder values:
- `YOUR_LINE_ID` → Your actual Line ID
- `08X-XXX-XXXX` → Your phone number
- `@kanomkrukung` → Your actual Line/social media handles
- Social media URLs (Facebook, Instagram)

### Changing Products

Edit `src/data/products.ts`:

```typescript
export const products: Product[] = [
  {
    id: 'unique-id',
    name: 'ชื่อขนม',
    nameEn: 'English Name',
    description: 'รายละเอียด',
    price: 25,
    priceUnit: 'ชิ้น',
    category: 'ขนมไทย', // 'ขนมไทย' | 'เบเกอรี่เบาๆ' | 'ของว่างประชุม'
    tags: ['ยอดนิยม'],
    isBestSeller: true,
    isNew: false,
  },
  // ... more products
];
```

### Changing Packages

Edit `src/data/packages.ts`:

```typescript
export const packages: Package[] = [
  {
    id: 'package-id',
    name: 'ชื่อชุด',
    nameEn: 'Package Name',
    description: 'รายละเอียดชุด',
    pricePerPerson: 95,
    minOrder: 10,
    pieces: 3,
    includes: ['รายการ 1', 'รายการ 2'],
    addOns: [
      { name: 'เครื่องดื่ม', price: 20, unit: 'แก้ว' }
    ],
    leadTime: 'สั่งล่วงหน้า 2 วัน',
    isPopular: true,
  },
  // ... more packages
];
```

### Changing Testimonials

Edit `src/data/testimonials.ts` to add/update customer reviews.

### Changing FAQ

Edit `src/data/faq.ts` to add/update frequently asked questions.

### Changing Theme Colors

Edit `src/styles/global.css` in the `@theme` block:

```css
@theme {
  --color-bg: #FFF7E8;
  --color-primary: #8B5E3C;
  --color-secondary: #2FBF9B;
  --color-accent: #F7C948;
  --color-cute-accent: #FF7AA2;
  --color-text: #1F2937;
}
```

### Changing SEO Data

Edit `src/components/SEO.astro` to update:
- Default title and description
- Open Graph tags
- Twitter card data
- Site URL

## Cloudflare Pages Deployment

### Step 1: Push to Git

```bash
git init
git add .
git commit -m "Initial commit: Kanom Kru Kung landing page"
git remote add origin <your-repo-url>
git push -u origin main
```

### Step 2: Connect to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages
2. Click **Create a project** → **Connect to Git**
3. Select your repository
4. Configure build settings:

| Setting | Value |
|---------|-------|
| Framework preset | Astro |
| Build command | `yarn build` |
| Build output directory | `dist` |

### Step 3: Set Environment Variables

In Cloudflare Pages project settings → Environment Variables:

| Variable | Value |
|----------|-------|
| `NODE_VERSION` | `22` |

> **Note**: The `.nvmrc` file specifies Node 22, but Cloudflare Pages may default to an older version. Setting `NODE_VERSION=22` ensures compatibility.

### Step 4: Deploy

Click **Save and Deploy**. Cloudflare will:
1. Clone your repository
2. Run `yarn install`
3. Run `yarn build`
4. Deploy the `dist` folder

### Automatic Deployments

After initial setup, every push to `main` triggers a new deployment automatically.

### Custom Domain (Optional)

1. Go to your Pages project → Custom domains
2. Add your domain (e.g., `kanomkrukung.com`)
3. Follow DNS configuration instructions
4. Update `sitemap.xml` and `SEO.astro` with your actual domain

## Production Checklist

Before going live:

- [ ] Replace placeholder contact info (phone, Line ID, social links)
- [ ] Update `public/og-image.png` with actual branded image (1200x630px)
- [ ] Update `public/apple-touch-icon.png` (180x180px)
- [ ] Update domain in `public/sitemap.xml`
- [ ] Update domain in `src/components/SEO.astro`
- [ ] Review and update product/package data with real prices
- [ ] Test on mobile devices
- [ ] Set up Cloudflare Analytics (optional)

## Performance

This site is optimized for performance:
- Static HTML generation (no client-side JS framework)
- Minimal JavaScript (only for mobile menu toggle)
- Optimized CSS with Tailwind
- Efficient font loading (Google Fonts with preconnect)
- SVG favicon for crisp display at all sizes

## License

Private project for Kanom Kru Kung.
