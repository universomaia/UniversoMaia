import React, { useEffect } from "react";
import { gsap } from "gsap";

import "./Take04.scss";

const Take04 = () => {
  
  // Piscar alterando a opacidade
  
  useEffect(() => {



  
    // Mover 10px para a direita e depois 10px para a esquerda
    gsap.from("#faria", {
      duration: 3,
      x: -800,
      opacity: 0,
      scrollTrigger: {
        trigger: "#faria",
        start: "-30% center",
        end: "70% center",
        scrub: true,

        onUpdate: (self) => {
          console.log(self.progress);
        },
      },
      ease: "inOut",
    });
  }, []);

  return (
    <div className="take04">
      <h2 id="faria">
        O QUE VOCÊ FARIA SE VOCÊ PUDESSE SER <strong id="voce">VOCÊ?</strong>
      </h2>
    </div>
  );
};

export default Take04;
