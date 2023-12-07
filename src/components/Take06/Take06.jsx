import React, { useEffect } from "react";
import gsap from "gsap";

import "./Take06.scss"
const Take06 = () => {
  useEffect(()=>{

    gsap.fromTo("#acolha", 
    {  x: 800,
      opacity: 0,},{
        x:0,
        opacity: 1,
      scrollTrigger: {
        trigger: "#acolha",
        start: "-70% center",
        end: "70% center",
        scrub: true,

      },
  });
  gsap.fromTo("#questione", {
    x: -800,
    opacity: 0,
    },{
      x:0,
      opacity:1,
    scrollTrigger: {
      trigger: "#questione",
      start: "-70% center",
      end: "70% center",
      scrub: true,

    },
  });
  gsap.fromTo("#cocrie", {
    x: 800,
    opacity: 0,

  },
  {
    x:0,
    opacity:1,
    scrollTrigger: {
      trigger: "#cocrie",
      start: "-70% center",
      end: "70% center",
      scrub: true,

    },
});
  },[])

  return (
    <div className="take06" data-scroll-container>
      <div data-scroll-section>
      <h2>Mergulhe com a gente nesse conhecimento</h2>
      </div>
    </div>
  );
};

export default Take06;
