import type { NextConfig } from "next";

import { site } from "./src/lib/site";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Short, shareable booking link. Temporary (307) so browsers don't cache it and we can
      // point it at a different Aryeo order form later by changing site.orderUrl.
      { source: "/book", destination: site.orderUrl, permanent: false },
    ];
  },
};

export default nextConfig;
