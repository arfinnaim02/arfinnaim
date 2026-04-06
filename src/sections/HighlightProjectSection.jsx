import projectsData from '../data/projectsData.js';
import Container from '../components/common/Container.jsx';
import SectionTitle from '../components/common/SectionTitle.jsx';
import Tag from '../components/common/Tag.jsx';
import PrimaryButton from '../components/common/PrimaryButton.jsx';
import SecondaryButton from '../components/common/SecondaryButton.jsx';
import SectionReveal from '../components/common/SectionReveal.jsx';

function HighlightProjectSection() {
  const project = projectsData.find((p) => p.id === 2);
  if (!project) return null;

  return (
    <section id="highlight" className="py-16 border-t border-white/10 bg-transparent">
      <Container>
        <SectionReveal>
          <SectionTitle
            pretitle="Highlighted Project"
            title={project.title}
            subtitle="Live Django Project"
          />
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="flex flex-col items-center gap-12 rounded-[2rem] border border-gold/20 bg-white/[0.04] p-6 backdrop-blur-xl md:flex-row md:p-8">
            <div className="w-full md:w-1/2">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full rounded-[1.5rem] border border-white/10 object-cover shadow-sm"
              />
            </div>

            <div className="w-full md:w-1/2">
              <p className="mb-6 text-textSecondary">{project.description}</p>

              <div className="mb-6 flex flex-wrap">
                {project.tags.map((tag, idx) => (
                  <Tag key={idx}>{tag}</Tag>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                {project.liveLink && project.liveLink !== '#' && (
                  <PrimaryButton href={project.liveLink}>Visit Live Site</PrimaryButton>
                )}

                {project.caseStudyLink && project.caseStudyLink !== '#' && (
                  <SecondaryButton href={project.caseStudyLink}>
                    View Case Study
                  </SecondaryButton>
                )}
              </div>
            </div>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}

export default HighlightProjectSection;