import React, { useState } from "react";
import {
  UilFacebookF,
  UilInstagramAlt,
  UilTrademarkCircle,
  UilEnvelope,
  UilInstagram,
  UilTelegramAlt,
} from "@iconscout/react-unicons";
import Education from "./Education";
import { TickerTape } from "react-ts-tradingview-widgets";
import NewComponent from "../chart/NewComponent";

function Header() {
  const [education, setEducation] = useState(true);
  const handleEducationClick = () => {
    setEducation(true);
  };

  return (
    <div>
      <div>
        <TickerTape colorTheme="dark" />
      </div>
      <div className="flex flex-col justify-center items-center p-3 w-screen h-fit  sm:flex-row sm:justify-center sm:items-center  ">
        <div className="w-2/6 p-3 sm:p-3 flex flex-col sm:flex-col items-center justify-center">
          <button className="text-red-400 text-xl sm:text-3xl xl:text-6xl md:text-3xl">
            Elio
          </button>
          <p className="w-full font-light text-xs text-center xl:text-xl md:text-lg">
            World Wide Professor
          </p>
        </div>

        <div className="flex flex-col sm:flex-row md:gap-6  sm:space-x-3 sm:justify-between sm:w-full justify-center items-center gap-3">
          <button
            onClick={handleEducationClick}
            className="hover:text-red-600 xl:text-3xl md:text-2xl sm:text-md hover:font-bold hover:scale-125 transition ease-in-out px-1 text-xs font-light sm:font-light"
          >
            Education
          </button>
          <button className="hover:text-red-600  xl:text-3xl md:text-2xl sm:text-md hover:font-bold hover:scale-125 transition ease-in-out px-1 text-xs font-light  sm:font-light">
            Broker
          </button>
          <button className="hover:text-red-600   xl:text-3xl md:text-2xl sm:text-md hover:font-bold hover:scale-125 transition ease-in-out px-1 text-xs   sm:font-bold">
            Home
          </button>
          <button className="hover:text-red-600 xl:text-3xl md:text-2xl sm:text-md hover:font-bold hover:scale-125 transition ease-in-out px-1 text-xs font-light  sm:font-light">
            Community
          </button>
          <button className="hover:text-red-600 xl:text-3xl md:text-2xl sm:text-md hover:font-bold hover:scale-125 transition ease-in-out px-1  text-xs font-light  sm:font-light">
            Login
          </button>
        </div>

        <div className="flex w-2/6 flex-col sm:items-center sm:flex-row justify-center items-center xl:gap-3">
          <a
            href="https://www.facebook.com/tradewithElio/"
            className="flex items-center"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              <UilFacebookF
                size="40"
                className="hover:text-red-600 hover:scale-150  transition ease-in-out px-1 xl:h-10 xl:w-10"
                href="https://iconscout.com/unicons"
              />
            </button>
          </a>

          <a
            href="https://www.instagram.com/hey.elio/"
            className="flex items-center"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              <UilInstagram
                size="40"
                className="hover:text-red-600 hover:scale-150  transition ease-in-out px-1 xl:h-10 xl:w-10"
                href="https://iconscout.com/unicons"
              />
            </button>
          </a>

          <a
            href="https://vn.tradingview.com/u/Elio_Le_111199/"
            className="flex items-center"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              <UilTrademarkCircle
                size="40"
                className="hover:text-red-600 hover:scale-150  transition ease-in-out px-1 xl:h-10 xl:w-10"
                href="https://iconscout.com/unicons"
              />
            </button>
          </a>

          <a
            href="https://t.me/ElioLe2222"
            className="flex items-center"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              <UilTelegramAlt
                size="40"
                className="hover:text-red-600 hover:scale-150 md:h-30  transition ease-in-out px-1 xl:h-10 xl:w-10"
                href="https://iconscout.com/unicons"
              />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
