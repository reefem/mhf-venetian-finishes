(() => {
  // Header turns solid once the page scrolls
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-menu]");

  const onScroll = () => {
    header.classList.toggle("is-solid", window.scrollY > 40 || !menu.hidden);
  };

  // Mobile menu
  const setMenu = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    menu.hidden = !open;
    onScroll();
  };
  toggle.addEventListener("click", () => setMenu(menu.hidden));
  menu.addEventListener("click", (e) => {
    if (e.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !menu.hidden) setMenu(false);
  });

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Gallery lightbox
  const box = document.querySelector("[data-lightbox]");
  const boxImg = document.querySelector("[data-lightbox-img]");
  const boxCap = document.querySelector("[data-lightbox-cap]");

  if (box && typeof box.showModal === "function") {
    document.querySelectorAll("[data-gallery] button[data-full]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const img = btn.querySelector("img");
        boxImg.src = btn.dataset.full;
        boxImg.alt = img.alt;
        boxCap.textContent = btn.closest("figure").querySelector("figcaption")?.textContent || "";
        box.showModal();
      });
    });
    document.querySelector("[data-lightbox-close]").addEventListener("click", () => box.close());
    box.addEventListener("click", (e) => {
      if (e.target === box) box.close();
    });
  }

  // Reveal on scroll
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-in"));
  }

  // Footer year
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
})();
