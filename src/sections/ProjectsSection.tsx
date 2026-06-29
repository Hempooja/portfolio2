import SectionHeader from '../components/SectionHeader';
import ClipImageReveal from '../components/ClipImageReveal';

const PROJECTS = [
  {
    type: 'type-1' as const,
    imageSrc: '/assets/project-holybot.jpg',
    imageAlt: 'Holybot AI Chatbot Platform visualization',
    title: 'Holybot',
    description:
      'AI-powered chatbot platform built with Dialogflow and Node.js, automating institutional query handling between students and administration through natural language processing.',
    tags: ['Dialogflow', 'Node.js', 'NLP'],
  },
  {
    type: 'type-2' as const,
    imageSrc: '/assets/project-taxi.jpg',
    imageAlt: 'Safeway Drop Taxi web platform on laptop',
    title: 'Safeway Drop Taxi',
    description:
      'Cloud-hosted web platform for a local taxi drop service. Architected with WordPress on Linux, configured DNS and hosting, implemented ride request workflows.',
    tags: ['WordPress', 'Linux', 'Cloud Hosting'],
    liveLink: 'https://safewaydroptaxi.com',
  },
  {
    type: 'type-1' as const,
    imageSrc: '/assets/project-containers.jpg',
    imageAlt: 'Container orchestration technical visualization',
    title: 'Containerized Deployment',
    description:
      'Docker containerization of a Node.js application with Kubernetes orchestration. Demonstrated scalable cloud deployment patterns with Git-based version control.',
    tags: ['Docker', 'Kubernetes', 'Node.js'],
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      data-section-name="Projects"
      style={{
        backgroundColor: 'var(--bg-primary)',
        paddingTop: 'var(--space-inner)',
        paddingBottom: 'var(--space-inner)',
        paddingLeft: 'var(--space-page-x)',
        paddingRight: 'var(--space-page-x)',
      }}
    >
      <div className="content-container">
        <SectionHeader
          overline="SELECTED WORK"
          heading="Featured Projects"
          highlightWord="Projects"
        />

        <div className="mt-[var(--space-component)]">
          {PROJECTS.map((project) => (
            <ClipImageReveal
              key={project.title}
              type={project.type}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              title={project.title}
              description={project.description}
              tags={project.tags}
              liveLink={project.liveLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
