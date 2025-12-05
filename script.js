// Zoom fullscreen
document.querySelectorAll(".media-item").forEach((item) => {
  item.addEventListener("click", () => toggleFull(item));
});

function toggleFull(el) {
  if (document.getElementById("overlayFull")) return closeFull();

  const overlay = document.createElement("div");
  overlay.id = "overlayFull";
  overlay.style.position = "fixed";
  overlay.style.inset = 0;
  overlay.style.background = "rgba(0,0,0,0.85)";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.zIndex = "9999";
  overlay.style.cursor = "zoom-out";

  const clone = el.querySelector("img").cloneNode(true);
  clone.style.maxWidth = "95%";
  clone.style.maxHeight = "95%";
  clone.style.objectFit = "contain";

  overlay.appendChild(clone);
  overlay.onclick = closeFull;

  document.body.appendChild(overlay);
}

function closeFull() {
  const o = document.getElementById("overlayFull");
  if (o) o.remove();
}

// Button small animation
document.getElementById("actionBtn").addEventListener("click", function () {
  this.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.06)" },
      { transform: "scale(1)" },
    ],
    {
      duration: 420,
      easing: "cubic-bezier(.2,.9,.3,1)",
    }
  );
});
