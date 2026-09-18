import Image, { StaticImageData } from 'next/image'
import React from 'react'

type IconComponent = React.ComponentType<{ className?: string }>

type IconType = StaticImageData | string | IconComponent

interface ServiceCardProps {
  icon: IconType
  title: string
  shortDescription: string
  position?: string
  date?: string
}

function isImageLike(icon: IconType): icon is StaticImageData | string {
  return (
    typeof icon === 'string' ||
    (typeof icon === 'object' && icon !== null && 'src' in icon)
  )
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  shortDescription,
  icon,
  position,
  date,
}) => {
  const imageMode = isImageLike(icon)
  const isAdobe = title.toLowerCase() === 'adobe'

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-secondary/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-black/15">
      <div className="absolute inset-y-0 left-0 w-0.5 bg-accent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="flex items-start gap-4">
      {imageMode ? (
        <div
          className={`flex size-14 shrink-0 items-center justify-center rounded-xl border p-2 ${
            isAdobe
              ? 'border-[#fa0f00]/25 bg-[#fa0f00]/10'
              : 'border-border bg-white'
          }`}
        >
          <Image
            src={icon}
            alt={title}
            width={56}
            height={56}
            className={`h-full w-full object-contain ${isAdobe ? 'p-0.5' : ''}`}
          />
        </div>
      ) : (
        <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-primary">
          {React.createElement(icon as IconComponent, { className: 'h-16 w-16' })}
        </div>
      )}

        <div className="min-w-0">
          <h3 className="text-neutral text-base font-semibold">{title}</h3>
          {position && <p className="mt-1 text-sm text-accent">{position}</p>}
          {date && <p className="text-primary-content mt-1 text-xs">{date}</p>}
        </div>
      </div>

      <div className="mt-5 border-t border-border pt-5">
        <p className="text-primary-content whitespace-pre-line text-sm leading-6">
          {shortDescription}
        </p>
      </div>
    </article>
  )
}

export default ServiceCard
