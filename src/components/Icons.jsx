// Lightweight line icons for the services grid.
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function Icon({ name, className = "" }) {
  const p = { viewBox: "0 0 24 24", className, ...base };
  switch (name) {
    case "curtains":
      return (
        <svg {...p}>
          <path d="M3 3h18M4 3v16c3 0 4-2 4-8S7 3 4 3ZM20 3v16c-3 0-4-2-4-8s1-8 4-8ZM10 3v18M14 3v18" />
        </svg>
      );
    case "blinds":
      return (
        <svg {...p}>
          <rect x="4" y="3" width="16" height="18" rx="1" />
          <path d="M4 7h16M4 11h16M4 15h16M12 15v5M10 20h4" />
        </svg>
      );
    case "carpet":
      return (
        <svg {...p}>
          <rect x="3" y="6" width="18" height="12" rx="1" />
          <path d="M6 6v12M18 6v12M3 9h3M18 9h3M3 15h3M18 15h3M9 9l6 6M15 9l-6 6" />
        </svg>
      );
    case "sofa":
      return (
        <svg {...p}>
          <path d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" />
          <path d="M3 11a2 2 0 0 1 2 2v3h14v-3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4H1v-4a2 2 0 0 1 2-2ZM6 16v2M18 16v2" />
        </svg>
      );
    case "wallpaper":
      return (
        <svg {...p}>
          <rect x="3" y="3" width="18" height="18" rx="1" />
          <path d="M8 3v18M3 8h18M3 13h18M13 3v18" />
          <circle cx="10.5" cy="10.5" r="1" />
        </svg>
      );
    case "tent":
      return (
        <svg {...p}>
          <path d="M12 4 3 20h18L12 4ZM12 4v16M12 20l-4-7M12 20l4-7" />
        </svg>
      );
    default:
      return null;
  }
}
