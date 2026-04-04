import React from "react"
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css"
import App from "./App";

// PWA Install Banner
let deferredPrompt: any;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;

  // Buat banner
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
      padding: 14px 20px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      gap: 12px;
      z-index: 9999;
      box-shadow: 0 4px 24px rgba(0,0,0,0.3);
      font-family: sans-serif;
      font-size: 14px;
      white-space: nowrap;
    ">
      <img src="/logo-192.png" style="width:36px;height:36px;border-radius:8px;" />
      <span>Install aplikasi <strong>GBI Bukit Kalvari</strong></span>
      <button id="pwa-install-btn" style="
        background: #A47151;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 8px;
        font-weight: bold;
        cursor: pointer;
        font-size: 13px;
      ">Install</button>
      <button id="pwa-close-btn" style="
        background: transparent;
        color: #aaa;
        border: none;
        font-size: 18px;
        cursor: pointer;
        padding: 0 4px;
      ">✕</button>
    </div>
  `;

  document.body.appendChild(banner);

  document.getElementById('pwa-install-btn')?.addEventListener('click', async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        console.log('PWA installed');
      }
      deferredPrompt = null;
      banner.remove();
    }
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