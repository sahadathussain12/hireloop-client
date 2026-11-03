"use client";

import {
  FiSearch,
  FiTrendingUp,
  FiBarChart2,
  FiBookmark,
  FiAperture,
  FiFileText,
  FiHexagon,
  FiArrowUpRight,
} from "react-icons/fi";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FiSearch />,
      title: "Smart Search",
      description: "Find your ideal job with advanced filters.",
    },
    {
      icon: <FiTrendingUp />,
      title: "Salary Insights",
      description: "Get real salary data to negotiate confidently.",
    },
    {
      icon: <FiBarChart2 />,
      title: "Top Companies",
      description: "Apply to vetted companies that are hiring.",
    },
    {
      icon: <FiBookmark />,
      title: "Saved Jobs",
      description: "Manage apps & favorites on your dashboard.",
    },
    {
      icon: <FiAperture />,
      title: "One-Click Apply",
      description: "Simplify your job applications for an easier process!",
    },
    {
      icon: <FiFileText />,
      title: "Resume Builder",
      description: "Create professional resumes with modern templates.",
    },
    {
      icon: <FiHexagon />,
      title: "Skill-Based Matching",
      description: "Discover jobs that match your skills and experience.",
    },
    {
      icon: <FiArrowUpRight />,
      title: "Career Growth Resources",
      description: "Boost your career with quick interview tips.",
    },
  ];

  return (
    <section className="w-full bg-[#151515] px-5 py-16 md:px-10 md:py-20 text-left no-underline select-none">
      <div className="mx-auto w-full max-w-[1500px]">

        {/* Heading */}
        <div className="mb-10 text-center md:mb-12">
          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="h-1 w-1 bg-indigo-500 rounded-full" />
            <span className="text-[11px] font-medium tracking-wider text-gray-300 uppercase no-underline">
              FEATURES JOB
            </span>
            <span className="h-1 w-1 bg-indigo-500 rounded-full" />
          </div>

          <h2 className="mx-auto max-w-md text-3xl font-medium leading-tight tracking-tight text-white md:text-[30px] !no-underline" style={{ textDecoration: 'none' }}>
            Everything you need
            <br />
            to succeed
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-x-7 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-9">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 text-left no-underline"
            >

              {/* Icon Box */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-white/10 bg-gradient-to-b from-black to-[#1c1c1c] text-xl text-purple-300 transition-all duration-300 group-hover:border-purple-400/40 group-hover:bg-[#211b2b]">
                {feature.icon}
              </div>

              {/* Text Content */}
              <div className="min-w-0">
                <h3 
                  className="mb-1 text-[13px] font-medium text-white !no-underline" 
                  style={{ textDecoration: 'none' }}
                >
                  {feature.title}
                </h3>

                <p 
                  className="max-w-[190px] text-[11px] leading-[18px] text-gray-400 !no-underline" 
                  style={{ textDecoration: 'none' }}
                >
                  {feature.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;