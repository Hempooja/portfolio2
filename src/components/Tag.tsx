interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'coral';
}

export default function Tag({ children, variant = 'default' }: TagProps) {
  const isCoral = variant === 'coral';
  return (
    <span
      className="inline-flex items-center px-[0.85rem] py-[0.35rem] rounded-full text-[0.75rem] font-medium transition-colors duration-300"
      style={{
        border: isCoral ? 'none' : '1px solid var(--border-rule)',
        backgroundColor: isCoral ? 'rgba(229,127,132,0.1)' : 'transparent',
        color: isCoral ? 'var(--accent-coral)' : 'var(--text-secondary)',
        fontFamily: '"Instrument Sans", system-ui, sans-serif',
      }}
    >
      {children}
    </span>
  );
}
