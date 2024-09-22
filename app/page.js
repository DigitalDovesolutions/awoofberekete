import HeroSection from "@/components/sections/Hero-section";
import Services from "@/components/sections/Services";
import TopRecommendedDishes from "@/components/sections/Top-recommended-dishes";
import Spaghetti from "@/public/assets/images/Dishes/BreakFast.png"
import RecentReviews from "@/components/sections/Recent-reviews";
import HotChocolate from "@/public/assets/images/Dishes/Hot_chocolate.png"
import Chips from "@/public/assets/images/Dishes/chicken_ketchup_pepper.png"
import Burger from "@/public/assets/images/Dishes/review_burger.png"
import Chicken_pepper from "@/public/assets/images/Dishes/chicken_leaf_pepper.png"
import Random from "@/components/sections/random";
import Newsletter from "@/components/sections/Newsletter";
import AboutUs from "@/components/sections/About_us";

export default function Home() {
  const all = [
    {
      image: Spaghetti,
      mealName: "Hot Amala and Egusi",
      category: "breakfast",
      price: 4500,
      rating: Number(120),
      url: "/",
    },

    {
      image: Spaghetti,
      mealName: "Egg Sauce and Yam",
      category: "breakfast",
      price: 4500,
      rating: Number(120),
      url: "/",
    },

    {
      image: Spaghetti,
      mealName: "Hot Amala and Egusi ",
      category: "breakfast",
      price: 4500,
      rating: Number(120),
      url: "/",
    },

    {
      image: Spaghetti,
      mealName: "Egg Sauce and Yam",
      category: "breakfast",
      price: 4500,
      rating: Number(120),
      url: "/",
    },

    {
      image: Spaghetti,
      mealName: "Hot Amala and Egusi",
      category: "breakfast",
      price: 4500,
      rating: Number(120),
      url: "/",
    },

    {
      image: Spaghetti,
      mealName: "Hot Amala and Egusi",
      category: "breakfast",
      price: 4500,
      rating: Number(120),
      url: "/",
    },

    {
      image: Spaghetti,
      mealName: "hot amala and egusi",
      category: "breakfast",
      price: 4500,
      rating: Number(120),
      url: "/",
    },

    {
      image: Spaghetti,
      mealName: "Egg Sauce and Yam",
      category: "breakfast",
      price: 4500,
      rating: Number(120),
      url: "/",
    },

  ];

  const reviews = [
    {
      image: Burger,
      title: "Fresh Sea Food",
      description: "Absolutely delicious! The mayonnaise pizza was a surprising delight—creamy, rich, and perfectly balanced with fresh toppings. A must-try!",
      url: "/",
    },

    {
      image: Chips,
      title: "Delicious Mayonnaise Pizza",
      description: "Absolutely delicious! The mayonnaise pizza was a surprising delight—creamy, rich, and perfectly balanced with fresh toppings. A must-try!",
      url: "/",
    },

    {
      image: HotChocolate,
      title: "Hot Chocolate",
      description: "Absolutely delicious! The mayonnaise pizza was a surprising delight—creamy, rich, and perfectly balanced with fresh toppings. A must-try!",
      url: "/",
    },

    {
      image: Chicken_pepper,
      title: "Hot Delicious Burger",
      description: "Absolutely delicious! The mayonnaise pizza was a surprising delight—creamy, rich, and perfectly balanced with fresh toppings. A must-try!",
      url: "/",
    },

    {
      image: Burger,
      title: "Fresh Sea Food",
      description: "Absolutely delicious! The mayonnaise pizza was a surprising delight—creamy, rich, and perfectly balanced with fresh toppings. A must-try!",
      url: "/",
    },

    {
      image: Chips,
      title: "Delicious Mayonnaise Pizza",
      description: "Absolutely delicious! The mayonnaise pizza was a surprising delight—creamy, rich, and perfectly balanced with fresh toppings. A must-try!",
      url: "/",
    },

    {
      image: HotChocolate,
      title: "Hot Chocolate",
      description: "Absolutely delicious! The mayonnaise pizza was a surprising delight—creamy, rich, and perfectly balanced with fresh toppings. A must-try!",
      url: "/",
    },

    {
      image: Chicken_pepper,
      title: "Hot Delicious Burger",
      description: "Absolutely delicious! The mayonnaise pizza was a surprising delight—creamy, rich, and perfectly balanced with fresh toppings. A must-try!",
      url: "/",
    },
  ]

  return (
    <main className="block">
      <HeroSection/>
      <Services/>
      <TopRecommendedDishes items={all} />
      <AboutUs/>
      <Random/>
      <RecentReviews reviews={reviews} />
      <Random/>
      <Newsletter/>
    </main>
  );
}
