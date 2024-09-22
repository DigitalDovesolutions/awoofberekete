"use client";
import { useState } from "react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = () => {
    console.log("Form submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper mt-3">
        <div className="form-input flex flex-wrap max-[544px]:gap-4 justify-center">
          <input
            className="w-[100%] max-md:w-[350px] min-[768px]:w-[60%] md:p-4 p-2 max-[544px]:rounded-[5px_5px_5px_5px] rounded-[5px_0px_0px_5px]"
            type="email"
            name="email"
            placeholder="Your Email Here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-danger text-[#fff] md:p-4 p-2 max-[544px]:rounded-[5px_5px_5px_5px] rounded-[0px_5px_5px_0px]"
          >
            Subscribe
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewsletterForm;
