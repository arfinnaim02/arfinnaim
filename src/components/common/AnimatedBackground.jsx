import { motion } from 'framer-motion';

function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#06080D]" />

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      <motion.div
        className="absolute -top-24 left-[8%] h-[300px] w-[300px] rounded-full bg-primary/10 blur-[90px]"
        animate={{
          x: [0, 50, -10, 0],
          y: [0, 40, 70, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-[15%] right-[8%] h-[240px] w-[240px] rounded-full bg-gold/10 blur-[80px]"
        animate={{
          x: [0, -40, 15, 0],
          y: [0, 40, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-[10%] left-[20%] h-[220px] w-[220px] rounded-full bg-primary/8 blur-[75px]"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 20, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute -top-[10%] left-1/2 h-[120%] w-[18%] -translate-x-1/2 rotate-[18deg] bg-gradient-to-b from-white/[0.05] via-gold/[0.04] to-transparent blur-3xl"
        animate={{
          x: ['-10%', '10%', '-10%'],
          opacity: [0.16, 0.28, 0.16],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(6,8,13,0.18)_50%,rgba(6,8,13,0.72)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#06080D]" />
    </div>
  );
}

export default AnimatedBackground;