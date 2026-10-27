export default function TreatmentOverview({ name, intro, description }) {
  if (!description) return null;
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{name ? `About ${name}` : "About This Treatment"}</h2>
      {intro && <p className="text-lg text-gray-700 leading-relaxed mb-4">{intro}</p>}
      <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
    </section>
  );
}
