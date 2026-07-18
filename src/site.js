// ── Central brand + content config for Shabab Al Deira ──────────────
export const BRAND = {
  name: "Shabab Al Deira",
  legal: "Shabab Al Deira Furniture Trading LLC",
  tagline: "Designing Spaces, Enhancing Lives.",
  phone: "+971 55 788 6990",
  phoneRaw: "+971557886990",
  whatsapp: "971557886990",
  web: "www.sdcurtains.com",
  address: "Naif Road, Deira, near Khalid Mosque, P.O. Box 60385, Dubai, UAE",
  email: "info@sdcurtains.com",
};

const img = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const HERO_IMG = img("1616137466211-f939a420be84", 2000);

export const SERVICES = [
  {
    slug: "curtains",
    title: "Curtains",
    icon: "curtains",
    desc: "Bespoke drapery — sheers, blackouts and layered treatments tailored to every window.",
    tagline: "Bespoke drapery, tailored to every window",
    img: img("1616486338812-3dadae4b4ace"),
    intro: [
      "From soft, light-filtering sheers to full blackout drapery, our curtains are cut, sewn and fitted to your exact windows.",
      "Choose from hundreds of imported fabrics, linings and heading styles to match any interior — residential or commercial.",
    ],
    types: [
      "Sheer & voile curtains",
      "Blackout & dim-out curtains",
      "Eyelet, pinch & wave pleat",
      "Double-layer day & night",
      "Motorised curtain tracks",
    ],
    features: [
      { t: "Made to measure", d: "Every curtain is tailored to your window's exact dimensions." },
      { t: "Premium fabrics", d: "Imported linens, velvets and blends in hundreds of shades." },
      { t: "Professional fitting", d: "Concealed tracks and rods installed by our own team." },
      { t: "Motorisation ready", d: "Optional app and remote-controlled motorised tracks." },
    ],
    gallery: [img("1615529182904-14819c35db37"), img("1522708323590-d24dbb6b0267")],
  },
  {
    slug: "blinds-shutters",
    title: "Blinds & Shutters",
    icon: "blinds",
    desc: "Roller, roman, venetian and plantation shutters engineered for light and privacy.",
    tagline: "Precise light control and privacy",
    img: img("1513694203232-719a280e022f"),
    intro: [
      "Engineered window solutions that give you total control over light and privacy.",
      "From sleek roller blinds to timeless plantation shutters, we supply and fit every style to suit your space and budget.",
    ],
    types: [
      "Roller blinds",
      "Roman blinds",
      "Venetian (wood & aluminium)",
      "Vertical blinds",
      "Plantation shutters",
      "Zebra / day-night blinds",
    ],
    features: [
      { t: "Total light control", d: "Dim, filter or fully block daylight at the twist of a wand." },
      { t: "Child-safe designs", d: "Cordless and motorised options for family homes." },
      { t: "Moisture resistant", d: "Aluminium and PVC ranges built for kitchens and baths." },
      { t: "Custom finishes", d: "Wood tones, colours and slat sizes to match your décor." },
    ],
    gallery: [img("1600585154340-be6161a56a0c"), img("1567016432779-094069958ea5")],
  },
  {
    slug: "carpets-rugs",
    title: "Carpets & Rugs",
    icon: "carpet",
    desc: "Wall-to-wall carpeting and hand-finished rugs that ground a room in warmth.",
    tagline: "Warmth underfoot, wall to wall",
    img: img("1600166898405-da9535204843"),
    intro: [
      "Ground your rooms in comfort with premium carpeting and bespoke rugs.",
      "Wall-to-wall installations, stair runners and custom-cut area rugs in wool and durable synthetic blends.",
    ],
    types: [
      "Wall-to-wall carpeting",
      "Custom area rugs",
      "Stair runners",
      "Masjid & prayer carpets",
      "Artificial grass",
    ],
    features: [
      { t: "Stain resistant", d: "Easy-clean fibres that stay looking new for years." },
      { t: "Acoustic comfort", d: "Softens sound and adds warmth to any room." },
      { t: "Custom sizes", d: "Cut and bound to any shape or dimension you need." },
      { t: "Expert installation", d: "Seam-free fitting by experienced installers." },
    ],
    gallery: [img("1616486338812-3dadae4b4ace"), img("1618221195710-dd6b41faaea6")],
  },
  {
    slug: "upholstery",
    title: "Upholstery",
    icon: "sofa",
    desc: "Reupholstered sofas, headboards and seating in premium performance fabrics.",
    tagline: "Reborn sofas, headboards & majlis seating",
    img: img("1567016432779-094069958ea5"),
    intro: [
      "Give tired furniture a second life. We reupholster sofas, chairs, headboards and majlis seating in durable, beautiful fabrics.",
      "Foam replacement, frame repair and custom cushions are all part of the service.",
    ],
    types: [
      "Sofas & couches",
      "Arabic majlis seating",
      "Headboards & beds",
      "Dining chairs",
      "Ottomans & benches",
    ],
    features: [
      { t: "Foam replacement", d: "Fresh, high-density foam restores comfort and shape." },
      { t: "Performance fabrics", d: "Stain and wear-resistant textiles for daily use." },
      { t: "Frame repair", d: "We fix loose joints and springs, not just the cover." },
      { t: "Custom cushions", d: "Made-to-order seat, back and scatter cushions." },
    ],
    gallery: [img("1615529182904-14819c35db37"), img("1600166898405-da9535204843")],
  },
  {
    slug: "wallpapers",
    title: "Wallpapers",
    icon: "wallpaper",
    desc: "Feature walls and full-room installations — textures, murals and classic prints.",
    tagline: "Feature walls with real character",
    img: img("1618221195710-dd6b41faaea6"),
    intro: [
      "Transform a room with a single feature wall or a full installation.",
      "From subtle textures to bold custom murals, we supply and expertly hang wallpaper with clean, bubble-free seams.",
    ],
    types: [
      "Textured wallpaper",
      "Custom wall murals",
      "3D wall panels",
      "Kids' room designs",
      "Commercial vinyl",
    ],
    features: [
      { t: "Expert hanging", d: "Precise pattern matching and seamless joins." },
      { t: "Washable options", d: "Wipe-clean finishes for high-traffic areas." },
      { t: "Custom murals", d: "Print any image or design at wall scale." },
      { t: "Surface prep", d: "We prime and prepare walls for a lasting finish." },
    ],
    gallery: [img("1600585154340-be6161a56a0c"), img("1616486338812-3dadae4b4ace")],
  },
  {
    slug: "sheds-tents",
    title: "Sheds & Tents",
    icon: "tent",
    desc: "Custom outdoor shades, majlis tents and canopies built for the Gulf climate.",
    tagline: "Shade & shelter built for the Gulf",
    img: img("1504280390367-361c6d9f38f4"),
    intro: [
      "Custom outdoor structures built to withstand the Gulf climate.",
      "Majlis tents, car-park shades, canopies and pergolas in weather-resistant materials, engineered and installed to last.",
    ],
    types: [
      "Arabic majlis tents",
      "Car-park shades",
      "Canopies & pergolas",
      "Sun sails",
      "Event & wedding tents",
    ],
    features: [
      { t: "Weatherproof", d: "Materials rated for heat, sun, sand and rain." },
      { t: "UV resistant", d: "Fabrics that hold colour and strength for years." },
      { t: "Custom sizes", d: "Designed and fabricated to your exact space." },
      { t: "Steel & fabric", d: "Powder-coated frames with tensioned membranes." },
    ],
    gallery: [img("1616137466211-f939a420be84"), img("1600585154340-be6161a56a0c")],
  },
];

