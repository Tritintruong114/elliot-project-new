import React from "react";

function Education() {
  return (
    <div className="w-3/4 justify-center flex flex-col items-center">
      <div>
        <h1 className="flex justify-center items-center text-center sm:text-3xl font-bold md:text-6xl xl:text-9xl text-red-600 py-9">
          Learn to Chart like a Pro
        </h1>
      </div>

      <div className="flex flex-col sm:flex-col md:flex-row xl:flex-row justify-center items-center">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5fa2c68fbb04ec5a87170e77/1632588774940-EZEB4XSCS3X5ULDKTCZF/chart+with+cpu2.png?format=750w"
          alt=""
          className="w-3/4 h-fit"
        />
        <img
          src="https://images.squarespace-cdn.com/content/v1/5fa2c68fbb04ec5a87170e77/1632589796889-PPTFB28J0FTYA5C6AZ20/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2021-09-26+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+2.09.43.png?format=1000w"
          alt="#"
          className="w-3/4 h-fit"
        ></img>
      </div>

      <div>
        <h1 className="flex justify-center text-center items-center sm:text-3xl font-bold md:text-6xl xl:text-9xl text-red-600 py-9">
          100% REFUND GUARANTEED
        </h1>
      </div>

      <div className="flex w-full flex-col sm:flex-col md:flex-row xl:flex-row justify-center items-center ">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5fa2c68fbb04ec5a87170e77/1632592023263-1G26FQJMNVSSGE6EN425/refund+icon.png?format=500w"
          alt=""
          className="w-3/4 h-fit"
        />
        <img
          src="https://images.squarespace-cdn.com/content/v1/5fa2c68fbb04ec5a87170e77/1632590324562-BF9Y8SAL8N3H3TCX09EI/refund+content.png?format=1000w"
          alt="#"
          className="w-3/4 h-fit"
        ></img>
      </div>

      <div>
        <h1 className="flex justify-center text-center items-center sm:text-3xl font-bold md:text-6xl xl:text-9xl text-red-600 py-9">
          You're in a RISK FREE deal
        </h1>
      </div>
    </div>
  );
}

export default Education;
