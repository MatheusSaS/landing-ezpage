import Image from 'next/image'
import LogoImg from '@/public/images/Ezepage.svg'

export default function Logo() {
  return (
    <Image src={LogoImg} width={110} height={110} priority alt="Ezpage" />
  )
}