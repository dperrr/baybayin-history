// CARDS CONTENT IN DISCOVERY OF BAYBAYIN 

const features = [
  {
    title: "Interactive Learning",
    description: "Master Baybayin characters through engaging lessons and practice exercises designed for all skill levels.",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>`
  },
  {
    title: "Educational Games",
    description: "Fun mini-games that make learning Baybayin enjoyable while reinforcing your knowledge of the script.",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>`
  },
  {
    title: "Cultural Merchandise",
    description: "Beautiful items featuring authentic Baybayin designs to celebrate and share Filipino heritage.",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>`
  },
  {
    title: "Historical Resources",
    description: "Comprehensive documentation about the origins, evolution, and cultural significance of Baybayin.",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>`
  },
  {
    title: "Community Learning",
    description: "Connect with fellow learners and cultural enthusiasts in our supportive learning community.",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>`
  },
  {
    title: "Cultural Preservation",
    description: "Contributing to the preservation and revitalization of this important aspect of Filipino heritage.",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>`
  }
];

const container = document.getElementById('features-container');

features.forEach(f => {
  const card = document.createElement('div');
  card.className = "bg-card hover:shadow-lg  transition-shadow duration-300 border border-border/50 rounded-lg bg-white";

  card.innerHTML = `
    <div class="p-6">
      <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        <svg class="h-6 w-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          ${f.icon}
        </svg>
      </div>
      <h3 class="text-xl text-card-foreground font-semibold mb-3">${f.title}</h3>
      <p class="text-muted-foreground leading-relaxed">${f.description}</p>
    </div>
  `;

  container.appendChild(card);
});
