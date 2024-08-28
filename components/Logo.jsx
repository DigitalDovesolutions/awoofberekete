import Image from 'next/image'
import logo from "@/public/assets/images/Logo/cropped-logo.png"

const Logo = ({ classname, width, height }) => {
  return (
    <Image src={logo} className={classname} loading='lazy' alt="Awoof Logo" height={height} width={width}/>
  )
}

export default Logo