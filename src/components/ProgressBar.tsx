import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface ProgressBarProps {
  label: string;
  progress: number;
  delay?: number;
}

export default function ProgressBar({ label, progress, delay = 0 }: ProgressBarProps) {
  const fillRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!fillRef.current) return;
    gsap.fromTo(
      fillRef.current,
      { width: '0%' },
      {
        width: `${progress}%`,
        duration: 1.0,
        ease: 'power2.out',
        delay,
        scrollTrigger: {
          trigger: fillRef.current,
          start: 'top 85%',
        },
      }
    );
  }, { scope: fillRef });

  return (
    <div className="mb-[1.25rem]">
      <p
        className="text-[0.9375rem] font-normal mb-2"
        style={{ color: 'var(--text-primary)', fontFamily: '"Instrument Sans", system-ui, sans-serif' }}
      >
        {label}
      </p>
      <div
        className="w-full rounded-sm"
        style={{ height: '2px', backgroundColor: 'var(--border-rule)' }}
      >
        <div
          ref={fillRef}
          className="h-full rounded-sm"
          style={{ backgroundColor: 'var(--accent-teal)', width: '0%' }}
        />
      </div>
    </div>
  );
}
