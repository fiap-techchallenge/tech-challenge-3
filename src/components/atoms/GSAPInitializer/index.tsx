"use client";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { CSSPlugin } from "gsap/CSSPlugin";

const GSAPInitializer = () => {
  gsap.registerPlugin(ScrollTrigger, CSSPlugin, ScrollToPlugin);

  ScrollTrigger.defaults({
    scroller: "main",
  });

  return null;
};

export default GSAPInitializer;
