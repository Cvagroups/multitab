const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const puppeteer = require("puppeteer");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

let pages = [];
let activeTabs = 0;

io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("openTabs", async ({ url, numTabs }) => {
        if (!url || !numTabs || isNaN(numTabs)) {
            console.log("Invalid URL or Number of Tabs");
            return;
        }

        const browser = await puppeteer.launch({ headless: "new" });

        for (let i = 0; i < numTabs; i++) {
            const page = await browser.newPage();
            await page.goto(url, { waitUntil: "domcontentloaded" });

            // Capture screenshot for log
            const screenshot = await page.screenshot({ encoding: "base64" });

            pages.push(page);
            activeTabs++;

            io.emit("updateLogs", { activeTabs, screenshot });
        }
    });

    socket.on("stopTabs", async () => {
        for (let page of pages) {
            await page.close();
        }
        pages = [];
        activeTabs = 0;
        io.emit("updateLogs", { activeTabs });
    });

    socket.on("disconnect", () => {
        console.log("A user disconnected");
    });
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
