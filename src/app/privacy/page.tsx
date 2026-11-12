import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `What information ${site.name} collects, how we use it, and the choices you have.`,
  alternates: { canonical: "/privacy" },
};

const email = <a href={`mailto:${site.email}`}>{site.email}</a>;

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="November 12, 2026"
      intro={
        <p>
          We collect only what we need to schedule shoots, get paid, and deliver your media. We don&apos;t
          sell your information or use it for advertising. This policy explains the details.
        </p>
      }
    >
      <LegalSection id="scope" title="1. What this policy covers">
        <p>
          This policy applies to {site.name} (&ldquo;we,&rdquo; &ldquo;us&rdquo;), our website at{" "}
          <a href={site.url}>winecountryexposure.com</a>, our booking and delivery portal at
          media.winecountryexposure.com, and the shoots we do. It sits alongside our{" "}
          <Link href="/terms">Terms of Service</Link>.
        </p>
      </LegalSection>

      <LegalSection id="collect" title="2. Information we collect">
        <p>
          <strong>What you give us when you book or contact us:</strong>
        </p>
        <ul>
          <li>Your name, email, phone number, and brokerage.</li>
          <li>
            Property details: address, square footage, occupancy, pets, access instructions such as lockbox
            or gate codes, and any notes you add.
          </li>
          <li>Anything you send us by email or through our booking portal.</li>
        </ul>
        <p>
          <strong>Payment information.</strong> Card payments are processed by Stripe. We see the payment
          amount, status, and the last four digits of the card, but never the full card number.
        </p>
        <p>
          <strong>What we capture at the property.</strong> Our photos, video, and 3D scans record the home
          as it is presented. They can incidentally include belongings, artwork, or documents left in view,
          which is why we ask that personal items be put away before we arrive.
        </p>
        <p>
          <strong>What&apos;s collected automatically.</strong> When you visit our website, our hosting
          provider (Vercel) records standard technical logs such as IP address, browser type, the pages
          requested, and the time of the request, to keep the site secure and running. Our booking portal
          uses cookies needed to keep you signed in and process orders.
        </p>
        <p>
          <strong>Analytics.</strong> We use Google Analytics to understand how people find and use our
          website: which pages are visited, how long visits last, what device and browser are used, roughly
          where visitors are (city level), and which site or search sent them. Google Analytics uses cookies
          and similar technology to do this. We use these reports only to improve our website; we
          don&apos;t use Google Analytics for advertising, and we don&apos;t combine it with information
          that identifies you by name. You can block it with your browser&apos;s cookie settings or with
          Google&apos;s{" "}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer">
            opt-out browser add-on
          </a>
          , and you can read how Google handles this data at{" "}
          <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer">
            How Google uses information from sites that use its services
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection id="use" title="3. How we use it">
        <ul>
          <li>To schedule and perform shoots, get into the property, and avoid surprises on site.</li>
          <li>To take payment, send receipts and invoices, and keep business and tax records.</li>
          <li>To deliver your media and host property pages and tours.</li>
          <li>To answer questions, send appointment reminders, and follow up on your order.</li>
          <li>
            Occasionally, to tell you about new services or pricing. You can opt out at any time by
            replying or emailing {email}.
          </li>
          <li>To see how our website is used, so we can make it clearer and faster.</li>
          <li>To protect our business, our team, and our clients, and to meet legal obligations.</li>
        </ul>
        <p>
          Access codes and entry instructions are used only by the team member doing your shoot.
        </p>
      </LegalSection>

      <LegalSection id="share" title="4. Who we share it with">
        <p>
          We <strong>don&apos;t sell</strong> personal information, and we don&apos;t share it for
          cross-context behavioral advertising. We share it only with:
        </p>
        <ul>
          <li>
            <strong>Our team:</strong> the photographers and editors who work on your order.
          </li>
          <li>
            <strong>Service providers</strong> that run parts of our business for us, under their own
            privacy and security commitments: Aryeo (booking, invoicing, and media delivery), Stripe
            (payments), Google Workspace (email and files), Google Analytics (website statistics), Vercel (website
            hosting), and, when your order
            includes them, Matterport and Zillow (3D tours and floor plans) and editing services.
          </li>
          <li>
            <strong>The public, when you publish.</strong> Property pages, tours, and media are meant to be
            shared to market the listing. Anyone with the link can view them.
          </li>
          <li>
            <strong>When the law requires it,</strong> or to protect someone&apos;s safety or our legal
            rights.
          </li>
          <li>
            <strong>A buyer of our business,</strong> if {site.name} is ever sold or merged, under the same
            protections described here.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="retention" title="5. How long we keep it">
        <p>
          We keep client and order records for as long as we work together and for up to seven years
          afterward for tax and accounting purposes. We keep archived media so we can redeliver it or
          answer licensing questions. You can ask us to delete information we don&apos;t need to keep (see
          below).
        </p>
      </LegalSection>

      <LegalSection id="security" title="6. How we protect it">
        <p>
          We use reputable providers, limit access to the people who need it, and protect our accounts with
          strong sign-in security. No system is perfectly secure, so we can&apos;t guarantee
          absolute security, but we&apos;ll tell you promptly if a breach affects your information, as
          California law requires.
        </p>
      </LegalSection>

      <LegalSection id="choices" title="7. Your choices and California rights">
        <p>You can ask us to:</p>
        <ul>
          <li>Tell you what personal information we have about you and give you a copy.</li>
          <li>Correct anything that&apos;s wrong.</li>
          <li>Delete your information, except what we must keep for legal or tax reasons.</li>
          <li>Stop sending you marketing emails.</li>
          <li>
            Remove photos of a home from our own portfolio and website (homeowners can ask too, once the
            listing has closed).
          </li>
        </ul>
        <p>
          Email {email} to make a request. We&apos;ll confirm it&apos;s really you, then respond within 45
          days. We won&apos;t treat you differently for using these rights. California residents can also
          ask, under the &ldquo;Shine the Light&rdquo; law, whether we share personal information with
          others for their direct marketing; we don&apos;t.
        </p>
        <p>
          Because we don&apos;t sell or share personal information for advertising, there&apos;s nothing to
          opt out of. To stop analytics cookies, use the browser settings or Google add-on described in
          section 2.
        </p>
      </LegalSection>

      <LegalSection id="children" title="8. Children">
        <p>
          Our services are for real estate professionals and property owners. We don&apos;t knowingly
          collect information from anyone under 16.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="9. Changes to this policy">
        <p>
          If we change how we handle personal information, we&apos;ll update this page and the date at the
          top. If the change is significant, we&apos;ll email clients before it takes effect.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="10. Contact">
        <p>
          Questions or requests about your privacy:
          <br />
          {site.name}, Sonoma County, California
          <br />
          {email}
        </p>
      </LegalSection>
    </LegalPage>
  );
}
