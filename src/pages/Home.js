import React from "react";
import accounts from "../data/tiles.json";
import coverImg from "../assets/cover.jpg";

export default function Home() {

  return (
    <div className="max-w-screen-xl mx-auto px-6 pt-28">

        <div className="relative w-full h-72 rounded-xl overflow-hidden mb-10 shadow-lg">
        <img
          src={coverImg}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl font-bold text-white mb-2">Welcome</h1>
          <h2 className="text-xl text-gray-200 mb-3">Developer, Freelancer & Tech Enthusiast</h2>
          <p className="text-sm text-gray-300 max-w-xl">Software developer since 2012 and specialized in IBM BAW, IBM ECM / BPM, Filenet, IBM Case Manager.</p>
        </div>
      </div>

      {Object.entries(accounts).map(([category, items]) => (
        <div key={category} className="mb-12">
          {/* Category Heading */}
          <div className="flex items-center gap-4 mb-6">
          <h2 className="text-2xl text-gray-800 dark:text-gray-100 whitespace-nowrap">
            {category}
          </h2>
          <div className="flex-grow h-px bg-gray-300 dark:bg-gray-700"></div>
          </div>

          {/* Grid of Tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {items.map((item, index) => {
              // Gradient logic
              function buildGradient(colors) {
                if (!colors || colors.length === 0) {
                  return "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)";
                }

                const step = Math.floor(50 / colors.length);
                const stops = colors.map((c, i) => {
                  return `${c} ${i * step}%`;
                });
                stops.push("transparent 50%");

                return `linear-gradient(to top, ${stops.join(", ")})`;
              }

              const gradient = buildGradient(item.colors);

              let bgImage, logoImg;
              try {
                bgImage = require(`../assets/previews/${item.image}`);
              } catch {
                bgImage = null;
              }

              try {
                logoImg = require(`../assets/logos/${item.logo}`);
              } catch {
                logoImg = null;
              }

              return (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative h-60 rounded-xl overflow-hidden shadow-lg group"
                >
                  {/* Background Image */}
                  {bgImage && (
                    <div
                      className="absolute inset-0 w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url(${bgImage})` }}
                    ></div>
                  )}

                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: gradient,
                    }}
                  ></div>

                  {/* Content */}
                  <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                    <div className="flex items-center gap-2">
                      {logoImg && (
                        <img
                          src={logoImg}
                          alt={`${item.title} logo`}
                          className="w-6 h-6 object-contain"
                        />
                      )}
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-sm opacity-90">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-white/20 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
