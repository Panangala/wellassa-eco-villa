import { whatsappLink } from "@/lib/whatsapp";
import { Icon } from "./Icon";

interface Props {
  label: string;
  message?: string;
  variant?: "primary" | "gold" | "outline-light" | "outline-dark";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const variants = {
  primary: "bg-leaf text-parchment hover:bg-terracotta",
  gold: "bg-gold text-forest-night hover:bg-parchment",
  "outline-light": "border border-parchment/60 text-parchment hover:bg-parchment hover:text-forest-night",
  "outline-dark": "border border-forest-night/30 text-forest-night hover:bg-forest-night hover:text-parchment",
};

const sizes = {
  sm: "h-10 px-4 text-sm gap-2",
  md: "h-12 px-6 text-[0.95rem] gap-2.5",
  lg: "h-14 px-7 text-base gap-3",
};

export function WhatsAppButton({ label, message, variant = "primary", size = "md", className = "" }: Props) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <Icon name="whatsapp" size={size === "sm" ? 18 : 20} />
      <span>{label}</span>
      <span className="sr-only">(opens WhatsApp)</span>
    </a>
  );
}

export const buttonClasses = { variants, sizes };
