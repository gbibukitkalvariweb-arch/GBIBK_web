import React from "react"
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css"
import App from "./App";

// PWA Install Banner - Chrome Android only
window.addEventListener('beforeinstallprompt', (e: any) => {
  e.preventDefault();

  const banner = document.createElement('div');
  banner.id = 'pwa-banner';
  banner.innerHTML = `
    <div style="
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: #2A3338;
      color: white;
      padding: 12px 16px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      gap: 10px;
      z-index: 9999;
      box-shadow: 0 4px 24px rgba(0,0,0,0.4);
      font-family: sans-serif;
      font-size: 13px;
      max-width: 92vw;
    ">
      <img src="/logo-192.png" style="width:32px;height:32px;border-radius:8px;flex-shrink:0;" />
      <span style="line-height:1.4;flex:1;">
        Install <strong>GBI Bukit Kalvari</strong> di HP kamu
      </span>
      <button id="pwa-install-btn" style="
        background: #A47151;
        color: white;
        border: none;
        padding: 8px 14px;
        border-radius: 8px;
        font-weight: bold;
        cursor: pointer;
        font-size: 12px;
        flex-shrink: 0;
      ">Install</button>
      <button id="pwa-close-btn" style="
        background: transparent;
        color: #aaa;
        border: none;
        font-size: 20px;
        cursor: pointer;
        padding: 0 2px;
        flex-shrink: 0;
        line-height: 1;
      ">✕</button>
    </div>
  `;

  document.body.appendChild(banner);

  document.getElementById('pwa-install-btn')?.addEventListener('click', async () => {
    e.prompt();
    await e.userChoice;
    banner.remove();
  });

  document.getElementById('pwa-close-btn')?.addEventListener('click', () => {
    banner.remove();
  });
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter basename={"/"}>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
)