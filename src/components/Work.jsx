import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

function Work() {
  const [image, setImages] = useState([
    {
      url: "https://i.pinimg.com/564x/f3/f4/e7/f3f4e705735b1a35ac488f78a9ef0d47.jpg",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://i.pinimg.com/564x/3b/af/50/3baf50089a9c8909121702ab6551cb8e.jpg",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://i.pinimg.com/564x/fb/26/ff/fb26ff154c4cc0763baede9d48d172af.jpg",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://i.pinimg.com/564x/6a/e0/75/6ae07585d85dd08be9267a0229d1e749.jpg",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://i.pinimg.com/564x/b4/74/3a/b4743a4133d4620e266c4be9e0ce0b34.jpg",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://i.pinimg.com/564x/5a/13/6e/5a136e37fb15c735f795a5df4a87fdcb.jpg",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    console.log(data);
    function imagesShow(arr) {
      setImages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }
    switch (Math.floor(data * 100)) {
      case 0:
        imagesShow([]);
        break;
      case 1:
        imagesShow([0]);
        break;
      case 2:
        imagesShow([0, 1]);
        break;
      case 3:
        imagesShow([0, 1, 2]);
        break;
      case 4:
        imagesShow([0, 1, 2, 3]);
        break;
      case 5:
        imagesShow([0, 1, 2, 3, 4]);
        break;
      case 6:
        imagesShow([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="w-full mt-18  ">
      <div className="relative max-w-screen-xl mx-auto text-center ">
        <h1 className=" text-[30vw] leading-none font-medium select-none tracking-tight">
          work
        </h1>
        <div className="absolute top-0 w-full h-full ">
          {image.map((elem, index) => {
            return (
              <>
                {elem.isActive && (
                  <img
                    key={index}
                    className="absolute w-52 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                    src={elem.url}
                    style={{ top: elem.top, left: elem.left }}
                    alt=""
                  />
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Work;
