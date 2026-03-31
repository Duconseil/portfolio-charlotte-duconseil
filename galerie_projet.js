document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".card");

  let startY = 0;
  let isScrolling = false;

  cards.forEach(card => {

    // Quand le doigt touche → active direct
    card.addEventListener("touchstart", (e) => {
      startY = e.touches[0].clientY;
      isScrolling = false;

      const isMobile = window.innerWidth <= 768;

      if (isMobile) {
        // active immédiatement
        cards.forEach(c => c.classList.remove("active"));
        card.classList.add("active");
      }
    });

    // Si ça bouge → scroll
    card.addEventListener("touchmove", (e) => {
      const moveY = e.touches[0].clientY;

      if (Math.abs(moveY - startY) > 10) {
        isScrolling = true;
      }
    });

    // Gestion clic (navigation)
    card.addEventListener("click", (e) => {

      const isMobile = window.innerWidth <= 768;

      if (isMobile) {

        // si scroll → ignore
        if (isScrolling) return;

        // si déjà actif → navigation OK
        if (!card.classList.contains("active")) {
          e.preventDefault();
        }
      }

    });

  });

});
