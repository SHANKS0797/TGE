import React from "react";
import Navbar from "../Navbar/Navbar";
import { contactInformation } from "../Data/data";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="w-auto h-72 mx-2 bg-red-300 flex flex-row lg:items-center">
        <span className="flex flex-col gap-4 px-2 lg:px-5 lg:py-5 leading-6 text-white">
          <header className="text-lg lg:text-2xl font-semibold lg:font-bold">
            <p>Reach out to us</p>
            <div className="h-[0.2rem] w-16 mb-2 bg-[#7733FF]"></div>
          </header>
          <p className="text-base lg:text-lg leading-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, est
            totam! Sed minima quod alias magni illum ducimus voluptatem maxime,
            cumque repudiandae libero obcaecati, ea veritatis, necessitatibus
            quae rerum officiis?
          </p>
        </span>
        <span className="hidden lg:flex lg:mx-5 lg:my-3">
          <img
            src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1106&q=80"
            alt=""
            className="rounded-full h-40"
          />
        </span>
      </div>
      <div className="grid grig-rows-1 lg:grid-cols-3">
        {contactInformation.map((values) => (
          <div className="flex flex-row items-center lg:items-center mx-2 py-6 px-4 my-4 shadow-md">
            <span className="h-16">{values.icon}</span>
            <span className="flex flex-col p-2">
              <header className="text-base font-medium">{values.title}</header>
              <article className="text-xs text-[#404040] font-extralight">
                {values.description}
              </article>
            </span>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
