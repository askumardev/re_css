const content = document.getElementById("content");
const scrollBtn = document.getElementById("scrollTopBtn");

let count = 1;

function loadContent() {
  for (let i = 0; i < 10; i++) {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h3>Article ${count}</h3>
      <p>Example infinite scroll content.</p>
    `;

    content.appendChild(div);

    count++;
  }
}

loadContent();

window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
    loadContent();
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
