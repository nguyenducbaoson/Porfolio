import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const rydeRef = useRef<HTMLDivElement | null>(null);
  const libraryRef = useRef<HTMLDivElement | null>(null);
  const ycDirectoryRef = useRef<HTMLDivElement | null>(null);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [selectedImage]);

  useGSAP(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5 }
      );
    }

    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.3 * (index + 1),
            scrollTrigger: {
              trigger: card,
              start: 'top bottom-=100',
            },
          }
        );
      }
    });
  }, []);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div id="about" ref={sectionRef} className="app-showcase relative">
      <div className="w-full h-full md:px-10 px-5">
        <div className="mb-16">
          <TitleHeader
            title="Beyond the Code"
            sub="🤝 Explore my Interests and Hobbies beyond the digital realm"
          />
        </div>
        <div className="w-full">
          <div className="showcaselayout">
            <div ref={rydeRef} className="first-project-wrapper">
              <div className="image-wrapper">
                <img
                  src="/images/DSCF9159.JPG"
                  alt="Ryde App Interface"
                  className="cursor-pointer"
                  onClick={() => handleImageClick("/images/DSCF9159.JPG")}
                />
              </div>
            </div>

            <div className="project-list-wrapper overflow-hidden">
              <div className="project" ref={libraryRef}>
                <div className="second-project-wrapper">
                  <div className="image-wrapper">
                    <img
                      src="/images/DSCF9163.JPG"
                      alt="Library App"
                      className="cursor-pointer"
                      onClick={() => handleImageClick("/images/DSCF9195.JPG")}
                    />
                  </div>
                </div>
              </div>

              <div className="project" ref={libraryRef}>
                <div className="second-project-wrapper">
                  <div className="image-wrapper">
                    <img
                      src="/images/DSCF9137.JPG"
                      alt="Library App"
                      className="cursor-pointer"
                      onClick={() => handleImageClick("/images/DSCF9137.JPG")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.img
              src={selectedImage}
              alt="Full Image"
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;
