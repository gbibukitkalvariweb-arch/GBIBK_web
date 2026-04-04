import React from "react"
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css"
import App from "./App";

// Deteksi apakah sudah diinstall sebagai PWA
const isInstalled = window.matchMedia('(display-mode: standalone)').matches;
const isDismissed = sessionStorage.getItem('pwa-dismissed');

if (!isInstalled && !isDismissed) {
  // Deteksi jenis browser
  const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  const isSamsung = /SamsungBrowser/.test(navigator.userAgent);
  const isFirefox = /Firefox/.test(navigator.userAgent);
  const isMobile = /Android|iPhone|iPad/.test(navigator.userAgent);

  let deferredPrompt: any = null;

  const showBanner = (useNativePrompt = false) => {
    const instructions = isSamsung
      ? 'Tap menu ⋮ → "Add page to" → "Home screen"'
      : isFirefox
      ? 'Tap menu ⋮ → "Install"'
      : 'Tap menu ⋮ → "Add to Home screen"';

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
        font-size: 13px;
        max-width: 90vw;
      ">
        <img src="/logo-192.png" style="width:36px;height:36px;border-radius:8px;flex-shrink:0;" />
        <span style="line-height:1.4;">
          ${useNativePrompt
            ? 'Install <strong>GBI Bukit Kalvari</strong> sebagai aplikasi'
            : `Install app: <strong>${instructions}</strong>`
          }
        </span>
        <button id="pwa-install-btn" style="
          background: #A47151;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 8px;
          font-weight: bold;
          cursor: pointer;
          font-size: 13px;
          flex-shrink:0;
        ">${useNativePrompt ? 'Install' : 'OK'}</button>
        <button id="pwa-close-btn" style="
          background: transparent;
          color: #aaa;
          border: none;
          font-size: 18px;
          cursor: pointer;
          padding: 0 4px;
          flex-shrink:0;
        ">✕</button>
      </div>
    `;

    document.body.appendChild(banner);

    document.getElementById('pwa-install-btn')?.addEventListener('click', async () => {
      if (useNativePrompt && deferredPrompt) {
        deferredPrompt.prompt();
        await deferredPrompt.userChoice;
        deferredPrompt = null;
      }
      banner.remove();
      sessionStorage.setItem('pwa-dismissed', '1');
    });

    document.getElementById('pwa-close-btn')?.addEventListener('click', () => {
      banner.remove();
      sessionStorage.setItem('pwa-dismissed', '1');
    });
  };

  if (isMobile) {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      showBanner(true);
    });

    // Kalau 3 detik belum ada event (browser lain), tampilkan banner manual
    setTimeout(() => {
      if (!deferredPrompt && !document.getElementById('pwa-banner')) {
        showBanner(false);
      }
    }, 3000);
  }
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter basename={"/"}>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
)