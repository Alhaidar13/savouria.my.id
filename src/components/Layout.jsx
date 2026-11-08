export function Container({ className = '', children, ...rest }) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 ${className}`} {...rest}>
      {children}
    </div>
  )
}

/** Eyebrow label + serif heading + optional description. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  titleId,
  className = '',
  titleClass = 'text-4xl sm:text-5xl lg:text-6xl',
}) {
  const alignment = align === 'center' ? 'text-center mx-auto' : ''
  return (
    <div className={`${alignment} ${className}`}>
      {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
      <h2 id={titleId} className={`font-display ${titleClass}`}>
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 max-w-xl text-base leading-relaxed opacity-80 sm:text-lg ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
