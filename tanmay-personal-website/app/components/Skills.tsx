export default function Skills() {
  return (
    <div className="mt-36 mx-60 mb-20" id="skills">
      <div className="flex items-center">
        <p className="font-serif text-8xl font-extrabold text-shadow-lg text-yellow-300">
          Skills
        </p>
        <span className="text-6xl text-green-600 ml-4">{"{"}</span>
      </div>
      <div className="flex justify-between">
        <p className="font-['system-ui'] mt-4 ml-16 text-2xl leading-loose">
          I excel in breaking down complex systems into smaller chunks, <br />{" "}
          converting product requirements to technical plans, and <br />{" "}
          designing scalable, distributed systems for startups <br />
          that need to scale from day 1.
        </p>
        <div className="flex flex-col justify-center ml-16">
          <div className="grid grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="flex items-center">
                <img
                  src="./icons/ts.svg"
                  alt="TypeScript"
                  className="w-8 h-8 mr-4 transition-transform transform hover:scale-150"
                />
                <span>TypeScript</span>
              </div>
              <div className="flex items-center">
                <img
                  src="./icons/js.svg"
                  alt="JavaScript"
                  className="w-8 h-8 mr-4 transition-transform transform hover:scale-150"
                />
                <span>JavaScript</span>
              </div>
              <div className="flex items-center">
                <img
                  src="./icons/python.svg"
                  alt="Python"
                  className="w-8 h-8 mr-4 transition-transform transform hover:scale-150"
                />
                <span>Python</span>
              </div>
              <div className="flex items-center">
                <img
                  src="./icons/rust.svg"
                  alt="Rust"
                  className="w-8 h-8 mr-4 transition-transform transform hover:scale-150"
                />
                <span>Rust</span>
              </div>
              <div className="flex items-center">
                <img
                  src="./icons/c.svg"
                  alt="C"
                  className="w-8 h-8 mr-4 transition-transform transform hover:scale-150"
                />
                <span>C</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-600"></div>
              <div className="space-y-6 ml-10">
                <div className="flex items-center">
                  <img
                    src="./icons/html.svg"
                    alt="HTML"
                    className="w-8 h-8 mr-4 transition-transform transform hover:scale-150"
                  />
                  <span>HTML</span>
                </div>
                <div className="flex items-center">
                  <img
                    src="./icons/vue.svg"
                    alt="Vue.js"
                    className="w-8 h-8 mr-4 transition-transform transform hover:scale-150"
                  />
                  <span>Vue.js</span>
                </div>
                <div className="flex items-center">
                  <img
                    src="./icons/react.svg"
                    alt="React"
                    className="w-8 h-8 mr-4 transition-transform transform hover:scale-150"
                  />
                  <span>React</span>
                </div>
                <div className="flex items-center">
                  <img
                    src="./icons/node.svg"
                    alt="Node.js"
                    className="w-8 h-8 mr-4 transition-transform transform hover:scale-150"
                  />
                  <span>Node.js</span>
                </div>
                <div className="flex items-center">
                  <img
                    src="./icons/tailwind.svg"
                    alt="Tailwind"
                    className="w-8 h-8 mr-4 transition-transform transform hover:scale-150"
                  />
                  <span>Tailwind</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-16 mt-10">
        <span className="text-6xl text-green-600">{"}"}</span>
      </div>
    </div>
  );
}
