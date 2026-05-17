"use client";

export default function ThemeToggle() {
  function toggle() {
    const el = document.documentElement;
    const isDark = el.getAttribute("data-theme") === "dark";
    if (isDark) {
      el.removeAttribute("data-theme");
    } else {
      el.setAttribute("data-theme", "dark");
    }
    try {
      localStorage.setItem("theme", isDark ? "light" : "dark");
    } catch {
      /* localStorage unavailable — ignore */
    }
  }

  return (
    <button onClick={toggle} className="theme-toggle" aria-label="Toggle theme">
      <svg className="icon-moon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
      <svg className="icon-sun" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    </button>
  );
}
