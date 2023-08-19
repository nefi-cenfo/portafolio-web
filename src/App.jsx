import { useEffect, useRef } from "react";
import Contact from "./contact/Contact";
import Header from "./header/Header";
import MisionVision from "./mision-vision/MisionVision";
import Profile from "./profile/Profile";
import Projects from "./projects/Projects";
import Summary from "./summary/Summary";
import { Toaster } from "react-hot-toast";

export default function App() {
  const scrollBtnRef = useRef(null);

  const btnVisibility = () => {
    if (window.scrollY > 400) {
      scrollBtnRef.current.style.visibility = "visible";
    } else {
      scrollBtnRef.current.style.visibility = "hidden";
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      btnVisibility();
    })
  }, []);

  return (
    <>
      <Header />
      <div className="container mx-auto px-4">
        <Profile />
        <Summary />
        <MisionVision />
        <Projects />
      </div>
      <div className="w-full min-h-[900px] h-auto bg-[#fbfafb] border-t-8 border-secondary">
        <div className="container mx-auto px-4">
          <Contact />
        </div>
      </div>
      <div className="relative">
        <span ref={scrollBtnRef} onClick={scrollToTop} class="fixed bottom-[40px] right-[25px] z-20 btn bg-complementary border-2 rounded-full 
        border-white h-[50px] w-[50px] text-white text-[40px] flex flex-row justify-center items-center invisible transition-all cursor-pointer">^</span>
      </div>
      <Toaster />
    </>
  )
}