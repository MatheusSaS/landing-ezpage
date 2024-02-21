import Link from 'next/link'
import Logo from './logo'

export default function Header() {
  return (
    <header className="absolute w-full z-30 bg-gray-950 sm:bg-opacity-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center sm:justify-between h-16 md:h-20">

          { /* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>


        </div>
      </div>
    </header>
  )
}
