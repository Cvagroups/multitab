const socket = io();

document.getElementById("openTabs").addEventListener("click", () => {
    const url = document.getElementById("url").value.trim();
    const numTabs = parseInt(document.getElementById("numTabs").value);

    if (!url || isNaN(numTabs) || numTabs <= 0) {
        alert("Please enter a valid URL and number of tabs.");
        return;
    }

    socket.emit("openTabs", { url, numTabs });
});

document.getElementById("stopTabs").addEventListener("click", () => {
    socket.emit("stopTabs");
});

socket.on("updateLogs", ({ activeTabs, screenshot }) => {
    document.getElementById("activeTabs").innerText = `Active Tabs: ${activeTabs}`;

    if (screenshot) {
        const img = document.createElement("img");
        img.src = `data:image/png;base64,${screenshot}`;
        img.style.width = "100px";
        img.style.margin = "5px";
        document.getElementById("logContainer").appendChild(img);
    }
});
