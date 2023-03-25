import React, { useEffect, useRef } from "react";

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
  const onLoadScriptRef = useRef();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById("tradingview_79e7b") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          width: 1300,
          height: 700,
          symbol: "GOLD",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "vn",
          toolbar_bg: "#f1f3f6",
          enable_publishing: true,
          withdateranges: true,
          range: "YTD",
          hide_side_toolbar: false,
          allow_symbol_change: false,
          details: false,
          hotlist: false,
          calendar: false,
          show_popup_button: false,
          popup_width: "1000",
          popup_height: "650",
          container_id: "tradingview_79e7b",
        });
      }
    }
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview_79e7b" className="relative" />
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/symbols/NASDAQ-AAPL/"
          rel="noreferrer"
          target="_blank"
        >
          {/* <span className="blue-text">GOLD chart</span> */}
        </a>{" "}
      </div>
    </div>
  );
}