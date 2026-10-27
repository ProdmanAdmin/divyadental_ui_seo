import { absoluteUrl, practiceInfo } from "./config";

const DEFAULT_IMAGE = {
  url: "/images/Logo.jpeg",
  width: 400,
  height: 400,
  alt: "Dr. Divya's Phoenix Dental Care logo",
};

// Page metadata in one place: full title, description, canonical URL, Open Graph and Twitter tags.
// `title` is the complete title (it already ends with the clinic name), so the layout template is skipped.
export function pageMetadata({ title, description, path, image }) {
  const url = absoluteUrl(path);
  const ogImage = image || DEFAULT_IMAGE;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: practiceInfo.tagline,
      locale: "en_IN",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      images: [ogImage.url],
    },
  };
}
