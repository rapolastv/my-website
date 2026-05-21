window.onresize = () => {
    document.getElementById("center").width = window.innerWidth;
    document.getElementById("center").height = window.innerHeight;
};
document.getElementById("playgamebtn").onclick = () => {
    window.location.href = "trygame.html";
}