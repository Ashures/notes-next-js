import './globals.css';

export const metadata = {
  title: 'Notes',
  description: 'Made by Ashures',
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
