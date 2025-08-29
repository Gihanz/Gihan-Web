import React from "react";
import { Fade } from "react-awesome-reveal";

export default function Home() {
  return (
    <section className="flex flex-col items-center text-center px-4 md:px-8 pt-24 pb-16">

      {/* Name */}
      <Fade triggerOnce delay={100}>
        <h1 className="text-[3.25rem]">Gihan Shamike</h1>
      </Fade>

    </section>
  );
}
