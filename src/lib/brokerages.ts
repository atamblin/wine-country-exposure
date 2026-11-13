import type { StaticImageData } from "next/image";
import berkshireHathaway from "@/assets/brokerages/berkshire-hathaway.png";
import century21 from "@/assets/brokerages/century-21.png";
import coldwellBanker from "@/assets/brokerages/coldwell-banker.png";
import compass from "@/assets/brokerages/compass.png";
import corcoranIcon from "@/assets/brokerages/corcoran-icon.png";
import engelVolkers from "@/assets/brokerages/engel-volkers.png";
import kellerWilliams from "@/assets/brokerages/keller-williams.png";
import nexthome from "@/assets/brokerages/nexthome.png";
import poppyRealEstate from "@/assets/brokerages/poppy-real-estate.png";
import sothebys from "@/assets/brokerages/sothebys.png";
import vanguardProperties from "@/assets/brokerages/vanguard-properties.png";
import wRealEstate from "@/assets/brokerages/w-real-estate.png";

export type Brokerage = { name: string; logo: StaticImageData };

// Shown in the "Trusted by agents at" strip on the homepage, in this order.
// Source files (full color, plus SVG originals) live in Dropbox under "Brokerage Logos/".
export const brokerages: Brokerage[] = [
  { name: "Compass", logo: compass },
  { name: "Coldwell Banker", logo: coldwellBanker },
  { name: "Poppy Real Estate", logo: poppyRealEstate },
  { name: "Sotheby's International Realty", logo: sothebys },
  { name: "Keller Williams", logo: kellerWilliams },
  { name: "W Real Estate", logo: wRealEstate },
  { name: "Corcoran Icon Properties", logo: corcoranIcon },
  { name: "Engel & Völkers", logo: engelVolkers },
  { name: "Berkshire Hathaway HomeServices", logo: berkshireHathaway },
  { name: "Century 21", logo: century21 },
  { name: "NextHome", logo: nexthome },
  { name: "Vanguard Properties", logo: vanguardProperties },
];
