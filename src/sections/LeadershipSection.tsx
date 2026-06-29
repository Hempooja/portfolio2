import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SectionHeader from '../components/SectionHeader';
import Tag from '../components/Tag';

gsap.registerPlugin(ScrollTrigger);

const AWARDS = [
  'Best Leadership Award — Care Business School',
  'Best Contestant — National Science Week (VIGYAN SARVATRA PUJYATE)',
  'Fine Arts Achiever (Academic Year 2021–2022)',
];

export default function LeadershipSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const leftItems = sectionRef.current.querySelectorAll('.leadership-item');
    const rightCard = sectionRef.current.querySelector('.entrepreneur-card');

    gsap.fromTo(
      leftItems,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', stagger: 0.15,
        scrollTrigger: { trigger: leftItems[0], start: 'top 80%' },
      }
    );

    if (rightCard) {
      gsap.fromTo(
        rightCard,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1.0, ease: 'power2.out', delay: 0.2,
          scrollTrigger: { trigger: rightCard, start: 'top 80%' },
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="leadership"
      data-section-name="Leadership"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        paddingTop: 'var(--space-inner)',
        paddingBottom: 'var(--space-inner)',
        paddingLeft: 'var(--space-page-x)',
        paddingRight: 'var(--space-page-x)',
      }}
    >
      <div className="content-container">
        <div className="col-span-full">
          <SectionHeader
            overline="BEYOND THE CODE"
            heading="Leadership &amp; Recognition"
            highlightWord="Recognition"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-[var(--space-component)]">
          {/* Left column - Leadership & Awards */}
          <div>
            {/* YUVA Club */}
            <div
              className="leadership-item relative pl-6 mb-10"
              style={{ borderLeft: '2px solid var(--accent-teal)' }}
            >
              <h3
                className="font-semibold"
                style={{
                  fontSize: 'var(--text-h5)',
                  color: 'var(--text-primary)',
                  fontFamily: '"Instrument Sans", system-ui, sans-serif',
                }}
              >
                President – YUVA Club
              </h3>
              <p
                className="text-[0.875rem] mt-1"
                style={{ color: 'var(--text-secondary)', fontFamily: '"Instrument Sans", system-ui, sans-serif' }}
              >
                Holy Cross College
              </p>
              <p
                className="mt-3"
                style={{
                  fontSize: 'var(--text-body-sm)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  fontFamily: '"Instrument Sans", system-ui, sans-serif',
                }}
              >
                Led student leadership programs and community initiatives, coordinating events and driving
                student engagement across departments.
              </p>
            </div>

            {/* Awards */}
            <div
              className="leadership-item relative pl-6 mb-10"
              style={{ borderLeft: '2px solid var(--accent-teal)' }}
            >
              <h3
                className="font-semibold"
                style={{
                  fontSize: 'var(--text-h5)',
                  color: 'var(--text-primary)',
                  fontFamily: '"Instrument Sans", system-ui, sans-serif',
                }}
              >
                Awards &amp; Honors
              </h3>
              <ul className="mt-3 space-y-2">
                {AWARDS.map((award) => (
                  <li
                    key={award}
                    className="flex items-start gap-3"
                    style={{
                      fontSize: 'var(--text-body-sm)',
                      color: 'var(--text-primary)',
                      lineHeight: 2.0,
                      fontFamily: '"Instrument Sans", system-ui, sans-serif',
                    }}
                  >
                    <span
                      className="mt-[0.6rem] flex-shrink-0"
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--accent-coral)',
                        display: 'inline-block',
                      }}
                    />
                    {award}
                  </li>
                ))}
              </ul>
            </div>

            {/* Volunteering */}
            <div
              className="leadership-item relative pl-6"
              style={{ borderLeft: '2px solid var(--accent-teal)' }}
            >
              <h3
                className="font-semibold"
                style={{
                  fontSize: 'var(--text-h5)',
                  color: 'var(--text-primary)',
                  fontFamily: '"Instrument Sans", system-ui, sans-serif',
                }}
              >
                Call Management Coordinator
              </h3>
              <p
                className="text-[0.875rem] mt-1"
                style={{ color: 'var(--text-secondary)', fontFamily: '"Instrument Sans", system-ui, sans-serif' }}
              >
                Covid Free Trichy
              </p>
              <p
                className="mt-3"
                style={{
                  fontSize: 'var(--text-body-sm)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  fontFamily: '"Instrument Sans", system-ui, sans-serif',
                }}
              >
                Coordinated emergency call management during pandemic response efforts.
              </p>
            </div>
          </div>

          {/* Right column - Entrepreneurial */}
          <div>
            <div
              className="entrepreneur-card relative p-10"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: '4px',
                borderLeft: '2px solid var(--accent-coral)',
              }}
            >
              <div className="mb-6">
                <Tag variant="coral">STARTUP</Tag>
              </div>

              <h3
                className="font-semibold"
                style={{
                  fontSize: 'var(--text-h4)',
                  color: 'var(--text-primary)',
                  fontFamily: '"Instrument Sans", system-ui, sans-serif',
                }}
              >
                Founder – Cockakitham
              </h3>

              <p
                className="text-[1rem] font-medium mt-2"
                style={{
                  color: 'var(--accent-coral)',
                  fontFamily: '"Instrument Sans", system-ui, sans-serif',
                }}
              >
                Eco-Friendly Paper Startup
              </p>

              <div
                className="my-6"
                style={{ height: '1px', backgroundColor: 'var(--border-rule)' }}
              />

              <p
                style={{
                  fontSize: 'var(--text-body)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.75,
                  fontFamily: '"Instrument Sans", system-ui, sans-serif',
                }}
              >
                Founded a sustainability-focused paper manufacturing initiative. Developed eco-friendly
                paper products aligned with UN Sustainable Development Goals. Managed operations, product
                development, and sustainability initiatives.
              </p>

              <div className="mt-6">
                <Tag>UN SDG Aligned</Tag>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
