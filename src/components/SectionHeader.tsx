interface SectionHeaderProps {
  overline: string;
  heading: string;
  highlightWord: string;
}

export default function SectionHeader({ overline, heading, highlightWord }: SectionHeaderProps) {
  const parts = heading.split(highlightWord);
  return (
    <div className="mb-[var(--space-component)]">
      <p
        className="text-[0.75rem] font-medium tracking-[0.12em] uppercase mb-4"
        style={{ color: 'var(--accent-teal)', fontFamily: '"Instrument Sans", system-ui, sans-serif' }}
      >
        {overline}
      </p>
      <h2
        className="font-medium leading-[0.85] tracking-[-0.04em]"
        style={{ fontSize: 'var(--text-h2)', fontFamily: '"Instrument Sans", system-ui, sans-serif' }}
      >
        {parts[0]}
        <em
          className="not-italic"
          style={{
            fontFamily: '"Instrument Serif", Georgia, serif',
            fontStyle: 'italic',
            color: 'var(--accent-teal)',
          }}
        >
          {highlightWord}
        </em>
        {parts[1] || ''}
      </h2>
    </div>
  );
}
