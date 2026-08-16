import { useEffect, useState } from "react";
import Link from "next/link";
import { basePath } from "@/lib/basePath";

const PASSWORD = "Kanzlei1";
const STORAGE_KEY = "kanzlei-preview-unlocked";

// Client-side only gate for the preview deployment (static export, no server
// to check credentials against). Keeps casual visitors and search crawlers
// out — not real security, since the app bundle is still downloadable.
export default function PasswordGate({ children }) {
  const [checked, setChecked] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setUnlocked(sessionStorage.getItem(STORAGE_KEY) === "true");
    setChecked(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setUnlocked(true);
    } else {
      setError(true);
    }
  };

  if (!checked) return null;
  if (unlocked) return children;

  return (
    <div className="fixed inset-0 z-[300] bg-brand-dark flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm text-center">
        <img src={`${basePath}/logo-light.svg`} alt="Logo" className="h-10 mx-auto mb-8" />
        <p className="text-white/60 text-sm mb-6">Diese Vorschau ist passwortgeschützt.</p>
        <input
          type="password"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError(false);
          }}
          placeholder="Passwort"
          autoFocus
          className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white text-center placeholder-white/30 focus:outline-none focus:border-brand-primary mb-3 transition-colors"
        />
        {error && <p className="text-brand-primary text-sm mb-3">Falsches Passwort.</p>}
        <button
          type="submit"
          className="w-full bg-brand-primary text-white font-semibold py-3 rounded-xl hover:bg-white hover:text-brand-dark transition-colors"
        >
          Zugang
        </button>
        <Link
          href="/impressum"
          className="inline-block mt-6 text-xs text-white/40 hover:text-white/70 transition-colors"
        >
          Impressum
        </Link>
      </form>
    </div>
  );
}
