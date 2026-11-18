// Linien-Icons im Stil der Kanzlei-Zeichnungen (24er Raster, 1.5px Strich).
export const icons = {
  arrowRight: "M5 12h14M13 6l6 6-6 6",
  arrowUpRight: "M7 17 17 7M8.5 7H17v8.5",
  plus: "M12 5v14M5 12h14",
  chevronDown: "m6 9 6 6 6-6",
  menu: "M3 8h18M3 16h18",
  close: "M6 6l12 12M18 6 6 18",
  phone:
    "M5.2 3.5h3.3l1.6 4.1-2.1 1.5a11.5 11.5 0 0 0 6.9 6.9l1.5-2.1 4.1 1.6v3.3a1.7 1.7 0 0 1-1.8 1.7A16.5 16.5 0 0 1 3.5 5.3a1.7 1.7 0 0 1 1.7-1.8Z",
  mail: "M3.5 5.5h17v13h-17zM3.5 6.5l8.5 6.5 8.5-6.5",
  fax: "M7 9V3.5h10V9M7 17.5H4.5a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v6.5a1 1 0 0 1-1 1H17M7 14h10v6.5H7z",
  pin: "M12 21s-7-6.1-7-11.4a7 7 0 0 1 14 0C19 14.9 12 21 12 21ZM12 12.3a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7v5.2l3.4 2",
  columns: "M3 9.5 12 4l9 5.5M5 9.5V18M9.7 9.5V18M14.3 9.5V18M19 9.5V18M3 20.5h18",
  seal: "M12 15.5a6.2 6.2 0 1 0 0-12.4 6.2 6.2 0 0 0 0 12.4ZM8.6 14.4 7.2 21l4.8-2.4 4.8 2.4-1.4-6.6M9.6 9.4l1.7 1.7 3.2-3.3",
  layers: "m12 3.5 9 4.8-9 4.8-9-4.8 9-4.8ZM3 12.6l9 4.8 9-4.8M3 16.9l9 4.8 9-4.8",
  chat:
    "M3.5 5.8c0-.9.7-1.6 1.6-1.6h9.8c.9 0 1.6.7 1.6 1.6v5.6c0 .9-.7 1.6-1.6 1.6H8.6l-3.9 3v-3.1a1.6 1.6 0 0 1-1.2-1.5ZM19.2 8.6h.2c.9 0 1.6.7 1.6 1.6v5.7c0 .7-.4 1.3-1.1 1.5V20l-3.6-2.8h-5.2c-.9 0-1.6-.7-1.6-1.6v-.4",
  agreement:
    "M6 3.5h8.2L18 7.3v13.2H6zM14 3.5v4h4M9 11h6M9 14h3.5M9.2 17.6c.9-.9 1.5-1.8 2.1-1.4.6.4-.4 1.7.4 1.8.7.1 1.3-.7 2-1.1.6-.3.9.6 1.6.5",
  scales:
    "M12 3.5v17M8 20.5h8M4.5 7h15M12 5.3l-7.5 1.7M12 5.3l7.5 1.7M4.5 7 2 13a2.5 2.5 0 0 0 5 0L4.5 7ZM19.5 7 17 13a2.5 2.5 0 0 0 5 0l-2.5-6Z",
  docCheck: "M6 3.5h8.2L18 7.3v13.2H6zM14 3.5v4h4M9 14l2.2 2.2 4-4.2",
  calendar: "M4 6h16v14.5H4zM4 10h16M8.5 3.5v4M15.5 3.5v4M8 14h2M11 14h2M14 14h2M8 17h2M11 17h2",
};

export default function Icon({ name, className = "w-5 h-5", strokeWidth = 1.5, draw = false }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${draw ? "draw " : ""}${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <path d={icons[name]} pathLength={draw ? 1 : undefined} />
    </svg>
  );
}
