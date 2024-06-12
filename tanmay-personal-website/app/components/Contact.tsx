export default function Contact() {
  const handleEmailSubmit = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    const email = "tanmaymunjal64@gmail.com"; // Change this to your email address

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\n\nMessage: ${message}`)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="mt-36 mx-60" id="contact">
      <div className="flex items-center">
        <p className="font-serif text-8xl font-extrabold text-shadow-lg text-yellow-300">
          Contact
        </p>
        <span className="text-6xl text-green-600 ml-4">{"{"}</span>
      </div>
      <div className="flex mt-10 ml-16 items-start">
        <div className="w-1/2 text-white">
          <div className="flex flex-col">
            <p className="text-4xl font-bold text-green-600">
              Have a project in mind?
            </p>
            <p className="text-xl mt-2 text-white">
              My inbox is always open for new opportunities.
            </p>
          </div>
          <div className="mt-6">
            <div className="flex items-center mt-4">
              <a
                href="https://github.com/tanmaymunjal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <img
                  src="./icons/github.webp"
                  alt="GitHub"
                  className="w-8 h-8"
                />
                <p className="ml-4 text-2xl">tanmaymunjal</p>
              </a>
            </div>
            <div className="flex items-center mt-4">
              <a
                href="mailto:tanmaymunjal64@gmail.com"
                className="flex items-center"
              >
                <img src="./icons/gmail.webp" alt="Email" className="w-8 h-8" />
                <p className="ml-4 text-2xl">tanmaymunjal64@gmail.com</p>
              </a>
            </div>
            <div className="flex items-center mt-4">
              <a
                href="https://www.linkedin.com/in/tanmaymunjal/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <img
                  src="./icons/linkedin.webp"
                  alt="LinkedIn"
                  className="w-8 h-8"
                />
                <p className="ml-4 text-2xl">Tanmay Munjal</p>
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <form className="space-y-6 bg-black p-8 rounded-md">
            <div className="flex flex-col space-y-2">
              <label htmlFor="name" className="text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="px-4 py-2 text-white bg-black border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="subject" className="text-white">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="px-4 py-2 text-white bg-black border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="message" className="text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="px-4 py-2 text-white bg-black border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
              ></textarea>
            </div>
            <button
              onClick={handleEmailSubmit}
              className="px-6 py-2 text-lg font-bold text-black bg-yellow-300 rounded-md hover:bg-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="ml-16">
        <span className="text-6xl text-green-600">{"}"}</span>
      </div>
    </div>
  );
}
