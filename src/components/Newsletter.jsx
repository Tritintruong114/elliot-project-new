import React from "react";
import ChartComponent from "../chart/ChartComponent";
import NewComponent from "../chart/NewComponent";

function Newsletter() {
  const handleClick = () => {
    console.log("ABC");
  };
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="flex items-center flex-col justify-center pb-6 ">
        <h1 className="font-bold text-lg sm:text-3xl md:text-6xl xl:text-8xl text-red-600 text-center">
          Premium Research
        </h1>
        <h1 className="font-bold text-lg sm:text-3xl md:text-6xl xl:text-8xl text-red-600 text-center">
          Delivered to You
        </h1>
        <p className="flex text-xs sm:text-xl md:text-3xl xl:text-6xl xl:py-6 sm:w-full text-gray-700 text-center px-3 py-3">
          Your time is valuable, so im here to do most the{" "}
          <p className="font-bold xl:px-6 md:px-3 sm:px-1 text-red-600">work</p>{" "}
          for you.
        </p>
      </div>

      <div className="w-full flex-col h-1/4 sm:w-3/4 md:w-full xl:w-full flex px-3 ">
        {/* <img
          src="https://www.tohaitrieu.net/wp-content/uploads/2018/09/stop-loss.jpg"
          alt=""
          className="rounded xl:w-5/6 md:w-4/6"
        ></img> */}

        <div className="py-3  gap-3 px-3 h-full  flex   justify-between items-center">
          <div className="flex flex-col  bg-slate-900 rounded-xl  w-2/6 justify-center items-center">
            <h1 className="font-bold cursor-pointer text-white flex justify-center items-center flex-col">
              👑 GOLD 22/3/23 sideway <br />
              <span
                onClick={handleClick}
                className="text-white text-xs bg-slate-400 px-1 rounded-full cursor-pointer  text-opacity-60 "
              >
                See more
              </span>
            </h1>
            <img
              src="https://s3.tradingview.com/b/B0DKHk1H_mid.webp"
              alt=""
              className="p-3 cursor-pointer rounded-3xl"
            ></img>
          </div>

          <div className="flex flex-col bg-slate-900 rounded-xl w-2/6 justify-center items-center">
            <h1 className="font-bold cursor-pointer text-white flex justify-center items-center flex-col">
              👑 GOLD 22/3/23 sideway <br />
              <span className="text-white text-xs bg-slate-400 px-1 rounded-full cursor-pointer  text-opacity-60 ">
                See more
              </span>
            </h1>
            <img
              src="https://s3.tradingview.com/b/B0DKHk1H_mid.webp"
              alt=""
              className="p-3 cursor-pointer rounded-3xl"
            ></img>
          </div>
          <div className="flex flex-col bg-slate-900 rounded-xl w-2/6 justify-center items-center">
            <h1 className="font-bold cursor-pointer text-white flex justify-center items-center flex-col">
              👑 GOLD 22/3/23 sideway <br />
              <span className="text-white text-xs bg-slate-400 px-1 rounded-full cursor-pointer  text-opacity-60 ">
                See more
              </span>
            </h1>
            <img
              src="https://s3.tradingview.com/b/B0DKHk1H_mid.webp"
              alt=""
              className="p-3 cursor-pointer rounded-3xl"
            ></img>
          </div>
        </div>
        <ChartComponent />
      </div>

      {/* <div className="w-3/4 sm:w-3/4 py-3">
        <p className="flex text-xs sm:text-xl sm:w-full xl:text-3xl md:text-xl text-gray-600 text-center px-3 py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div> */}

      <div className="flex items-center sm:w-3/4 flex-col justify-center">
        <h1 className="font-bold text-md sm:text-3xl xl:text-8xl md:text-6xl text-red-600 text-center pb-3 px-3">
          IT'S TIME TO BRING CHANGE
        </h1>

        <div className="w-3/4 md:w-full">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5fa2c68fbb04ec5a87170e77/1633140264234-P0SQZ9UQNGWBH5MH3XIQ/corporate+price.png?format=1500w"
            alt=""
          />
        </div>

        <div className="w-3/4 sm:w-3/4 py-3 flex flex-col justify-center items-center">
          <p className="flex text-xs font-bold sm:text-xl sm:w-full xl:text-3xl md:text-xl text-gray-800 text-center px-3 py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="flex text-xs sm:text-xl sm:w-full xl:text-3xl md:text-xl text-gray-600 text-left px-3 py-3">
            A. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <br />
            B. eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad
            <br />
            C. minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            <br />
            D. aliquip ex ea commodo consequat.
            <br />
          </p>
        </div>
      </div>

      {/* <div className="flex flex-row w-3/4 justify-center items-center gap-3 py-6">
        <div className="flex flex-col gap-3">
          <h1 className="text-red-600 sm:text-3xl font-bold md:text-6xl xl:text-8xl text-center ">
            REVOLUTIONIZING
            <br />
            FINANCIAL RESEARCH
          </h1>
          <h1 className="text-gray-900 font-extrabold sm:text-3xl md:text-6xl xl:text-9xl  text-center">
            <span className="text-green-600">$25</span>/M
          </h1>
        </div>

        <div>
          <img
            className="xl:h-96 xl:w-96 md:w-80 sm:w-40 md:h-80 sm:h-40 rounded-full "
            src="https://cdn.dribbble.com/users/1019669/screenshots/15288467/media/64d9fc460c5ffdc50ec7751e12af4cf4.jpg?compress=1&resize=400x300"
            alt="#"
          ></img>
        </div>
      </div> */}

      <div className="w-3/4 xl:w-2/4 sm:w-3/4 py-3 flex flex-col justify-center items-center">
        <div>
          <NewComponent />
        </div>
      </div>

      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.mikebwang.com/newsletter?fbclid=IwAR2WDnT_mEAnWDRLDqqBVtJ8oIm6enFwDC9g3QSga8MUo4LIfuCgIGeKXuU"
        >
          <button className="bg-red-600 hover:bg-cyan-400 hover:text-gray-900 transition ease-in-out hover:scale-110 text-white xl:text-3xl md:text-xl sm:text-md font-bold cursor-pointer xl:h-20 md:h-20 sm:h-10 w-fit px-6 rounded-xl">
            {" "}
            CLICK to Sign up and View Sample Newsletters for Free
          </button>
        </a>
      </div>

      <div>
        <h1 className="font-extrabold text-md p-6 xl:text-9xl md:text-6xl sm:text-3xl text-red-600 hover:text-cyan-600 ">
          What my newsletter offers:
        </h1>
      </div>

      <div className="flex flex-row sm:flex-row">
        <div>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5fa2c68fbb04ec5a87170e77/1633147350666-9ES3WPIQTQ4B4QASN60B/macro+market+update.png?format=1000w"
            alt="#"
          ></img>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5fa2c68fbb04ec5a87170e77/1633181692336-HE6WK1GA8I4KW8DTU6LQ/high+conviction+stock+analysis.png?format=1000w"
            alt="#"
          ></img>
        </div>
        <div>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5fa2c68fbb04ec5a87170e77/1633184338792-6DZLSBHXFM04BBLZQ176/bitcoin+ta+setups.png?format=1000w"
            alt="#"
          ></img>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5fa2c68fbb04ec5a87170e77/1633185222513-2R7AFCK4OMN9UO39A03M/update+on+my+positions.png?format=1000w"
            alt="#"
          ></img>
        </div>
      </div>

      {/* <div className="flex flex-col items-center p-6">
        <h1 className="font-bold xl:text-9xl md:text-6xl sm:text-3xl text-3xl">
          WHAT TO EXPECT:
        </h1>
        <p className="text-xs w-2/4 font-bold sm:text-md text-center  xl:text-3xl md:text-xl text-gray-500 ">
          Lorem ipsum dolor sit amet,{" "}
          <p className="text-red-700 font-bold">consectetur adipiscing elit</p>,
          sed doeiusmod tempor incididunt ut labore et dolore magna aliqua quis
          nostrud exercitation ullamco laboris nis aliquip ex ea commodo
          consequat.
        </p>
      </div> */}

      {/* <div>
        <img
          src="https://images.squarespace-cdn.com/content/v1/5fa2c68fbb04ec5a87170e77/1633191421815-5BIAC8MHRHIG9FL4XMN9/do+something+today+green.png?format=2500w"
          alt=""
          // className="rounded-xl transition ease-in-out"
        />
      </div> */}

      {/* <div className="flex flex-row gap-3 px-3 py-6 md:flex-row sm:flex-col md:px-6">
        <div className="flex flex-col justify-center items-center gap-6 ">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5fa2c68fbb04ec5a87170e77/1633799835896-L6FC827MA04VQL9QF9B7/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2021-10-10+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+2.12.34.png?format=500w"
            alt=""
            className="rounded-xl hover:scale-110 transition ease-in-out"
          ></img>
          <button className="bg-red-700 hover:scale-125 transition ease-in-out text-white rounded-xl xl:text-3xl hover:bg-red-500 py-3 px-3 ">
            Get 1 Month Subscription
          </button>
        </div>

        <div className="flex flex-col justify-center items-center gap-6 ">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5fa2c68fbb04ec5a87170e77/1633799914922-SAEXBJ4TJZZNY1MTWWBU/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2021-10-10+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+2.14.55.png?format=500w"
            alt=""
            className="rounded-xl hover:scale-110 transition ease-in-out"
          ></img>
          <button className="bg-red-700 hover:scale-125 transition ease-in-out text-white rounded-xl xl:text-3xl hover:bg-red-500 py-3 px-3 ">
            Get 3 Month Subscription
          </button>
        </div>

        <div className="flex flex-col justify-center items-center gap-6 ">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5fa2c68fbb04ec5a87170e77/1633799937267-GXG0Z8DC8WQAI0DGNFSE/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2021-10-10+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+2.15.23.png?format=500w"
            alt=""
            className="rounded-xl hover:scale-110 transition ease-in-out"
          ></img>
          <button className="bg-red-700 hover:scale-125 transition ease-in-out text-white rounded-xl xl:text-3xl hover:bg-red-500 py-3 px-3 ">
            Get 6 Month Subscription
          </button>
        </div>

        <div className="flex flex-col justify-center items-center gap-6 ">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5fa2c68fbb04ec5a87170e77/1633799957503-KVH9M0LT22U4FX87BECP/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2021-10-10+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+2.16.07.png?format=500w"
            alt=""
            className="rounded-xl hover:scale-110 transition ease-in-out"
          ></img>
          <button className="bg-red-700 hover:scale-125 transition ease-in-out text-white rounded-xl xl:text-3xl hover:bg-red-500 py-3 px-3 ">
            Get 12 Month Subscription
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default Newsletter;
