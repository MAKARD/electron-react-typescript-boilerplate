import { app, BrowserWindow } from "electron";

app.on("ready", () => {
    const Window = new BrowserWindow({ width: 800, height: 500 });
    Window.loadURL(process.env.remote);
    Window.show();
});
