import React from "react";
import { motion } from "framer-motion";

// Import images directly
import liveImg from "../../assets/Images/live.jpg";
import telegramImg from "../../assets/Images/telegram.jpg";
import feedbackImg from "../../assets/Images/feedback.jpg";
import bandImg from "../../assets/Images/band.jpg";

const cards = [
  { src: liveImg, angle: "8deg" },
  { src: telegramImg, angle: "-15deg" },
  { src: feedbackImg, angle: "-5deg" },
  { src: bandImg, angle: "10deg" },
];

interface CustomProps {
  index: number;
  angle: string;
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.2 },
  visible: (custom: CustomProps) => ({
    opacity: 1,
    scale: 1,
    rotate: custom.angle,
    transition: {
      delay: custom.index * 0.1,
      duration: 0.3,
      type: "spring",
      stiffness: 150,
      damping: 20,
      mass: 0.5,
    },
  }),
};

export default function ImagesReveal() {
  return (
    <div>
      <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold mt-8 px-4">
      Everything You Need to Boost Your Score
      </h1>
      <div className="relative my-8 px-4 mx-auto grid grid-cols-2 gap-4 place-items-center sm:gap-6 md:flex md:flex-row md:justify-center md:gap-20 md:px-0">
        {cards.map((card, i) => (
          <motion.img
            key={i}
            className={`size-20 sm:size-24 md:size-36 rounded-2xl border-[6px] border-white object-cover shadow-xl ${i > 0 ? 'md:-ml-20' : ''}`}
            src={card.src} // ✅ now this works
            custom={{ index: i, angle: card.angle }}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{
              scale: 1,
              rotate: "0deg",
              zIndex: 10,
              transition: {
                duration: 0.3,
                type: "spring",
                stiffness: 150,
                damping: 20,
              },
            }}
          />
        ))}
      </div>
    </div>
  );
}
