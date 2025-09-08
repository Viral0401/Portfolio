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
    <div className="bg-secondary border-border flex flex-col justify-between rounded-[14px] border p-5">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <div className="flex flex-col flex-wrap gap-3 sm:flex-row sm:items-center">
            <h3 className="text-secondary-content text-lg font-medium md:font-semibold">{title}</h3>
            <span className="h-7 w-fit rounded-md bg-[#FFFFFF1A] p-1 text-sm text-accent backdrop-blur-[80px]">
              {institute}
            </span>
          </div>
          <ul className="mt-3 flex flex-col gap-2">
            <li className="text-neutral text-sm">{duration}</li>
          </ul>
        </div>
        <figure className="flex justify-end overflow-hidden">
          <Image
            src={cover}
            width={275}
            height={100}
            alt="Education Cover"
            className="h-[100px] w-[275px] rounded-md object-cover shadow-[0px_1.66px_3.74px_-1.25px_#18274B1F]"
          />
        </figure>
      </div>

      <div>
        <div className="bg-primary text-primary-content my-4 h-[100px] overflow-scroll rounded-2xl px-4 py-2">
          <p className="text-[14px] font-normal md:text-base">{shortDescription}</p>
        </div>
      </div>
    </div>
  )
}

export default EducationCard
