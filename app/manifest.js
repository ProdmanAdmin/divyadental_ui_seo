import { practiceInfo } from "./utils/config";

// Web app manifest: name and icons used when the site is saved to a phone's home screen.
export default function manifest() {
  return {
    name: practiceInfo.name,
    short_name: "Phoenix Dental",
    description: "Gentle dental care for children and adults in Chitlapakkam, Chennai.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ec4899",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
