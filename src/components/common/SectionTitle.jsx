import { motion } from 'framer-motion';

function SectionTitle({ pretitle, title, subtitle, align = 'center' }) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={`mb-10 ${alignClass}`}
    >
      {pretitle && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">{pretitle}</p>}
      <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle && <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-textSecondary sm:text-base">{subtitle}</p>}
    </motion.div>
  );
}

export default SectionTitle;
