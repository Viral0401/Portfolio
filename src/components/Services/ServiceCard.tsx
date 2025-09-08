import Image, { StaticImageData } from 'next/image'

interface ServiceCardTypes {
  icon: StaticImageData | string | React.ComponentType<any>
  title: string
  shortDescription: string
  position?: string
  date?: string
}

// const ServiceCard: React.FC<ServiceCardTypes> = ({ title, shortDescription, icon, position, date }) => {
//   const isImageModule = typeof icon === 'string' || (typeof icon === 'object' && 'src' in (icon as any))

//   return (
//     <div className="bg-secondary border-border flex flex-col items-center rounded-[14px] border p-5">
//       {isImageModule ? (
//         <Image src={icon as any} alt={title} className="my-1 size-14" />
//       ) : (
//         (() => {
//           const IconComp = icon as React.ComponentType<any>
//           return <IconComp className="my-1 size-14" />
//         })()
//       )}

//       <h5 className="text-accent mt-2 mb-1 text-center text-base font-semibold">{title}</h5>

//       {position && (
//         <div className="inline-block rounded-md bg-[#10B9811A] px-2 py-0.5 text-xs font-medium text-[#34D399] mb-1">
//           {position}
//         </div>
//       )}

//       {date && <div className="text-neutral text-sm mb-3 mt-1">{date}</div>}

//       <div className="bg-primary rounded-2xl p-4">
//         <p className="text-primary-content text-center text-sm font-normal">{shortDescription}</p>
//       </div>
//     </div>
//   )
// }

const ServiceCard: React.FC<ServiceCardTypes> = ({ title, shortDescription, icon, position, date }) => {
  const isImageModule = typeof icon === 'string' || (typeof icon === 'object' && 'src' in (icon as any))

  return (
    <div className="bg-secondary border-border flex flex-col items-center rounded-[14px] border p-5">
      {isImageModule ? (
        <div className="my-1 h-24 w-24">
          <Image
            src={icon as any}
            alt={title}
            width={96}
            height={50}
            className="h-full w-full object-contain"
          />
        </div>
      ) : (
        (() => {
          const IconComp = icon as React.ComponentType<any>
          return (
            <div className="my-1 h-24 w-24 flex items-center justify-center">
              <IconComp className="h-16 w-16" />
            </div>
          )
        })()
      )}

      <h5 className="text-accent mt-2 mb-1 text-center text-base font-semibold">{title}</h5>

      {position && (
        <div className="inline-block rounded-md bg-[#10B9811A] px-2 py-0.5 text-xs font-medium text-[#34D399] mb-0.5">
          {position}
        </div>
      )}

      {date && <div className="text-neutral text-sm mb-2 mt-0">{date}</div>}

      <div className="bg-primary rounded-2xl p-4">
        <p className="text-primary-content text-center text-sm font-normal whitespace-pre-line">
          {shortDescription}
        </p>
      </div>
    </div>
  )
}

export default ServiceCard
