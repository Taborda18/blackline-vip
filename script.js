const services = [
  {
    title: "Airport Transfers",
    desc: "Pickups and drop-offs with punctual, comfortable service."
  },
  {
    title: "Corporate Transportation",
    desc: "Professional rides for executives, teams, and business visits."
  },
  {
    title: "Hourly Service",
    desc: "Private driver available by the hour for multiple stops."
  },
  {
    title: "Private City Rides",
    desc: "Safe rides across New York City and the greater NY area."
  },
  {
    title: "Custom & Long Distance Trips",
    desc: "Flexible routes for personal, business, and special trips."
  }
];

const servicesGrid = document.getElementById("services-grid");

if (servicesGrid) {
  services.forEach((service, index) => {
    const article = document.createElement("article");
    article.className = "service-card reveal";
    article.style.setProperty("--delay", `${0.08 * index}s`);

    article.innerHTML = `
      <div class="service-index">${String(index + 1).padStart(2, "0")}</div>
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
