import React, { useState, useEffect } from "react";
import "./carousel.css";

const Carousel = ({ children }: any) => {
  const [counter, setCounter] = useState(1);
  const [pause, setPause] = useState(false);
  const content = children;

  const handleNext = () => {
    if (counter !== content.length) {
      setCounter(counter + 1);
    } else {
      setCounter(1);
    }
  };

  const handlePre = () => {
    if (counter !== 1) {
      setCounter(counter - 1);
    } else {
      setCounter(content.length);
    }
  };

  const handlePage = (page: React.SetStateAction<number>) => {
    setCounter(page);
  };

  const handleMouse = () => {
    setPause(!pause);
  };

  useEffect(() => {
    let interval = setInterval(() => {
      if (!pause) {
        handleNext();
      } else {
        clearInterval(interval);
      }
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <div
        className="carousel-slide"
        onMouseEnter={handleMouse}
        onMouseLeave={handleMouse}
      >
        {content.map(
          (
            item:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | React.PromiseLikeOfReactNode
              | null
              | undefined,
            index: React.Key | null | undefined
          ) => (
            <div
              className={
                counter - 1 === index ? "carousel-show" : "carousel-not-show"
              }
              key={index}
            >
              {item}
            </div>
          )
        )}

        {/* <button className="prev" onClick={handlePre}>
          &#10094;
        </button>
        <button className="next" onClick={handleNext}>
          &#10095;
        </button> */}
      </div>

      {/* <div className="page">
        {content.map((item: any, index: any) => (
          <span
            key={index}
            className={counter - 1 === index ? "dot active" : "dot"}
            onClick={() => handlePage(index + 1)}
          />
        ))}
      </div> */}
    </>
  );
};

export default Carousel;
