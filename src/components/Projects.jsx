import React from "react";

import ShopMart from "@/projects/ShopMart";
import NexusUMS from "@/projects/NexusUMS";

function Projects() {
  return (
    <section className="mt-20 md:mt-28">
      <h1 className="font-bold text-5xl md:text-6xl my-1.5">Projects</h1>

      <NexusUMS />
      <ShopMart />
    </section>
  );
}

export default Projects;
