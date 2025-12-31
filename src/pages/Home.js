import React from "react";
import accounts from "../data/tiles.json";
import coverImg from "../assets/cover.jpg";
import profileImg from "../assets/profile.png";

export default function Home() {

  return (
    <div className="max-w-screen-xl mx-auto px-6 pt-16">

      {/* Cover + Profile Wrapper */}
      <div className="relative mb-28">

        {/* Cover Section */}
        <div className="relative w-full h-72 sm:h-96 rounded-xl overflow-hidden shadow-lg">
          <img
            src={coverImg}
            alt="Cover"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        </div>

        {/* Profile Row */}
        <div className="absolute left-6 sm:left-10 bottom-0 translate-y-[50%] z-20 flex items-center gap-5">
          
          {/* Profile Image */}
          <img
            src={profileImg}
            alt="Profile"
            className="w-[10rem] h-[10rem] sm:w-44 sm:h-44 rounded-full border-4 border-white dark:border-gray-900 shadow-xl object-cover bg-white"
          />

          {/* Name + subtitle */}
          <div className="mt-[7rem] md:mt-20">
            <h1 className="text-xl sm:text-3xl font-bold text-black dark:text-white">
              Gihan Shamike Liyanage
            </h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              Developer · Freelancer · Tech Enthusiast
            </p>
          </div>
        </div>

      </div>

      {Object.entries(accounts).map(([category, items]) => (
        <div key={category} className="mb-12">
          {/* Category Heading */}
          <div className="flex items-center gap-4 mb-6">
          <h2 className="text-base sm:text-2xl text-gray-800 dark:text-gray-100 whitespace-nowrap">
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
