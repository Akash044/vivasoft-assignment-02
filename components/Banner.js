import { Zen_Loop } from "next/font/google";
import React, { useEffect, useState } from "react";

const Banner = (props) => {
  const [sorted, setSorted] = useState(props.users);

  return (
    <>
      <div className="carousel py-5 px-5">
        {sorted
          ?.sort((a, b) => {
            return a.score - b.score;
          })
          .map((item) => {
            if (item.id <= 5) {
              return (
                <>
                  <div
                    id={`item${item.id}`}
                    key={item.id}
                    className="carousel-item w-1/2 px-5 "
                  >
                    <img
                      src={item.photo}
                      className="carousel-item w-screen h-96 rounded-md"
                    />
                  </div>
                </>
              );
            }
          })}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
        <a href="#item5" className="btn btn-xs">
          5
        </a>
      </div>
    </>
  );
};

export default Banner;
