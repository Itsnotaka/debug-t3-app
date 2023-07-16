"use strict";
const path = require("path");
const electron = require("electron");
const dist = path.join(__dirname, "../dist");
const preload = path.join(__dirname, "./preload.js");
const url = process.env.VITE_DEV_SERVER_URL;
electron.app.on("ready", () => {
  const win = new electron.BrowserWindow({
    webPreferences: {
      preload,
    },
  });
  if (url) {
    void win.loadURL(url);
  } else {
    void win.loadFile(path.join(dist, "index.html"));
  }
  win.show();
});
