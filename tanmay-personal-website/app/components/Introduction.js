import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function Introduction() {

    const [text] = useTypewriter({
        words: ['Full Stack Developer', 'AI/Web3 Enthusiast', 'Software Engineer'],
        loop: 0, // Number of times to loop through the words array, 0 means infinite
        typeSpeed: 70,
        deleteSpeed: 50,
        delaySpeed: 1000,
    });

    return (
        <div className="mt-40 ml-60 flex items-center">
            <div className="flex-1">
                <p className="font-serif text-9xl font-extrabold text-shadow-lg text-yellow-300"> Tanmay </p>
                <p className="mt-5 mb-3 text-5xl text-green-500">
                    {text}
                    <Cursor cursorStyle="|" />
                </p>     
                <p> lopsum ipsum </p>
                <br></br>
                <button className="bg-yellow-300 text-black font-bold py-4 px-8 rounded-lg text-2xl mt-4 mr-10 hover:bg-black hover:text-yellow-300">Contact Me</button>
                <button className="bg-yellow-300 text-black font-bold py-4 px-8 rounded-lg text-2xl mt-4 hover:bg-black hover:text-yellow-300">Learn More</button>
            </div>
            <div className="flex-1">
                <img src="./photo.jpeg" alt="My Photo" className="rounded-full w-96 h-96 object-cover" />
            </div>
        </div>
    );
}
