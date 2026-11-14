import Script from "next/script";
import { site } from "@/lib/site";

// Google Analytics 4 via gtag.js. Only the live site loads it (Vercel sets VERCEL_ENV), so
// localhost and preview links don't count as visits. Set GA_FORCE=1 to test it locally.
export function GoogleAnalytics() {
  const id = site.gaMeasurementId;
  const enabled = process.env.VERCEL_ENV === "production" || process.env.GA_FORCE === "1";
  if (!id || !enabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', ${JSON.stringify(id)});`}
      </Script>
    </>
  );
}
