import Image from "next/image";
import HamburgerChips from "@/public/assets/images/Dishes/Hamburger.png";
import Hamburger from "@/public/assets/images/Dishes/hamburger_2.png";
import Pizza from "@/public/assets/images/Dishes/pizza.png";
import MealBG from "@/public/assets/images/Dishes/Breakfast_time_BG.png";
import Discount from "@/public/assets/images/discount/save_money.png";

const Random = () => {
  return (
    <section className="random w-screen">
      <div className="section-container">
        <div className="grid gap-0 max-[476px]:grid-cols-1 min-[476px]:grid-cols-2 md:grid-cols-4">
          <div className="card">
            <Image
              className="w-full object-cover"
              src={HamburgerChips}
              alt="Hamburger and Chips"
              width={100}
              height={100}
              loading="lazy"
            />
          </div>

          <div
            className="card p-4 relative flex flex-col items-center text-center justify-center"
            style={{ backgroundImage: `url(${MealBG.src})`, backgroundSize: "cover" }}
          >
            <Image className="absolute h-auto left-2 top-12" src={Discount} loading="lazy" alt="Discount_flag" width={50} height={100}/>
            <h6 className="uppercase mb-2 text-danger">Breakfast Time</h6>
            <p className="flex flex-col gap-2">
              <span className="capitalize font-semibold">We deliver</span> Delicious Meals to Your Doorstep.
            </p>
          </div>

          <div className="card">
            <Image
              className="w-full object-cover"
              src={Hamburger}
              alt="Hamburger"
              width={100}
              height={100}
              loading="lazy"
            />
          </div>

          <div className="card">
            <Image
              className="w-full object-cover"
              src={Pizza}
              alt="Pizza"
              width={100}
              height={100}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Random;
