import Link from "next/link";
import { FiMapPin, FiClock, FiPhone } from "react-icons/fi";
import Breadcrumb from "../../components/Breadcrumb";
import JsonLd from "../../components/seo/JsonLd";
import { absoluteUrl, practiceInfo } from "../utils/config";
import { pageMetadata } from "../utils/seo";

export const metadata = pageMetadata({
  title: "Dentist Near Tambaram, Selaiyur & Sembakkam | Phoenix Dental",
  description:
    "Dr. Divya's Phoenix Dental Care in Chitlapakkam welcomes patients from Selaiyur, Sembakkam, Rajakilpakkam, Tambaram and nearby areas. Book a visit.",
  path: "/areas-we-serve",
});

// Nearby localities (closest areas only; no distances or travel times until verified).
const nearbyAreas = [
  "Selaiyur",
  "Sembakkam",
  "Rajakilpakkam",
  "Madambakkam",
  "Gowrivakkam",
  "Tambaram",
  "East Tambaram",
  "Camp Road",
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Areas We Serve", item: absoluteUrl("/areas-we-serve") },
  ],
};

export default function AreasWeServePage() {
  return (
    <main className="bg-[#F8F9FA] min-h-screen">
      <JsonLd data={breadcrumbJsonLd} />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Breadcrumb />

        <h1 className="text-4xl font-bold text-primary mb-4">Areas We Serve</h1>
        <p className="text-lg text-gray-600 mb-10">
          Dr. Divya&apos;s Phoenix Dental Care is on Anna Street, Chitlapakkam. Patients visit us from Chitlapakkam and
          the nearby areas listed below.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Nearby areas</h2>
          <ul className="flex flex-wrap gap-3">
            {nearbyAreas.map((area) => (
              <li key={area} className="bg-white border rounded-full px-5 py-2 text-gray-700 font-medium">
                {area}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">How to reach us</h2>
          <div className="bg-white rounded-xl border p-6 flex flex-col gap-4 text-gray-700">
            <div className="flex gap-3">
              <FiMapPin className="text-primary mt-1 shrink-0" size={18} aria-hidden="true" />
              <span>{practiceInfo.address}</span>
            </div>
            <div className="flex gap-3">
              <FiClock className="text-primary mt-1 shrink-0" size={18} aria-hidden="true" />
              <span>Monday to Saturday, 9 AM to 8 PM. Sunday by appointment only.</span>
            </div>
            <a
              href={practiceInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit inline-block text-primary font-medium hover:underline"
            >
              Open in Google Maps
            </a>
          </div>
        </section>

        <section className="bg-pink-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">Book an appointment</h2>
          <p className="text-gray-600 mb-6 flex items-center justify-center gap-2">
            <FiPhone className="text-primary shrink-0" aria-hidden="true" />
            Call or WhatsApp {practiceInfo.phone}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-xl shadow hover:scale-105 transition font-medium"
          >
            Book an Appointment
          </Link>
        </section>
      </div>
    </main>
  );
}
