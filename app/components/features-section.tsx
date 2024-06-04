"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

export function FeaturesSection() {
  return (
      <StickyScroll content={content} />
  );
}

const content = [
  {
    title: "Tailored Resumes",
    description:
      "Create custom resumes that stand out. Our AI analyzes job descriptions to tailor your resume, ensuring you highlight the skills and experiences that matter most.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Tailored Resumes
      </div>
    ),
  },
  {
    title: "Optimized Bullet Points",
    description:
      "Make every word count. Generate compelling bullet points that use metrics to demonstrate your achievements and catch the eye of recruiters.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        {/* <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        /> */}
        Optimized Bullet Points
      </div>
    ),
  },
  {
    title: "Interview Preparation",
    description:
      "Ace your interviews with confidence. Our AI generates possible interview questions based on the job description, helping you prepare effectively.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Interview Preparation
      </div>
    ),
  },
  {
    title: "LinkedIn Tips",
    description:
      "Boost your online presence. Get expert tips to optimize your LinkedIn profile, making you more visible to potential employers.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        LinkedIn Tips
      </div>
    ),
  },
];