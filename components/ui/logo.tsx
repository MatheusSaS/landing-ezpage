import Link from 'next/link'
import Image from 'next/image'
import LogoImg from '@/public/images/ezpage.svg'

export default function Logo() {
  return (
    <Link className="block" href="/" aria-label="Cruip">
      <Image src={LogoImg} width={38} height={38} priority alt="Ezpage" />
    </Link>
  )
}