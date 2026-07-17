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
    title: "Curtains",
    desc: "Bespoke drapery — sheers, blackouts and layered treatments tailored to every window.",
    img: img("1616486338812-3dadae4b4ace"),
    icon: "curtains",
  },
  {
    title: "Blinds & Shutters",
    desc: "Roller, roman, venetian and plantation shutters engineered for light and privacy.",
    img: img("1513694203232-719a280e022f"),
    icon: "blinds",
  },
  {
    title: "Carpets & Rugs",
    desc: "Wall-to-wall carpeting and hand-finished rugs that ground a room in warmth.",
    img: img("1600166898405-da9535204843"),
    icon: "carpet",
  },
  {
    title: "Upholstery",
    desc: "Reupholstered sofas, headboards and seating in premium performance fabrics.",
    img: img("1567016432779-094069958ea5"),
    icon: "sofa",
  },
  {
    title: "Wallpapers",
    desc: "Feature walls and full-room installations — textures, murals and classic prints.",
    img: img("1618221195710-dd6b41faaea6"),
    icon: "wallpaper",
  },
  {
    title: "Sheds & Tents",
    desc: "Custom outdoor shades, majlis tents and canopies built for the Gulf climate.",
    img: img("1504280390367-361c6d9f38f4"),
    icon: "tent",
  },
];

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
