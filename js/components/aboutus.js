  // about us content
  const benefits = [
    {
      title: "Cultural Identity",
      desc: "Baybayin connects us to our ancestors and helps preserve Filipino cultural identity for future generations.",
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>`
    },
    {
      title: "Global Recognition",
      desc: "Baybayin is gaining international recognition as a unique and beautiful writing system with deep historical significance.",
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>`
    },
    {
      title: "Educational Value",
      desc: "Learning Baybayin provides insights into pre-colonial Filipino society, literature, and way of life.",
      icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>`
    }
  ];

  const benefitsContainer = document.getElementById("benefits");
  benefits.forEach(b => {
    benefitsContainer.innerHTML += `
      <div class="flex items-start space-x-4">
        <div class="bg-primary/10 p-2 rounded-lg">
          <svg class="h-5 w-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            ${b.icon}
          </svg>
        </div>
        <div>
          <h3 class="font-semibold text-foreground mb-2">${b.title}</h3>
          <p class="text-muted-foreground">${b.desc}</p>
        </div>
      </div>`;
  });



//  STATS
const stats = [
    { value: "17", label: "Characters" },
    { value: "1000+", label: "Years Old" },
    { value: "∞", label: "Cultural Value" }
  ];

  const statsContainer = document.getElementById("stats-container");

  stats.forEach(stat => {
    const statItem = document.createElement("div");
    statItem.className = "text-center";

    statItem.innerHTML = `
      <div class="text-2xl font-bold text-orange-500">${stat.value}</div>
      <div class="text-sm text-muted-foreground">${stat.label}</div>
    `;

    statsContainer.appendChild(statItem);
  });