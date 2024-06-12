import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";

export default function Introduction() {
  const [text] = useTypewriter({
    words: ["Full Stack Developer", "AI/Web3 Enthusiast", "Software Engineer"],
    loop: 0, // Number of times to loop through the words array, 0 means infinite
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <div className="mt-40 ml-60 flex items-center">
      <div className="flex-1">
        <p className="font-serif text-9xl font-extrabold text-shadow-lg text-yellow-300">
          {" "}
          Tanmay{" "}
        </p>
        <p className="mt-5 mb-3 text-5xl text-green-500">
          {text}
          <Cursor cursorStyle="|" />
        </p>
        <p className="font-serif text-xl">
          {" "}
          Hey, I am Tanmay Munjal, a full-stack developer with over 2 years of
          experience helping
          <br></br>early-stage startups build out their MVPs and reach product
          market fit.
          <br></br>Expert at shipping code at extreme speeds with good code
          quality!
        </p>
        <br />
        <a
          className="bg-yellow-300 text-black font-bold py-4 px-8 rounded-lg text-3xl mt-4 hover:bg-black hover:text-yellow-300 inline-block text-center mr-12"
          href="#contact"
        >
          Contact Me
        </a>
        <a
          className="bg-yellow-300 text-black font-bold py-4 px-8 rounded-lg text-3xl mt-4 hover:bg-black hover:text-yellow-300 inline-block text-center"
          href="#about"
        >
          Learn More
        </a>
      </div>
      <div className="flex-1">
        <Image
          src="/photo.jpeg"
          alt="My Photo"
          className="rounded-full object-cover"
          width={384}
          height={384}
        />
      </div>
    </div>
  );
}
