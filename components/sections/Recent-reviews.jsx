import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Image from "next/image";

const RecentReviews = ({ reviews }) => {
  return (
    <section id="Recent_Review" className="pb-20">
      <div className="container">
        <div className="section-content flex flex-col items-center">
          <div className="section-title mb-4">
            <h2>Recent Reviews</h2>
          </div>

          <Carousel className="reviews w-full">
            <CarouselContent className="flex -ml-1">
              {reviews.map((review, idx) => (
                <CarouselItem
                  key={idx}
                  className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/5"
                >
                  <div className="review p-4 bg-white rounded-lg shadow">
                    <div className="review-image mb-3">
                      <Image
                        src={review.image}
                        alt={review.title}
                        width={100}
                        height={100}
                        className="w-full object-cover"
                      />
                    </div>
                    <div className="review-content">
                      <h3 className="font-bold lg:text-[20px] text-[18px] md:text-[17px] line-clamp-1">
                        {review.title}
                      </h3>
                      <p className="text-sm text-gray-600">{review.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default RecentReviews;
