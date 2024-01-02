import Ellipse from './Component/Ellipse';
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';
import { MyContextProvider } from './Context/MyContext';
import Cursor from './Component/Cursor';
import Contact from './Component/Contact';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Emmanuel Pali',
  description: 'Emmanuel Fullstack Software developer with experience in React, NextJS NodeJS and asp.net',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <MyContextProvider>
        <body className={inter.className}>
          <Cursor />
          <Ellipse size="100px" background="linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(121, 176, 232) 100%)" top={5} left={19}/>
          <div className="container">
              {children} 
          </div>
          {/* <Ellipse zIndex="1" size="30px" background="linear-gradient(175deg, rgba(0, 0, 0, 0.25) 10%, rgb(176, 176, 232) 100%)" top={75} left={85}/> */}
          <footer className='mx-auto'>
        <Contact />
      </footer>
        </body>
      </MyContextProvider>
    </html>
  )
}
