import React from "react";
import { cn } from "../../lib/utils";

const AnimatedGradientText = ({
  className,
  children,
  speed = "slow", // Options: "slow", "x-slow", "pulse-slow"
  ...props
}) => {
  const getAnimationClass = () => {
    switch (speed) {
      case "x-slow":
        return "animate-gradient-x-slow";
      case "pulse-slow":
        return "animate-gradient-pulse-slow";
      case "slow":
      default:
        return "animate-gradient-slow";
    }
  };

  return (
    <div
      className={cn(
        "bg-gradient-to-r  from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent font-bold text-4xl bg-[length:200%_auto]",
        getAnimationClass(),
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { AnimatedGradientText };
