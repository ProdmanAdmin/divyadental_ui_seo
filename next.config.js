/** @type {import('next').NextConfig} */

// Security headers for every page (audit S3). netlify.toml sets the same headers, but Netlify only
// applies those to static files; pages served by the Next.js runtime need them set here.
// Content-Security-Policy is intentionally not set yet (see netlify.toml).
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
];

const nextConfig = {
  // Match the live site, which serves page URLs with a trailing slash (e.g. /about/).
  trailingSlash: true,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

module.exports = nextConfig;
