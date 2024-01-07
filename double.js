let loveme = document.querySelector(".loveme");
let items = document.querySelector(".time");

let clicktime = 0;
let clickitem = 0;

const main = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");
  const x = e.clientX;
  const y = e.clientY;
  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;
  const xInside = x - leftOffset;
  const yInside = y - topOffset;
  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;
  loveme.appendChild(heart);
  clickitem++;
  items.innerHTML = clickitem;
  setTimeout(() => {
    heart.remove();
  }, 1000);
};
loveme.addEventListener("click", (e) => {
  if (clicktime === 0) clicktime = new Date().getTime();
  else {
    if (new Date().getTime() - clicktime < 1000) {
      main(e);
    } else {
      clicktime = new Date().getTime();
    }
  }
});
