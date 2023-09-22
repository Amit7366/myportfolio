import './globals.css'


export const metadata = {
  title: 'Amit K Singha - Full Stack Web Developer',
  description: 'Full Stack Web Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
