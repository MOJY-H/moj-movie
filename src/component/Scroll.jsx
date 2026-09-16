import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

function ScrollToTopBtn() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  function handleScroll() {
    setShowScrollBtn(window.scrollY > 500);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={showScrollBtn ? "flex left-[57%] bottom-10 bg-gray-900/40 backdrop-blur-md shadow-sm shadow-black rounded-full fixed p-2 z-10 cursor-pointer" : "hidden"}
      onClick={() => scrollToTop()}
    >
        <ArrowUp fill="white" color="white" />
    </button>
  );
}

export default ScrollToTopBtn;