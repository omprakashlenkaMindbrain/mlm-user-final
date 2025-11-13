import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

function Main() {
  // (function () {
  //   const isMobile = /Mobi|Android/i.test(navigator.userAgent);
  //   if (isMobile) return; // skip detection for mobile devices

  //   // ----- existing protection code below -----
  //   const ON_DEVTOOLS_ACTION = "overlay";
  //   const REDIRECT_URL = "about:blank";
  //   const DEVTOOLS_DETECT_INTERVAL = 800;
  //   const DEVTOOLS_THRESHOLD = 160;

  //   function createOverlay() {
  //     const el = document.createElement("div");
  //     el.id = "__inspect_block_overlay__";
  //     Object.assign(el.style, {
  //       position: "fixed",
  //       inset: "0",
  //       background: "rgba(0,0,0,0.95)",
  //       color: "#fff",
  //       display: "flex",
  //       alignItems: "center",
  //       justifyContent: "center",
  //       zIndex: "2147483647",
  //       fontFamily: "system-ui, Roboto, Arial, sans-serif",
  //       fontSize: "18px",
  //       textAlign: "center",
  //       padding: "24px",
  //     });
  //     el.innerHTML = "<div><h1 style='margin:0 0 10px'>Access Denied</h1><p style='margin:0'>Developer tools detected — refresh the page or contact the site admin.</p></div>";
  //     return el;
  //   }

  //   window.addEventListener("contextmenu", (e) => e.preventDefault(), { passive: false });
  //   document.addEventListener("selectstart", (e) => e.preventDefault(), { passive: false });
  //   document.addEventListener("keydown", (e) => {
  //     if (e.key === "F12" ||
  //       (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase())) ||
  //       (e.ctrlKey && e.key.toUpperCase() === "U") ||
  //       (e.ctrlKey && e.key.toUpperCase() === "S")) e.preventDefault();
  //   }, { passive: false });

  //   let devtoolsOpen = false;
  //   function onDevtoolsOpen() {
  //     if (devtoolsOpen) return;
  //     devtoolsOpen = true;
  //     if (ON_DEVTOOLS_ACTION === "overlay") {
  //       if (!document.getElementById("__inspect_block_overlay__")) {
  //         document.body.appendChild(createOverlay());
  //       }
  //     } else if (ON_DEVTOOLS_ACTION === "redirect") {
  //       window.location.replace(REDIRECT_URL);
  //     }
  //   }
  //   function onDevtoolsClose() {
  //     devtoolsOpen = false;
  //     const ov = document.getElementById("__inspect_block_overlay__");
  //     if (ov) ov.remove();
  //   }

  //   setInterval(() => {
  //     const widthDiff = Math.abs(window.outerWidth - window.innerWidth);
  //     const heightDiff = Math.abs(window.outerHeight - window.innerHeight);
  //     if (widthDiff > DEVTOOLS_THRESHOLD || heightDiff > DEVTOOLS_THRESHOLD) {
  //       onDevtoolsOpen();
  //     } else {
  //       onDevtoolsClose();
  //     }
  //   }, DEVTOOLS_DETECT_INTERVAL);

  //   (function detectByDebugger() {
  //     setInterval(function () {
  //       const start = +new Date();
  //       debugger;
  //       const elapsed = +new Date() - start;
  //       if (elapsed > 100) onDevtoolsOpen();
  //     }, 1500);
  //   })();

  //   window.addEventListener("beforeunload", () => {
  //     const ov = document.getElementById("__inspect_block_overlay__");
  //     if (ov) ov.remove();
  //   });
  // })();

  return <App />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
