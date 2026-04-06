import Container from '../components/common/Container.jsx';
import SectionReveal from '../components/common/SectionReveal.jsx';
import {
  SiPython,
  SiMysql,
  SiPowerbi,
  SiStreamlit,
  SiPlotly,
  SiPandas,
  SiDjango,
  SiPostgresql,
  SiReact,
} from 'react-icons/si';

function TechStackStrip() {
  const techs = [
    { icon: SiPython, name: 'Python' },
    { icon: SiMysql, name: 'SQL' },
    { icon: SiPowerbi, name: 'Power BI' },
    { icon: SiStreamlit, name: 'Streamlit' },
    { icon: SiPlotly, name: 'Plotly' },
    { icon: SiPandas, name: 'Pandas' },
    { icon: SiDjango, name: 'Django' },
    { icon: SiPostgresql, name: 'PostgreSQL' },
    { icon: SiReact, name: 'React' },
  ];

  return (
    <section className="border-y border-white/10 bg-white/[0.02] py-8">
      <Container>
        <SectionReveal>
          <div className="flex flex-wrap justify-center gap-4">
            {techs.map(({ icon: Icon, name }, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-md"
              >
                <Icon className="text-primary" size={18} />
                <span className="text-xs font-medium text-textSecondary">{name}</span>
              </div>
            ))}
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}

export default TechStackStrip;