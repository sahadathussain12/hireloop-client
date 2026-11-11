import { FiSearch, FiMapPin } from "react-icons/fi";

const trending = ["Product Designer", "AI Engineering", "Dev-ops Engineer"];

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden px-5 pb-20 pt-14 font-normal antialiased md:px-10">
      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        {/* Badge */}
        <div className="flex w-full items-center justify-center gap-3">
          <span className="hidden h-px flex-1 bg-gradient-to-r from-transparent to-white/25 sm:block" />
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black px-4 py-2 text-xs">
            <span aria-hidden="true">💼</span>
            <span className="font-semibold text-white">50,000+</span>
            <span className="font-mono font-normal uppercase text-gray-400">
              new jobs this month
            </span>
          </p>
          <span className="hidden h-px flex-1 bg-gradient-to-l from-transparent to-white/25 sm:block" />
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Find Your Dream Job Today
        </h1>

        <p className="mt-5 max-w-xl text-sm font-normal leading-relaxed text-gray-400 md:text-base">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </p>

        {/* Search Bar */}
        <div className="mt-10 flex w-full max-w-2xl flex-col gap-2 rounded-xl border border-white/5 bg-[#0b0b0b] p-2 sm:flex-row sm:items-center">
          <label className="flex flex-1 items-center gap-3 px-3 py-2">
            <FiSearch className="h-4 w-4 shrink-0 text-gray-300" aria-hidden="true" />
            <input
              type="text"
              placeholder="Job title, skill or company"
              className="w-full bg-transparent text-sm font-normal text-gray-100 placeholder-gray-500 outline-none"
            />
          </label>

          <span className="hidden h-6 w-px bg-white/10 sm:block" aria-hidden="true" />

          <label className="flex flex-1 items-center gap-3 px-3 py-2">
            <FiMapPin className="h-4 w-4 shrink-0 text-gray-300" aria-hidden="true" />
            <input
              type="text"
              placeholder="Location or Remote"
              className="w-full bg-transparent text-sm font-normal text-gray-100 placeholder-gray-500 outline-none"
            />
          </label>

          <button
            type="button"
            aria-label="Search jobs"
            className="flex h-9 w-full items-center justify-center rounded-lg bg-[#6254ff] text-white transition hover:bg-[#5142ed] sm:w-9"
          >
            <FiSearch className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {/* Trending */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <span className="text-xs font-normal text-gray-400">
            Trending Position
          </span>

          {trending.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-[#161616] px-3 py-1.5 text-xs font-normal text-gray-200"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;