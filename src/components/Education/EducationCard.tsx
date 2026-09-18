import Image from 'next/image'

interface Education {
  title: string
  shortDescription: string
  cover: string
  duration: string
  institute: string
}

interface EducationCardProps {
  data: Education
}

const EducationCard: React.FC<EducationCardProps> = ({ data }) => {
  const { title, shortDescription, cover, duration, institute } = data

  return (
    <article className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-secondary/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-black/15">
      <div className="flex items-start justify-between gap-5">
        <div className="flex-1">
          <div className="flex flex-col flex-wrap gap-3 sm:flex-row sm:items-center">
            <h3 className="text-neutral text-lg font-semibold leading-snug">{title}</h3>
            <span className="w-fit rounded-full border border-accent/20 bg-accent/5 px-2.5 py-1 text-xs text-accent">
              {institute}
            </span>
          </div>
          <ul className="mt-3 flex flex-col gap-2">
            <li className="text-primary-content text-sm">{duration}</li>
          </ul>
        </div>
        <figure className="flex size-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-2">
          <Image
            src={cover}
            width={275}
            height={100}
            alt="Education Cover"
            className="h-full w-full object-contain"
          />
        </figure>
      </div>

      <div>
        <div className="mt-6 border-t border-border pt-5">
          <p className="text-primary-content text-sm leading-6">{shortDescription}</p>
        </div>
      </div>
    </article>
  )
}

export default EducationCard
