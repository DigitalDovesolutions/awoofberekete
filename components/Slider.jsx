import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import CustomerSpaceImage from "@/public/assets/images/Hero/Awoof-Berekete-masked.png";
import HeroDish from "@/public/assets/images/Dishes/Efo_Riro.png";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill, RiInstagramFill } from "react-icons/ri";
import Flower from "@/public/assets/images/Hero/flower-leaf.png";
import Leaf from "@/public/assets/images/Hero/leaf.png";

const HeroSlider = () => {
  const items = [
    {
      text: "Welcome to",
      name: "Awoof Berekete",
      content:
        "Indulge in a culinary journey where every dish is crafted to perfection. Experience the finest ingredients, exceptional flavors, and a dining experience like no other.",
      button: {
        primary: "Menu",
        secondary: "Order Now",
      },
      image: {
        primary: CustomerSpaceImage,
        secondary: HeroDish,
        tertiary: CustomerSpaceImage,
      },
      icons: [FaFacebookF, RiInstagramFill, RiTwitterXFill],
    },
    {
      text: "Showcase to",
      name: "Awoof",
      content:
        "Indulge in a culinary journey where every dish is crafted to perfection. Experience the finest ingredients, exceptional flavors.",
      button: {
        primary: "Menu",
        secondary: "Order Now",
      },
      image: {
        primary: CustomerSpaceImage,
        secondary: CustomerSpaceImage,
        tertiary: CustomerSpaceImage,
      },
      icons: [FaFacebookF, RiInstagramFill, RiTwitterXFill],
    },
  ];

  return (
    <Carousel className="w-screen lg:py-16">
      <CarouselContent>
        {items.map(({ text, name, content, button, image, icons }, idx) => (
          <CarouselItem key={idx}>
            <div className="container">
              <CardContent className="flex max-[991px]:p-[3rem_0_3rem_0] max-[991px]:flex-col aspect-video items-center justify-between text-start px-0 pb-[40px] pt-[67px]">
                <div className="d-table greeting left-content max-lg:mb-10 max-lg:max-w-xl">
                  <div className="d-table-cell">
                    <div className="content lg:max-w-[500px]">
                      <span className="relative min-[991px]:pl-1 mb-3 flex items-center max-[991px]:justify-center py-2">
                        <h6 className="mb-0 text-[20px] font-semibold text-danger pl-1">
                          {text}
                        </h6>
                      </span>
                      <h1 className="mb-3 lg:text-[55px] max-[767px]:text-[35px] font-bold text-dark">
                        {name}
                      </h1>

                      <div className="content mb-8">
                        <p className="leading-6 opacity-[.9]">{content}</p>
                      </div>

                      <div className="action-buttons mb-10 flex gap-6 max-[991px]:justify-center">
                        <button className="bg-primary text-background lg:p-[12px_32px] p-[12px_28px] rounded-lg">
                          <Link href="/">{button.primary}</Link>
                        </button>
                        <button className="bg-danger text-background lg:p-[12px_22px] p-[12px_28px] rounded-lg">
                          <Link href="/">{button.secondary}</Link>
                        </button>
                      </div>

                      <div className="socials flex max-[991px]:justify-center">
                        <div className="socials__items flex items-center gap-6">
                          {icons.map((IconComponent, iconIdx) => (
                            <a
                              key={iconIdx}
                              href="/"
                              className="border-[1.5px] border-primary p-3 rounded-full max-[991px]:p-2 hover:bg-primary hover:text-white transition-colors duration-150"
                            >
                              <IconComponent className="text-lg transition-colors duration-0 ease-linear" />
                            </a>
                          ))}
                          <div className="line relative w-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="right-content">
                  <div className="relative image">
                    <span className="absolute max-sm:-left-10 -top-28 max-sm:-top-14 -left-40 z-10">
                      <Image
                        className="-z-30 max-sm:w-[150px] h-auto"
                        src={Flower}
                        alt="Rings"
                        width={300}
                        height={100}
                        loading="lazy"
                      />
                    </span>

                    <Image
                      className="z-20 max-lg:w-[80%] max-lg:mx-auto h-auto"
                      src={image.primary}
                      alt="Customer Space - Hero Image"
                      width={550}
                      loading="lazy"
                      height={100}
                    />

                    <span className="absolute max-sm:right-[5px] z-30 lg:-bottom-10 -right-[50px] max-sm:-bottom-[25px]">
                      <Image
                        className="max-lg:w-[55%] max-sm:w-[50px] h-auto"
                        src={Leaf}
                        alt="Dish"
                        width={100}
                        loading="lazy"
                        height={100}
                      />
                    </span>

                    <span className="absolute z-30 top-1/3 -left-[120px] max-lg:-left-[70px] max-[876px]:-left-[35px] max-[768px]:top-[55.55555%]">
                      <Image
                        className="max-lg:w-[55%] h-auto"
                        src={image.secondary}
                        alt="Dish"
                        width={250}
                        loading="lazy"
                        height={100}
                      />
                    </span>
                  </div>
                </div>
              </CardContent>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default HeroSlider;
