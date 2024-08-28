import Image from 'next/image'
import logo from "@/public/assets/images/Logo/cropped-logo.png"

const Logo = ({ classname }) => {
  return (
    <Image src={logo} className={classname} loading='lazy' alt="Awoof Logo" height={100} width={100}/>
  )
}

export default Logo