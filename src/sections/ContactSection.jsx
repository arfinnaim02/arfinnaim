import { useState } from 'react';
import Container from '../components/common/Container.jsx';
import SectionTitle from '../components/common/SectionTitle.jsx';
import PrimaryButton from '../components/common/PrimaryButton.jsx';
import SectionReveal from '../components/common/SectionReveal.jsx';
import { FaEnvelope, FaLinkedin, FaGithub, FaFacebook, FaWhatsapp } from 'react-icons/fa';

function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('arfinnaim04@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-20 border-t border-white/10 bg-white/[0.02] overflow-hidden">
      
      {/* 🔥 Background Glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[300px] w-[300px] bg-primary/10 blur-3xl opacity-50 pointer-events-none" />

      <Container>
        <SectionReveal>
          <SectionTitle
            title="Let’s build something valuable with data and technology"
            subtitle="Get in touch"
          />
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 text-center backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.4)]">

            <p className="mb-10 text-textSecondary max-w-2xl mx-auto">
              I’m open to collaborations, data projects, analytics systems, and real-world problem solving.
              Let’s connect and build something impactful.
            </p>

            {/* 🔥 CONTACT GRID */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

              {/* Email */}
              <div
                onClick={handleCopyEmail}
                className="group cursor-pointer rounded-xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:border-gold/30 hover:scale-[1.03]"
              >
                <FaEnvelope className="mx-auto mb-2 text-primary group-hover:text-gold" />
                <p className="text-sm text-white">Email</p>
                <p className="text-xs text-slate-400 mt-1">
                  {copied ? 'Copied!' : 'Click to copy'}
                </p>
              </div>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/arfinnaim04/"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:border-gold/30 hover:scale-[1.03]"
              >
                <FaLinkedin className="mx-auto mb-2 text-primary group-hover:text-gold" />
                <p className="text-sm text-white">LinkedIn</p>
                <p className="text-xs text-slate-400 mt-1">Professional profile</p>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/arfinnaim02"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:border-gold/30 hover:scale-[1.03]"
              >
                <FaGithub className="mx-auto mb-2 text-primary group-hover:text-gold" />
                <p className="text-sm text-white">GitHub</p>
                <p className="text-xs text-slate-400 mt-1">View projects</p>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/arfin.naim.754"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:border-gold/30 hover:scale-[1.03]"
              >
                <FaFacebook className="mx-auto mb-2 text-primary group-hover:text-gold" />
                <p className="text-sm text-white">Facebook</p>
                <p className="text-xs text-slate-400 mt-1">Social profile</p>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/8801734081581"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:border-gold/30 hover:scale-[1.03]"
              >
                <FaWhatsapp className="mx-auto mb-2 text-green-500 group-hover:text-green-400" />
                <p className="text-sm text-white">WhatsApp</p>
                <p className="text-xs text-slate-400 mt-1">Quick message</p>
              </a>

            </div>

            {/* 🔥 CTA BUTTON */}
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <PrimaryButton href="https://wa.me/8801734081581">
                Start a Conversation
              </PrimaryButton>

            </div>

          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}

export default ContactSection;