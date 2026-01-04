const profileData = {
  name: "Ruben Mattheus",
  location: "Bornem, Belgium",
  phone: "+32 468 41 59 62",
  email: "ruben.mattheus@live.com",

  description: `As a passionate Applied Computer Science student with strong analytical skills and great curiosity for the unknown, I am enthusiastic about applying the experience gained from personal projects in a professional setting.`,

  projects: [
    {
      title: "Thesis (Dutch)",
      text: "My thesis focused on predicting the reps in reserve (RIR) when performing a bench press set using AI.",
      link: "bp/MattheusRubenBP.pdf",
      logo: ""
    },
    {
      title: "Discord Bot",
      text: `A bot with its main functionality being the playback of YouTube videos in a voice channel. The queue for said videos can be managed in a text channel. The text channel ID is stored using an SQLite database so it persists after restarting the bot. Additional features include playing minigames in a text channel and tracking the amount of messages each member sends.`,
      logo: "https://img.icons8.com/ios-filled/100/5865F2/discord-logo.png"
    }
  ],

  experience: [
    { role: "Intern", company: "Axxit", start: "sept 2025", end: "dec 2025", details: "Cloud Data Engineering: setting up an Azure Resource Group using Terraform, Bicep and GitHub Actions, and deploying a Databricks Asset Bundle using a different GitHub Actions workflow." }
  ],

  education: [
    { degree: "Bachelor in Applied Information Technology", institution: "HoGent", start: "2022", end: "2026" }
  ],

  skills: [
    "Python",
    "PySpark",
    "Microsoft Azure",
    "Databricks"
  ],

  languages: ["Dutch", "English"]
};
