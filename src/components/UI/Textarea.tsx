import { FC, TextareaHTMLAttributes } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  id?: string
}

const Textarea: FC<TextareaProps> = ({ id, label, ...props }) => {
  return (
    <div className="mb-4 flex w-full flex-col gap-2">
      {label && (
        <label htmlFor={id} className="text-secondary-content text-sm">
          {label}
        </label>
      )}
      <textarea
        id={id}
        {...props}
        className="border-border bg-primary/50 focus:border-accent text-neutral w-full resize-none rounded-xl border px-4 py-3 text-sm placeholder:text-primary-content/60 focus:outline-none"
      />
    </div>
  )
}

export default Textarea
