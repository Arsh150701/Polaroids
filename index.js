((window, document, undefined) => {
  const polaroid = document.querySelector(".polaroid");
  for (let i = 0; i < 5; i++) {
    const frame = document.createElement("div");
    frame.className = "frame";

    const image = document.createElement("img");
    image.src = "./shikamaru shaded.png";
    image.className = "image";
    frame.appendChild(image);

    const caption = document.createElement("h2");
    caption.innerText = "Shikamaru";
    caption.className = "caption";
    frame.appendChild(caption);

    polaroid.appendChild(frame);
  }
})(window, document);
