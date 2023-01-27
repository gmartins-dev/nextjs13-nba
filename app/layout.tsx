import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='antialiased'>
      <body className='text-black bg-white dark:text-white dark:bg-black'>
        {children}
      </body>
      <footer className='mx-auto mt-2 mb-4 text-xs text-center text-gray-600 dark:text-gray-400'>
        {'Built using the '}
        <a
          href='https://espn.com'
          target='_blank'
          rel='noopener noreferrer'
          className='transition-all border-b border-gray-400 dark:border-gray-600 hover:border-gray-600 hover:dark:border-gray-400 hover:text-gray-800 hover:dark:text-gray-200'
        >
          ESPN API
        </a>
        {', Next.js, and Vercel. '}
        <a
          href='https://github.com/guilhermemm-dev/nextjs13-nba'
          target='_blank'
          rel='noopener noreferrer'
          className='transition-all border-b border-gray-400 dark:border-gray-600 hover:border-gray-600 hover:dark:border-gray-400 hover:text-gray-800 hover:dark:text-gray-200'
        >
          View the code.
        </a>
      </footer>
    </html>
  )
}
