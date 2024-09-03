"use client";
import { useState } from "react";
import RecomendedDishesMenu from "../Recomended-dishes-Menu";

const TopRecommendedDishes = ({ items }) => {
  const topics = [
    { name: "all" },
    { name: "breakfast" },
    { name: "Lunch" },
    { name: "Dinner" },
  ];

  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilter = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <section
      id="Top_Recommended_section"
      className="lg:py-48 max-md:py-20 lg:pb-0"
    >
      <div className="container">
        <div className="section-content flex flex-col items-center">
          <div className="section-title mb-4">
            <h2>Top Recommended Dishes</h2>
          </div>

          <div className="topics">
            <ul className="topics-filter flex gap-4 divide-x-[2px] divide-secondary">
              {topics.map(({ name }, idx) => (
                <li
                  className={`pl-4 font-semibold opacity-85 cursor-pointer hover:text-danger uppercase text-[14px] ${
                    name === activeFilter ? "text-danger" : "text-primary"
                  } `}
                  key={idx}
                  onClick={() => handleFilter(name)}
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>

          <div className="meals lg:py-20 py-24 pt-[5rem] min-[476px]:pt-10 w-screen">
            <RecomendedDishesMenu items={items} activeFilter={activeFilter} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRecommendedDishes;
