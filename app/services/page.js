import services from "../../data/services";
import { absoluteUrl } from "../utils/config";
import ServiceCard from "../../components/services/ServiceCard";
import Breadcrumb from "../../components/Breadcrumb";
import JsonLd from "../../components/seo/JsonLd";
import { pageMetadata } from "../utils/seo";

export const metadata = pageMetadata({
  title: "Dental Treatments in Chitlapakkam, Chennai | Phoenix Dental",
  description:
    "Explore dental treatments in Chitlapakkam, Chennai: check-ups, root canal, implants, braces, aligners, whitening, laser dentistry and children's care.",
  path: "/services",
});

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Services", item: absoluteUrl("/services") },
  ],
};

export default function ServicesPage() {
  return (
    <main className="bg-[#F8F9FA] min-h-screen">
      <JsonLd data={breadcrumbJsonLd} />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Breadcrumb />
        <h1 className="text-4xl font-bold text-primary mb-4">Our Services</h1>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl">
          From routine check-ups to advanced cosmetic procedures, we offer a full range of dental treatments to keep your smile healthy and beautiful.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </main>
  );
}
