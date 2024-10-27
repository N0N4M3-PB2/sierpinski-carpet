let input = document.getElementById("input");
let button = document.getElementById("button");

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let x = 100;
let y = 100;
let w = 600;
let h = 600;

function f(n, x, y, w, h) {
    if (n == 0) return;
    
    ctx.beginPath();
    ctx.fillStyle = "#111";
    ctx.fillRect(x + w / 3, y + h / 3, w / 3, h / 3);
    ctx.closePath();

    n -= 1;

    f(n, x, y, w / 3, h / 3);
    f(n, x + w / 3, y, w / 3, h / 3);
    f(n, x + 2 * w / 3, y, w / 3, h / 3);
    f(n, x, y + h / 3, w / 3, h / 3);
    f(n, x, y + 2 * h / 3, w / 3, h / 3);
    f(n, x + w / 3, y + 2 * h / 3, w / 3, h / 3);
    f(n, x + 2 * w / 3, y + 2 * h / 3, w / 3, h / 3);
    f(n, x + 2 * w / 3, y + h / 3, w / 3, h / 3);
}

function draw(n) {
	if (n >= 1 && n <= 6) {
		ctx.clearRect(0, 0, 800, 800);

		ctx.beginPath();
		ctx.fillStyle = "#F00";
        ctx.fillRect(100, 100, 600, 600);
		ctx.closePath();

		f(n, x, y, w, h);
	} else {
		alert("Invalid iterations count.");
	}
}

button.onclick = function() {
	let iterations = Number(input.value);

	draw(iterations);
}