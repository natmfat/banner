export const getBaseUrl = () => {
  // get url from env variables
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

  // ensure that trailing slash is removed
  return siteUrl.endsWith("/")
    ? siteUrl.substring(0, siteUrl.length - 1)
    : siteUrl;
};
