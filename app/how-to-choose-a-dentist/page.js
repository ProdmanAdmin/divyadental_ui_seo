import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import JsonLd from "../../components/seo/JsonLd";
import { absoluteUrl } from "../utils/config";
import { pageMetadata } from "../utils/seo";

export const metadata = pageMetadata({
  title: "How to Choose a Dentist in Chitlapakkam | Phoenix Dental",
  description:
    "A simple checklist for choosing a dentist for your family: qualifications, hygiene, clear explanations, child-friendly care and convenient timings.",
  path: "/how-to-choose-a-dentist",
});

// Neutral guidance for patients (no claims about the clinic; dental advertising rules).
const checklist = [
  {
    title: "Check the dentist's qualifications",
    text: "Look for a qualified dentist (BDS) and, for specialised care, a postgraduate degree (MDS) in the relevant field. Every dentist practising in India must be registered with the Dental Council.",
  },
  {
    title: "Look for clear explanations",
    text: "A good dentist explains what is wrong, the treatment options and what to expect, in plain words, before starting treatment.",
  },
  {
    title: "Ask about hygiene and sterilisation",
    text: "The clinic should be clean, use sterilised instruments and follow good infection-control practice.",
  },
  {
    title: "Choose child-friendly care if you have children",
    text: "Children do better with a calm, patient dentist. A specialist in pediatric dentistry has extra training in treating children.",
  },
  {
    title: "Ask about costs before treatment",
    text: "A good clinic explains the expected cost of a treatment plan before it begins, so there are no surprises.",
  },
  {
    title: "Consider timings and location",
    text: "A clinic close to home or work, with convenient timings, makes regular check-ups easier.",
  },
  {
    title: "Check how follow-up care is handled",
    text: "Ask how reviews, aftercare and any problems after treatment are managed.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "How to Choose a Dentist", item: absoluteUrl("/how-to-choose-a-dentist") },
  ],
};

export default function HowToChooseADentistPage() {
  return (
    <main className="bg-[#F8F9FA] min-h-screen">
      <JsonLd data={breadcrumbJsonLd} />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Breadcrumb />

        <h1 className="text-4xl font-bold text-primary mb-4">How to Choose a Dentist: A Simple Checklist</h1>
        <p className="text-lg text-gray-600 mb-10">
          Choosing a dentist for yourself or your family is an important decision. Use this simple checklist when you
          compare dental clinics in Chitlapakkam or anywhere else.
        </p>

        <ol className="space-y-4 mb-12">
          {checklist.map((item, i) => (
            <li key={item.title} className="bg-white rounded-xl border p-5 flex gap-5 items-start">
              <span
                className="shrink-0 w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <div>
                <h2 className="font-semibold text-lg text-gray-800">{item.title}</h2>
                <p className="text-gray-600 mt-1 leading-relaxed">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <section className="bg-pink-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">About Dr. Divya&apos;s Phoenix Dental Care</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            The clinic is led by Dr. Divya S, BDS, MDS in Pediatric and Preventive Dentistry, and treats children and
            adults. It is open Monday to Saturday, 9 AM to 8 PM, and on Sundays by appointment.
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
