import React from "react";
import banner from "../../public/banner.jpg";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-30 ">
          <div className="space-y-12 mr-4 mt-10 ">
            <h1 className="text-3xl font-bold">
              Hello, Welcome here into a world of captivating stories! So, grab
              a cup of tea, curl up with a good book, and{" "}
              <span className="text-pink-500">let your imagination soar!</span>
            </h1>
            <p className="text-xl font-normal">
              Have you ever felt the world fade away as you lose yourself in the
              pages of a captivating novel? Here at beyondWords, we believe that
              the power of stories is boundless. We curate a diverse library of
              books, from heart-pounding mysteries that keep you guessing to
              sweeping romances that leave you breathless. Whether you yearn to
              escape into fantastical worlds or delve into the depths of human
              experience, we have the perfect book waiting to ignite your
              imagination.
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn btn-secondary my-6 ">Secondary</button>
        </div>
        <div className="w-full order-1 md:w-1/2">
          <img src={banner} className="w-95 h-95 m-20" alt="#" />{" "}
        </div>
      </div>
    </>
  );
}

export default Banner;
