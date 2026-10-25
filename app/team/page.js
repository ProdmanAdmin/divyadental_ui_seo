import team from "../../data/team";
import DoctorCard from "../../components/team/DoctorCard";
import Breadcrumb from "../../components/Breadcrumb";
import JsonLd from "../../components/seo/JsonLd";
import { doctorSchema, faqSchema } from "../utils/schema";
import TreatmentFAQ from "../../components/services/TreatmentFAQ";
import { teamFaqs } from "../../data/faqs";
import Link from "next/link";
import { pageMetadata } from "../utils/seo";

export const metadata = pageMetadata({
  title: "Dr Divya S, BDS, MDS | Child & Adult Dentist, Chitlapakkam",
  description:
    "Dr Divya S, BDS, MDS: consultant paediatric dentist, adult and child dental surgeon and Associate Professor. Phoenix Dental Care, Chitlapakkam, Chennai.",
  path: "/team",
});

const primaryDoctor = team[0];

const personJsonLd = primaryDoctor ? doctorSchema(primaryDoctor) : null;

export default function TeamPage() {
  return (
    <main className="bg-[#F8F9FA] min-h-screen">
      {personJsonLd && <JsonLd data={personJsonLd} />}
      <JsonLd data={faqSchema(teamFaqs)} />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Breadcrumb />

        <h1 className="text-4xl font-bold text-primary mb-4">Our Doctors</h1>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl">
          Behind every healthy smile is a team of skilled and compassionate dental professionals dedicated to your care.
        </p>

        <div className="flex flex-col gap-8 mb-16">
          {team.map((member) => (
            <DoctorCard key={member.id} member={member} />
          ))}
        </div>

        <div className="max-w-4xl">
          <TreatmentFAQ faqs={teamFaqs} />
        </div>

        <section className="bg-pink-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-primary mb-2">Ready to meet the team in person?</h2>
          <p className="text-gray-600 mb-6">
            Book an appointment and experience the Phoenix Dental Care difference.
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
