import { findAllByTestId } from "@testing-library/react";
import React, { useEffect } from "react";
import { useState } from "react";

const VideoPopUp = () => {
  const [isShown, setIsShown] = useState(false);

  const showVideo = () => {
    setIsShown(true);
  };

  useEffect(() => {
    showVideo();
  }, []);

  return (
    <div
      style={{ display: !isShown && "none" }}
      className={`fixed z-10 bg-[#00000077] top-0 bottom-0 left-0 right-0 flex justify-center items-center text-center flex-wrap ${
        isShown ? "fade-in" : "fade-out"
      }`}
    >
      <div className="w-[90%] min-h-[200px] max-w-[700px] bg-[white] rounded-md">
        {isShown && (
          <iframe
            className="w-[100%]"
            height="315"
            src="https://www.youtube.com/embed/kquy-AFkCH0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        )}
      </div>

      <div
        onClick={(e) => setIsShown(false)}
        className="basis-[100%] text-center"
      >
        <p className="text-lg text-[white] font-semibold px-[17px] py-2 w-min border-[2px] border-[white] rounded-full m-[auto] hover:bg-[white] hover:text-[black] transition duration-300 ease-in-out">
          {" "}
          x{" "}
        </p>
      </div>
    </div>
  );
};

export default VideoPopUp;
