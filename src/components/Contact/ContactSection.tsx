import { MsgIcon, PhoneIcon } from '@/utils/icons'
import ContactForm from './ContactForm'

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative grid grid-cols-1 gap-12 overflow-hidden rounded-3xl border border-border bg-secondary/80 p-7 md:grid-cols-2 md:p-10 lg:gap-20 lg:p-14">
      <div className="flex flex-col justify-between gap-8">
        <div>
          <p className="text-accent mb-3 text-xs font-semibold uppercase tracking-[0.2em]">Start a conversation</p>
          <h3 className="text-neutral text-3xl font-semibold tracking-tight md:text-4xl">Have a problem worth solving?</h3>
          <p className="text-primary-content mt-5 max-w-md leading-7">
            I'm always interested in thoughtful AI, data, software, and research collaborations.
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-neutral mb-4 text-sm font-semibold">Contact information</p>
          <a
            href="mailto:viraldalal04@gmail.com"
            className="text-neutral hover:text-accent flex items-center gap-1 font-light transition-colors duration-300">
            <MsgIcon /> viraldalal04@gmail.com
          </a>
          <a
            href="tel:+12016801820"
            className="text-neutral hover:text-accent flex items-center gap-1 font-light transition-colors duration-300">
            <PhoneIcon /> +1(201)-680-1820
          </a>
        </div>
      </div>

      <ContactForm />
    </section>
  )
}

export default ContactSection
