import Link from "next/link";
import { FiMapPin, FiBriefcase, FiDollarSign, FiArrowRight } from "react-icons/fi";

const baseJob = {
  title: "Frontend Developer",
  description:
    "Showcase your commitment to diversity and inclusion by highlighting initiatives",
  location: "New York, USA",
  type: "Hybrid",
  salary: "€25–€40/hour",
};

// আসল ডেটা এলে এই অ্যারের জায়গায় নিজের ডেটা বসাও
const jobs = Array.from({ length: 6 }, (_, i) => ({ ...baseJob, id: i + 1 }));

const Tag = ({ icon: Icon, children }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-[#262626] px-3 py-1.5 text-xs text-gray-200">
    <Icon className="text-sm text-pink-300" aria-hidden="true" />
    {children}
  </span>
);

const SmartJobDiscovery = () => {
  return (
    <section className="w-full bg-black px-5 py-16 md:px-10">
      <div className="mx-auto w-full">
        {/* Heading */}
        <header className="mb-12 text-center">
          <div className="mx-auto mb-6 h-0.5 w-6 bg-blue-300" aria-hidden="true" />

          <p className="mb-4 flex items-center justify-center gap-3 font-mono text-sm uppercase tracking-wide text-gray-300">
            <span className="h-1.5 w-1.5 bg-[#6254ff]" aria-hidden="true" />
            Smart job discovery
            <span className="h-1.5 w-1.5 bg-[#6254ff]" aria-hidden="true" />
          </p>

          <h2 className="mx-auto max-w-xl text-3xl font-medium leading-tight text-white md:text-4xl">
            The roles you&apos;d never find by searching
          </h2>

          <div className="mx-auto mt-6 h-0.5 w-6 bg-pink-400" aria-hidden="true" />
        </header>

        {/* Job Cards */}
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <li key={job.id}>
              <article className="flex h-full flex-col rounded-2xl bg-[#171717] p-6 md:p-7">
                <h3 className="text-2xl font-medium text-white">{job.title}</h3>

                <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-400">
                  {job.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <Tag icon={FiMapPin}>{job.location}</Tag>
                  <Tag icon={FiBriefcase}>{job.type}</Tag>
                  <Tag icon={FiDollarSign}>{job.salary}</Tag>
                </div>

                <Link
                  href={`/jobs/${job.id}`}
                  className="mt-auto inline-flex items-center gap-2 pt-8 text-sm text-white transition hover:gap-3 hover:text-[#a59cff]"
                >
                  Apply Now
                  <FiArrowRight aria-hidden="true" />
                </Link>
              </article>
            </li>
          ))}
        </ul>

        {/* View All Button */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/jobs"
            className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-gray-200"
          >
            View all job open
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SmartJobDiscovery;