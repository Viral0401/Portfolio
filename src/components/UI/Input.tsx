import { FC, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  id?: string
}

const Input: FC<InputProps> = ({ type = 'text', id, label, ...props }) => {
  return (
    <div className="mb-4 flex w-full flex-col gap-2">
      {label && (
        <label htmlFor={id} className="text-secondary-content text-sm">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        {...props}
        className="border-border bg-primary/50 focus:border-accent text-neutral w-full rounded-xl border px-4 py-3 text-sm placeholder:text-primary-content/60 focus:outline-none"
      />
    </div>
  )
}

export default Input
