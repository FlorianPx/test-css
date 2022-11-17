import React from "react";

import browser from "../assets/images/browser.png";
import { Ellipsis } from "./utils/svgs";

export default function ThirdCard({ color }) {
  return (
    <div className="w-[80%] md:w-[30%] rounded-[10px] shadow-defaultBowShadow bg-whitesmoke mt-8">
      <div className="flex flex-col items-start space-y-4 p-8">
        <div className="w-full flex flex row justify-between items-center">
          <img
            alt="Logo d'un page internet"
            src={browser}
            className="w-12 h-12"
          />
          <div className="w-8 h-8">{Ellipsis()}</div>
        </div>
        <div
          className="rounded-[10px] px-4 py-1"
          style={{ background: `${color}` }}
        >
          <span className="text-black">Habilitado</span>
        </div>
        <h3 className="font-semibold">
          Cras rutrum placerat felis, eget tempor ex auctor quis.
        </h3>
        <p>
          Maecenas sed bibendum diam. Maecenas iaculis orci quis est rhoncus
          feugiat.
        </p>
      </div>

      <p className="w-full text-center text-small pb-4">
        Card 3 - Made with Tailwindcss
      </p>
    </div>
  );
}
