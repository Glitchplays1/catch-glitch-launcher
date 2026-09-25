const apps = [
  { name: "Phone", color: "#00e8ff", path: "M6 4h3l2 5-2 2a12 12 0 0 0 6 6l2-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 6a2 2 0 0 1 2-2z" },
  { name: "Messages", color: "#7cff2b", path: "M4 6h16v10H8l-4 4V6z" },
  { name: "Camera", color: "#ffe14a", path: "M3 8h4l2-3h6l2 3h4v11H3z M12 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" },
  { name: "Photos", color: "#9b4dff", path: "M4 6h16v12H4z M4 15l5-5 4 4 2-2 5 5" },
  { name: "Music", color: "#ffffff", path: "M9 18V6l10-2v12 M7 18a2.4 2.4 0 1 0 0 .1 M17 16a2.4 2.4 0 1 0 0 .1" },
  { name: "Settings", color: "#9b4dff", path: "M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z M12 2v2.2 M12 19.8V22 M4.2 6.5l1.9 1.1 M17.9 16.4l1.9 1.1 M4.2 17.5l1.9-1.1 M17.9 7.6l1.9-1.1" },
  { name: "Maps", color: "#00e8ff", path: "M12 22s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12z M12 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" },
  { name: "Chrome", color: "#ffe14a", path: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z" },
  { name: "Play Store", color: "#9b4dff", path: "M5 4l14 8-14 8V4z" },
  { name: "YouTube", color: "#ff2d9a", path: "M4 8h16v8H4z M10 10l5 2-5 2z" },
  { name: "Clock", color: "#ffffff", path: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 7v5l3 2" },
  { name: "Files", color: "#9b4dff", path: "M4 7h6l2 2h8v10H4z" }
];

function svgIcon(color, d) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${d}"/></svg>`;
}

const grid = document.getElementById("grid");
apps.forEach((app) => {
  const el = document.createElement("button");
  el.className = "app";
  el.innerHTML = `<div class="icon">${svgIcon(app.color, app.path)}</div><div class="label">${app.name}</div>`;
  el.addEventListener("click", () => toast(app.name));
  grid.appendChild(el);
});

function pad(n) { return String(n).padStart(2, "0"); }

function formatTime(d) {
  let h = d.getHours();
  const m = pad(d.getMinutes());
  h = h % 12 || 12;
  return { short: `${h}:${m}` };
}

function formatDate(d, compact) {
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const shortM = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const shortD = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  if (compact) return `${shortD[d.getDay()]}, ${shortM[d.getMonth()]} ${d.getDate()}`;
  return `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}`;
}

function setClock(id, text) {
  const root = document.getElementById(id);
  root.querySelector(".r").textContent = text;
  root.querySelector(".b").textContent = text;
  root.querySelector(".base").textContent = text;
}

function tick() {
  const now = new Date();
  const t = formatTime(now).short;
  setClock("lockClock", t);
  setClock("homeClock", t);
  document.getElementById("lockTimeSmall").textContent = t;
  document.getElementById("homeTimeSmall").textContent = t;
  document.getElementById("lockDate").textContent = formatDate(now, false);
  document.getElementById("homeDate").textContent = formatDate(now, true);
}
tick();
setInterval(tick, 1000);

const lock = document.getElementById("lock");
const home = document.getElementById("home");
const phone = document.getElementById("phone");

function unlock() {
  lock.classList.add("away");
  home.classList.remove("away");
}
function relock() {
  home.classList.add("away");
  lock.classList.remove("away");
}

document.getElementById("lockAgain").addEventListener("click", relock);

let startY = null;
phone.addEventListener("pointerdown", (e) => {
  if (!lock.classList.contains("away")) startY = e.clientY;
});
phone.addEventListener("pointerup", (e) => {
  if (startY != null && startY - e.clientY > 50) unlock();
  startY = null;
});
lock.addEventListener("click", unlock);

document.querySelectorAll(".dock [data-app]").forEach((btn) => {
  btn.addEventListener("click", () => toast(btn.dataset.app));
});

function toast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg + " (demo)";
  el.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.remove("show"), 1200);
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
