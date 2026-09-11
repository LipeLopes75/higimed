const menuButton = document.querySelector(".menu-button");
const mainNav = document.querySelector(".main-nav");
const quoteForm = document.querySelector("#quote-form");

if (menuButton && mainNav) {
  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    mainNav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    mainNav.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  mainNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
}

if (quoteForm) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = quoteForm.querySelector(".form-success");
    status.textContent = "Solicitação preenchida. A integração com o atendimento será ativada na versão final.";
  });
}
