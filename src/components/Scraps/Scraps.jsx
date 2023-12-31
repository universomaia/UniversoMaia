import React, { useEffect, useRef } from "react";
import "./Scraps.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Scraps = () => {
  const comentarios = [
    {
      comentario:
        "Resolvi compartilhar com vocês porque comer os cugus foi uma virada de chave para mim. Me reanimei, voltei para academia, quero me conectar mais comigo e com a natureza. Com certeza vou comprar mais para ir fazendo experiências, também como microdosagens. Qualidade excepcional, comemos na aldeia hippie e foi a coisa mais gostosa que eu senti em anos.",
    },
    {
      comentario:
        "Que experiência incrível! Eu não sei explicar o quanto estou agradecido. Bateu muito bem comigo, sabe? Eu amei.",
    },
    {
      comentario:
        "Oi Cogu, tudo bem? Já quero mais uma experiência. Pow esqueci de dar o feedback antes, mas adorei a experiência e gostei mais ainda do cuidado de vocês mandarem um docinho para a gente.",
    },
    {
      comentario:
        "Salve irmão, bom dia. Foi interessante para caramba, não estava esperando. No primeiro dia, comi menos de 2g, e comecei a sentir a brisa. Por incrível que pareça, no dia seguinte foi quando eu senti mais, sábado também, bem leve. No domingo comi 3g. Senti bem mais suave, foi o Albino. Foi muito interessante, vamos preparar para uma segunda experiência em breve. O Kit Kat foi massa.",
    },
    {
      comentario:
        "Achei que duas gramas seria só uma questão sensorial, até porque uma amiga já experimentou e não sentiu nada, mas comigo foi uma explosão de sentimentos. Conseguia sentir tudo, tive visões, chorei bastante. Tive a experiência no meu quarto, que é um ambiente seguro, e a sensação foi de estar em um quarto de vidro ou um véu fino enquanto coisas eram mostradas para mim. Enfim, uma experiência que não se compara a nada que já passei. Gratidão.",
    },
    {
      comentario:
        "Meu brother, o que que é isso? Ontem foi lindo demais. Eu comi um pouco mais de uma grama aos poucos e a sensação foi ótima. Obrigada pela dedicação, sua produção tá com uma energia incrível.",
    },
    {
      comentario:
        "Boa tarde, mano. Adorei a experiência, o efeito é muito legal. Não é nada tão pesado, ajuda a se conectar com o seu interior, mexe bastante nos pensamentos, dá uma sinestesia do c****** e é muito agradável a onda. Fiquei muito leve.",
    },
    {
      comentario:
        "Amigo, muito obrigada, extremamente diferenciado. Extra seco, foi uma onda limpíssima. Parabéns pelos cuidados.",
    },
  ];
  const scrapsContainerRef = useRef(null);
useEffect(() => {
  // ... restante do código ...

  gsap.utils.toArray('.scrapsSlide').forEach((slide, i) => {
    gsap.fromTo(slide, 
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: slide,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
        ease: "power1.inOut",
        duration: 2,
        delay: i * 0.7, // Adiciona um delay entre cada animação
      }
    );
  });
}, []);
//   useEffect(() => {
//     const element = scrapsContainerRef.current;

//     if (element) {
//         const width = element.offsetWidth - window.innerWidth;
//       gsap.fromTo(
//         element,
//         { x: 0 },
//         {
//           x: -width,
//           scrollTrigger: {
//             trigger: "#scrapsContainer",
//             ease:"power4.inOut",
//             scrub: true,
//             pin: "scrapsContainer",
//             pinSpacing: true,
//             start: "top center",
//             end:"bottom center"
//           },
//         }
//       );
//     }
//   }, []);

  return (
    <div id="scraps">
      <div ref={scrapsContainerRef} id="scrapsContainer">
        {comentarios.map((item, i) => (
          <div key={i} className="scrapsSlide">
            <div className="headerAspas">
              <span className="aspas">"</span>
            </div>
            <div id={"containerMsg" + i} className="comentario">
              <p id={"msg" + i}>{item.comentario}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scraps;
