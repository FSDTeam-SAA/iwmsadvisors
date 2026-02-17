export type ServiceItem = {
  title: string;
  description: string;
  image: string;
  href?: string;
};

export const services: ServiceItem[] = [
  {
    title: "IWMS Consulting",
    description:
      "Streamlining workplace operations with expert IWMS advisory services.",
    image: "/images/services1.png",
    href: "#contact",
  },
  {
    title: "IWMS Implementation",
    description:
      "End-to-end deployment of enterprise workplace management solutions.",
    image: "/images/services2.png",
    href: "#contact",
  },
  {
    title: "System Integration",
    description:
      "Seamless integration across platforms for unified operations.",
    image: "/images/services3.png",
    href: "#contact",
  },
  {
    title: "Managed Support",
    description: "Reliable support to maximize uptime and performance.",
    image: "/images/services4.png",
    href: "#contact",
  },
];
