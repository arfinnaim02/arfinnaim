import { motion } from 'framer-motion';
import personalData from '../data/personalData.js';
import Container from '../components/common/Container.jsx';
import PrimaryButton from '../components/common/PrimaryButton.jsx';
import SecondaryButton from '../components/common/SecondaryButton.jsx';
import {
  SiPython,
  SiMysql,
  SiPowerbi,
  SiStreamlit,
  SiPlotly,
  SiDjango,
  SiPostgresql,
  SiReact,
  SiPandas,
} from 'react-icons/si';

function HeroSection() {
  const technologies = [
    { icon: SiPython, name: 'Python' },
    { icon: SiMysql, name: 'SQL' },
    { icon: SiPowerbi, name: 'Power BI' },
    { icon: SiStreamlit, name: 'Streamlit' },
    { icon: SiPlotly, name: 'Plotly' },
    { icon: SiDjango, name: 'Django' },
    { icon: SiPostgresql, name: 'PostgreSQL' },
    { icon: SiReact, name: 'React' },
    { icon: SiPandas, name: 'Pandas' },
  ];

  const stats = [
    { value: '20+', label: 'Projects Built' },
    { value: 'Live', label: 'Production Work' },
    { value: 'Data', label: 'Business Impact' },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-transparent pb-20 pt-28 md:pb-28 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 top-20 h-[320px] w-[320px] rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[260px] w-[260px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.14]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#06080D]" />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="mb-6 flex flex-wrap gap-3">
              {personalData.heroSubtitleBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className="rounded-full border border-gold/20 bg-white/[0.04] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.25em] text-gold backdrop-blur-md"
                >
                  {badge}
                </span>
              ))}
            </div>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]">
              Turning{' '}
              <span className="bg-gradient-to-r from-white via-slate-200 to-gold bg-clip-text text-transparent">
                data into decisions
              </span>{' '}
              that drive real-world impact.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {personalData.summary}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <PrimaryButton href="#projects">View My Work</PrimaryButton>
              <SecondaryButton href="#contact">Let’s Connect</SecondaryButton>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {technologies.map(({ icon: Icon, name }, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 16 }}
                  className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-md"
                >
                  <Icon
                    className="text-primary transition-colors duration-300 group-hover:text-gold"
                    size={16}
                  />
                  <span className="text-xs font-medium text-slate-300 transition-colors duration-300 group-hover:text-white">
                    {name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/10 via-transparent to-gold/10 blur-2xl opacity-70" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-5">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0B1220]">
                <img
                  src="/assets/images/hero.png"
                  alt="Nazmul Arafin Naim"
                  className="h-[320px] w-full object-cover object-center sm:h-[400px] lg:h-[520px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#06080D]/60 via-transparent to-transparent" />
              </div>

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 16 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md"
                  >
                    <p className="text-2xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;