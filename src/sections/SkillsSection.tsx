import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SectionHeader from '../components/SectionHeader';
import ProgressBar from '../components/ProgressBar';

gsap.registerPlugin(ScrollTrigger);

const SKILL_CATEGORIES = [
  {
    title: 'Cloud Platforms',
    skills: [
      { label: 'Amazon Web Services (EC2, S3, IAM, VPC, CloudWatch)', progress: 85 },
      { label: 'Cloud Infrastructure Operations', progress: 85 },
      { label: 'Performance Optimization', progress: 80 },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { label: 'Docker & Kubernetes', progress: 80 },
      { label: 'Git Version Control', progress: 85 },
      { label: 'Linux Administration', progress: 75 },
      { label: 'Jira & Jira Service Management', progress: 80 },
    ],
  },
  {
    title: 'AI & Development',
    skills: [
      { label: 'Dialogflow & Conversational AI', progress: 75 },
      { label: 'Natural Language Processing', progress: 70 },
      { label: 'Node.js Backend Development', progress: 80 },
      { label: 'JavaScript', progress: 85 },
    ],
  },
  {
    title: 'Operations & Methodologies',
    skills: [
      { label: 'Project Coordination & Task Tracking', progress: 80 },
      { label: 'Incident Management & SLA Monitoring', progress: 85 },
      { label: 'Agile & Scrum Methodology', progress: 80 },
      { label: 'Stakeholder Communication', progress: 85 },
    ],
  },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    const cards = sectionRef.current.querySelectorAll('.skill-card');
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', stagger: 0.12,
        scrollTrigger: { trigger: cards[0], start: 'top 80%' },
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="skills"
      data-section-name="Skills"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        paddingTop: 'var(--space-inner)',
        paddingBottom: 'var(--space-inner)',
        paddingLeft: 'var(--space-page-x)',
        paddingRight: 'var(--space-page-x)',
      }}
    >
      <div className="content-container">
        <SectionHeader
          overline="TECHNICAL SKILLS"
          heading="Tools &amp; Technologies"
          highlightWord="Technologies"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="skill-card relative p-10"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: '4px',
              }}
            >
              {/* Accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[2px]"
                style={{ backgroundColor: 'var(--accent-teal)' }}
              />

              <h3
                className="font-semibold mb-6"
                style={{
                  fontSize: 'var(--text-h5)',
                  color: 'var(--text-primary)',
                  fontFamily: '"Instrument Sans", system-ui, sans-serif',
                }}
              >
                {category.title}
              </h3>

              {category.skills.map((skill, i) => (
                <ProgressBar
                  key={skill.label}
                  label={skill.label}
                  progress={skill.progress}
                  delay={i * 0.05}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
