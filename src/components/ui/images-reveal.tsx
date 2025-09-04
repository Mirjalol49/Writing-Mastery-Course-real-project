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
      <h1 className="text-center text-2xl font-semibold mt-8">
      Everything You Need to Boost Your Score
      </h1>
      <div className="relative my-10 ml-10 flex flex-row justify-center gap-20 md:ml-20">
        {cards.map((card, i) => (
          <motion.img
            key={i}
            className="relative -ml-10 size-24 rounded-2xl border-[6px] border-white object-cover shadow-xl md:-ml-20 md:size-36"
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
