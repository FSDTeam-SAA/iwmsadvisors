import type { LucideIcon } from "lucide-react";
import { Headset, Lightbulb, Link2, Settings2 } from "lucide-react";

export type ServiceDetail = {
  title: string;
  badge: string;
  description: string;
  image: string;
  icon: LucideIcon;
  reverse?: boolean;
  href?: string;
};

export const serviceDetails: ServiceDetail[] = [
  {
    title: "IWMS Consulting",
    badge: "Insightful strategies to simplify operations and data",
    description:
      "Our IWMS consulting service helps organizations unlock the full potential of integrated workplace management systems. We begin by analyzing your current operations, identifying inefficiencies, and recommending solutions that align with your strategic objectives. From facilities and asset management to space planning and maintenance, we ensure a clear roadmap for improvement.\n\nWhether you are embarking on a new IWMS implementation or optimizing your existing environment, our experts provide the guidance you need to make informed decisions and achieve measurable results.",
    image: "/images/service.png",
    icon: Lightbulb,
    href: "#contact",
  },
  {
    title: "IWMS Implementation",
    badge: "Need expert guidance to deploy your IWMS solution successfully?",
    description:
      "We deliver end-to-end implementation services that ensure your IWMS platform is configured, deployed, and adopted across your organization. Our team works closely with your stakeholders to define workflows, integrate systems, and configure modules to meet your operational needs.\n\nFrom project planning and data migration to training and go-live support, we provide a structured approach that minimizes disruption and maximizes value.",
    image: "/images/sercive3.png",
    icon: Settings2,
    reverse: true,
    href: "#contact",
  },
  {
    title: "System Integration",
    badge:
      "Your IWMS needs to work seamlessly with existing enterprise systems",
    description:
      "Our system integration service ensures your IWMS platform is connected with critical business systems such as HR, finance, ERP, and building management. This enables real-time data sharing and a single source of truth for facility operations.\n\nBy aligning integrations with your business processes, we streamline workflows and improve visibility across departments.",
    image: "/images/service2.png",
    icon: Link2,
    href: "#contact",
  },
  {
    title: "Managed Support",
    badge: "Looking for ongoing expertise to optimize your IWMS environment?",
    description:
      "Our managed support services provide continuous monitoring, maintenance, and optimization of your IWMS platform. We handle system updates, troubleshoot issues, and ensure performance stays at peak levels.\n\nWith dedicated support specialists and proactive improvements, your organization can focus on core business priorities while we keep your IWMS running smoothly.",
    image: "/images/sercive3.png",
    icon: Headset,
    reverse: true,
    href: "#contact",
  },
];
