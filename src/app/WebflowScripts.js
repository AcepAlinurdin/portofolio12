"use client";

import Script from "next/script";

export default function WebflowScripts() {
  return (
    <>
      <Script
        src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (typeof window !== "undefined" && window.WebFont) {
            window.WebFont.load({
              google: {
                families: [
                  "PT Serif:400,400italic,700,700italic",
                  "Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic",
                  "Inconsolata:400,700",
                  "Inter:100,200,300,regular,500,600,700,800,900"
                ]
              }
            });
          }
        }}
      />
      <Script
        src="/site-bundle.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== "undefined" && typeof window.initSiteAnimations === "function") {
            window.initSiteAnimations();
          }
        }}
      />
    </>
  );
}
