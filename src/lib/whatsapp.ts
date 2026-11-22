import { site } from "@/content/site";

/** wa.me link to the main WhatsApp number, optionally with a prefilled message. */
export function whatsappLink(message: string = site.contact.whatsappGreeting): string {
  return `https://wa.me/${site.contact.whatsapp.e164}?text=${encodeURIComponent(message)}`;
}

export function roomEnquiryMessage(roomName: string): string {
  return `Hello Wellassa Eco Villa! I'd like to check availability for the ${roomName}. My dates are: `;
}

export interface EnquiryDetails {
  name: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  room: string;
  message: string;
}

const prettyDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export function enquiryMessage(d: EnquiryDetails): string {
  const lines = [
    `Hello Wellassa Eco Villa! I'd like to enquire about a stay.`,
    ``,
    `Name: ${d.name}`,
    `Check-in: ${prettyDate(d.checkIn)}`,
    `Check-out: ${prettyDate(d.checkOut)}`,
    `Guests: ${d.guests}`,
    `Room: ${d.room}`,
  ];
  if (d.message.trim()) lines.push(``, d.message.trim());
  return lines.join("\n");
}
