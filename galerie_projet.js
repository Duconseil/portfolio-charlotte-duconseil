document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.addEventListener("click", (e) => {

      const isMobile = window.innerWidth <= 768;

      if (isMobile) {
        if (!card.classList.contains("active")) {
          e.preventDefault();

          cards.forEach(c => c.classList.remove("active"));
          card.classList.add("active");
        }
      }
    });
  });

});
