import experienceData from '../data/experienceData.js';
import Container from '../components/common/Container.jsx';
import SectionTitle from '../components/common/SectionTitle.jsx';
import SectionReveal from '../components/common/SectionReveal.jsx';

function ExperienceSection() {
  return (
    <section id="experience" className="py-16 border-t border-white/10 bg-transparent">
      <Container>
        <SectionReveal>
          <SectionTitle
            title="Experience"
            subtitle="My professional journey"
          />
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="relative pl-6">
            <div className="absolute left-2 top-0 bottom-0 w-px bg-white/10"></div>

            {experienceData.map((exp, idx) => (
              <div key={idx} className="relative mb-12 ml-4">
                <div className="absolute -left-3 top-1 h-4 w-4 rounded-full border-2 border-[#06080D] bg-primary"></div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
                  <h3 className="mb-1 text-lg font-semibold text-white">
                    {exp.role} — {exp.company}
                  </h3>

                  <span className="text-xs text-gold">{exp.period}</span>

                  <ul className="mt-4 list-disc space-y-2 pl-5 text-textSecondary">
                    {exp.responsibilities.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}

export default ExperienceSection;