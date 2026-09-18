const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Viral Dalal monogram"
      {...props}
    >
      <defs>
        <linearGradient id="vd-mark" x1="5" y1="4" x2="38" y2="39" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--a)" />
          <stop offset=".5" stopColor="#67E8F9" />
          <stop offset="1" stopColor="#A78BFA" />
        </linearGradient>
        <linearGradient id="vd-surface" x1="0" y1="0" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--s)" />
          <stop offset="1" stopColor="var(--p)" />
        </linearGradient>
      </defs>

      <rect x="1" y="1" width="40" height="40" rx="13" fill="url(#vd-surface)" stroke="var(--b)" />
      <path
        d="M9.5 12.5L16.8 29.5L21 20"
        stroke="url(#vd-mark)"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.5 11.5H25.2C31 11.5 34.5 15.2 34.5 21C34.5 26.8 31 30.5 25.2 30.5H22.5V11.5Z"
        stroke="url(#vd-mark)"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="34" cy="9" r="2" fill="var(--a)" />
    </svg>
  )
}

export default Logo
