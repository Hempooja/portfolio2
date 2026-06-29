import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function SectionSeparator() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 90%',
        },
      }
    );
  }, { scope: ref });

  return (
    <div
      ref={ref}
      className="content-container"
      style={{
        height: '1px',
        backgroundColor: 'var(--border-rule)',
        marginTop: 'var(--space-section)',
        marginBottom: 'var(--space-section)',
        transformOrigin: 'center',
      }}
    />
  );
}
