import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection"
import AnimatedTextLines from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
const About = () => {
  const imgRef = useRef(null);
  const aboutText = `Creating great web experiences is my primary focus. 
  I ensure each project leaves users with a feel-good sensation through meticulous attention to detail and user-centric design principles. 
  When I'm not immersed in web development and design, 
  you can find me drawing potraits, playing music, 
  or tending to my cherished cat.`
  const text = `I'm a Full Stack Web Developer with a passion for building web apps and solving problems.
   I'm excited to work with you to bring your ideas to life. 
   Let's create something great together!`;

  useGSAP(()=>{
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
      },
      ease: "power1.inOut",
    });
    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  },[])
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection 
      textColor={"text-white"} 
      subtitle={"Code with purpose, build to scale"} 
      title={"About"} 
      text={text} 
      withScrollTrigger={true}/>
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide
      lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img ref={imgRef} src="images/man.jpg" alt="man.jpg" className="w-md rounded-3xl" />
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  )
}

export default About