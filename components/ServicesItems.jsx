import { PiChefHatFill } from "react-icons/pi";
import { PiForkKnifeFill } from "react-icons/pi";
import { MdShoppingCart } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";

const ServicesItems = () => {
    const ServicesItems = [
        {
            id: 1,
            icon: PiChefHatFill,
            title: 'Master Chefs',
            description: "Culinary Magicians Turning Ingredients into Extraordinary Delicacy.",
        },
        {
            id: 2,
            icon: PiForkKnifeFill,
            title: 'Quality Food',
            description: "Culinary Magicians Turning Ingredients into Extraordinary Delicacy.",
        },
        {
            id: 3,
            icon: MdShoppingCart,
            title: 'Online Order',
            description: "Seamless Process, Easy Peasy, No stress Just Click and Eat.",
        },
        {
            id: 4,
            icon: RiCustomerService2Fill,
            title: '24/7 Service',
            description: "Ready to Assist You Promptly and Effectively Providing friendly Suppport.",
        }
    ]
  return (
    <div className="grid gap-7 max-sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:absolute lg:-bottom-28 left-0 lg:gap-5 lg:p-[0_15px]">
        {ServicesItems.map(({ id, icon: Icon, title, description }) => (
            <div key={id} className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg">
                <Icon className="text-[42px] text-danger mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
                <p className="text-gray-600 lg:text-[15px] text-center opacity-70">{description}</p>
            </div>
        ))}
    </div>

  )
}

export default ServicesItems