import Container from '../components/common/Container.jsx';
import personalData from '../data/personalData.js';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-darkBase/90 py-10">
      <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <p className="font-heading text-lg font-semibold text-white">
            {personalData.name}
          </p>
          <p className="mt-1 text-sm text-textMuted">
            Built with passion for data, design, and problem solving.
          </p>
        </div>

        {/* RIGHT (SOCIAL LINKS) */}
        <div className="flex items-center gap-4">

          {/* Email */}
          <a
            href="mailto:arfinnaim04@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-full border border-white/10 bg-white/[0.03] p-3 text-textSecondary transition-all duration-300 hover:border-gold/30 hover:text-gold hover:scale-110"
          >
            <FaEnvelope />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/arfinnaim02"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-full border border-white/10 bg-white/[0.03] p-3 text-textSecondary transition-all duration-300 hover:border-gold/30 hover:text-gold hover:scale-110"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/arfinnaim04/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-full border border-white/10 bg-white/[0.03] p-3 text-textSecondary transition-all duration-300 hover:border-gold/30 hover:text-gold hover:scale-110"
          >
            <FaLinkedin />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/arfin.naim.754"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-full border border-white/10 bg-white/[0.03] p-3 text-textSecondary transition-all duration-300 hover:border-gold/30 hover:text-gold hover:scale-110"
          >
            <FaFacebook />
          </a>

        </div>

      </Container>

      {/* 🔥 Bottom Line */}
      <div className="mt-6 text-center text-xs text-textMuted">
        © {new Date().getFullYear()} {personalData.name}. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;