export const getService = (slug) => SERVICES.find((s) => s.slug === slug);

export const GALLERY = [
  { src: img("1616486338812-3dadae4b4ace", 900), label: "Layered curtains" },
  { src: img("1615529182904-14819c35db37", 900), label: "Living room styling" },
  { src: img("1567016432779-094069958ea5", 900), label: "Sofa upholstery" },
  { src: img("1600166898405-da9535204843", 900), label: "Hand-finished rugs" },
  { src: img("1504280390367-361c6d9f38f4", 900), label: "Outdoor sheds & tents" },
  { src: img("1522708323590-d24dbb6b0267", 900), label: "Bedroom drapery" },
  { src: img("1618221195710-dd6b41faaea6", 900), label: "Feature wallpaper" },
  { src: img("1513694203232-719a280e022f", 900), label: "Blinds & shutters" },
];

export const MISSION = [
  {
    title: "Our Story",
    text: "Founded in the heart of Deira, Shabab Al Deira has spent over 15 years dressing Dubai's homes, villas and offices — blending true craftsmanship with a personal, door-to-door service.",
  },
  {
    title: "Our Mission",
    text: "To transform every space we touch into a comfortable, elegant environment, delivering premium materials, precise tailoring and dependable service on every project — big or small.",
  },
  {
    title: "Our Vision",
    text: "To be the Gulf's most trusted name in window furnishings and interior finishing — recognised for quality, honesty and lasting client relationships.",
  },
];

export const MISSION_IMG = img("1600585154340-be6161a56a0c", 1100);

export const STATS = [
  { value: 15, suffix: "+", label: "Years of craft" },
  { value: 2400, suffix: "+", label: "Projects delivered" },
  { value: 60, suffix: "+", label: "Fabric collections" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
];
