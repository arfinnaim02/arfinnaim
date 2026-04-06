import projectsData from '../data/projectsData.js';
import Container from '../components/common/Container.jsx';
import SectionTitle from '../components/common/SectionTitle.jsx';
import ProjectCard from '../components/common/ProjectCard.jsx';
import SectionReveal from '../components/common/SectionReveal.jsx';

function FeaturedProjectsSection() {
  const projects = projectsData.filter((p) => p.id !== 2);

  return (
    <section id="projects" className="py-16 border-t border-white/10 bg-white/[0.02]">
      <Container>
        <SectionReveal>
          <SectionTitle
            title="Selected Work"
            subtitle="Projects I've built and deployed"
          />
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}

export default FeaturedProjectsSection;