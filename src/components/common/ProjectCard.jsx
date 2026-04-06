import { motion } from 'framer-motion';
import Tag from './Tag.jsx';
import { FiArrowUpRight, FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaYoutube } from 'react-icons/fa';

function ProjectCard({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl"
    >
      {/* Background glow on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -left-12 top-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-36 w-36 rounded-full bg-gold/10 blur-3xl" />
      </div>

      {/* Premium border / shadow */}
      <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] border border-transparent transition-all duration-500 group-hover:border-gold/25 group-hover:shadow-[0_0_0_1px_rgba(200,167,91,0.12),0_24px_60px_rgba(0,0,0,0.38)]" />

      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 220, damping: 18 }}
        className="relative z-10 flex h-full flex-col"
      >
        {/* Image Area */}
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#06080D]/92 via-[#06080D]/30 to-transparent" />

          {project.badge && (
            <div className="absolute left-4 top-4 rounded-full border border-gold/25 bg-[#0E1625]/80 px-3 py-1 text-[11px] font-medium tracking-wide text-gold backdrop-blur-md">
              {project.badge}
            </div>
          )}

          <div className="absolute right-4 top-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#0E1625]/72 text-white/80 backdrop-blur-md transition-all duration-300 group-hover:border-gold/30 group-hover:text-gold">
              <FiArrowUpRight size={18} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          <div className="mb-3">
            <h3 className="text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-gold">
              {project.title}
            </h3>
          </div>

          <p className="mb-5 text-sm leading-7 text-slate-300">
            {project.description}
          </p>

          <div className="mb-6 flex flex-wrap">
            {project.tags.map((tag, idx) => (
              <Tag key={idx}>{tag}</Tag>
            ))}
          </div>

          {/* Bottom Action Row */}
          <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-white/8 pt-5">
            {project.liveLink && project.liveLink !== '#' && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-2 text-xs font-medium text-primary transition-all duration-300 hover:border-gold/30 hover:bg-gold/10 hover:text-gold"
              >
                <FiExternalLink size={14} />
                <span>Live</span>
              </a>
            )}

            {project.caseStudyLink && project.caseStudyLink !== '#' && (
              <a
                href={project.caseStudyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-slate-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
              >
                <FaYoutube size={14} />
                <span>Case Study</span>
              </a>
            )}

            {project.githubLink && project.githubLink !== '#' && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-slate-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
              >
                <FiGithub size={14} />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

export default ProjectCard;