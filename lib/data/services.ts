export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  href: string;
  image?: string;
}

export const services: Service[] = [
  {
    id: "audio",
    title: "Audio & Sound",
    shortDescription: "Crystal-clear sound reinforcement and PA systems for any venue.",
    description: "From intimate corporate gatherings to stadium-filling concerts, our audio engineering team delivers pristine sound quality. We design, install, and operate customized audio solutions that ensure every note and word is heard with absolute clarity.",
    features: [
      "Line array & point source PA systems",
      "Digital mixing consoles (Yamaha, DiGiCo, Allen & Heath)",
      "Wireless microphone systems (Shure, Sennheiser)",
      "In-ear monitoring systems",
      "Acoustic optimization & room tuning",
      "Live recording & broadcast audio",
    ],
    href: "/services/audio",
    image: "/images/mixer.webp"
  },
  {
    id: "video",
    title: "Video & AV",
    shortDescription: "Immersive visual experiences with cutting-edge display technology.",
    description: "Transform your event with breathtaking visuals. Our video and AV solutions range from massive LED walls to intimate projection mapping, all backed by industry-leading technology and expert technical direction.",
  
    features: [
      "LED video walls & fine-pitch displays",
      "Projection mapping & immersive environments",
      "Live switching & multi-camera production",
      "Webcasting & live streaming",
      "Video conferencing & hybrid event solutions",
      "Signal distribution & control systems",
    ],
    href: "/services/video",
    image: "/images/videography.jpg"
  },
  {
    id: "lighting",
    title: "Lighting & Staging",
    shortDescription: "Dramatic lighting design that transforms spaces and sets moods.",
    description: "Lighting is the soul of any event. Our designers craft immersive lighting environments using the latest LED technology, intelligent fixtures, and scenic elements that turn your vision into reality.",
    features: [
      "Intelligent lighting (Martin, Chauvet, Ayrton)",
      "LED wash & effect lighting",
      "Truss systems & staging structures",
      "Scenic design & set construction",
      "Atmospheric effects (haze, fog, confetti)",
      "Lighting control consoles (MA, Hog, Chamsys)",
    ],
    href: "/services/lighting",
    image: "/images/lights1.jpg"
  },
  {
    id: "it-rigging",
    title: "IT & Rigging",
    shortDescription: "Technical infrastructure and rigging for safe, seamless productions.",
    description: "Behind every flawless event is a robust technical backbone. Our IT and rigging specialists handle the critical infrastructure — from networking to structural safety — ensuring your event runs without a hitch.",
    features: [
      "Network design & WiFi deployment",
      "Rigging & truss engineering",
      "Power distribution & backup systems",
      "Technical staffing & on-site support",
      "Show control & automation systems",
      "Safety inspections & certification",
    ],
    href: "/services/it-rigging",
    image: "/images/henry2.png"
  },
  {
    id: "rental",
    title: "Equipment Rental",
    shortDescription: "Premium event technology rentals with delivery and support.",
    description: "Access our extensive inventory of world-class event technology. From a single microphone to a full concert production package, we offer flexible rental terms with white-glove delivery and technical support.",
    features: [
      "Audio systems & PA packages",
      "Video displays & projection equipment",
      "Lighting rigs & control packages",
      "Staging & truss systems",
      "Backline instruments & accessories",
      "Delivery, setup & technical support",
    ],
    href: "/services",
    image: "/images/stage-rental.webp"
  },
  {
    id: "consulting",
    title: "Event Consulting",
    shortDescription: "Expert guidance to bring your event vision from concept to curtain.",
    description: "Planning a complex event? Our experienced consultants help you navigate every technical decision — from venue assessment and system design to budget planning and vendor coordination.",
    features: [
      "Venue technical assessment",
      "System design & specification",
      "Budget planning & optimization",
      "Vendor coordination & management",
      "Rehearsal & show flow planning",
      "On-site production management",
    ],
    href: "/services",
    image: "/images/consulting.jpg"
  },
];
