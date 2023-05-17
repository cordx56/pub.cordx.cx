export const siteTitle = "Publications - cordx.cx";
export const generatePageTitle = (pageTitle?: string) =>
  pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;
export const siteDescription = "cordx56's publications";
export const generatePageDescription = (pageDescription?: string) =>
  pageDescription ? `${pageDescription} | ${siteDescription}` : siteDescription;

export const generateMetadata = (
  pageTitle?: string,
  pageDescription?: string
) => ({
  title: generatePageTitle(pageTitle),
  description: generatePageDescription(pageDescription),
});
