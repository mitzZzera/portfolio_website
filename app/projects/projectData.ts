export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string;
  liveUrl: string;
  imageUrl?: string;
  kicker: string;
  about: string;
  howItWorks: string[];
  howToUse: string[];
  highlights: string[];
};

const isGithubPages = process.env.GITHUB_PAGES === "true";
const isCustomDomain = process.env.GITHUB_PAGES_CUSTOM_DOMAIN === "true";

export const staticPrefix = isGithubPages && !isCustomDomain
  ? `/${process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "portfolio_website"}`
  : "";

export const projectPagePath = (slug: string) => `${staticPrefix}/projects/${slug}${isGithubPages ? ".html" : ""}`;

export const projectsIndexPath = `${staticPrefix}/projects.html`;

export const homePagePath = isGithubPages
  ? `${staticPrefix}/index.html`
  : "/";

export const featured: Project[] = [
  {
    slug: "appointment-booking-board",
    title: "Appointment Booking Board",
    description: "A responsive scheduling dashboard with weekly calendar navigation, customer and service views, conflict checks, and appointment status controls.",
    tags: "Next.js, TypeScript, Scheduling, Product design",
    liveUrl: "https://booking.dimitar-shopov.dev",
    imageUrl: "/appointment-booking-board.png",
    kicker: "Scheduling without the sticky notes",
    about: "Appointment Booking Board gives a small service business one calm place to manage bookings, customers, services, and the details that make a day run on time.",
    howItWorks: [
      "The calendar view groups appointments by day and makes the current schedule easy to scan.",
      "Customer and service records stay close to the booking, so pricing and contact details are not hidden in another tool.",
      "Status controls and conflict checks make it clear what is confirmed, completed, or still needs attention.",
    ],
    howToUse: [
      "Open the calendar and move through the week to find an open slot.",
      "Create a booking, choose a customer and service, then adjust the price or notes if needed.",
      "Use the customer and service pages to keep the demo data tidy as the business grows.",
    ],
    highlights: ["Weekly calendar", "Customer records", "Service pricing", "Browser persistence"],
  },
  {
    slug: "field-service-dispatch-board",
    title: "Field Service Dispatch Board",
    description: "A dispatch workspace with live job lanes, technician assignments, status updates, and browser-persisted demo data.",
    tags: "Next.js, TypeScript, Field operations, Product design",
    liveUrl: "https://dispatch.dimitar-shopov.dev",
    kicker: "A clearer day for teams in the field",
    about: "Field Service Dispatch Board is a live operations view for service teams coordinating jobs across multiple technicians. It keeps ownership, timing, and next actions visible without turning dispatch into spreadsheet maintenance.",
    howItWorks: [
      "Jobs move through four lanes: Unassigned, En route, On site, and Completed.",
      "Each card keeps the customer, address, service, priority, timing, and technician together.",
      "Search, filter, assignment, and status controls update the board immediately and keep demo changes in the browser.",
    ],
    howToUse: [
      "Start in Dispatch and scan the lanes to see what needs ownership or attention.",
      "Create a new work order, assign a technician, and use the arrow control as the job progresses.",
      "Open Technicians, Customers, Jobs, or Reports for a more focused operational view.",
    ],
    highlights: ["Live job lanes", "Technician assignment", "Priority filtering", "Local demo data"],
  },
  {
    slug: "restaurant-reservation-manager",
    title: "Restaurant Reservation Manager",
    description: "A restaurant control board for reservations, guest status, table assignments, and a live floor plan.",
    tags: "Next.js, TypeScript, Hospitality, Product design",
    liveUrl: "https://restaurant.dimitar-shopov.dev",
    kicker: "A calmer service before the doors open",
    about: "Restaurant Reservation Manager brings bookings, guests, tables, and service notes into one practical control board for a busy hospitality team.",
    howItWorks: [
      "The overview shows the service at a glance, with reservations grouped by their current state.",
      "Customer and reservation details stay connected to table assignments and arrival status.",
      "The floor plan turns the dining room into an operational view instead of a separate mental checklist.",
    ],
    howToUse: [
      "Open the reservation view to review today’s arrivals and find the next booking.",
      "Select a reservation to check guest details, update its status, or assign a table.",
      "Use the floor plan to understand the room and keep the front-of-house team aligned.",
    ],
    highlights: ["Reservation flow", "Guest status", "Table assignment", "Floor plan"],
  },
  {
    slug: "sora-sol-bansko",
    title: "Sora Sol Bansko",
    description: "A hospitality website introducing a seasonal menu, intimate dining room, and Japanese-Bulgarian identity in Bansko.",
    tags: "Web design, Hospitality, Responsive",
    liveUrl: "https://sora-sol.dimitar-shopov.dev",
    kicker: "Japanese soul. Bulgarian heart.",
    about: "Sora Sol Bansko is a hospitality website designed to make a destination restaurant feel tangible before a guest arrives. It balances atmosphere, food, place, and practical visit information.",
    howItWorks: [
      "The opening section establishes the restaurant’s identity quickly, with a strong visual mood and clear invitation to explore.",
      "Menu and venue content are organized into readable sections so guests can browse without digging through a brochure-like page.",
      "Responsive layouts keep the experience considered on phones, where many visitors will discover the restaurant.",
    ],
    howToUse: [
      "Start with the story and atmosphere, then explore the seasonal menu.",
      "Use the dining-room and visit information to decide when and how to plan a meal.",
      "On smaller screens, scroll through the same story in a compact, touch-friendly layout.",
    ],
    highlights: ["Hospitality storytelling", "Seasonal menu", "Responsive design", "Bansko destination"],
  },
];

export function findProject(slug: string) {
  return featured.find((project) => project.slug === slug);
}
