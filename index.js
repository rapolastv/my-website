window.onresize = () => {
    document.getElementById("center").width = window.innerWidth;
    document.getElementById("center").height = window.innerHeight;
};
document.getElementById("playgamebtn").onclick = () => {
    window.location.href = "trygame.html";
}
document.getElementById("downloadosbtn").onclick = () => {
    window.location.href = "https://github.com/rapolastv/my-website/releases/tag/1.0";
}
