interface SectionHeadingTypes {
  title: string
  subtitle?: string
  className?: string
}

const SectionHeading: React.FC<SectionHeadingTypes> = ({ title, subtitle, className }) => {
  return (
    <div className={`max-w-2xl ${className ?? ''}`}>
      <div className="mb-3 flex items-center gap-3">
        <span className="h-px w-8 bg-gradient-to-r from-accent to-violet-400" />
        <span className="bg-gradient-to-r from-accent via-cyan-300 to-violet-400 bg-clip-text text-xs font-semibold uppercase tracking-[0.2em] text-transparent">Portfolio</span>
      </div>
      <h2 className="text-neutral text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      {subtitle && <p className="text-tertiary-content mt-4 text-base leading-7 text-pretty md:text-lg">{subtitle}</p>}
    </div>
  )
}

export default SectionHeading
