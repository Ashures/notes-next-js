import './globals.css';

export const metadata = {
  title: 'Next.js Demo by Ashures',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          {children}    
        </div>
      </body>
    </html>
  )
}