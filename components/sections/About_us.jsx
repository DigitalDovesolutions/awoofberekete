import Image from "next/image"
import AmalaCombo from "@/public/assets/images/Dishes/amala-combo.png"
import Ellipse from "@/public/assets/images/shapes/Ellipse.png"
import Link from "next/link"

const AboutUs = () => {
  return (
    <section id="About_us" className="py-[90px]">
        <div className="container">
            <div className="grid max-md:grid-cols-1 grid-cols-2 items-center gap-0">

                <div className="left-content max-md:pb-10 relative">
                    <Image className="h-auto max-md:mx-auto w-[300px] object-cover md:w-[320px] ml-2" src={AmalaCombo} alt="Amala-combo" width={100} height={100}/>
                    <Image className="absolute w-auto h-[140px] max-md:h-[300px] md:h-[340px] max-md:left-8 left-0 max-md:-top-[0px] max-md:hidden -top-2" src={Ellipse} alt="Amala-combo" width={100} height={100}/>
                </div>

                <div className="right-content">
                    <h2 className="text-3xl mb-3 font-bold text-gray-900">About Us</h2>

                    <p className="text-gray-600 mb-3 text-lg">
                        <span className="text-danger">AWOOF BEREKETE</span>&nbsp;
                        is Nigeria’s favorite restaurant with a full package of fresh, delicious, tasty, and nutritious range of pastries and African intercontinental meals on offer every day of the week at affordable prices, complete with arguably one of the best hygienic eating ambiances in the Center of Excellence
                        Like the name suggests, Awoof is the only Fast Food Eatery that has successfully put the combination of quality, consistency, and pocket-friendliness of its customers into consideration in preparing its meals
                    </p>

                    <p className="mb-8 text-gray-600 text-lg">
                        Awoof dishes out some of the best African, intercontinental, contemporary designs and tasty services, with spicy and good proteins to complement them and a plethora of options to select from.
                        At Awoof, we care about all and therefore, we have developed different types of menus to cater for these set of special people.
                    </p>

        
                    <Link href='/menu' className="bg-danger text-white lg:p-[12px_22px] p-[12px_28px] md:text-lg rounded-lg capitalize">
                        our menu
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs