import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection"
import { servicesData } from "../constants"
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const Services = () => {
    const text = `I build secure, high performance web apps 
    with smooth UX to drive growth.`;
    const serviceRef = useRef([]);
    const isDesktop = useMediaQuery({ minWidth: "48rem" });
    useGSAP(() => {
      serviceRef.current.forEach((el) => {
        if(!el) return;
        gsap.from(el, {
          y:200,
          scrollTrigger: {
            trigger: el,
            start: "top 80%"
          },
          duration: 1,
          ease: "circ.out",
        })
      })
    },[])
  return (
    <section id="services" className="min-h-screen bg-black rounded-t-4xl">
        <AnimatedHeaderSection subtitle={"Behind the scene, Beyond the screen"} title={"Services"} text={text} textColor={"text-white"}  withScrollTrigger={true}/>
        {servicesData.map((service, index) =>(
          <div ref={(el) => (serviceRef.current[index] = el)}
          key={index}
          className="sticky px-10 pb-12 text-white bg-black border-t-2 border-white/30"
          style={
            isDesktop
            ? {
              top: `calc(10vh + ${index * 5}em)`,
              marginBottom: `${(servicesData.length - index - 1) * 6}rem`,
            }
            :{
              top:0
            }
          }
          >
            <div className="flex items-center justify-between gap-4 font-light">
              <div className="flex flex-col gap-6">
                <h2 className="mt-4 font-[400] text-4xl lg:text-5xl">{service.title}</h2>
                <p className="text-xl leading-relaxed tracking-widest lg:text-2xl text-pretty text-white/60">{service.description}</p>
                <div className="flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80">
                  {service.items.map((item, itemIndex) => (
                    <div key={`item-${index}-${itemIndex}`}>
                      <h3 className="flex font-medium">
                        <span className="mr-12 text-lg text-white/30">0{itemIndex + 1}</span>
                        {item.title}
                      </h3>
                      {itemIndex < service.items.length - 1 && (
                        <div className="w-full h-px bg-white/30"/>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
    </section>
  )
}

export default Services