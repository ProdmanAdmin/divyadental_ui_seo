import { SITE_URL, absoluteUrl, practiceInfo } from "./config";

const CLINIC_ID = `${SITE_URL}/#clinic`;

const postalAddress = { "@type": "PostalAddress", ...practiceInfo.postalAddress };

// Short clinic reference used inside other structured data (doctor, treatments).
export const clinicRef = {
  "@type": "Dentist",
  "@id": CLINIC_ID,
  name: practiceInfo.name,
  url: absoluteUrl("/"),
  telephone: practiceInfo.phone,
  address: postalAddress,
};

// Full clinic details for Google and AI assistants (Home and Contact pages).
// Sunday is "by appointment only", so only the fixed Monday–Saturday hours are listed.
export function clinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": CLINIC_ID,
    name: practiceInfo.name,
    description: "Gentle, advanced, and affordable dental care for all ages in Chitlapakkam, Chennai.",
    url: absoluteUrl("/"),
    logo: `${SITE_URL}/images/Logo.jpeg`,
    image: `${SITE_URL}/images/Logo.jpeg`,
    telephone: practiceInfo.phone,
    email: practiceInfo.email,
    address: postalAddress,
    geo: { "@type": "GeoCoordinates", ...practiceInfo.geo },
    hasMap: practiceInfo.googleMapsUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "20:00",
      },
    ],
  };
}

// Doctor details (Team page). No image until a real photo of the doctor is available.
export function doctorSchema(member) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/team/#${member.id}`,
    name: member.name,
    honorificSuffix: member.degrees,
    jobTitle: member.title,
    description: member.bio,
    knowsAbout: member.specialty,
    worksFor: clinicRef,
  };
}
