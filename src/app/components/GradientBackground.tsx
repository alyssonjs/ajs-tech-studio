import { motion } from "motion/react";

export function HeroGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(29,78,216,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(29,78,216,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Top-right gradient blob */}
      <motion.div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(29,78,216,0.08) 0%, rgba(14,165,233,0.04) 50%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Bottom-left gradient blob */}
      <motion.div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(14,165,233,0.06) 0%, rgba(29,78,216,0.03) 50%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.15, 1], rotate: [0, -15, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Decorative dots */}
      <motion.div
        className="absolute top-20 right-[20%] w-3 h-3 rounded-full bg-primary/10"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 left-[15%] w-2 h-2 rounded-full bg-accent/15"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-[40%] right-[10%] w-2.5 h-2.5 rounded-full bg-primary/8"
        animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </div>
  );
}

export function SectionGradient({ variant = "left" }: { variant?: "left" | "right" | "center" }) {
  const positions = {
    left: "-left-40 top-20",
    right: "-right-40 top-20",
    center: "left-1/2 -translate-x-1/2 top-0",
  };
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className={`absolute ${positions[variant]} w-[400px] h-[400px] rounded-full`}
        style={{
          background: "radial-gradient(circle, rgba(29,78,216,0.05) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}
