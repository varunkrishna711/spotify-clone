import { Inter } from 'next/font/google';
import NavVertical from '@/components/Navbar/navVertical';
import NavHorizontal from '@/components/Navbar/navHoriz';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="home relative">
      <NavHorizontal />
      <div className="absolute top-0">
        <NavVertical />
      </div>
  </div>
  )
}
