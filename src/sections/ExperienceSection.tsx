import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import EntryTitle from '../components/EntryTitle';

gsap.registerPlugin(ScrollTrigger);

const RESPONSIBILITIES = [
  'Work with enterprise cloud-hosted applications and infrastructure environments, contributing to monitoring, reliability, and operational workflows of large-scale systems.',
  'Use Jira Service Management for incident orchestration and service workflows, collaborating with engineering teams to troubleshoot application and infrastructure issues.',
  'Assist in cloud infrastructure operations and performance optimization within AWS environments, participating in maintaining availability and stability of business-critical systems.',
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const overline = sectionRef.current.querySelector('.exp-overline');
    const role = sectionRef.current.querySelector('.exp-role');
    const bullets = sectionRef.current.querySelectorAll('.exp-bullet');

    gsap.fromTo(
      overline,
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: overline, start: 'top 85%' },
      }
    );

    gsap.fromTo(
      role,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 1.0, ease: 'power2.out',
        scrollTrigger: { trigger: role, start: 'top 85%' },
      }
    );

    gsap.fromTo(
      bullets,
      { opacity: 0, x: -15 },
      {
        opacity: 1, x: 0, duration: 0.6, ease: 'power2.out', stagger: 0.1,
        scrollTrigger: { trigger: bullets[0], start: 'top 85%' },
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="experience"
      data-section-name="Experience"
      style={{
        backgroundColor: 'var(--bg-dark)',
        paddingTop: 'var(--space-inner)',
        paddingBottom: 'var(--space-component)',
        paddingLeft: 'var(--space-page-x)',
        paddingRight: 'var(--space-page-x)',
      }}
    >
      <div className="content-container">
        <EntryTitle
          text="Experience"
          fontSize="clamp(4rem, 12vw, 12rem)"
          fontWeight="700"
          shadowBlur={16}
          yOffsetFactor={0.65}
          hueSpeed={0.3}
        />

        <div
          className="my-8"
          style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.15)' }}
        />

        <p
          className="exp-overline text-[0.75rem] font-medium tracking-[0.12em] uppercase mb-8"
          style={{
            color: 'var(--accent-teal)',
            fontFamily: '"Instrument Sans", system-ui, sans-serif',
            marginTop: 'var(--space-component)',
          }}
        >
          PROFESSIONAL JOURNEY
        </p>

        <div
          className="relative pl-8"
          style={{ borderLeft: '2px solid var(--accent-teal)' }}
        >
          <h3
            className="exp-role font-semibold"
            style={{
              fontSize: 'var(--text-h4)',
              color: 'var(--text-inverse)',
              fontFamily: '"Instrument Sans", system-ui, sans-serif',
            }}
          >
            Application Tech Support Practitioner
          </h3>

          <p
            className="text-[1.125rem] font-medium mt-2"
            style={{
              color: 'var(--accent-teal)',
              fontFamily: '"Instrument Sans", system-ui, sans-serif',
            }}
          >
            Accenture
          </p>

          <div className="flex gap-6 mt-2">
            <p
              className="text-[0.875rem]"
              style={{ color: 'var(--text-secondary)', fontFamily: '"Instrument Sans", system-ui, sans-serif' }}
            >
              Bengaluru, India
            </p>
            <p
              className="text-[0.875rem] flex items-center gap-2"
              style={{ color: 'var(--text-secondary)', fontFamily: '"Instrument Sans", system-ui, sans-serif' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--accent-teal)' }}>
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              October 2025 – Present
            </p>
          </div>

          <div
            className="my-6"
            style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.1)' }}
          />

          <ul className="space-y-3 max-w-[700px]">
            {RESPONSIBILITIES.map((resp, i) => (
              <li
                key={i}
                className="exp-bullet flex gap-3"
                style={{
                  fontSize: 'var(--text-body-sm)',
                  color: 'rgba(255,252,245,0.85)',
                  lineHeight: 1.8,
                  fontFamily: '"Instrument Sans", system-ui, sans-serif',
                }}
              >
                <span
                  className="mt-2 flex-shrink-0"
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-teal)',
                    display: 'inline-block',
                  }}
                />
                {resp}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
