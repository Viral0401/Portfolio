// ...existing code...
import { footerLinks, languages } from '@/appData'
import { socials } from '@/appData/personal'
import Logo from '../Navbar/Logo'

const Footer = () => {
  return (
    <footer className="bg-secondary relative flex min-h-[320px] flex-col justify-between gap-12 overflow-hidden px-4 py-10 md:p-14">
      <div className="relative z-20 grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-12">
        <div>
          <h5 className="mb-6 flex items-center gap-2">
            <Logo width={30} height={24} />
            <span className="text-neutral text-lg font-medium">Viral Dalal</span>
          </h5>

          <p className="text-tertiary-content mb-3">
            Masters Student at New York University. Actively looking for internship opportunities.
          </p>

          <a
            href="#"
            className="text-neutral mt-2 inline-flex items-center gap-2 text-xs hover:underline">
            More about me <span className="bg-neutral inline-block size-[1px] rounded-full" />
          </a>
        </div>

        <div className="flex flex-wrap gap-6 items-center">
          {footerLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              className="text-tertiary-content hover:text-neutral transition-colors duration-300 hover:underline">
              {link.title}.
            </a>
          ))}
        </div>
      </div>

      <div className="relative z-20 flex flex-col-reverse gap-12 md:grid md:grid-cols-2 md:gap-12">
        <div className="grid grid-cols-2 gap-4 items-end">
          <ul className="flex flex-col gap-3">
            {socials.map((item, index) => (
              <li key={index} className="cursor-pointer bg-transparent">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral transition-colors hover:text-neutral/50 h-full w-full duration-300 inline-flex items-center">
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-between gap-8 md:flex-row md:gap-8">
          <div className="space-y-6 md:self-end">
            <div className="flex flex-col">
              <h5 className="text-neutral mb-3 text-lg font-medium">Contact Me</h5>

              {/* plain text to avoid auto-opening mail client */}
              <div className="text-tertiary-content text-sm font-light">
                <span>viraldalal04@gmail.com</span>
              </div>

              <div className="text-tertiary-content text-sm font-light">
                <span>+1(201)-680-1820</span>
              </div>
            </div>

            <div>
              <h5 className="text-neutral mb-3 text-lg font-medium">Location</h5>
              <address className="text-tertiary-content flex flex-col text-sm font-light not-italic">
                <span>Jersey City</span>
                <span>New Jersey, United States</span>
              </address>
            </div>
          </div>

          <div className="md:self-end">
            <p className="text-neutral mb-4 text-sm md:text-right">Languages</p>
            <div className="flex gap-6 md:gap-4 lg:gap-8">
              {languages.map((language, idx) => (
                <span
                  key={language}
                  className={idx === 0 ? 'text-neutral' : 'text-tertiary-content'}>
                  {language}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-neutral/4 absolute top-1/2 -right-[40%] z-0 h-[120dvw] w-[120dvw] -translate-y-1/2 rounded-full p-14 md:top-0 md:-right-[255px] md:-bottom-[450px] md:size-[1030px] md:-translate-y-0 md:p-20">
        <div className="bg-neutral/4 size-full rounded-full p-14 md:p-20">
          <div className="bg-neutral/5 size-full rounded-full" />
        </div>
      </div>
    </footer>
  )
}

export default Footer