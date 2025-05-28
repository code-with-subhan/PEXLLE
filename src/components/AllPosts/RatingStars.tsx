// components/ui/RatingStars.tsx
"use client";
import React from "react";

interface RatingStarsProps {
  rating: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    const isFilled = i < Math.round(rating);
    stars.push(
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`lucide lucide-star w-4 h-4 ${
          isFilled
            ? "text-yellow-400 fill-yellow-400"
            : "text-zinc-300 fill-transparent"
        }`}
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    );
  }

  return <div className="flex items-center">{stars}</div>;
};

export default RatingStars;
