import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that apply when you book a shoot with ${site.name} or use our website.`,
  alternates: { canonical: "/terms" },
};

const email = <a href={`mailto:${site.email}`}>{site.email}</a>;

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      updated="November 12, 2026"
      intro={
        <p>
          These terms cover two things: booking real estate media from {site.name} and using our website.
          We&apos;ve tried to keep them plain. If something here is unclear, email us at {email} before you
          book.
        </p>
      }
    >
      <LegalSection id="agreement" title="1. Who we are and when these terms apply">
        <p>
          {site.name} (&ldquo;{site.name},&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) provides real estate
          photography, video, aerial imaging, 3D tours, floor plans, twilight photography, virtual staging,
          and related listing marketing in Sonoma County, California. &ldquo;You&rdquo; means the person or
          brokerage that books or pays for our services, or anyone using{" "}
          <a href={site.url}>winecountryexposure.com</a>.
        </p>
        <p>
          Orders are placed and paid through our booking and delivery portal at{" "}
          <a href={site.loginUrl.replace("/login", "")}>media.winecountryexposure.com</a>, which is powered
          by Aryeo. By placing an order, paying an invoice, or using this website, you agree to these terms
          and to our <Link href="/privacy">Privacy Policy</Link>. If you book on behalf of a client or a
          brokerage, you confirm you have authority to do so.
        </p>
      </LegalSection>

      <LegalSection id="services" title="2. Our services">
        <p>
          Each order covers the products listed on it. Descriptions and prices on this website, including
          the estimate from our <Link href="/quote">quote tool</Link>, are a guide. The price shown on your
          order form at checkout is the price you pay. We may change our prices or product lineup at any
          time, but changes never affect an order that is already confirmed.
        </p>
        <p>
          Aerial photography and video are flown by FAA-certified remote pilots and depend on airspace
          permissions, weather, and local restrictions. If we can&apos;t fly safely or legally, we&apos;ll
          reschedule the aerial portion or refund it.
        </p>
      </LegalSection>

      <LegalSection id="payment" title="3. Booking and payment">
        <ul>
          <li>Payment is due in full when you book, by card through Stripe.</li>
          <li>
            Our core service area ({site.coreTowns.join(", ")}) has no travel fee. Appointments farther
            out, including {site.extendedTowns.join(", ")}, carry a travel fee based on driving time, shown
            on the order form before you pay.
          </li>
          <li>
            Requests outside our standard products, or homes above our listed square-footage tiers, are
            quoted separately in writing.
          </li>
          <li>California sales tax is added where the law requires it.</li>
        </ul>
      </LegalSection>

      <LegalSection id="cancellations" title="4. Cancelling and rescheduling">
        <ul>
          <li>
            You can cancel or reschedule at no charge up to <strong>24 hours</strong> before the scheduled
            start.
          </li>
          <li>
            Cancelling or rescheduling within 24 hours of the start carries a <strong>$75 fee</strong>.
          </li>
          <li>
            If we arrive and can&apos;t begin within 20 minutes of the scheduled start, because the property
            is locked, not ready, or occupied by people who weren&apos;t told about the shoot, we treat it as
            a late cancellation.
          </li>
          <li>
            If weather rules out exteriors, aerials, or a twilight shoot, we&apos;ll work with you to move
            that part of the order at no charge.
          </li>
          <li>
            If we have to cancel or can&apos;t make it, you&apos;ll get the choice of a new time or a full
            refund.
          </li>
        </ul>
        <p>
          Refunds are handled case by case and go back to the original card. Products that are delivered
          without a visit (such as virtual staging) can&apos;t be refunded once the work has started.
        </p>
      </LegalSection>

      <LegalSection id="property" title="5. Getting the property ready">
        <p>
          We photograph what&apos;s in front of us. To get the best results and keep everyone safe, you
          agree that you or the homeowner will:
        </p>
        <ul>
          <li>
            Have the home clean, tidy, and staged the way you want it shown. Our team doesn&apos;t move
            furniture or put away the owner&apos;s belongings.
          </li>
          <li>
            Tell us about pets on the order form, and have dogs secured or off the property during the
            shoot.
          </li>
          <li>
            Make sure the owner and any tenants know we&apos;re coming, and give us working access (lockbox,
            gate codes, alarm instructions).
          </li>
          <li>
            Put away anything private or valuable: mail, prescriptions, documents, family photos if
            preferred, jewelry, firearms, and anything showing account numbers or passwords. Our images are
            high resolution and anything left in view may be readable.
          </li>
        </ul>
        <p>
          We may decline to start, or stop, a shoot if we reasonably believe the property is unsafe for our
          team, including loose or aggressive animals or hazardous conditions. That counts as a late
          cancellation.
        </p>
      </LegalSection>

      <LegalSection id="delivery" title="6. Delivery, revisions, and hosting">
        <ul>
          <li>
            Photos, tours, and floor plans are typically delivered by the next business day. Video and
            larger homes can take longer; we&apos;ll tell you if we expect a delay. Shoots on weekends or
            holidays are delivered the following business day.
          </li>
          <li>
            Media is delivered through a property page and download link on our portal. Please download
            and keep your own copies. We keep archives as a courtesy but can&apos;t guarantee files will be
            available forever.
          </li>
          <li>
            Let us know about any problem with your media within <strong>7 days</strong> of delivery and
            we&apos;ll fix it, re-edit, or reshoot the affected images. Changes beyond correcting our own
            errors, such as new edits or extra virtual staging, may be billed separately.
          </li>
          <li>
            Matterport tours include one year of hosting. After that, hosting renews at $25 per year, or we
            can archive the tour or transfer it to your own Matterport account.
          </li>
          <li>
            Zillow 3D tours and floor plans are hosted by Zillow under Zillow&apos;s own terms.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="license" title="7. Who owns the photos, and how you can use them">
        <p>
          <strong>{site.name} keeps the copyright</strong> to all photos, video, tours, floor plans, and
          other media we create.
        </p>
        <p>
          Once your order is paid, we grant the listing agent and their brokerage a non-exclusive license to
          use the media to market that property for sale or lease, during the listing and afterward for the
          agent&apos;s own portfolio and promotion. That includes the MLS, listing portals, websites,
          social media, email, and print.
        </p>
        <p>
          This license <strong>doesn&apos;t transfer</strong> to anyone else: not the seller, the buyer,
          other agents, builders, architects, designers, stagers, or vacation-rental operators. They&apos;re
          welcome to license the images from us directly. You also may not sell the images, enter them in
          contests as your own, or use them for listings of a different property.
        </p>
        <p>
          We may use the media we create in our own portfolio and marketing. We won&apos;t include
          personal items or information that a homeowner asks us to keep out. If a homeowner wants images
          taken down after a sale, email {email} and we&apos;ll remove them from anything we control.
        </p>
      </LegalSection>

      <LegalSection id="edited-images" title="8. Edited images and AB 723">
        <p>
          Our standard editing corrects color, exposure, lens distortion, and vertical lines, and may remove
          small temporary items like cords or cars. Virtual staging, virtual twilights, sky replacement, and
          similar services change a photo more substantially.
        </p>
        <p>
          California&apos;s AB 723 and many MLS rules require agents to disclose digitally altered listing
          images and to make the unaltered version available. We&apos;ll provide unaltered versions of any
          altered image on request. Deciding which images need a disclosure, and adding it, is the
          responsibility of the agent publishing them.
        </p>
      </LegalSection>

      <LegalSection id="accuracy" title="9. Floor plans and measurements">
        <p>
          Floor plans, room dimensions, and square footage we produce are approximate and are for marketing
          only. They are not a survey or appraisal and shouldn&apos;t be relied on to set a price, make an
          offer, or decide whether to buy. Buyers should verify measurements independently.
        </p>
      </LegalSection>

      <LegalSection id="website" title="10. Using this website">
        <p>
          The content on this website, including our photos, text, logo, and design, belongs to{" "}
          {site.name} or the people who licensed it to us. You&apos;re welcome to browse, request quotes,
          and share links. Please don&apos;t copy or reuse our images or text, scrape the site, try to break
          or overload it, or use it for anything unlawful.
        </p>
        <p>
          Our site links to services run by others, including Aryeo (booking and delivery), Stripe
          (payment), Matterport, and Zillow. Those services have their own terms and privacy policies, and
          we aren&apos;t responsible for how they operate.
        </p>
      </LegalSection>

      <LegalSection id="liability" title="11. Disclaimers and limits on liability">
        <p>
          We do our work carefully and professionally. Beyond what these terms promise, our services and
          this website are provided &ldquo;as is,&rdquo; and to the extent the law allows we disclaim other
          warranties, including implied warranties of merchantability and fitness for a particular purpose.
        </p>
        <p>
          To the extent the law allows, we aren&apos;t liable for indirect, incidental, or consequential
          losses, such as a delayed sale, lost commission, or lost profits. Our total liability for any
          claim about an order is limited to the amount you paid for that order. Nothing here limits
          liability that can&apos;t be limited under California law, such as for gross negligence or
          willful misconduct.
        </p>
        <p>
          If you think something at the property was damaged during a shoot, tell us within 48 hours so we
          can look into it and make it right.
        </p>
      </LegalSection>

      <LegalSection id="indemnity" title="12. Your responsibilities">
        <p>
          You agree to cover claims, costs, and reasonable legal fees that arise from your use of our media
          outside the license above, from missing or inaccurate disclosures in your marketing, or from
          booking a shoot without the property owner&apos;s or occupant&apos;s permission.
        </p>
      </LegalSection>

      <LegalSection id="copyright-complaints" title="13. Copyright complaints">
        <p>
          If you believe something on our website infringes your copyright, email {email} with a
          description of your work, where the material appears on our site, your contact details, a
          statement that you believe in good faith the use isn&apos;t authorized, and a statement, under
          penalty of perjury, that your notice is accurate and you&apos;re the owner or authorized to act
          for the owner, along with your physical or electronic signature. We&apos;ll review it and remove
          the material if appropriate.
        </p>
      </LegalSection>

      <LegalSection id="accessibility" title="14. Accessibility">
        <p>
          We want this website to work for everyone. If you have trouble using any part of it, email{" "}
          {email} and we&apos;ll help you directly and fix what we can.
        </p>
      </LegalSection>

      <LegalSection id="disputes" title="15. Disputes">
        <p>
          If something goes wrong, please contact us first. Most problems are solved by contacting us.
          These terms are governed by California law. Any dispute that can&apos;t be resolved informally
          will be handled in the state courts located in Sonoma County, California, including small claims
          court where it qualifies.
        </p>
      </LegalSection>

      <LegalSection id="general" title="16. The fine print">
        <ul>
          <li>
            We may update these terms. The date at the top shows the latest version, and the version in
            effect when you place an order applies to that order.
          </li>
          <li>
            If any part of these terms is found unenforceable, the rest still applies.
          </li>
          <li>
            These terms, your order, and our Privacy Policy are the whole agreement between us about our
            services. A written agreement signed by both of us overrides them where they differ.
          </li>
          <li>
            You may not transfer these terms to someone else without our written consent. We may transfer
            them if our business is sold or reorganized.
          </li>
          <li>Nothing here makes us your employee, partner, or agent.</li>
        </ul>
      </LegalSection>

      <LegalSection id="contact" title="17. Contact">
        <p>
          {site.name}
          <br />
          Sonoma County, California
          <br />
          {email}
        </p>
      </LegalSection>
    </LegalPage>
  );
}
