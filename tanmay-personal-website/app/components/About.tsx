export default function About() {
  return (
    <div className="mt-36 mx-60" id="about">
      <div className="flex items-center">
        <p className="font-serif text-8xl font-extrabold text-shadow-lg text-yellow-300">
          About
        </p>
        <span className="text-6xl text-green-600 ml-4">{"{"}</span>
      </div>
      <div className="flex justify-between">
        <p className="font-['system-ui']  mt-4 ml-16 text-2xl leading-loose">
          Software developer with over 2 years of experience. <br />I love
          tinkering with tech!
        </p>
        <p className="font-['system-ui']  mt-4 text-2xl leading-loose">
          Passionate about technology and Physics since childhood.
          <br />I love learning by building and breaking stuff <br />
          rather than watching tutorials.
          <br />
          AI/Web3 enthusiast helping innovative startups <br /> get to Product
          Market Fit as soon as possible!
        </p>
      </div>
      <div className="ml-16">
        <span className="text-6xl text-green-600">{"}"}</span>
      </div>
    </div>
  );
}
