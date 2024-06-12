import React from "react";
import Slider from "react-slick";
import Image from "next/image"; // Import the Image component from next/image
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="mt-36 mx-60" id="projects">
      <div className="flex items-center">
        <p className="font-serif text-8xl font-extrabold text-shadow-lg text-yellow-300">
          Projects
        </p>
        <span className="text-6xl text-green-600 ml-4">{"{"}</span>
      </div>
      <div className="ml-16 mt-12">
        <Slider {...settings}>
          <div className="flex flex-col items-center">
            <div className="w-full h-full">
              <Image
                src="/icons/onfinance.png"
                alt="OnFinance Project"
                width={800}
                height={400}
                className="w-full h-full mb-4"
              />
            </div>
            <p className="font-serif text-lg text-center mt-2 mb-0">
              Built the mobile app for OnFinance that garnered over 150k+
              Downloads on the Play Store!
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full h-full">
              <Image
                src="/icons/trap_dungeon2.webp"
                alt="Trap Dungeon2"
                width={800}
                height={400}
                className="w-full h-full mb-4"
              />
            </div>
            <p className="font-serif text-lg text-center mt-2 mb-0">
              Improved the user dynamics for Trap Dungeon 2 game garnering over
              5 million installs!
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full h-full">
              <Image
                src="/icons/pdf_gpt.png"
                alt="PDF GPT"
                width={800}
                height={400}
                className="w-full h-full mb-4"
              />
            </div>
            <p className="font-serif text-lg text-center mt-2 mb-0">
              Built the MVP of PDF GPT, an application that takes in your
              documents and automatically summarizes them for you!
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full h-full">
              <Image
                src="/icons/nhl_uais.png"
                alt="NHL UAIS"
                width={800}
                height={400}
                className="w-full h-full mb-4"
              />
            </div>
            <p className="font-serif text-lg text-center mt-2 mb-0">
              Fine-tuned a RoBERTa model on Canadian Hockey slang, making it
              able to judge the sentiment of hockey fans in real time!
            </p>
          </div>
        </Slider>
        <span className="text-6xl text-green-600">{"}"}</span>
      </div>
    </div>
  );
}
