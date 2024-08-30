import Link from "next/link"
import HeroSlider from "./Slider"
import Image from "next/image"
import Rings from "@/public/assets/images/Hero/Circles.png"
import Flower from "@/public/assets/images/Hero/flower-leaf.png"

const HeroSection = () => {
  return (
    <section id="Hero_section" className='z-20 overflow-hidden relative bg-secondary'>
      <span className="absolute -top-28 left-0">
        <Image className="-z-10" src={Rings} alt="Rings" width={300} height={100} loading="lazy"/>
      </span>

      <span className="absolute rotate-180 -bottom-[200px] right-0">
        <Image className="-z-10" src={Rings} alt="Rings" width={300} height={100} loading="lazy"/>
      </span>

      <span className="absolute rotate-[75deg] -bottom-24 -left-24">
        <Image className="-z-10" src={Flower} alt="Rings" width={290} height={100} loading="lazy"/>
      </span>
      <HeroSlider/>
    </section>
  )
}

export default HeroSection