
function startGame() {
  const name = document.getElementById("tank-name").value || "My Tank";
  localStorage.setItem("tankName", name);
  document.getElementById("login-screen").style.display = "none";
  document.getElementById("game-screen").style.display = "block";
  runTank();
}

function runTank() {
  const canvas = document.getElementById("tank-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const bg = new Image();
  bg.src = "assets/tank-bg.jpg";

  const fish = new Image();
  fish.src = "assets/fish.png";

  let x = 0, y = 100;
  let dx = 2;

  function animate() {
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(fish, x, y, 100, 60);
    x += dx;
    if (x + 100 > canvas.width || x < 0) dx = -dx;
    requestAnimationFrame(animate);
  }

  bg.onload = animate;
}
