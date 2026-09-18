// ...existing code...
import React from 'react'
import {
  GithubIcon,
  LinkedIn,
  X as XIcon,
  Instagram,
  Facebook,
  ResumeIcon, // new icon you will add in utils/icons.tsx
} from '@/utils/icons'
import { SiGooglescholar } from 'react-icons/si'

export const socials = [
  {
    href: 'https://github.com/viral0401', // update to your profile
    icon: <GithubIcon />
  },
  {
    href: 'https://www.linkedin.com/in/viral0401', // update to your profile
    icon: <LinkedIn />
  },
  {
    href: 'https://drive.google.com/file/d/1HJ5NQvslD8Wq4aus308rvNqKDBmbcsvR/view?usp=sharing',
    icon: <ResumeIcon />
  },
  {
    href: 'https://scholar.google.com/citations?user=wwizFiEAAAAJ&hl=en',
    icon: <SiGooglescholar />
  },
  {
    href: 'https://x.com/wtfviral_?s=21&t=RiRt3dWDsg85rkCTyPhZrA', // update to your profile
    icon: <XIcon />
  },
  {
    href: 'https://www.instagram.com/viral04_/', // update to your profile
    icon: <Instagram />
  },
  {
    href: 'https://www.facebook.com/share/1a4fMsytFr/?mibextid=wwXIfr', // update to your profile
    icon: <Facebook />
  }
  // resume page icon (opens resume link)
]
// ...existing code...
