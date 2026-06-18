export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  eventType: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "DIGI Expressions transformed our annual product launch into an immersive experience our attendees still talk about months later. The lighting design alone was worth the investment.",
    clientName: "Sarah Mitchell",
    eventType: "Product Launch — TechCorp",
  },
  {
    id: "2",
    quote: "We've worked with many production companies over the years, but none compare to the professionalism and technical excellence of DIGI Expressions. They're our go-to team now.",
    clientName: "Marcus Johnson",
    eventType: "Corporate Conference — GlobalFinance",
  },
  {
    id: "3",
    quote: "The concert tour wouldn't have been the same without DIGI's audio team. The sound was impeccable at every single venue, and their rigging crew made the complex setup look effortless.",
    clientName: "Elena Rodriguez",
    eventType: "Concert Tour — Aurora",
  },
  {
    id: "4",
    quote: "From the initial consultation to the final walkthrough, the DIGI team was meticulous. Our trade show booth drew crowds thanks to their stunning video wall setup and creative lighting.",
    clientName: "David Chen",
    eventType: "Trade Show — InnovateExpo",
  },
  {
    id: "5",
    quote: "They handled our hybrid event flawlessly. The webcasting quality was broadcast-grade, and the on-site audience experience was electric. Truly world-class production.",
    clientName: "Amara Okafor",
    eventType: "Gala — Arts Foundation",
  },
  {
    id: "6",
    quote: "When our original production vendor fell through two weeks before the event, DIGI Expressions stepped in and delivered beyond expectations. They saved our event.",
    clientName: "James Whitfield",
    eventType: "Political Rally — State Campaign",
  },
];
