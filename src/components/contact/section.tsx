import React from "react";
import contactImage from "@/assets/contact/contact.png"
import Image from "next/image";
import { ArrowUpRightFromSquare } from "lucide-react";
import commas from "@/assets/contact/commas.svg"
import testimonial from "@/assets/contact/testimonial.png"

const testimonials = [
  {
    text: "Finally, a skincare brand that delivers real results! The glow toner is my favourite it refreshes my skin instantly and gives me that healthy, dewy look. Can’t live without it!",
    avatar: testimonial,
  },
  {
    text: "Finally, a skincare brand that delivers real results! The glow toner is my favourite it refreshes my skin instantly and gives me that healthy, dewy look. Can’t live without it!",
    avatar: testimonial,
  },
  {
    text: "Finally, a skincare brand that delivers real results! The glow toner is my favourite it refreshes my skin instantly and gives me that healthy, dewy look. Can’t live without it!",
    avatar: testimonial,
  },
];

function ContactSection() {
  return (
    <div className="min-h-screen bg-[#EFEAE6] p-6">
      <div className="flex flex-col md:flex-row gap-8 lg:px-20 mx-auto mt-6">

        <div className="relative w-full md:w-1/2 rounded-xl overflow-hidden">
          <Image
            src={contactImage}
            alt="Facial treatment"
            className="w-full object-cover"
          />
          <div className="absolute font-darker bottom-4 right-4 bg-white bg-opacity-[0.41] px-4 py-2 rounded-lg text-2xl">
            Subscribe to our <br />
            social networks to <br />
            learn more
            <ArrowUpRightFromSquare />
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-white rounded-xl p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-darker font-bold mb-6">How can we help you?</h2>
          <form className="flex flex-wrap gap-4">
            <input
                type="text"
                placeholder="Name"
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-700"
              />
              <input
                type="email"
                placeholder="Email"
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-700"
              />
            <textarea
              placeholder="Message"
              rows={14}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-green-700"
            />
            <button
              type="submit"
              className="w-full cursor-pointer bg-green-800 text-white rounded-full py-3 text-lg font-medium hover:bg-green-900 transition"
            >
              Send your message
            </button>
          </form>
        </div>
      </div>

      <div className="lg:px-20 mx-auto mt-8 lg:mt-16">
        <h3 className="text-4xl font-darker font-bold mb-8 text-gray-800">
          Let{"'"}s see what our customers think
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg pl-6 flex flex-col justify-between min-h-[180px]">
              <div className="mt-4">
                <Image src={commas} alt="Commas"/>
                <p className="text-gray-700 font-darker text-md lg:text-xl mt-2 pr-6">{t.text}</p>
              </div>
              <div className="flex items-center mt-4 ml-auto bg-[#EFEAE6] p-1 rounded-xl -mr-2">
                <Image
                  src={t.avatar}
                  alt="Customer avatar"
                  className="w-14 h-14 rounded-full border-2 border-white shadow"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
