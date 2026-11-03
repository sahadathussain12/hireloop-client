"use client";

import Image from "next/image";
import { FiBriefcase, FiBarChart2, FiUsers, FiStar } from "react-icons/fi";

const StatsSection = () => {
  const stats = [
    {
      icon: <FiBriefcase />,
      number: "50K",
      label: "Active Jobs",
    },
    {
      icon: <FiBarChart2 />,
      number: "12K",
      label: "Companies",
    },
    {
      icon: <FiUsers />,
      number: "2M",
      label: "Job Seekers",
    },
    {
      icon: <FiStar />,
      number: "97%",
      label: "Satisfaction Rate",
    },
  ];

  return (
    <section className="relative  w-full overflow-hidden bg-[#171717]">
      {/* Globe Background */}
      <div className="relative mx-auto h-[570px] w-full max-w-[1440px] overflow-hidden md:h-[600px]">
        {/* Blue Glow */}
        <div className="absolute left-1/2 top-[100px] h-[350px] w-[650px] -translate-x-1/2 rounded-full bg-indigo-600/40 blur-[110px] md:h-[450px] md:w-[850px]" />

        {/* Globe Image */}
        <div className="pointer-events-none absolute left-1/2 top-[-265px] w-[720px] max-w-none -translate-x-1/2 md:top-[-300px] md:w-[900px]">
          <Image
            src="/globe.png"
            alt="Glowing global career network"
            width={1440}
            height={1882}
            priority
            className="h-auto w-full object-contain [filter:hue-rotate(-55deg)]"
          />
        </div>

        {/* Content */}
        <div className="absolute inset-x-0 top-[175px] z-10 mt-15 px-4 text-center">
          <p className="mx-auto max-w-4xl text-3xl font-medium leading-relaxed text-white/80 md:text-4xl">
            Assisting over{" "}
            <span className="font-bold text-white">15,000 job seekers</span>
            <br />
            find their dream positions.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="absolute inset-x-0 bottom-10 z-20 mx-auto grid max-w-[1100px] grid-cols-2 gap-3 px-5 md:bottom-10 md:grid-cols-4 md:gap-4 md:px-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex min-h-[135px] flex-col justify-between rounded-xl border border-white/10 bg-black/85 p-4 shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-indigo-500/50 md:min-h-[142px] md:p-5"
            >
              <div className="text-lg text-white">{stat.icon}</div>

              <div>
                <h3 className="text-3xl font-semibold tracking-tight text-white md:text-[34px]">
                  {stat.number}
                </h3>

                <p className="mt-2 text-xs text-gray-300 md:text-sm">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
