import services from "../data/services";
import { absoluteUrl, CONTENT_UPDATED } from "./utils/config";

export default function sitemap() {
  const lastModified = new Date(CONTENT_UPDATED);

  const staticRoutes = [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: absoluteUrl("/about"), lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/services"), lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/team"), lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/contact"), lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/areas-we-serve"), lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl("/how-to-choose-a-dentist"), lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];

  const serviceRoutes = services.map((service) => ({
    url: absoluteUrl(`/services/${service.slug}`),
    lastModified: new Date(service.updatedAt || CONTENT_UPDATED),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
