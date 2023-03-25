import { ForexCrossRates } from "react-ts-tradingview-widgets";
import { SymbolInfo } from "react-ts-tradingview-widgets";
const NewComponent = () => {
  return (
    <div className="p-3 w-screen h-fit flex">
      <div className="w-3/5">
        <iframe
          title="This is a unique title"
          src="https://sslecal2.investing.com?columns=exc_flags,exc_currency,exc_importance,exc_actual,exc_forecast,exc_previous&features=datepicker,timezone&countries=25,32,6,37,72,22,17,39,14,10,35,43,56,36,110,11,26,12,4,5&calType=week&timeZone=8&lang=1"
          // width={300}
          // height={600}
          className="absolute w-2/4 h-full"
          // frameBorder={0}
          allowTransparency="true"
          // className="bg-black"
          // marginWidth={0}
          // marginHeight={0}
        />
      </div>
      {/* <ForexCrossRates colorTheme="light"></ForexCrossRates>; */}
      <div className="grid w-3/5  grid-cols-2 gap-3">
        <SymbolInfo symbol="GOLD" colorTheme="light" autosize></SymbolInfo>
        <SymbolInfo symbol="EURUSD" colorTheme="light" autosize></SymbolInfo>
        <SymbolInfo symbol="GBPUSD" colorTheme="light" autosize></SymbolInfo>
        <SymbolInfo symbol="GBPJPY" colorTheme="light" autosize></SymbolInfo>
        {/* <SymbolInfo symbol="USDJPY" colorTheme="light" autosize></SymbolInfo> */}
        {/* <SymbolInfo symbol="EURJPY" colorTheme="light" autosize></SymbolInfo> */}
      </div>
    </div>
  );
};

export default NewComponent;
