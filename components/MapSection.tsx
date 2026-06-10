const BRANCHES = [
  {
    id: 'kalavasal',
    area: 'Kalavasal',
    name: 'Le Thia Cares — Kalavasal',
    address:
      'No.23, 1st Floor, SBI Staff II Colony,\nKanadasan Street, SS Colony,\nnear Sboa Children School,\nMadurai, Tamil Nadu 625016',
    phone: '8088009898',
    phoneDisplay: '+91 80880 09898',
    mapsLink: 'https://maps.app.goo.gl/q2o7D3Adi7wxLzbV9',
    embedSrc:
      'https://maps.google.com/maps?q=SBI+Staff+II+Colony+Kanadasan+Street+SS+Colony+near+Sboa+Children+School+Madurai+Tamil+Nadu+625016&output=embed',
  },
  {
    id: 'annanagar',
    area: 'Anna Nagar',
    name: 'Le Thia Cares — Anna Nagar',
    address:
      'First Floor, New HIG B-141,\n80 Feet Rd, Anna Nagar,\nMadurai, Tamil Nadu 625020',
    phone: '9360431976',
    phoneDisplay: '+91 93604 31976',
    mapsLink: 'https://maps.app.goo.gl/TX2n4P7w1gbpgoAX8',
    embedSrc:
      'https://maps.google.com/maps?q=New+HIG+B-141+80+Feet+Rd+Anna+Nagar+Madurai+Tamil+Nadu+625020&output=embed',
  },
];

export function MapSection() {
  return (
    <section className="w-full">
      {/*
        4-item grid:
          Desktop (md:grid-cols-2) — natural DOM order fills rows:
            Row 1 │ InfoBar-Kalavasal  │ InfoBar-AnnaNagar  │  ← same height
            Row 2 │ Map-Kalavasal      │ Map-AnnaNagar      │  ← same height
          Mobile (grid-cols-1) — CSS order: 1 → 2 → 3 → 4
            InfoBar-Kalavasal (order-1)
            Map-Kalavasal     (order-2)
            InfoBar-AnnaNagar (order-3)
            Map-AnnaNagar     (order-4)
      */}
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* ── Info bar · Kalavasal ──────────────── mobile row 1 · desktop col-1 row-1 */}
        <div
          className="order-1 flex items-start justify-between gap-4 bg-[#492e3b] px-4 py-6 sm:px-6 md:order-none md:border-r md:border-white/10 md:px-8 lg:px-10"
        >
          <div className="flex flex-col gap-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d2c3c799]">
              Madurai — {BRANCHES[0].area}
            </p>
            <p className="text-[15px] font-semibold leading-snug text-white">
              {BRANCHES[0].name}
            </p>
            <p className="whitespace-pre-line text-[12px] leading-[1.75] text-[#d2c3c7]">
              {BRANCHES[0].address}
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-col items-end gap-3">
            <a
              href={`tel:+91${BRANCHES[0].phone}`}
              className="flex items-center gap-2 text-[13px] font-semibold text-white transition-opacity hover:opacity-75"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full" style={{ background: 'rgba(255,255,255,0.15)' }}>
                <span className="material-symbols-outlined text-[15px]">call</span>
              </span>
              {BRANCHES[0].phoneDisplay}
            </a>
            <a
              href={BRANCHES[0].mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[13px] font-semibold text-white transition-opacity hover:opacity-75"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full" style={{ background: 'rgba(255,255,255,0.15)' }}>
                <span className="material-symbols-outlined text-[15px]">directions</span>
              </span>
              Get Directions
            </a>
          </div>
        </div>

        {/* ── Info bar · Anna Nagar ─────────────── mobile row 3 · desktop col-2 row-1 */}
        <div
          className="order-3 flex items-start justify-between gap-4 bg-[#492e3b] px-4 py-6 sm:px-6 md:order-none md:px-8 lg:px-10"
        >
          <div className="flex flex-col gap-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d2c3c799]">
              Madurai — {BRANCHES[1].area}
            </p>
            <p className="text-[15px] font-semibold leading-snug text-white">
              {BRANCHES[1].name}
            </p>
            <p className="whitespace-pre-line text-[12px] leading-[1.75] text-[#d2c3c7]">
              {BRANCHES[1].address}
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-col items-end gap-3">
            <a
              href={`tel:+91${BRANCHES[1].phone}`}
              className="flex items-center gap-2 text-[13px] font-semibold text-white transition-opacity hover:opacity-75"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full" style={{ background: 'rgba(255,255,255,0.15)' }}>
                <span className="material-symbols-outlined text-[15px]">call</span>
              </span>
              {BRANCHES[1].phoneDisplay}
            </a>
            <a
              href={BRANCHES[1].mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[13px] font-semibold text-white transition-opacity hover:opacity-75"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full" style={{ background: 'rgba(255,255,255,0.15)' }}>
                <span className="material-symbols-outlined text-[15px]">directions</span>
              </span>
              Get Directions
            </a>
          </div>
        </div>

        {/* ── Map · Kalavasal ──────────────────── mobile row 2 · desktop col-1 row-2 */}
        <div className="order-2 h-[300px] md:order-none md:h-[380px] md:border-r md:border-[#d2c3c740] lg:h-[420px]">
          <iframe
            title={BRANCHES[0].name}
            src={BRANCHES[0].embedSrc}
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* ── Map · Anna Nagar ─────────────────── mobile row 4 · desktop col-2 row-2 */}
        <div className="order-4 h-[300px] md:order-none md:h-[380px] lg:h-[420px]">
          <iframe
            title={BRANCHES[1].name}
            src={BRANCHES[1].embedSrc}
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  );
}
