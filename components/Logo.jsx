import Image from 'next/image'
import logo from "@/public/assets/images/Logo/cropped-logo.png"
import Link from 'next/link'

const Logo = ({ classname, width, height }) => {
  return (
    <Link href="/">
      <Image src={logo} className={`h-auto ${classname}`} loading='lazy' alt="Awoof Logo" height={height} width={width}/>
    </Link>
  )
}

export default Logo