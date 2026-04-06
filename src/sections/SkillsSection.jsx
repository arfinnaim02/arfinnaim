import skillsData from '../data/skillsData.js';
import Container from '../components/common/Container.jsx';
import SectionTitle from '../components/common/SectionTitle.jsx';
import Tag from '../components/common/Tag.jsx';
import SectionReveal from '../components/common/SectionReveal.jsx';

function SkillsSection() {
  return (
    <section id="skills" className="py-16 border-t border-white/10 bg-transparent">
      <Container>
        <SectionReveal>
          <SectionTitle
            title="Skills & Tools"
            subtitle="My technical toolkit"
          />
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {skillsData.map((cat, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md"
              >
                <h3 className="mb-4 text-lg font-semibold text-white">
                  {cat.category}
                </h3>

                <div className="flex flex-wrap">
                  {cat.skills.map((skill, j) => (
                    <Tag key={j}>{skill}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}

export default SkillsSection;