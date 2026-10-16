export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string;
  liveUrl: string;
  imageUrl: string;
  kicker: string;
  about: string;
  audience: string;
  purpose: string;
  demoNote: string;
  walkthrough: { title: string; description: string; steps: string[]; image: string; caption: string }[];
  exercise: string;
  technical: { label: string; detail: string }[];
};

const isGithubPages = process.env.GITHUB_PAGES === "true";
const isCustomDomain = process.env.GITHUB_PAGES_CUSTOM_DOMAIN === "true";
export const staticPrefix = isGithubPages && !isCustomDomain
  ? `/${process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "portfolio_website"}` : "";
export const projectPagePath = (slug: string) => `${staticPrefix}/projects/${slug}${isGithubPages ? ".html" : ""}`;
export const projectsIndexPath = `${staticPrefix}/projects.html`;
export const homePagePath = isGithubPages ? `${staticPrefix}/index.html` : "/";

export const featured: Project[] = [
  {
    slug: "appointment-booking-board",
    title: "Appointment Booking Board",
    description: "A scheduling workspace for appointments, customer records, service pricing, and a clear view of daily capacity.",
    tags: "Scheduling, Customer management, Service businesses",
    liveUrl: "https://booking.dimitar-shopov.dev",
    imageUrl: "/project-guides/booking-overview.jpg",
    kicker: "Scheduling without the sticky notes",
    about: "One place to plan appointments, keep customer details close, and see how much room is left in the day. Built for small service businesses that need a clear schedule without a complicated management system.",
    audience: "Consultants, independent professionals, and small appointment-based teams.",
    purpose: "Phone calls, paper notes, and separate price lists make it easy to lose track of a booking. This board brings the customer, service, team member, time, and price together. You can review the week, look further ahead in the month, and update an appointment without rebuilding the schedule from scratch.",
    demoNote: "The demo opens with sample appointments in September 2026. Start there to see a populated schedule. Changes are saved in this browser, survive refreshes, and are separate from other visitors. Clearing browser data removes them; Settings includes a demo reset.",
    walkthrough: [
      {
        title: "Understand the week before adding more work",
        description: "Overview combines the weekly schedule with booking, customer, revenue, and daily-limit summaries. Each day shows its appointment count against your chosen capacity, so a quiet day and a busy one are easy to tell apart.",
        steps: [
          "Use the arrows beside the date range to move between weeks. Today takes you to the current week, which may differ from the sample week.",
          "Read the capacity indicator: green means available, yellow means nearly full, and red means the daily limit has been reached.",
          "Select an appointment to inspect its details, edit or delete it, or update its status. Settings lets you change the daily limit from the default of six.",
        ],
        image: "/project-guides/booking-overview.jpg",
        caption: "The weekly overview keeps appointments and daily capacity together.",
      },
      {
        title: "Plan further ahead with the month view",
        description: "Calendar spreads the schedule across an entire month. It helps when someone asks for a date several weeks away or you want to compare workload across days without stepping through each week.",
        steps: [
          "Choose Calendar in the navigation, then use its month arrows to find the period you need.",
          "Review the dates, appointment times, and capacity indicators. Click a booking to open the same details available from Overview.",
          "Import Google Calendar accepts an exported .ics calendar file. It copies events into the demo; it is a file import rather than an ongoing connection to Google.",
        ],
        image: "/project-guides/booking-calendar.jpg",
        caption: "Calendar shows a month of bookings and provides the calendar-file import control.",
      },
      {
        title: "Create a booking with the right service and price",
        description: "New booking collects the information needed to deliver the appointment: customer contact details, service, team member, date, start time, duration, price, and notes. Keeping these fields in one form reduces the need to look elsewhere during a call.",
        steps: [
          "Click New booking and enter sample customer details. Choose the service and the team member responsible for it.",
          "Selecting a service fills its price automatically. You can still change it for an agreed discount or a custom appointment.",
          "Choose the date, start, and duration, then create the booking. Overlapping appointments for the same team member are blocked; choose another time or team member if there is a conflict.",
        ],
        image: "/project-guides/booking-create.jpg",
        caption: "The booking form brings contact, scheduling, and pricing details into one place.",
      },
      {
        title: "Keep customer records and services organised",
        description: "Customers brings together contact details, booking counts, the last appointment, and its status. An archive keeps inactive customer records in a separate list on the same page instead of mixing them into the active list.",
        steps: [
          "Open Customers to review contacts created from appointments. Archive an inactive customer or restore one from Customer archive.",
          "Open Services to review appointment types, durations, and prices, or add a service with its own description.",
          "Remove a service when it is no longer offered. Existing appointments keep their service name so their history remains understandable.",
        ],
        image: "/project-guides/booking-customers.jpg",
        caption: "Customer records show contact details and appointment history, with an archive below the active list.",
      },
    ],
    exercise: "Create a sample service with a different price, book it in a free slot, and check that the price fills automatically. Edit the appointment, then refresh the page to see your saved changes.",
    technical: [
      { label: "Languages & interface", detail: "TypeScript and React, with a Vinext app structure, Tailwind CSS, Base UI components, and Lucide icons." },
      { label: "Scheduling tools", detail: "date-fns handles date display and calendar navigation. Booking checks compare time ranges for the same team member and day." },
      { label: "Storage & backend", detail: "This demo stores appointments, services, customer archives, and the daily limit in browser localStorage. It does not use a shared booking database or synchronise changes between devices." },
      { label: "Hosting & import", detail: "Published on Netlify. Calendar events are read from an uploaded .ics file; there is no Google sign-in or automatic calendar sync." },
    ],
  },
  {
    slug: "field-service-dispatch-board",
    title: "Field Service Dispatch Board",
    description: "A field operations board that gives every job a clear owner, priority, and next step, from the first request to completion.",
    tags: "Field operations, Job tracking, Team coordination",
    liveUrl: "https://dispatch-board.dimitar-shopov.dev",
    imageUrl: "/project-guides/dispatch-board.jpg",
    kicker: "A clearer day for teams in the field",
    about: "A dispatch workspace for teams sending technicians to customer sites. It makes unassigned work, active visits, and completed jobs visible together so the dispatcher can decide what needs attention next.",
    audience: "Repair, maintenance, installation, and other teams working at customer locations.",
    purpose: "A busy field team needs more than a list of requests. Someone must know where each visit is happening, who owns it, how urgent it is, and whether work has started. Routeboard keeps those details on job cards and groups them by progress, reducing the need to piece together updates from separate messages.",
    demoNote: "This is an interactive demo with sample jobs and technicians. Assignments and status changes illustrate a dispatch workflow; they do not notify real technicians or provide live vehicle tracking. Some directory and reporting figures are sample information.",
    walkthrough: [
      {
        title: "Read the board from unassigned to completed",
        description: "Dispatch divides work into four lanes: Unassigned, En route, On site, and Completed. Cards keep the customer, address, service, priority, scheduled time, duration, and notes beside the assigned technician.",
        steps: [
          "Start with Unassigned to find requests that still need an owner. Urgent and high-priority labels help you decide what to handle first.",
          "Choose a technician from the selector on a card. Assigning an unassigned job moves it into En route.",
          "Use the card’s arrow to advance the visit through On site and Completed. Lane counts and active-work totals update as the status changes.",
          "Search by customer, address, service, or technician, and use the priority selector to narrow the board when the list grows.",
        ],
        image: "/project-guides/dispatch-board.jpg",
        caption: "The dispatch board shows ownership and progress across four job lanes.",
      },
      {
        title: "Turn a service request into a work order",
        description: "New job gives the dispatcher a consistent way to record a request. The form includes the customer, service, site address, priority, scheduled time, duration, technician, and notes so the team can see the important details before a visit.",
        steps: [
          "Click New job, enter a sample customer and address, then select the service and its priority.",
          "Set the scheduled time and estimated duration. Add a short note explaining the problem or any useful arrival instructions.",
          "Choose a technician to dispatch the job immediately, or leave it unassigned so it stays in the waiting lane. Click Create work order to add it to the board.",
        ],
        image: "/project-guides/dispatch-create.jpg",
        caption: "A work order collects the details a dispatcher needs to hand a job to the team.",
      },
      {
        title: "Check the team and tune the workspace",
        description: "The Technician directory provides a separate view of the sample team, including each person’s role, availability label, and workload figure. Other navigation views offer customer and job summaries without the full board.",
        steps: [
          "Open Technicians to compare the sample specialists and their availability before returning to Dispatch to make an assignment.",
          "Open Customers to see accounts represented in the job list. Jobs and Reports provide compact summaries; they are not a full scheduling or analytics system.",
          "Open Settings to choose a daily planning capacity, a default workspace view, and whether action confirmations appear. Save preferences to apply them.",
        ],
        image: "/project-guides/dispatch-team.jpg",
        caption: "The technician directory separates team information from the day’s job board.",
      },
    ],
    exercise: "Create a sample urgent repair and leave it unassigned. Find it using the priority selector, assign a technician, and move it through En route, On site, and Completed to see how the board responds.",
    technical: [
      { label: "Languages & interface", detail: "TypeScript and React, built with Vinext and Vite. Custom CSS defines the dispatch board, job cards, navigation, and responsive layouts." },
      { label: "Application logic", detail: "React state manages job creation, technician assignments, status transitions, search, priority filtering, and workspace preferences." },
      { label: "Storage & backend", detail: "The demo uses browser localStorage for jobs and saved preferences. There is no shared dispatch server, technician messaging service, GPS feed, or multi-user synchronisation." },
      { label: "Hosting", detail: "Published on Netlify with a custom subdomain. The technician directory and some reporting indicators use seeded demonstration data." },
    ],
  },
  {
    slug: "sora-sol-bansko",
    title: "Sora Sol Bansko",
    description: "A restaurant website with interactive table reservations, a staff service view, and an owner dashboard for guest and revenue insights.",
    tags: "Hospitality, Table reservations, Guest experience",
    liveUrl: "https://sora-sol.dimitar-shopov.dev",
    imageUrl: "/project-guides/sora-home.jpg",
    kicker: "Japanese soul. Bulgarian heart.",
    about: "A restaurant experience that starts with the food and atmosphere, then lets you explore booking a table, running a service, and understanding returning guests. Three demo views connect the guest’s visit to the team behind it.",
    audience: "Restaurant guests, front-of-house staff, and independent restaurant owners.",
    purpose: "A restaurant website should help someone imagine the evening and make planning it straightforward. Sora & Sol introduces a Japanese-Bulgarian dining concept in Bansko, then connects that story to a visual reservation flow. The project also explores how staff handle arrivals and how an owner reviews completed visits.",
    demoNote: "The reservation area is labelled Interactive demo. Use sample guest details: it does not contact a restaurant or send confirmation emails. Customer, Staff, and Owner are switchable demonstration views, not separate staff login accounts. Reservations are kept separate for each browser demo session.",
    walkthrough: [
      {
        title: "Explore the restaurant before choosing a table",
        description: "The opening page establishes the restaurant’s identity through its story, seasonal dishes, room photography, and Bansko setting. Opening and location information sits alongside the atmosphere so a visitor can move naturally from browsing to planning a meal.",
        steps: [
          "Use Our story, The menu, and The space in the navigation to jump to the relevant section.",
          "Browse the featured dishes, descriptions, and prices, then explore the dining-room section to understand the setting on offer.",
          "Choose Find your table or Come share our table to open the reservation experience.",
        ],
        image: "/project-guides/sora-home.jpg",
        caption: "The homepage introduces the restaurant concept and gives guests a clear route to reservations.",
      },
      {
        title: "Choose a date, a table, and an available time",
        description: "The Customer view replaces an abstract booking form with a floor plan. Compare table locations, seating capacity, and remaining time slots before choosing where to sit. Availability reflects the selected date and party size.",
        steps: [
          "Select a future date and your party size. Filter the room by Window, Booth, or Kitchen if you have a preferred area.",
          "Choose a table on the floor plan. Its panel shows a description, capacity, and available times. Unavailable slots are disabled, and the colour legend explains remaining availability.",
          "Select a time, open the reservation form, and enter sample contact details. Reservations last two hours, and times are shown in Bansko local time.",
        ],
        image: "/project-guides/sora-reservations.jpg",
        caption: "The customer view connects the floor plan to a selected table’s available reservation times.",
      },
      {
        title: "Follow the same evening from the staff side",
        description: "Staff reveals the reservation book for the selected date. Summary cards show reservations, expected guests, seated tables, and guests still to arrive. Each row keeps the time, guest, table, party size, and status together.",
        steps: [
          "Select Staff at the top of the reservation page and choose the service date you want to review.",
          "Use search and the status filter to find a reservation. Open Details to inspect guest information and the available service controls.",
          "Follow a sample booking through the service statuses. Completed visits and their recorded bills contribute to the owner’s insights.",
        ],
        image: "/project-guides/sora-staff.jpg",
        caption: "The staff view turns the selected day’s reservations into an organised service list.",
      },
      {
        title: "Understand visits, spending, and returning guests",
        description: "Owner shifts the focus from today’s arrivals to completed visits. It combines guest totals, recorded revenue, average table bills, a recent-visits chart, and customer history to show what happens after a booking has been fulfilled.",
        steps: [
          "Switch to Owner and choose an analytics date range to review completed visits in that period.",
          "Compare the summary figures with the guest chart. Revenue is based on recorded completed bills rather than future reservations or cancellations.",
          "Browse Familiar faces and open View guest to explore individual history. Sample past visits give the dashboard useful examples to inspect.",
        ],
        image: "/project-guides/sora-owner.jpg",
        caption: "Owner insights connect completed visits with recorded revenue and returning-guest history.",
      },
    ],
    exercise: "Choose a future date in Customer view, find a table with an available time, and create a booking using sample details. Switch to Staff for the same date to find it, then explore Owner to compare the completed-visit insights.",
    technical: [
      { label: "Languages & interface", detail: "TypeScript, React, and Next.js. Tailwind CSS and UI components support the restaurant pages, reservation forms, floor plan, and dashboards." },
      { label: "Server & validation", detail: "Next.js API routes handle reservation operations. Zod validates request data, and availability logic checks table capacity, time slots, and booking conflicts." },
      { label: "Database & demo sessions", detail: "The Netlify deployment uses @netlify/database through a database adapter. A browser session cookie separates each visitor’s demo records; sample reservations and historical visits populate the views." },
      { label: "Tools & hosting", detail: "Published on Netlify. date-fns supports date handling; Recharts supports charts. The role views demonstrate workflows without production staff authentication or outgoing confirmation email." },
    ],
  },
];

export function findProject(slug: string) {
  return featured.find((project) => project.slug === slug);
}
