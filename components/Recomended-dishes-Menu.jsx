import Image from "next/image";
import Link from "next/link";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";

const RecomendedDishesMenu = ({ items, activeFilter }) => {
  return (
    <div id="meals-container" className="container w-full">
      <div className="grid gap-[34px] min-[476px]:gap-y-[30px] lg:gap-[29px] lg:gap-y-20 md:gap-y-20 max-md:gap-y-20 max-[476px]:grid-cols-1 min-[476px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items?.map((item, idx) => (
          <div key={idx} className="max-[767px]:w-full">
            <div
              className={`meal-card max-[767px]:w-full relative ${
                item.category
              } ${
                activeFilter !== "all" && item.category !== activeFilter
                  ? "hidden"
                  : "block"
              } p-[20px_10px_10px_10px] bg-white shadow-lg rounded-[0px_50px_0px_50px]`}
            >
              <Image
                src={item.image}
                alt={`Image of ${item.mealName}`}
                className="object-cover max-[476px]:w-[150px] min-[476px]:absolute min-[767px]:-top-[20%] min-[767px]:right-0 max-[767px]:mx-auto h-auto"
                width={150}
                height={100}
                priority
              />
              <div className="p-4 min-[767px]:pt-24 min-[476px]:pt-[170px]">
                <h4 className="text-lg font-semibold mb-2 line-clamp-1">
                  <Link href="/">{item.mealName}</Link>
                </h4>
                <div className="flex justify-between items-center">
                  <div className="stars flex">
                    {[...Array(5)].map((_, starIdx) => {
                      if (starIdx < item.rating) {
                        return (
                          <FaStar
                            key={starIdx}
                            className="text-yellow-500 mr-1"
                          />
                        );
                      } else if (starIdx < item.rating + 0.5) {
                        return (
                          <FaStarHalfAlt
                            key={starIdx}
                            className="text-yellow-500 mr-1"
                          />
                        );
                      } else {
                        return (
                          <FaRegStar
                            key={starIdx}
                            className="text-yellow-500 mr-1"
                          />
                        );
                      }
                    })}
                    <span className="text-sm font-semibold text-primary opacity-75">
                      ({item.rating})
                    </span>
                  </div>
                  <div className="flex">
                    <div className="favourite">
                      <FaRegHeart className="text-red-500" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-nowrap justify-between items-center max-[767px]:mt-1 px-4">
                <div className="price">
                  <span className="font-semibold text-[15px]">
                    N{parseFloat(item.price).toFixed(2)}
                  </span>
                </div>

                <button
                  className="bg-danger text-white py-2 px-2 text-sm rounded-full"
                  onClick={() => router.push("/menu")}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecomendedDishesMenu;
