"use client";

import React, { useState, useEffect } from "react";
import { 
  FiStar, 
  FiTrendingUp, 
  FiZap, 
  FiPlus, 
  FiArrowRight 
} from "react-icons/fi";

const PricingSection = () => {
  const [mounted, setMounted] = useState(false);
  const [billingCycle, setBillingCycle] = useState("monthly");

  // হাইড্রেশন মিসম্যাচ এড়ানোর জন্য কম্পোনেন্ট মাউন্ট হওয়ার পর রেন্ডার করা
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // সার্ভার এবং ক্লায়েন্টের প্রথম রেন্ডার এক রাখতে সাহায্য করে
  }

  const plans = [
    {
      name: "Starter",
      icon: <FiStar className="text-purple-400 text-lg" />,
      price: billingCycle === "monthly" ? "$0" : "$0",
      description: "Start building your insights hub:",
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
      popular: false,
    },
    {
      name: "Growth",
      icon: <FiTrendingUp className="text-purple-400 text-lg" />,
      price: billingCycle === "monthly" ? "$17" : "$14",
      description: "Start building your insights hub:",
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
      popular: true,
    },
    {
      name: "Premium",
      icon: <FiZap className="text-purple-400 text-lg" />,
      price: billingCycle === "monthly" ? "$99" : "$79",
      description: "Start building your insights hub:",
      features: [
        "Everything in Pro",
        "Multi-profile career portfolios",
        "Shared talent rooms",
        "Recruiter view (read-only)",
      ],
      popular: false,
    },
  ];

  return (
    <section className="w-full bg-[#151515] px-5 py-16 md:px-10 md:py-24 text-left select-none">
      <div className="mx-auto w-full max-w-[1300px]">

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="h-1 w-1 bg-indigo-500 rounded-full" />
            <span className="text-[11px] font-medium tracking-widest text-gray-300 uppercase">
              PRICING
            </span>
            <span className="h-1 w-1 bg-indigo-500 rounded-full" />
          </div>

          <h2 className="mx-auto max-w-xl text-3xl font-medium leading-tight tracking-tight text-white md:text-[42px]">
            Pay for the leverage,
            <br />
            not the listings
          </h2>

          {/* Toggle Button */}
          <div className="mt-8 inline-flex items-center rounded-full bg-[#1c1c1c] p-1 border border-white/10">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`rounded-full px-6 py-2 text-xs font-medium transition-all ${
                billingCycle === "monthly"
                  ? "bg-white text-black shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`relative rounded-full px-5 py-2 text-xs font-medium transition-all flex items-center gap-2 ${
                billingCycle === "yearly"
                  ? "bg-white text-black shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Yearly
              <span className="rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-2 py-0.5 text-[9px] font-bold text-white">
                25%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col justify-between rounded-2xl border p-7 transition-all duration-300 ${
                plan.popular
                  ? "bg-gradient-to-b from-[#1c1c1c] to-[#121212] border-purple-500/40 shadow-xl shadow-purple-950/20"
                  : "bg-[#181818]/60 border-white/10 hover:border-white/20"
              }`}
            >
              <div>
                {/* Plan Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#1c1c1c]">
                      {plan.icon}
                    </div>
                    <h3 className="text-base font-medium text-white">
                      {plan.name}
                    </h3>
                  </div>

                  <div className="text-right">
                    <span className="text-3xl font-semibold text-white tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs text-gray-400 font-normal">
                      /month
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs font-medium text-gray-300 mb-5">
                  {plan.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#222222] border border-white/10 text-gray-300 text-[10px]">
                        <FiPlus />
                      </span>
                      <span>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div>
                <button
                  className={`group flex w-full items-center justify-between rounded-xl px-5 py-3 text-xs font-medium transition-all duration-200 ${
                    plan.popular
                      ? "bg-white text-black hover:bg-gray-100"
                      : "bg-[#222222] text-white border border-white/10 hover:bg-[#2a2a2a]"
                  }`}
                >
                  <span>Choose This Plan</span>
                  <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


export default PricingSection;