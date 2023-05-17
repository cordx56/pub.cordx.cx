import Link from "next/link";

export type PageInfo = {
  name: string;
  href: string;
};
type Props = {
  breadcrumbs: PageInfo[];
  className?: string;
};

const Breadcrumbs = ({ breadcrumbs, className }: Props) => {
  const links = breadcrumbs.slice(0, -1);
  const currentPage = breadcrumbs.at(-1);
  return currentPage ? (
    <nav className={`breadcrumbs-nav ${className ? className : ""}`}>
      <ol className="breadcrumbs-ol">
        {links.map((pageInfo) => (
          <li key={pageInfo.href}>
            <Link href={pageInfo.href}>{pageInfo.name}</Link>
          </li>
        ))}
        <li>{currentPage.name}</li>
      </ol>
    </nav>
  ) : null;
};

export default Breadcrumbs;
