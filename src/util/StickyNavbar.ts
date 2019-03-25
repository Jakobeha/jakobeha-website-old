export function updateOnScroll() {
  window.addEventListener("scroll", updateAll);
}

export function updateAll() {
  Array.from(document.getElementsByClassName("sticky-navbar")).forEach(update1);
}

function update1(elem: HTMLElement) {
  elem.style.transform = "none";
  const y = elem.getBoundingClientRect().top;
  if (y >= 0) {
    return;
  }
  elem.style.transform = `translateY(${-y}px)`;
}
