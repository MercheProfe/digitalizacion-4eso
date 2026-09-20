export default function UnitIcon({type}) {

  const common = {
    width: 26,
    height: 26,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  };

  const icons = {

    computer: (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8" />
        <path d="M12 16v4" />
        <path d="M7 8h4" />
        <path d="M7 11h7" />
      </svg>
    ),

    cloud: (
      <svg {...common}>
        <path d="M7 18h10a4 4 0 0 0 .7-7.94A6 6 0 0 0 6.3 8.6 4.5 4.5 0 0 0 7 18Z" />
        <path d="M9 14h6" />
        <path d="M12 11v6" />
      </svg>
    ),

    media: (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="m10 9 5 3-5 3Z" />
      </svg>
    ),

    security: (
      <svg {...common}>
        <path d="M12 3 5 6v5c0 4.6 2.9 8.2 7 10 4.1-1.8 7-5.4 7-10V6Z" />
        <rect x="9" y="10" width="6" height="5" rx="1" />
        <path d="M10.5 10V8.5a1.5 1.5 0 0 1 3 0V10" />
      </svg>
    ),

    network: (
      <svg {...common}>
        <circle cx="12" cy="5" r="2" />
        <circle cx="5" cy="18" r="2" />
        <circle cx="19" cy="18" r="2" />
        <path d="M12 7v4" />
        <path d="M12 11 6 16" />
        <path d="m12 11 6 5" />
      </svg>
    ),

    app: (
      <svg {...common}>
        <rect x="6" y="2" width="12" height="20" rx="2" />
        <path d="M10 6h4" />
        <path d="m10 11 2 2 3-4" />
        <path d="M11 18h2" />
      </svg>
    ),

  };

  return icons[type] ?? null;
}