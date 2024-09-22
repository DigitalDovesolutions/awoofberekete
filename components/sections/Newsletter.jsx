import NewsletterForm from "../NewsletterForm";

const Newsletter = () => {
  return (
    <section id="newsletter" className="newsletter-bg relative">
      <img
        className="object-cover absolute right-0 left-0 bottom-0 top-0 -z-[1] h-[100%] w-full"
        src="/assets/images/Dishes/vegetable_spaghetti.png"
        alt="Newsletter Background"
      />
          <div className="overlay"></div>

      <div className="container text-center">
        <div className="newsletter-banner relative z-10 py-24 px-2">

          <div className="newsletter-content">
            <div className="section-title mb-5">
              <h3 className="title text-[#fff] font-bold md:text-[30px] md:max-w-[80%] mx-auto leading-[40.02px]">
                Join Us To Get An Amazing Discount On Your Next Order
              </h3>
            </div>

            <NewsletterForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
