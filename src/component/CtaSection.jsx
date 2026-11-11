import Link from "next/link";

const CX = 720;
const CY = 780;
const rings = Array.from({ length: 10 }, (_, i) => (i + 1) * 100);
const rays = Array.from({ length: 17 }, (_, i) => -170 + i * 10);

const point = (deg, len) => {
  const rad = (deg * Math.PI) / 180;
  return {
    x: Number((CX + len * Math.cos(rad)).toFixed(1)),
    y: Number((CY + len * Math.sin(rad)).toFixed(1)),
  };
};

const CtaSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black px-5 py-24 md:py-32">
      {/* Grid dome */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1440 620"
        preserveAspectRatio="xMidYMin slice"
        aria-hidden="true"
      >
        <defs>
          <clipPath id="cta-dome">
            <circle cx={CX} cy={CY} r="760" />
          </clipPath>
        </defs>

        {/* Faint grid across the whole section */}
        <g stroke="#8a7fff" strokeOpacity="0.1" strokeWidth="1" fill="none">
          {rings.map((r) => (
            <circle key={r} cx={CX} cy={CY} r={r} />
          ))}
          {rays.map((deg) => {
            const p = point(deg, 1300);
            return <line key={deg} x1={CX} y1={CY} x2={p.x} y2={p.y} />;
          })}
        </g>

        {/* Brighter grid inside the dome */}
        <g
          clipPath="url(#cta-dome)"
          stroke="#8a7fff"
          strokeOpacity="0.16"
          strokeWidth="1"
          fill="none"
        >
          {rings.map((r) => (
            <circle key={r} cx={CX} cy={CY} r={r} />
          ))}
          {rays.map((deg) => {
            const p = point(deg, 1300);
            return <line key={deg} x1={CX} y1={CY} x2={p.x} y2={p.y} />;
          })}
        </g>

        {/* Dome edge */}
        <circle
          cx={CX}
          cy={CY}
          r="760"
          fill="none"
          stroke="#a59cff"
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />
      </svg>

      {/* Indigo glow at the top of the dome */}
      <div
        className="pointer-events-none absolute -top-36 left-1/2 h-[420px] w-[760px] max-w-full -translate-x-1/2 rounded-full bg-[#5b4cff]/60 blur-[100px]"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
        <h2 className="text-4xl font-medium leading-tight tracking-tight text-white md:text-5xl">
          Your next role is
          <br className="hidden sm:block" /> already looking for you
        </h2>

        <p className="mt-5 text-sm font-normal text-gray-300 md:text-base">
          Build a profile in three minutes. The matches start arriving tomorrow
          morning.
        </p>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/register"
            className="rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-gray-200"
          >
            Create a free account
          </Link>

          <Link
            href="/pricing"
            className="rounded-lg border border-white/15 bg-[#120f1c] px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/30"
          >
            View pricing
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;