"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Slide {
  imageSrc: string;
  title: string;
  subTitle: string;
}

interface ImageSliderProps {
  sliders: Slide[];
  duration: number;
}

export const ImageSlider = ({ sliders, duration }: ImageSliderProps) => {
  const [index, setIndex] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout>(null);

  const handleNextSlide = () => {
    const nextIndex = index + 1 === sliders.length ? 0 : index + 1;
    setIndex(nextIndex);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      handleNextSlide();
    }, duration);
    // clean if component unmount
    return () => clearInterval(timerRef.current);
  }, [index]);

  const nextImageIndex = index + 1 === sliders.length ? 0 : index + 1;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={index}
          className=" absolute inset-0"
          initial={{ clipPath: "inset(50% 0 50% 0)" }}
          animate={{
            clipPath: "inset(0 0 0 0)",
            transition: { duration: 2, ease: [0.39, 0.24, 0.3, 1] },
          }}
          exit={{
            clipPath: "inset(50% 0 50% 0)",
            transition: { delay: 2 },
          }}
        >
          <Image
            src={sliders[index].imageSrc}
            fill
            alt={sliders[index].title}
            className="object-cover object-bottom-left"
            unoptimized
          />
        </motion.div>
        {/* title and subtitle here */}
        <div className=" absolute inset-0 flex flex-start z-10 ml-[25px] md:ml-[135px] mr-[48px] top-[240px] md:top-[350px]">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.3, ease: "easeIn" },
            }}
            exit={{ opacity: 0, y: 30 }}
          >
            <h2 className=" font-normal text-sm md:text-[16px] text-[#F9F4EE] mb-[15px] md:mb-6 leading-[130%]">
              {sliders[index].title}
            </h2>
            <p className="font-normal text-[46px] md:text-[64px] text-[#EEF4F9] whitespace-break-spaces leading-none">
              {sliders[index].subTitle}
            </p>
          </motion.div>
        </div>
      </AnimatePresence>
      <div className="absolute bottom-[65px] left-[25px] md:left-[135px] text-2xl text-white z-20 h-[120px] flex items-center justify-between">
        <div
          className="h-[115px] w-[115px] border border-[#F9F4EE4D] flex items-center justify-center"
          onClick={handleNextSlide}
        >
          <div className="relative w-full h-full">
            <AnimatePresence mode="sync">
              <motion.div
                key={index}
                className="absolute w-[77.5px] h-[77.5px] top-1/2 left-1/2 -translate-1/2"
                initial={{ clipPath: "inset(50% 0 50% 0)" }} // take 50% from top and 50% from bottom
                animate={{
                  clipPath: "inset(0 0 0 0)", // full size
                  transition: { duration: 1, ease: [0.39, 0.24, 0.3, 1] },
                }}
                exit={{
                  clipPath: "inset(50% 0 50% 0)",
                  transition: { delay: 1 },
                }}
              >
                <Image
                  src={sliders[nextImageIndex].imageSrc}
                  fill
                  alt={sliders[nextImageIndex].title}
                />
              </motion.div>
            </AnimatePresence>
            <div className=" z-30 absolute top-1/2 left-1/2 -translate-1/2 text-sm leading-[110%] font-extralight">
              NEXT
            </div>
            <motion.svg
              key={index}
              className={"absolute inset-0 w-full h-full"}
              viewBox={"0 0 115 115"}
            >
              <motion.rect
                x="0"
                y="0"
                width={"115"}
                height={"115"}
                fill={"none"}
                stroke={"white"}
                strokeWidth={"8"}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: duration / 1000, ease: "linear" }}
              />
            </motion.svg>
          </div>
        </div>
        <div className="flex items-center ml-[33px] text-[16px] w-[174px]">
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: "easeIn" },
              }}
              exit={{ opacity: 0, y: -30, transition: { duration: 0.8 } }}
            >
              {index + 1}
            </motion.span>
          </AnimatePresence>
          <div className="h-[0.7px] w-[103px] bg-[#EEF4F9] mx-[17px]" />
          <span>{sliders.length}</span>
        </div>
      </div>
    </div>
  );
};
