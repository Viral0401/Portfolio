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

  return (
    <div className="bg-secondary border-border flex flex-col items-center rounded-[14px] border p-5">
      {imageMode ? (
        <div className="my-1 h-24 w-24">
          <Image
            src={icon}
            alt={title}
            width={96}
            height={96}
            className="h-full w-full object-contain"
          />
        </div>
      ) : (
        <div className="my-1 flex h-24 w-24 items-center justify-center">
          {React.createElement(icon as IconComponent, { className: 'h-16 w-16' })}
        </div>
      )}

      <h5 className="text-accent mt-2 mb-1 text-center text-base font-semibold">{title}</h5>

      {position && (
        <div className="mb-0.5 inline-block rounded-md bg-[#10B9811A] px-2 py-0.5 text-xs font-medium text-[#34D399]">
          {position}
        </div>
      )}

      {date && <div className="text-neutral mb-2 mt-0 text-sm">{date}</div>}

      <div className="bg-primary rounded-2xl p-4">
        <p className="text-primary-content whitespace-pre-line text-center text-sm font-normal">
          {shortDescription}
        </p>
      </div>
    </div>
  )
}

export default ServiceCard