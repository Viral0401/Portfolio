import { ButtonHTMLAttributes, FC } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

const Button: FC<ButtonProps> = ({ text, ...props }) => {
  return (
    <button
      {...props}
      className="bg-accent disabled:bg-accent/40 text-primary w-full cursor-pointer rounded-xl px-4 py-3 font-semibold transition duration-300 hover:-translate-y-0.5 hover:opacity-90 disabled:translate-y-0">
      {text}
    </button>
  )
}

export default Button
