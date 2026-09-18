import { ImageResponse } from 'next/og'

// Image metadata
export const alt = 'Viral Dalal — AI, Data, and Software Engineering portfolio'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#011627',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
        }}>
        <h1 style={{ fontSize: 32, color: '#18f2e5', margin: 0 }}>
          Viral Dalal | AI · Data · Software
        </h1>
        <h2 style={{ fontSize: 40, color: 'white', marginTop: 30 }}>
          Adobe Software Engineering Intern · NYU Computer Engineering · Seeking 2027 full-time roles
        </h2>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    },
  )
}
