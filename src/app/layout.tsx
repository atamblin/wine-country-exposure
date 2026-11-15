import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import { GoogleAnalytics } from "@/components/google-analytics";
import { site } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Sonoma County real estate media`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    title: `${site.name} — Sonoma County real estate media`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Sonoma County real estate media`,
    description: site.description,
  },
};

// Tells Google the site's name, so results say "Wine Country Exposure" instead of the domain.
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  alternateName: site.shortName,
  url: site.url,
};

// Business details for Google (structured data). Keep name, phone, and towns identical to the
// Google Business Profile. We travel to homes, so no street address is published.
const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  url: site.url,
  // Google needs a raster logo (PNG/JPG), at least 112px square.
  logo: `${site.url}/brand/wce-icon-512.png`,
  image: `${site.url}/opengraph-image`,
  email: site.email,
  telephone: site.phoneE164,
  areaServed: [...site.coreTowns, ...site.extendedTowns].map((town) => ({
    "@type": "City",
    name: `${town}, CA`,
  })),
  sameAs: [site.social.instagram, site.social.facebook],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${jakarta.variable} ${newsreader.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js-motion')",
          }}
        />
      </head>
      <body className="min-h-full bg-ivory font-sans text-charcoal">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
