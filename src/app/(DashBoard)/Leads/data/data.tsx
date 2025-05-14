interface LeadsProfileInfo {
  title: string;
  des: string;
  logo: React.ReactNode;
}

export const LeadsInfo: LeadsProfileInfo[] = [
  {
    title: "Email",
    des: "jerome.bell@example.com",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-mail h-5 w-5 text-muted-foreground"
      >
        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
      </svg>
    ),
  },
  {
    title: "Phone",
    des: "(405) 555-0128",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-phone h-5 w-5 text-muted-foreground"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
  },
  {
    title: "Lead owner",
    des: "Esther Howard",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-circle-check h-5 w-5 text-muted-foreground"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
    ),
  },
  {
    title: "Job Title",
    des: "Content Writer",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-file-text h-5 w-5 text-muted-foreground"
      >
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
        <path d="M10 9H8"></path>
        <path d="M16 13H8"></path>
        <path d="M16 17H8"></path>
      </svg>
    ),
  },
  {
    title: "Annual revenue",
    des: "$ 5,000",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-plus h-5 w-5 text-muted-foreground"
      >
        <path d="M5 12h14"></path>
        <path d="M12 5v14"></path>
      </svg>
    ),
  },
  {
    title: "Lead source",
    des: "Online store",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-plus h-5 w-5 text-muted-foreground"
      >
        <path d="M5 12h14"></path>
        <path d="M12 5v14"></path>
      </svg>
    ),
  },
];

export const AdressInfo: LeadsProfileInfo[] = [
  {
    title: "Street",
    des: "123 Main St",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-plus h-5 w-5 text-muted-foreground"
      >
        <path d="M5 12h14"></path>
        <path d="M12 5v14"></path>
      </svg>
    ),
  },
  {
    title: "City",
    des: "New York",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-plus h-5 w-5 text-muted-foreground"
      >
        <path d="M5 12h14"></path>
        <path d="M12 5v14"></path>
      </svg>
    ),
  },
  {
    title: "State",
    des: "NY",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-plus h-5 w-5 text-muted-foreground"
      >
        <path d="M5 12h14"></path>
        <path d="M12 5v14"></path>
      </svg>
    ),
  },
  {
    title: "Zip",
    des: "10001",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-plus h-5 w-5 text-muted-foreground"
      >
        <path d="M5 12h14"></path>
        <path d="M12 5v14"></path>
      </svg>
    ),
  },
  {
    title: "Country",
    des: "United States",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-plus h-5 w-5 text-muted-foreground"
      >
        <path d="M5 12h14"></path>
        <path d="M12 5v14"></path>
      </svg>
    ),
  },
];
