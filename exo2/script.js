const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const drawFlag =() => {
    context.fillStyle = "red";
    context.fillRect(0, 10, 600, 400);
}
drawFlag();