  const hero = document.querySelector('.hero');
  const projects = document.querySelectorAll('.project');

  function updateHeroOpacity() {
    const scrollY = window.scrollY;
    const fadeEnd = window.innerHeight;

    let opacity = 1 - (scrollY / fadeEnd);
    if (opacity < 0) opacity = 0;

    hero.style.opacity = opacity;
  }

  function updateProjects() {
    const center = window.innerHeight / 2;
    const focusZone = window.innerHeight * 0.25;

    projects.forEach(project => {
      const rect = project.getBoundingClientRect();
      const projectCenter = rect.top + rect.height / 2;

      const distance = Math.abs(center - projectCenter);
      const inner = project.querySelector('.project-inner');

      let ratio = 0;

      if (distance < focusZone) {
        ratio = 1;
      } else {
        const maxDistance = window.innerHeight / 2;
        ratio = 1 - Math.min((distance - focusZone) / (maxDistance - focusZone), 1);
      }

      const scale = 0.9 + (0.1 * ratio);
      const blur = (1 - ratio) * 10;

      inner.style.transform = `scale(${scale})`;
      inner.style.filter = `blur(${blur}px)`;
    });
  }

  window.addEventListener('scroll', () => {
    updateHeroOpacity();
    updateProjects();
  });

  window.addEventListener('load', () => {
    updateHeroOpacity();
    updateProjects();
  });

  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
  });
