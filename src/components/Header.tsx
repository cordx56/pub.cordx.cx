import { siteTitle as defaultSiteTitle } from "@/utils/common";
import Breadcrumbs, { PageInfo } from "./Breadcrumbs";

type Props = {
  siteTitle?: string;
  breadcrumbs?: PageInfo[];
};

const Header = ({ siteTitle, breadcrumbs }: Props) => {
  const breadcrumbsElem = breadcrumbs ? (
    <Breadcrumbs breadcrumbs={breadcrumbs} className="mb-6" />
  ) : null;
  const siteTitleElem = (addClass: string) => (
    <h1 className={`text-4xl mt-6 ${addClass}`}>
      {siteTitle ? siteTitle : defaultSiteTitle}
    </h1>
  );
  return (
    <header className="text-center">
      {breadcrumbsElem ? (
        <>
          {siteTitleElem("mb-4")}
          {breadcrumbsElem}
        </>
      ) : (
        siteTitleElem("mb-6")
      )}
    </header>
  );
};

export default Header;
