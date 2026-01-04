// Fade-in animation
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));


// Description
document.querySelector(".description").innerText = profileData.description;

// Footer
document.querySelector(".footer-location").innerText = profileData.location;
document.querySelector(".footer-phone").innerText = profileData.phone;
document.querySelector(".footer-email").innerText = profileData.email;


// Showcase 
const showcaseList = document.querySelector(".showcase-list");

if (profileData.projects?.length > 0) {
  profileData.projects.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("showcase-item");
    div.innerHTML = `
      <img src="${p.logo || 'images/no-image.png'}" alt="${p.title}" />
      <div class="showcase-text">
        <div class="showcase-title">${p.title}</div>
        <p>${p.text}</p>
        ${p.link ? `<a href="${p.link}" target="_blank">View</a>` : ''}
      </div>
    `;
    showcaseList.appendChild(div);
  });
}

// Experience
const experienceList = document.querySelector(".experience-list");
if (experienceList && profileData.experience) {
  profileData.experience.forEach(exp => {
    const div = document.createElement("div");
    div.classList.add("extra-item");
    div.innerHTML = `
      <strong>${exp.role}</strong> – ${exp.company} (${exp.start} – ${exp.end})<br>
      ${exp.details}
    `;
    experienceList.appendChild(div);
  });
}

// Education
const educationList = document.querySelector(".education-list");
if (educationList && profileData.education) {
  profileData.education.forEach(edu => {
    const div = document.createElement("div");
    div.classList.add("extra-item");
    div.innerHTML = `
      <strong>${edu.degree}</strong> – ${edu.institution} (${edu.start} – ${edu.end})
    `;
    educationList.appendChild(div);
  });
}

// Skills 
const skillsCarousel = document.querySelector(".skills-carousel");
if (skillsCarousel && profileData.skills) {
  profileData.skills.forEach(skill => {
    const div = document.createElement("div");
    div.classList.add("skill-item");
    div.innerText = skill;
    skillsCarousel.appendChild(div);
  });
}

// Languages
const languagesList = document.querySelector(".languages-list");
if (languagesList && profileData.languages) {
  profileData.languages.forEach(lang => {
    const div = document.createElement("div");
    div.classList.add("showcase-item");
    div.innerText = lang;
    languagesList.appendChild(div);
  });
}
