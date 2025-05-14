interface Project_TeamMembers {
  id: number;
  img: string;
  Title: string;
  SubTitle: string;
  Status: string;
  Email: string;
  Teams: string[];
}

export const Project_Members: Project_TeamMembers[] = [
  {
    id: 1,
    img: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?ga=GA1.1.1965604026.1735066861&semt=ais_hybrid&w=740",
    Title: "John Smith",
    SubTitle: "@j.smith",
    Status: "Active",
    Email: "johnsmith@dashco.com",
    Teams: ["Design", "Product"],
  },
  {
    id: 2,
    img: "https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?ga=GA1.1.1965604026.1735066861&semt=ais_hybrid&w=740",
    Title: "Ahmed Medi",
    SubTitle: "@ahmed.med",
    Status: "Active",
    Email: "ahmedmedi@dashco.com",
    Teams: ["Development", "Product"],
  },
  {
    id: 3,
    img: "https://img.freepik.com/free-photo/medium-shot-contemplative-man-seaside_23-2150531590.jpg?ga=GA1.1.1965604026.1735066861&semt=ais_hybrid&w=740",
    Title: "Mitchell Luo",
    SubTitle: "@mitchell.luo",
    Status: "Active",
    Email: "mitchelluo@dashco.com",
    Teams: ["Marketing", "Product"],
  },
  {
    id: 4,
    img: "https://img.freepik.com/free-photo/portrait-man-having-great-time_23-2149443790.jpg?ga=GA1.1.1965604026.1735066861&semt=ais_hybrid&w=740",
    Title: "Olivia Wilson",
    SubTitle: "@o.wilson",
    Status: "Offline",
    Email: "oliviawilson@dashco.com",
    Teams: ["Design", "Marketing"],
  },
  {
    id: 5,
    img: "https://img.freepik.com/free-photo/cute-smiling-young-man-with-bristle-looking-satisfied_176420-18989.jpg?ga=GA1.1.1965604026.1735066861&semt=ais_hybrid&w=740",
    Title: "Emma Thompson",
    SubTitle: "@e.thompson",
    Status: "Active",
    Email: "emmathompson@dashco.com",
    Teams: ["Development", "Product"],
  },
];
