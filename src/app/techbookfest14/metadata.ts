import { breadcrumbs as parentBreadcrumbs } from "../metadata";
import { generateMetadata } from "@/utils/common";

export const pageTitle = "技術書典14";
export const pageDescription = "技術書典14の記事の関連情報";

export const breadcrumbs = [
  ...parentBreadcrumbs,
  { name: pageTitle, href: "/techbookfest14" },
];

export const pageMetadata = generateMetadata(pageTitle, pageDescription);
