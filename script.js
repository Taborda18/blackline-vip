const services = [
  {
    title: "Airport Transfers",
    desc: "Pickups and drop-offs with punctual, comfortable service.",
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M22 16.5v-2l-8-5V4.5a1.5 1.5 0 0 0-3 0v5L3 14.5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L14 19v-5z"/></svg>`
  },
  {
    title: "Corporate Transportation",
    desc: "Professional rides for executives, teams, and business visits.",
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 11h14l-1.4-4.2A2 2 0 0 0 15.7 5H8.3a2 2 0 0 0-1.9 1.8zm-1 1.5A1.5 1.5 0 0 1 5.5 11h13a1.5 1.5 0 0 1 1.5 1.5V17a1 1 0 0 1-1 1h-1v1a1 1 0 1 1-2 0v-1H8v1a1 1 0 1 1-2 0v-1H5a1 1 0 0 1-1-1zm3 2a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m10 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"/></svg>`
  },
  {
    title: "Hourly Service",
    desc: "Private driver available by the hour for multiple stops.",
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 1.75A10.25 10.25 0 1 0 22.25 12 10.26 10.26 0 0 0 12 1.75m0 18.5A8.25 8.25 0 1 1 20.25 12 8.26 8.26 0 0 1 12 20.25m.75-12h-1.5v4.5l3.75 2.25.75-1.23-3-1.77z"/></svg>`
  },
  {
    title: "Private City Rides",
    desc: "Safe rides across New York City and the greater NY area.",
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M3 21h18v-2h-1V8a1 1 0 0 0-1-1h-4V4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v6H4a1 1 0 0 0-1 1zm6-16h4v14H9zm-4 7h2v7H5zm10-3h3v10h-3zM10 7h2v2h-2zm0 4h2v2h-2z"/></svg>`
  },
  {
    title: "Custom & Long Distance Trips",
    desc: "Flexible routes for personal, business, and special trips.",
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 11h9.59L10.3 7.71 11.71 6.3l5.71 5.7-5.71 5.7-1.41-1.41 3.29-3.29H4zM20 4h-7V2h7a2 2 0 0 1 2 2v7h-2zm2 16a2 2 0 0 1-2 2h-7v-2h7v-7h2z"/></svg>`
  }
];

const servicesGrid = document.getElementById("services-grid");

if (servicesGrid) {
  services.forEach((service, index) => {
    const article = document.createElement("article");
    article.className = "service-card reveal";
    article.style.setProperty("--delay", `${0.08 * index}s`);

    article.innerHTML = `
      <div class="service-index">${service.icon}</div>
      <h3>${service.title}</h3>
      <p>${service.desc}</p>
    `;

    servicesGrid.appendChild(article);
  });
}

const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -20px 0px"
    }
  );

  reveals.forEach((item) => observer.observe(item));
} else {
  reveals.forEach((item) => item.classList.add("in-view"));
}

const zelleChip = document.getElementById("zelle-chip");
const zelleModal = document.getElementById("zelle-modal");
const zelleModalClose = document.getElementById("zelle-modal-close");

if (zelleChip && zelleModal && zelleModalClose) {
  const openModal = () => {
    zelleModal.classList.add("is-open");
    zelleModal.setAttribute("aria-hidden", "false");
    zelleChip.setAttribute("aria-expanded", "true");
  };

  const closeModal = () => {
    zelleModal.classList.remove("is-open");
    zelleModal.setAttribute("aria-hidden", "true");
    zelleChip.setAttribute("aria-expanded", "false");
  };

  zelleChip.addEventListener("click", openModal);
  zelleModalClose.addEventListener("click", closeModal);

  zelleModal.addEventListener("click", (event) => {
    if (event.target === zelleModal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && zelleModal.classList.contains("is-open")) {
      closeModal();
    }
  });
}
