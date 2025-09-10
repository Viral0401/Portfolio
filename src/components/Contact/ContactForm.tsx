'use client'

import { submitContactForm } from '@/actions/contact-form'
import { useState, useTransition } from 'react'
import Button from '../UI/Button'
import Input from '../UI/Input'
import Textarea from '../UI/Textarea'

const ContactForm = () => {
  const [isPending, startTransition] = useTransition()
  const [formState, setFormState] = useState<{
    success: boolean;
    message: string;
  } | null>(null)
  
  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      try {
        const result = await submitContactForm(formData)
        setFormState(result)
        
        if (result.success) {
          const form = document.getElementById('contactForm') as HTMLFormElement
          form?.reset()
        }
      } catch (error) {
        console.error('Contact form submission error:', error)
        setFormState({
          success: false,
          message: "An unexpected error occurred. Please try again."
        })
      }
    })
  }

  if (formState?.success) {
    return (
      <div className="flex flex-col items-center justify-center py-8">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
            className="h-16 w-16 text-accent mb-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
        <p className="text-accent text-center text-2xl font-medium mb-6">{formState.message}</p>
        <Button 
          text="Send Another Message" 
          onClick={() => setFormState(null)}
        />
      </div>
    )
  }

  return (
    <form id="contactForm" action={handleSubmit}>
      <Input label="Full name" id="name" name="name" placeholder="Your name here" required />
      <Input
        label="Email address"
        id="email"
        type="email"
        name="email"
        placeholder="Your email address here"
        required
      />
      <Input label="Subject" id="subject" name="subject" placeholder="Your subject here" />
      <Textarea
        label="Message"
        id="message"
        name="message"
        placeholder="Your message here"
        rows={7}
        required
      />
      {formState && !formState.success && (
        <p className="my-2 font-light text-red-600">{formState.message}</p>
      )}
      <Button text={isPending ? 'Submitting...' : 'Submit'} disabled={isPending} />
    </form>
  )
}

export default ContactForm