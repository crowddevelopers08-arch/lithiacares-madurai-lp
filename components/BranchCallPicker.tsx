'use client';
import { useState, useRef, useEffect } from 'react';

const BRANCHES = [
  {
    area: 'Kalavasal',
    city: 'Madurai',
    phone: '8088009898',
    display: '+91 80880 09898',
  },
  {
    area: 'Anna Nagar',
    city: 'Madurai',
    phone: '9360431976',
    display: '+91 93604 31976',
  },
];

interface Props {
  /** Button content (text / WaveText / icon row) */
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** Open the picker upward (default). Pass false for header / top-of-page buttons. */
  dropUp?: boolean;
}

export function BranchCallPicker({ children, className, style, dropUp = true }: Props) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  /* close on outside click / Escape */
  useEffect(() => {
    if (!open) return;
    const onMouse = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onMouse);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onMouse);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={wrapRef} className="relative inline-flex">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className={className}
        style={style}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        {children}
      </button>

      {open && (
        <>
          {/* Backdrop (mobile full-screen tap-out zone) */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
            aria-hidden
          />

          {/* Picker card */}
          <div
            role="dialog"
            aria-label="Choose branch to call"
            className={`absolute left-1/2 z-50 w-[240px] -translate-x-1/2 overflow-hidden rounded-2xl shadow-2xl
              ${dropUp ? 'bottom-[calc(100%+10px)]' : 'top-[calc(100%+10px)]'}`}
            style={{
              background: '#ffffff',
              border: '1px solid #d2c3c766',
              boxShadow: '0 8px 40px rgba(73,46,59,0.18), 0 2px 8px rgba(0,0,0,0.08)',
            }}
          >
            {/* Header row */}
            <div className="flex items-center justify-between border-b border-[#d2c3c73a] px-4 py-2.5">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#492e3b]">
                Choose Branch
              </p>
              <button
                onClick={() => setOpen(false)}
                className="flex h-5 w-5 items-center justify-center rounded-full text-[#71594e] hover:bg-[#492e3b10]"
                aria-label="Close"
              >
                <span className="material-symbols-outlined text-[14px]">close</span>
              </button>
            </div>

            {/* Branch options */}
            {BRANCHES.map((b) => (
              <a
                key={b.phone}
                href={`tel:+91${b.phone}`}
                onClick={() => setOpen(false)}
                className="group flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-[#492e3b08] active:bg-[#492e3b14]"
              >
                {/* Icon */}
                <span
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-colors group-hover:bg-[#492e3b1a]"
                  style={{ background: '#492e3b14' }}
                >
                  <span
                    className="material-symbols-outlined text-[18px] text-[#492e3b]"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    call
                  </span>
                </span>

                {/* Text */}
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#71594e]">
                    Madurai — {b.area}
                  </p>
                  <p className="mt-0.5 text-[14px] font-bold leading-none text-[#1a1c1b] group-hover:text-[#492e3b]">
                    {b.display}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
